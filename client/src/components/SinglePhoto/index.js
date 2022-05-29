import React from 'react';
import { useQuery } from '@apollo/client'; // useQuery hook that expect a parameter passed in
import Auth from '../../utils/auth';
// import { QUERY_ME_BASIC } from '../utils/queries';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { QUERY_ME } from '../../utils/queries';
import coverimage from "../../assets/images/coverimage.jpg"
import logo from "../../assets/images/coverimage.jpg"

const Home = () => {
  // -- Use object destructuring to extract `data` from the `useQuery` Hook's response and rename it `userData` to be more descriptive
  const { data: userData } = useQuery( QUERY_ME );
  const user = userData?.me
  const loggedIn = Auth.loggedIn(); // is the user logged-in?
  console.log(user);

  const navigate = useNavigate();
 

  return (
    <main>
      <div className='flex-row justify-space-between'>
        <div className="col-12 mb-3">
             <h4> Welcome to Florally Enchanting Cake Website</h4>
        </div>
        
        <div className={`col-12 col-lg-8 mb-3 ${loggedIn && 'col-lg-8'}`}>
          <h5> Glad you've made it here.</h5>
        </div>

        {loggedIn && user ? (<div className="col-12 col-lg-3 mb-3"><h5>Welcome, {user.username}!</h5></div> ) : 
        <div className="col-12 col-lg-3 mb-3">Please register to place orders</div>  }
      
        {user ? (<div className="col-12 col-lg-7 mb-7">
          | <Link to={`/cakediscussion`}><span> View your custom cake dashboard </span></Link>| </div> ) : null}

        {/* ------------- Please don't try anything above this line -------------------------- */}
        <br></br> 
        <br></br> 
        <br></br>
        <br></br>
        <div className={`col-12 col-lg-9 mb-3 ${loggedIn && 'col-lg-9'}`}>
          <h4> [Within thig div, put your test item - (img tag)- here or below] </h4>
          <p>  </p>

          {/* <div onClick={navigate("http://github/mercuryKT")} >
            <img alt="cover" src={coverimage} /> 
          </div> */}

          <div >
            <img alt="cover" src={coverimage} /> 
          </div>
          <NavLink to="/localdirectory"><img src={logo} alt="" /></NavLink>
          <Link to="https://github.com/Joeyryanbridges"><img src={logo} alt="" /></Link>

          <a href="https://google.com" target="_blank" rel="noreferrer">
              <img src={logo} alt="example" />
          </a>
 



        </div>

         {/* -------------- End of small module tests ----------------------------------------- */}
      </div>
    </main>
  );
};

export default Home;
