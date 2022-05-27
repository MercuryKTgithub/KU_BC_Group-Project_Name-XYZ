import React from 'react';
import { useQuery } from '@apollo/client'; // useQuery hook that expect a parameter passed in
import Auth from '../../utils/auth';
import { QUERY_ME_BASIC } from '../../utils/queries';
import { QUERY_COMMENTS } from '../../utils/queries';
import CommentList from '../../components/CommentList';
 
const CakeReview = () => {
  
  // -- Use object destructuring to extract `data` from the `useQuery` Hook's response and rename it `userData` to be more descriptive
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const user = userData?.me
  
  const loggedIn = Auth.loggedIn(); // is the user logged-in?

  const { loading, data } = useQuery(QUERY_COMMENTS); // 2 built-in properties
  const comments = data?.comments || [];
  
  return (
    <main>
      <div className='flex-row justify-space-between'>
        {/* {loggedIn && (
          <div className="col-12 mb-3">
             Top Row Welcome Message
          </div>
        )} */}
         Snapshot of newly ordered cake
        <div className="col-12 mb-3">
          {/* <h4> Cake Review - Comments & Feedback </h4> */}
        </div>
        
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {/* <h4>Cake Review - Comments & Feedback  </h4> */}
          {loading ? (<div>Loading...</div>) : ( <CommentList comments={comments} title="Cake Review - Comments & Feedback" />)}
        </div>

        {loggedIn && userData ? (
        <div className="col-12 col-lg-3 mb-3">
          <h4>  Cake Order Review for </h4>
          <h5>  {user.username}</h5>
        </div> ) : null}

      </div>
    </main>
  );
};

export default CakeReview;
