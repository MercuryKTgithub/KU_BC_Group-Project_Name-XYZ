import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query User($username: String!) {
    user(username: $username) {
      _id
      username
      email
      commentCount
      comments {
        _id
        commentText
        createdAt
        reactionCount
      }
    }
  }
`;

export const QUERY_COMMENTS = gql`
  query Comments($username: String) {
    comments(username: $username) {
      _id
      commentText
      username
      createdAt
      reactionCount
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;

export const QUERY_COMMENT = gql`
  query Comment($id: ID!) {
    comment(_id: $id) {
      _id
      commentText
      createdAt
      username
      reactionCount
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }  
`;


// We aren't passing any variables to it
export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      commentCount
      comments {
        _id
        commentText
        createdAt
        reactionCount
        reactions {
          _id
          createdAt
          reactionBody
          username
        }
      }
    }
  }
`;

// With GraphQL, we can reuse the same query we created and simply ask for less.
export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      commentCount
    }
  }
`;