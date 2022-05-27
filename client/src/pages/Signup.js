import React, { useState } from 'react';
import { useMutation } from '@apollo/client'; //useMutation Hook 
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { validateEmail, validateEmptyField, validatePasswordLength } from '../utils/helpers';

const Signup = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState(''); 
  
  // -- This hook prepares a JavaScript function that wraps around the mutation code ADD_USER 
  // and returns this Javascipt function addUser aka addUser mutation function
  const [addUser, { error }] = useMutation(ADD_USER); // action

  // --------------------------------------------------
  // handleChange: update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({...formState, [name]: value,});

    if (event.target.name === 'email') 
    {
      const isValid = validateEmail(event.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage('Your email is invalid!');
      } else {
        setErrorMessage('');
      }
    } 
    
    if(event.target.name === 'username') 
    {
      const isNotValid = validateEmptyField(event.target.value);
      console.log(isNotValid);
      if (isNotValid) {
        setErrorMessage('Your username cannot be empty!');
      } else {
        setErrorMessage('');
      }
    }

    if(event.target.name === 'password') 
    {
      const isNotValid = validateEmptyField(event.target.value);
      console.log(isNotValid);
      if (isNotValid) {
        setErrorMessage('Your password cannot be empty!');
      } else if (!validatePasswordLength(event.target.value))
      {
        setErrorMessage('Your password must have at least 8 characters');
      }
      else{
        setErrorMessage('');
      }
    }

  };
  // --------------------------------------------------
  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!errorMessage) 
    {
      try 
      {
        const { data } = await addUser({
          variables: { ...formState } // pass the data from the form state object as variables for our addUser mutation function
        });
        Auth.login(data.addUser.token);
        console.log(data); // whatever object/array-of-objects returned by the mutation/query
      } catch (e) {
        console.error(e);
      }
    } 
  
  };
  // --------------------------------------------------
  return (
    <main className='flex-row justify-center mb-4'>
      <div className='col-12 col-md-6'>

        <div className='card'>
          <h4 className='card-header'>Sign Up</h4>
          <div className='card-body'>
            <form onSubmit={handleFormSubmit}>

              <input
                className='form-input'
                placeholder='Your username - required'
                name='username'
                type='username'
                id='username' autoComplete="off"
                value={formState.username}
                onChange={handleChange}
                onBlur={handleChange}  
              />
              <input
                className='form-input'
                placeholder='Your email - required'
                name='email'
                type='email'
                id='email' autoComplete="off"
                value={formState.email}
                onChange={handleChange}
                onBlur={handleChange}  
              />
              <input
                className='form-input'
                placeholder=''
                name='password'
                type='password'
                id='password' autoComplete="off"
                value={formState.password}
                onChange={handleChange}
              />
              <button className='btn d-block w-100' type='submit'>
                Submit
              </button>
            </form>
              {error && <div className="text-error">Sign up failed.</div>}    
              <div className="text-error"> {errorMessage}</div>        
          </div>

        </div>

      </div>
    </main>
  );
};

export default Signup;
