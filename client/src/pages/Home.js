import React from 'react';
import { useQuery } from '@apollo/client'; // useQuery hook that expect a parameter passed in
import Auth from '../utils/auth';
import moment from 'moment';
import { QUERY_ME } from '../utils/queries';
 
const Home = () => {
  // -- Use object destructuring to extract `data` from the `useQuery` Hook's response and rename it `userData` to be more descriptive
  const { data: userData } = useQuery( QUERY_ME );
  const user = userData?.me
  const loggedIn = Auth.loggedIn(); // is the user logged-in?
  console.log(user);

  var currentDate = moment();
  var activeCurrentDate = currentDate.format('dddd, MMMM Do YYYY');
  return (
    <main>
      <div className='flex-row justify-space-between'>
        {/* {loggedIn && (
          <div className="col-12 mb-3">
             Top Row Welcome Message
          </div>
        )} */}
        <div className="col-12 mb-3">
             <h3> Welcome to Florally Enchanting Cake Website</h3>
        </div>
        
        <div className={`col-12 col-lg-8 mb-3 ${loggedIn && 'col-lg-8'}`}>
        {loggedIn && user ? (<h5> Glad you've made it here.</h5> ) : <h5> Thanks for visiting</h5>}
        </div>

        {loggedIn && user ? (<div className="col-12 col-lg-3 mb-3"><h5>{activeCurrentDate}</h5>Welcome, {user.username}!</div> ) : 
        // <div className="col-12 col-lg-3 mb-3"> <h5>June 1st, 2021</h5>Please register to place orders</div>  }
        <div className="col-12 col-lg-3 mb-3"> <h5>{activeCurrentDate}</h5>Please register to place orders</div>  }
      
        {/* {user ? (<div className="col-12 col-lg-7 mb-7">
          &raquo; <Link to={`/cakediscussion`}><span> View your custom cake dashboard </span></Link>&raquo; </div> ) : null} */}

      
         
      </div>
    </main>
  );
};

export default Home;