import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client'; //useMutation Hook 
import { ADD_COMMENT } from '../../utils/mutations';

import { QUERY_ME } from '../../utils/queries';

const CommentForm = () => {
  const [commentText, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const { data: userData } = useQuery( QUERY_ME );
  const user = userData?.me
  console.log(user);
 
  const [addComment, { error }] = useMutation(ADD_COMMENT, {
    update(cache, { data: { addComment } }) {
  
        // could potentially not exist yet, so wrap in a try/catch
      try {
        // update me array's cache
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, comments: [...me.comments, addComment] } },
        });
      } catch (e) {
        console.warn("First comment insertion by user!")
      }
  
    }
  });
 
//   const [addComment, { error }] = useMutation(ADD_COMMENT, {
//     update(cache, { data: { addComment } }) {
//       try {
//         //  to update the comments array on the QUERY_ME cache
//         const { me } = cache.readQuery({ query: QUERY_ME });
//         console.log(me);
//         console.log("mmmmmmmmmmmmmmmmmmmm");
//         cache.writeQuery({
//           query: QUERY_ME,
//           data: { me: { ...me, comments: [...me.comments, addComment] } }, //very complicated
//         });
//         console.log(addComment);
//         console.log("pppppppppppppppppppp");
//       } catch (e) {
//         console.warn("First comment insertion by guest!")
//       }
// 
//       // read what's currently in the QUERY_COMMENTS cache
//       const { comments } = cache.readQuery({ query: QUERY_COMMENTS });
//       cache.writeQuery({
//         query: QUERY_COMMENTS,
//         data: { comments: [addComment, ...comments] } // addComment represents the new comment, get prepended to the front of the array
//       });
//     }
//   });

  //`````````````````````````````````````````````````
  const handleChange = event => {
    if (event.target.value.length <= 320) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

 //`````````````````````````````````````````````````
  const handleFormSubmit = async event => {
    event.preventDefault();
    try {     
      await addComment({
        variables: { commentText }
      });
      console.log(commentText);
      // clear form value and reset char counter
      setText('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <p className={`m-0 ${characterCount === 320  || error ? 'text-error' : ''}`}>
        Character Count: {characterCount}/ 320
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form  onSubmit={handleFormSubmit} className="flex-row justify-center justify-space-between-md align-stretch" >
        <textarea
          placeholder="Please feel free to add comments or special request..."
          value={commentText}
          className="form-textarea col-12 col-md-9"
          onChange={handleChange}>
        </textarea>
          <button className="btn col-12 col-md-3" type="submit">
            Submit
          </button>
      </form>
    </div>
  );
}

export default CommentForm;