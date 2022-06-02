import React from 'react';
import { useQuery } from '@apollo/client'; // useQuery hook that expect a parameter passed in
import Auth from '../../utils/auth';
import { QUERY_ME } from '../../utils/queries';
import SinglePhoto from '../SinglePhoto';

const Pricing = () => {
  // -- Use object destructuring to extract `data` from the `useQuery` Hook's response and rename it `userData` to be more descriptive
  const { data: userData } = useQuery( QUERY_ME );
  const user = userData?.me
  const loggedIn = Auth.loggedIn(); // is the user logged-in?
  console.log(user);

  // const navigate = useNavigate();
  return (
    <main>
      <div className='flex-row justify-space-between'>
        {/* <div className="col-12 mb-3">
             <h4> Welcome to Florally Enchanting Cake Website</h4>
        </div> */}
        
        <div className={`col-12 col-lg-8 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {/* <h5> Glad you've made it here.</h5> */}
          <SinglePhoto />
        </div>
        {loggedIn && user ? (<div className="col-12 col-lg-3 mb-3"><h5>Welcome, {user.username}!</h5></div> ) : 
        <div className="col-12 col-lg-3 mb-3">Please register to place orders</div>  }
      
        {/* {user ? (<div className="col-12 col-lg-7 mb-7">
          | <Link to={`/cakediscussion`}><span> View your custom cake dashboard </span></Link>| </div> ) : null} */}

        {/* ------------- Please don't try anything above this line -------------------------- */}
        <br></br> 
        <br></br> 
        <br></br>
        <br></br>
       

         {/* -------------- End of small module tests ----------------------------------------- */}
      </div>
    </main>
  );
};

export default Pricing;
