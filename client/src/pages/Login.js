import React, { useState } from 'react';
import { useMutation } from '@apollo/client'; //useMutation Hook 
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { validateEmail} from '../utils/helpers';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);
  const [errorMessage, setErrorMessage] = useState(''); 
  // --------------------------------------------------
  // update state based on form input changes
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

  };
  // --------------------------------------------------
  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!errorMessage) 
    {
      try {
        const { data } = await login({
          variables: { ...formState }
        });
    
        Auth.login(data.login.token);

      } catch (e) {
        console.error(e);
      }
    }

//     // we are setting the variables field in our mutation to be an object with 
//     //  key/value pairs that match directly to formState object.
//     try {
//       const { data } = await login({
//         variables: { ...formState }
//       });
//   
//       console.log(data); //print out the 'credentials'
//       Auth.login(data.login.token);
// 
//     } catch (e) {
//       console.error(e);
//     }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main className='flex-row justify-center mb-4'>
      <div className='col-12 col-md-6'>
        <div className='card'>
          <h4 className='card-header'>Login</h4>
          <div className='card-body'>
            <form onSubmit={handleFormSubmit}>
              <input
                className='form-input'
                placeholder='Your email'
                name='email'
                type='email'
                id='email' autoComplete="off"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;'
                name='password'
                type='password'
                id='password'
                value={formState.password}
                onChange={handleChange}
              />
              <button className='btn d-block w-100' type='submit'>
                Submit
              </button>
            </form>
            {error && <div className="text-error">Login failed</div>}
            <div className="text-error"> {errorMessage}</div> 
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
