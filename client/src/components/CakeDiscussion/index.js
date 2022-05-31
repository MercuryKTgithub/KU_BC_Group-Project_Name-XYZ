import React from 'react';
import Auth from '../../utils/auth'; 
// import { Link } from 'react-router-dom';
import { QUERY_ME } from '../../utils/queries';
import { QUERY_USER } from '../../utils/queries';
import { ADD_CAKE } from '../../utils/mutations';
import { useQuery, useMutation } from '@apollo/client'; // useQuery hook that expects a parameter passed in
import CommentList from '../../components/CommentList';
import CommentForm from '../../components/CommentForm';
import CakeList from '../../components/CakeList';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

 
const CakeDiscussion = () => {
  // const { data: userData } = useQuery( QUERY_ME );
  // const user = userData?.me
  // const loggedIn = Auth.loggedIn(); // is the user logged-in?
  // // console.log("mmmmmmmmmmmmmmmmmmmmmmmm");
  // console.log(user);

  const { username: userParam } = useParams();   // console.log(userParam); // test only
  const { loading, data, error } = useQuery(userParam ? QUERY_USER : QUERY_ME , {
    variables: { username: userParam },
  });
  const user = data?.me || data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div className='flex-row justify-space-between'>
       
      <div className={`col-12 col-lg-8 mb-3 ${Auth.loggedIn && 'col-lg-8'}`}>
         <h2>Discussion Dashboad </h2>
      </div><div className="col-12 col-lg-3 mb-3"> </div>       

      {/* <div className="col-12 col-lg-8 mb-3">
         <h3>Your cake:</h3>
      </div><div className="col-12 col-lg-3 mb-3"><h3>Cake List by </h3><h5> {user.username}</h5> </div> */}

      <div className={`col-12 col-lg-7 mb-3 ${Auth.loggedIn && 'col-lg-8'}`}>         
      <h3>Your most recent cake creation:</h3>
      </div>
      <div className="col-12 col-lg-4 mb-3">  
      <h4>  Cake List by </h4><h5> {user.username}</h5>
      </div> 

      

      <div className={`col-12 col-lg-7 mb-3 ${Auth.loggedIn && 'col-lg-8'}`}> 
      <div className="card mb-1" >
          <div className="card-header">
            <span className="text-light">Name of Cake  &raquo; {user.cakes[user.cakes.length -1].name} &bull; Theme Color Code  &raquo; {user.cakes[user.cakes.length -1].themeColorCode} &raquo; <Link to={`/cakes/${user.cakes[user.cakes.length -1]._id}`} className="text-quatrinary" > Order this cake now!</Link></span>
          </div>
          <div className="cake-card-body">
            <p className="pill mb-1" > Primary Flowers &raquo;  {(user.cakes[user.cakes.length -1].primaryFlowers.length === 0 ? 'None' : user.cakes[user.cakes.length -1].primaryFlowers.join(', ')) } </p>
            <p className="pill mb-1" > Secondary Flowers &raquo;  {(user.cakes[user.cakes.length -1].secondaryFlowers.length === 0 ? 'None' : user.cakes[user.cakes.length -1].secondaryFlowers.join(', ')) } </p>
            <p className="pill mb-1"> Select a cake's shape &raquo;  {user.cakes[user.cakes.length -1].shape} </p>
            <p className="pill mb-1"> Choice of Frosting &raquo; {user.cakes[user.cakes.length -1].frostings} </p>
            <p className="pill mb-3" > Select fillings for your cake &raquo; {(user.cakes[user.cakes.length -1].fillings.length === 0 ? 'None' : user.cakes[user.cakes.length -1].fillings.join(', ')) }</p>
            <p className="pill mb-1"> Number of Extra Primary Flowers &raquo;  {user.cakes[user.cakes.length -1].extraPrimary} </p>
            <p className="pill mb-1"> Number of Extra Secondary Flowers &raquo;  {user.cakes[user.cakes.length -1].extraPrimary} </p>
            <p className="pill mb-1"> Additional sectional thickness &raquo;  {user.cakes[user.cakes.length -1].extraThickness} in.</p>
          
            <div key={user.cakes[user.cakes.length -1]._id} style={{ wordBreak: 'break-all' }} >
              
            </div>
          </div>
        </div>
             
        {loading ? (<div>Loading...</div>) : ( <CommentList comments={user.comments} />)}
       <CommentForm />
      </div>
  
      <div className="col-12 col-lg-4 mb-3">  
          {loading ? (<div>Loading...</div>) : ( <CakeList cakes={user.cakes} />)}
          {/* <CakeList cakes={user.cakes} /> */}
      </div>  
        
      <div className={`col-12 col-lg-7 mb-3 ${Auth.loggedIn && 'col-lg-8'}`}>         
        {/* <CommentForm /> */}
      </div>
      <div className="col-12 col-lg-4 mb-3">  </div> 

      <div className="col-12 col-lg-8 mb-3">
        {/* <CakeList cakes={user.cakes} /> */}
      </div><div className="col-12 col-lg-3 mb-3"> </div>

      <div className={`col-12 col-lg-8 mb-3 ${Auth.loggedIn && 'col-lg-8'}`}>         
        {/* <CommentList comments={user.comments} title="Cake Review & Consulting" /> */}
        {/* {user.comments.length ? (<p>Current comments and replies </p>) : (<p>No cake order or discussion found </p>)} */}
      </div>
      <div className="col-12 col-lg-3 mb-3"></div>                   

      <div className={`text-error col-12 col-lg-12 mb-4 ${Auth.loggedIn && 'col-lg-8'}`}>
        {/* {<CommentForm />} */} {error}
      </div>     
    </div>
  </main>
  );
};

export default CakeDiscussion;
//  {/* {loading ? (<div>Loading...</div>) : ( <CommentList comments={user.comments} title="Cake Review - Comments & Feedback" />)} */}
//  <CommentList comments={user.comments} title="Cake Review - Comments & Feedback" />