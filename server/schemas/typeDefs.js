const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    commentCount: Int
    cakeCount: Int
    comments: [Comment]
    cakes: [Cake]
     
  }

  type Comment {
    _id: ID
    commentText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }

  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Cake {
    _id: ID
    name: String
    themeColorCode: String
    shape: String
    primaryFlowers: [String]
    specialNote: String
    secondaryFlowers: [String]
    extraPrimary: Int
    extraSecondary: Int
    extraThickness: Int
    fillings: [String]
    frostings: String
    createdAt: String
    username: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    comments(username: String): [Comment]
    comment(_id: ID!): Comment
    cake(_id: ID!): Cake   
    cakes(username: String): [Cake] 
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addComment(commentText: String!): Comment
    addReaction(commentId: ID!, reactionBody: String!): Comment
    removeCake(cakeId: String!): User
    addCake(name: String!, themeColorCode: String!
                         , shape: String
                         , primaryFlowers: [String] 
                         , specialNote: String
                         , secondaryFlowers: [String]
                         , extraPrimary: Int
                         , extraSecondary: Int
                         , extraThickness: Int
                         , fillings: [String]
                         , frostings: String
                         ): Cake
    updateUser(specialNote: String): User 
    

  }

`;

module.exports = typeDefs;

// addCake(name: String! themecode: String!)
// addCake(name: String!, themecode: String!, primaryFlowers: String, specialNote: String ): Cake

// type Cake {
//   _id: ID
//   name: String
//   primaryflowers: String
//   secondaryflowers: String
//   extraPrimary: Int
//   extraSecondary: Int
//   fillings: String
//   frostings: String
//   themecode: String
//   specialNote: String
// }