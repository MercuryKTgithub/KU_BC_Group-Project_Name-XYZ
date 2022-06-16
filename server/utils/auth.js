const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.APP_SECRET
const expiration = '48h';
   
    // jwt.sign // jwt.verify
    // function signToken can be imported like this const { signToken } = require('../utils/auth');
 
module.exports = {
  
  //  signToken() function expects a user object and will add that user's username, email, and _id properties to the token
  signToken: function({ username, email, _id }) {
    const payload = { username, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration }); // sign with given secret so server can recognize token or not while verifying
  },

  // -- Backend looking for token
  authMiddleware: function({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization; 
    if (req.headers.authorization) {   // separate "Bearer" from "<tokenvalue>"
      token = token
        .split(' ')
        .pop()
        .trim();
    }
    if (!token) {  // if no token, return request object as is
      return req;
    }    
    // -- If the secret on jwt.verify() doesn't match the secret that was used with jwt.sign(), the object won't be decoded, error thrown
    // we wrapped the verify() method in a try...catch statement to mute the error
    try {
      console.log("rrrrrrrrrrrrrrr");
      console.log(secret);
      console.log("rrrrrrrrrrrrrrr");
      const { data } = jwt.verify(token, secret, { maxAge: expiration });  // decode user data  
      req.user = data; // attach decoded user data to request object
    } catch {
      console.log('Invalid token');
    }
  
    // return updated request object
    return req;
  }

};