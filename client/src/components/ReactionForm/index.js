import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_REACTION } from '../../utils/mutations';

const ReactionForm = ({ commentId }) => {
  const [reactionBody, setBody] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addReaction, { error }] = useMutation(ADD_REACTION); // dont need to do caching on mutation

  const handleChange = event => {
    if (event.target.value.length <= 320) {
      setBody(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };
  
  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addReaction({
        variables: { reactionBody, commentId },
      });

      // clear form value
      setBody('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div >
      <p className={`m-0 ${characterCount === 320 || error ? 'text-error' : ''}`} >
        Character Count: {characterCount}/ 320
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md "
        onSubmit={handleFormSubmit}>
          
        <textarea  
          placeholder="Leave a reaction to this comment..."
          value={reactionBody}
          className="form-textarea col-9 col-md-9 "
          onChange={handleChange}
        ></textarea>

        <button className="btn col-3 col-md-3" type="submit">
          Submit
        </button>
      </form>

      {error && <div>Something went wrong...</div>}
    </div>
  );
};

export default ReactionForm;