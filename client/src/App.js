import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, } from '@apollo/client';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound'; 
import Goodbye from './pages/Goodbye'

import CakeDiscussion from './components/CakeDiscussion';  
import CommentForm from './components/CommentForm'; 
import SingleCommentFocus from './components/SingleCommentFocus';
import CakeOrderForm from './components/CakeOrderForm';
import SingleCakeFocus from './components/SingleCakeFocus';
import Pricing from './components/Pricing';
import Catalogs from './components/Catalogs' ;


import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({uri: '/graphql',});

// -- Use the setContext() function to retrieve the token from localStorage 
// and set the HTTP request headers of every request to include the token
// -- Because we're not using the first parameter, but we still need to access 
// the second one, we can use an underscore _ to serve as a placeholder for the first parameter.
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token_in_fec');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// -- Create and instruct the Apollo instance to retrieve this token every time we make a GraphQL request.
// by combining the authLink and httpLink objects so that every request can retrieve the token and sets 
// the request headers before making the request to the API
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route   
                path="/" 
                element={<Home />} 
              />        
              <Route  
                path="/signup" 
                element={<Signup />} 
              />   
              <Route  
                path="/login" 
                element={<Login />} 
              />
              <Route  
                path="/logout" 
                element={<Goodbye />} 
              />
              <Route 
                path="/catalogs"
                element={<Catalogs />}
              /> 
              <Route 
                path="/commentform"
                element={<CommentForm />}
              /> 
              <Route 
                path="/cakediscussion"
                element={<CakeDiscussion />}
              />
              <Route  
                path="/comment/:id" 
                element={<SingleCommentFocus />} 
              />
               <Route  
                path="/cakes/:id" 
                element={<SingleCakeFocus />} 
              />
              <Route  
                path="/cakeorderform" 
                element={<CakeOrderForm />}
               />
              {/* <Route  
                path="/singlephoto" 
                element={<SinglePhoto />} 
              />        */}
              <Route  
                path="/pricing" 
                element={<Pricing />} 
              />                       
              <Route 
                path="*" 
                element={<NotFound />} 
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
