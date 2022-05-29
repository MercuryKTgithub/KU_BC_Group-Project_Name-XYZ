const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    commentCount: Int
    comments: [Comment]
     
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

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    comments(username: String): [Comment]
    comment(_id: ID!): Comment
    cake(_id: ID!): Cake    
  }

  type Cake {
    _id: ID
    name: String
    themeColorCode: String
    primaryFlowers: [String]
    specialNote: String
    secondaryFlowers: [String]
    extraPrimary: Int
    extraSecondary: Int
    fillings: [String]
    frostings: String
    floralPrimary: String
    floralSecondary: String
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addComment(commentText: String!): Comment
    addReaction(commentId: ID!, reactionBody: String!): Comment
    addCake(name: String!, themeColorCode: String!
                         , primaryFlowers: [String] 
                         , specialNote: String
                         , secondaryFlowers: [String]
                         , extraPrimary: Int
                         , extraSecondary: Int
                         , fillings: [String]
                         , frostings: String
                         , floralPrimary: String
                         , floralSecondary: String
                         ): Cake
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