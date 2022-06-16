const { AuthenticationError } = require('apollo-server-express');
const { User, Comment, Cake } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('comments')
          .populate('cakes');
         
        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },

    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('comments')
        .populate('cakes');
        
    },

    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('comments')
        .populate('cakes');
    },

    comments: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Comment.find(params).sort({ createdAt: -1 });
    },

    comment: async (parent, { _id }) => {
      return Comment.findOne({ _id });
    },

    cake: async (parent, { _id }) => {
      return Cake.findOne({ _id });
    },

    cakes: async (parent, {username}) => {
      const params = username ? { username } : {};
      return Cake.find(params).sort({ createdAt: -1 });
    }

  },

  Mutation: {
    // // addCake: async (parent, args) => {
    // //   const cake = await Cake.create(args);
    // //   return cake;
    // // },

    addCake: async (parent, args, context) => {
      if(context.user){
        const cake = await Cake.create({...args, username: context.user.username });
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { cakes: cake._id } },
          { new: true }
        );
        return cake;
      }
    },
    // <REMOVE CAKE MUTATION>
    removeCake: async (parent, { cakeId }, context) => {
      if (context.user) {
          const updatedUser = await User.findOneAndUpdate(
            {_id: context.user._id},
            { $pull: { cakes: { cakeId: cakeId } } },
            { new: true }
          )
          return updatedUser;
      }
    },

    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }
      throw new AuthenticationError('Not logged in');
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },

    addComment: async (parent, args, context) => {
      if (context.user) {
        const comment = await Comment.create({ ...args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { comments: comment._id } },
          { new: true }
        );

        return comment;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    
    addReaction: async (parent, { commentId, reactionBody }, context) => {
      if (context.user) {
        const updatedComment = await Comment.findOneAndUpdate(
          { _id: commentId },
          { $push: { reactions: { reactionBody, username: context.user.username } } },
          { new: true, runValidators: true }
        );

        return updatedComment;
      }

      throw new AuthenticationError('You need to be logged in!');
    },

   
     
  }
};

module.exports = resolvers;
