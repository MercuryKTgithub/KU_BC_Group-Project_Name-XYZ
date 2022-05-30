import React from 'react';
import Auth from '../../utils/auth'; 
// import { Link } from 'react-router-dom';
import { QUERY_ME } from '../../utils/queries';
import { useQuery } from '@apollo/client'; // useQuery hook that expects a parameter passed in
import CommentList from '../../components/CommentList';
import CommentForm from '../../components/CommentForm';
import CakeList from '../../components/CakeList';
// import { useParams } from 'react-router-dom';
 
const CakeDiscussion = () => {
  const { data: userData } = useQuery( QUERY_ME );
  const user = userData?.me
  const loggedIn = Auth.loggedIn(); // is the user logged-in?
  // console.log("mmmmmmmmmmmmmmmmmmmmmmmm");
  console.log(user);

  return (
    <main>
      <div className='flex-row justify-space-between'>
       
      <div className={`col-12 col-lg-8 mb-3 ${Auth.loggedIn && 'col-lg-8'}`}>
         <h3>Discussion Dashboad </h3>
      </div><div className="col-12 col-lg-3 mb-3"> </div>       

      {/* <div className="col-12 col-lg-8 mb-3">
         <h3>Cake List </h3>
      </div><div className="col-12 col-lg-3 mb-3"> </div> */}

      <div className={`col-12 col-lg-7 mb-3 ${loggedIn && 'col-lg-8'}`}>         
        {user.comments.length ? (<p>Current comments and replies </p>) : (<p>No cake order or discussion found </p>)}
      </div>
      <div className="col-12 col-lg-4 mb-3">  <h4>  Cake List by </h4><h5> {user.username}</h5></div> 

      <div className={`col-12 col-lg-7 mb-3 ${loggedIn && 'col-lg-8'}`}>         
       <CommentList comments={user.comments} />
       <CommentForm />
      </div>
      <div className="col-12 col-lg-4 mb-3">  <CakeList cakes={user.cakes} /></div>  
        
      <div className={`col-12 col-lg-7 mb-3 ${loggedIn && 'col-lg-8'}`}>         
        {/* <CommentForm /> */}
      </div>
      <div className="col-12 col-lg-4 mb-3">  </div> 

      <div className="col-12 col-lg-8 mb-3">
        {/* <CakeList cakes={user.cakes} /> */}
      </div><div className="col-12 col-lg-3 mb-3"> </div>

      <div className={`col-12 col-lg-8 mb-3 ${loggedIn && 'col-lg-8'}`}>         
        {/* <CommentList comments={user.comments} title="Cake Review & Consulting" /> */}
        {user.comments.length ? (<p>Current comments and replies </p>) : (<p>No cake order or discussion found </p>)}
      </div>
      <div className="col-12 col-lg-3 mb-3"></div>                   

      <div className={`col-12 col-lg-12 mb-4 ${Auth.loggedIn && 'col-lg-8'}`}>
        {/* {<CommentForm />} */}
      </div>     
    </div>
  </main>
  );
};

export default CakeDiscussion;
//  {/* {loading ? (<div>Loading...</div>) : ( <CommentList comments={user.comments} title="Cake Review - Comments & Feedback" />)} */}
//  <CommentList comments={user.comments} title="Cake Review - Comments & Feedback" />