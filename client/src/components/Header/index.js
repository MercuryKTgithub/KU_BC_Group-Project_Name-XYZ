import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const logout = event => {
  event.preventDefault(); // overriding the <a> element's default nature
  Auth.logout();
};

// use attribute "to" of obj Link for setting up links to login and signup routes
const Header = () => {
  return (
    <header className="bg-secondary mb-4 py-1 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        
          <h1><span style={{'letter-spacing': '4px'}} >FEC</span> Online Designer Cakes </h1>
          <p style={{ 'fontFamily': 'Fahkwang', fontSize : 22, fontWeight: 400, 'margin': 0,'color': 'var(--error)'}}> Home of the<span style={{ 'fontFamily': 'Playball', fontSize : 24}}> F</span> lorally 
          <span style={{ 'fontFamily': 'Playball', fontSize : 26}}> E</span>nchanting<span style={{ 'fontFamily': 'Playball', fontSize : 24}}> C</span>akes for Wedding & Birthday Occasions </p>
        

        <nav className="text-center">
        {Auth.loggedIn() ? (
          <React.Fragment>
            {/* <Link to="/profile">Guest</Link> */}
            <Link to="/">Pricing</Link>
            <a href="/" onClick={logout}>Logout</a>
            {/* <Link to="/checkboxes">Checkboxes</Link> */}
          </React.Fragment>
          ) : (
          <React.Fragment>
            
            <Link to="/login">Login</Link>
            <Link to="/signup">Register</Link>
            {/* <Link to="/">About</Link> */}
            <Link to="/">Pricing</Link>
          </React.Fragment>
          )}
      </nav>
      </div>
    </header>
  );
};


export default Header;
