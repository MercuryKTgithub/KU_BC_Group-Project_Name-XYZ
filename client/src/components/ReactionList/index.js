import React from 'react';
// import { Link } from 'react-router-dom';

const ReactionList = ({ reactions }) => {
  return (
    <div className="card mb-3">
      <div className="card-header">
        <span className="text-light">Reactions | Feedback</span>
      </div>
      <div className="card-body">
        {reactions &&
          reactions.map(reaction => (
            <div key={reaction._id} style={{ wordBreak: 'break-all' }} >
              <p className="pill mb-3" >
                {reaction.reactionBody} 
                {/* <Link to={`/profile/${reaction.username}`} style={{ fontWeight: 700 }}>
                  {reaction.username} on {reaction.createdAt}
                </Link> */}
              </p>
              <span className="mb-3 card-body">
               {reaction.username} on {reaction.createdAt}
                
              </span>
            </div>  
          ))}
      </div>
    </div>
  );
};

export default ReactionList;
