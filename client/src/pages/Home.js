import React from 'react';
import { useQuery } from '@apollo/client'; // useQuery hook that expect a parameter passed in
import Auth from '../utils/auth';
import { QUERY_ME_BASIC } from '../utils/queries';
 
const Home = () => {
  // -- Use object destructuring to extract `data` from the `useQuery` Hook's response and rename it `userData` to be more descriptive
  const { data: userData } = useQuery(QUERY_ME_BASIC);

  const loggedIn = Auth.loggedIn(); // is the user logged-in?

  return (
    <main>
      <div className='flex-row justify-space-between'>
        {/* {loggedIn && (
          <div className="col-12 mb-3">
             Top Row Welcome Message
          </div>
        )} */}
        <div className="col-12 mb-3">
             Top Row Welcome Message
        </div>
        
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          
          Main Area vs Right Column Area
        </div>

        {loggedIn && userData ? (
        <div className="col-12 col-lg-3 mb-3">
         Order Status
        </div> ) : null}

      </div>
    </main>
  );
};

export default Home;
