import React from 'react';
import { Link } from 'react-router-dom';

const ReactionList = ({ cakes }) => {
  return (
    <div className="cake-card mb-1">
      <div className="cake-card-header">
        <span className="text-light">{cakes[cakes.length - 1].username}'s Cake Creations</span>
      </div>
      <div className="cake-card-body">
        {cakes &&
          cakes.map(cake => (
            <div key={cake._id} style={{ wordBreak: 'break-all' }} >
              <span className="mb-1 cake-card-body">
              Created on {cake.createdAt}</span>

              <div className="cake-card mb-1">
                <div className="cake-card-header">
                  <span className="text-light">Name of Cake  &raquo; {cake.name} | Theme Color Code  &raquo; {cake.themeColorCode} | <Link to={`/cakes/${cake._id}`} className="text-error"> Select for Quoting</Link></span>
                </div>
                <div className="cake-card-body">
                   <p className="pill mb-1" > Primary Flowers &raquo;  {cake.primaryFlowers.join(', ')} </p>
                   <p className="pill mb-1" > Secondary Flowers &raquo;  {cake.secondaryFlowers.join(', ')} </p>
                   <p className="pill mb-1"> Select a cake's shape &raquo;  {cake.shape} </p>
                   <p className="pill mb-1"> Choice of Frosting &raquo; {cake.frostings} </p>
                   <p className="pill mb-3" > Select fillings for your cake &raquo;  {cake.fillings.join(', ')}</p>
                   <p className="pill mb-1"> Number of Extra Primary Flowers &raquo;  {cake.extraPrimary} </p>
                   <p className="pill mb-1"> Number of Extra Secondary Flowers &raquo;  {cake.extraPrimary} </p>
                   <p className="pill mb-1"> Additional sectional thickness &raquo;  {cake.extraThickness} in.</p>
                   {/* <div key={cake._id} style={{ wordBreak: 'break-all' }} ></div> */}
                </div>
              </div>
              <div className="mb-3">


              </div>
            </div>  
          ))}
      </div>
        {/* <Link to={`/profile/${cake.username}`} style={{ fontWeight: 700 }}>
        {cake.username} on {cake.createdAt}
        </Link> */}
    </div>
  );
};

export default ReactionList;
