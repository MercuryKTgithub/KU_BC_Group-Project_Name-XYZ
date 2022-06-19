import React from 'react';
import { useQuery } from '@apollo/client'; // useQuery hook that expect a parameter passed in
import Auth from '../utils/auth';
import moment from 'moment';
import { QUERY_ME } from '../utils/queries';
import { Link } from 'react-router-dom';
 
const Home = () => {
  // // -- Use object destructuring to extract `data` from the `useQuery` Hook's response and rename it `userData` to be more descriptive
  // const { data: userData } = useQuery( QUERY_ME );
  // const user = userData?.me
  // const loggedIn = Auth.loggedIn(); // is the user logged-in?
  // console.log(user);
  // console.log(userData);

  const { data } = useQuery(QUERY_ME );
  const user = data?.me || {};

  console.log(user);

  var currentDate = moment();
  var activeCurrentDate = currentDate.format('dddd, MMMM Do YYYY');

  return (
    <main>
      <div className='flex-row justify-space-between'>
        
        <div className="col-12 mb-3">
             <h3> Welcome to Florally Enchanting Cake Website</h3>
        </div>
        
          <div className={`col-lg-8 mb-3 ${Auth.loggedIn && 'col-lg-8'}`}>
          {Auth.loggedIn && user.cakeCount ? (<h5> Glad you've made it here.</h5> ) : <h5> Thanks for visiting</h5>}
          {Auth.loggedIn && (user.cakeCount) ? ( <Link to={`/cakediscussion`}><span>&raquo;  View your custom cake discussion dashboard &raquo;</span></Link>) : (<div> </div>)}
          </div>

          {Auth.loggedIn && user.cakeCount ? 
          (<div className="col-12 col-lg-3 mb-3"><h4>{activeCurrentDate}</h4><h5>Welcome, {user.username}!</h5></div> ) : 
          (<div className="col-12 col-lg-3 mb-3"> <h5>{activeCurrentDate}</h5> Please register to place orders </div>) }

          
          {/* <div className={`col-12 col-lg-8 mb-3 ${Auth.loggedIn && 'col-lg-8'}`}>
            {Auth.loggedIn && (user.cakeCount) ? ( <Link to={`/cakediscussion`}><span>&raquo;  View your custom cake discussion dashboard &raquo;</span></Link>) : (<div> </div>)}
          </div> 
          <div className="col-12 col-lg-3 mb-3"> <h5>Nothing here</h5></div> */}

       
         

      </div>
    </main>
  );
};

export default Home;