import React from 'react';
import { Link } from 'react-router-dom';

// will receive two props
const CakeList = ({ cakes, title }) => {
  return (
    <div>
      <h4>{title}</h4>
      {cakes &&
        cakes.map(cake => (
          <div key={cake._id} className="card mb-3">
           
            {/* establish link to user's profile such that profile/username: */}
            <p className="card-header">
              {/* <Link to={`/------/${cake.username}`} style={{ fontWeight: 700 }} 
              className="text-light" >{cake.username}</Link>{' '}cake on {cake.createdAt} */}

              <span className="text-light" >{cake.name}</span>{' '}cakeed on {cake.createdAt}
            </p>

            <div className="card-body">
                <p style={{ wordBreak: 'break-all' }}>{cake.cakeText}</p>
                <span><strong>| </strong> Reactions: {cake.reactionCount}<strong> |</strong></span>
                <Link to={`/cake/${cake._id}`} className="mb-0">
                  <span className="mb-0"> Pick to Order 
                  </span>
                </Link><span><strong> |</strong></span>
            </div>

          </div>
        ))}
    </div>
  );
};

export default CakeList;