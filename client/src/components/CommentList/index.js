import React from 'react';
import { Link } from 'react-router-dom';

// will receive two props
const CommentList = ({ comments, title }) => {

  // if (!comments.length) {
  //   return <h3>No Comment Yet</h3>;
  // }

  //  key prop (in div) serves with mapped data in React: helps React internally track which data needs to be re-rendered if something changes.
  return (
    <div>
      <h4>{title}</h4>
      {comments &&
        comments.map(comment => (
          <div key={comment._id} className="card mb-3">
           
            {/* establish link to user's profile such that profile/username: */}
            <p className="card-header">
              {/* <Link to={`/------/${comment.username}`} style={{ fontWeight: 700 }} 
              className="text-light" >{comment.username}</Link>{' '}comment on {comment.createdAt} */}

              <span className="text-light" >{comment.username}</span>{' '}commented on {comment.createdAt}
            </p>

            <div className="card-body">
                <p>{comment.commentText}</p>
                <span><strong>| </strong> Reactions: {comment.reactionCount}<strong> |</strong></span>
                <Link to={`/comment/${comment._id}`} className="mb-0">
                  <span className="mb-0"> Click to{' '}{comment.reactionCount ? 'see' : 'start'} the discussion! 
                  </span>
                </Link><span><strong> |</strong></span>
            </div>

          </div>
        ))}
    </div>
  );
};

export default CommentList;