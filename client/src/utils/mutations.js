import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


export const ADD_COMMENT = gql`
  mutation AddComment($commentText: String!) {
    addComment(commentText: $commentText) {
      _id
      commentText
      createdAt
      username
      reactionCount
      reactions {
        _id
      }
    }
  }
`;

export const ADD_REACTION = gql`
  mutation AddReaction($commentId: ID!, $reactionBody: String!) {
    addReaction(commentId: $commentId, reactionBody: $reactionBody) {
      _id
      reactionCount
      reactions {
        _id
        reactionBody
        createdAt
        username
      }
    }
  }
`;
export const ADD_CAKE = gql`
  mutation AddCake($name: String!, $themeColorCode: String!, $primaryFlowers: [String], $specialNote: String, $secondaryFlowers: [String], $extraPrimary: Int, $extraSecondary: Int, $fillings: [String], $frostings: String, $floralPrimary: String, $floralSecondary: String) {
    addCake(name: $name, themeColorCode: $themeColorCode, primaryFlowers: $primaryFlowers, specialNote: $specialNote, secondaryFlowers: $secondaryFlowers, extraPrimary: $extraPrimary, extraSecondary: $extraSecondary, fillings: $fillings, frostings: $frostings, floralPrimary: $floralPrimary, floralSecondary: $floralSecondary) {
      _id
      name
      themeColorCode
      primaryFlowers
      specialNote
      secondaryFlowers
      extraPrimary
      extraSecondary
      fillings
      frostings
      floralPrimary
      floralSecondary
    }
  }
`;
 