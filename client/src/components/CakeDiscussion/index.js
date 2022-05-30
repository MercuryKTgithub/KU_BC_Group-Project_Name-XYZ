import React from 'react';
import { useQuery } from '@apollo/client'; // useQuery hook that expect a parameter passed in
import Auth from '../../utils/auth';
import { QUERY_ME } from '../../utils/queries';
// import { QUERY_USER } from '../../utils/queries';
import CommentList from '../../components/CommentList';
import CommentForm from '../../components/CommentForm';
// import { useParams } from 'react-router-dom';
 
const CakeDiscussion = () => {
  const { data: userData } = useQuery( QUERY_ME );
  const user = userData?.me
  const loggedIn = Auth.loggedIn(); // is the user logged-in?
  // console.log("mmmmmmmmmmmmmmmmmmmmmmmm");
  console.log(user);

  // Attemp to cache data from QUERY_ME so it can be read in CommentForm upon form-submission
  const { data: userData2Cache } = useQuery(QUERY_ME, {
    update(cache, { data: { addComment } }) {
      try {
        // update me array's cache
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, comments: [...me.comments, userData2Cache] } },
        });
      } catch (e) {
        console.warn("First comment insertion by user!")
      }
  
    }
  });
  
  return (
    <main>
      <div className='flex-row justify-space-between'>
        {/* {loggedIn && (
          <div className="col-12 mb-3">
             Top Row Welcome Message
          </div>
        )} */}
         
        <div className="col-12 mb-3">
          {/* <h4> Cake Review - Comments & Feedback </h4> */}
        </div>
        
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-9'}`}>         
          <CommentList comments={user.comments} title="Cake Review - Comments & Feedback" />
          {user.comments.length ? (<p>Current comments and replies </p>) : (<p>No cake order or discussion found </p>)}
        </div>

        {loggedIn ? (
          <div className="col-12 col-lg-3 mb-3">
            <h4>  Cake Review for </h4>
            <h5>  {user.username}</h5>
          </div> ) : (<div><h4>Cake Order Review for</h4></div>)}
          
      </div>
      <div className="mb-3">{<CommentForm />}</div>
      <br></br>
    </main>
  );
};

export default CakeDiscussion;
//  {/* {loading ? (<div>Loading...</div>) : ( <CommentList comments={user.comments} title="Cake Review - Comments & Feedback" />)} */}
//  <CommentList comments={user.comments} title="Cake Review - Comments & Feedback" />