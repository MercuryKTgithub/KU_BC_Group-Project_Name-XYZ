import React, { useState } from 'react';
import Auth from '../../utils/auth'; 
import { QUERY_ME } from '../../utils/queries';
import { QUERY_ME_BASIC } from '../../utils/queries';
import { useQuery } from '@apollo/client'; // useQuery hook that expects a parameter passed in
import { useParams } from 'react-router-dom';

 
const CakeDiscussion = () => {
  const [payTotal, setPayTotal] = useState('');
  const { username: userParam } = useParams();   // console.log(userParam); // test only
  const { loading, data, error } = useQuery(userParam ? QUERY_ME : QUERY_ME_BASIC , {
    variables: { username: userParam },
  });
  const user = data?.me || data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }

 

  const handleChange = event => {
    if (event.target.value.length >= 20) {
      setPayTotal(event.target.value);
      setPayTotal('');
    }
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // await addReaction({
      //   variables: { payTotal },
      // });

      // clear form value
      setPayTotal('');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main>
      <div className='flex-row justify-space-between'>
       
      <div className={`col-12 col-lg-8 mb-3 ${Auth.loggedIn && 'col-lg-8'}`}>
         <h2>Cake Order Portal </h2>
      </div><div className="col-12 col-lg-3 mb-3"> </div>       

      {/* <div className="col-12 col-lg-8 mb-3">
         <h3>Your cake:</h3>
      </div><div className="col-12 col-lg-3 mb-3"><h3>Cake List by </h3><h5> {user.username}</h5> </div> */}

      <div className={`col-12 col-lg-7 mb-3 ${Auth.loggedIn && 'col-lg-8'}`}>         
      <h3>Order Preview: </h3>
      </div>
      <div className="col-12 col-lg-4 mb-3">  
      <h4> </h4>Cake Checkout for<h5> {user.username}</h5>
      </div> 

      

      <div className={`col-12 col-lg-12 mb-3 ${Auth.loggedIn && 'col-lg-8'}`}> 
      <div className="card mb-1" >
          <div className="card-header">
            <span className="text-light">Name of Cake  &raquo; {user.cakes[user.cakes.length -1].name} &bull; Theme Color Code  &raquo; {user.cakes[user.cakes.length -1].themeColorCode}</span>
          </div>
          <div className="cake-card-body">
            <p className="pill mb-1" > Primary Flowers &raquo;  {(user.cakes[user.cakes.length -1].primaryFlowers.length === 0 ? 'None' : user.cakes[user.cakes.length -1].primaryFlowers.join(', ')) } </p>
            <p className="pill mb-1" > Secondary Flowers &raquo;  {(user.cakes[user.cakes.length -1].secondaryFlowers.length === 0 ? 'None' : user.cakes[user.cakes.length -1].secondaryFlowers.join(', ')) } </p>
            <p className="pill mb-1"> Select a cake's shape &raquo;  {user.cakes[user.cakes.length -1].shape} </p>
            <p className="pill mb-1"> Choice of Frosting &raquo; {user.cakes[user.cakes.length -1].frostings} </p>
            <p className="pill mb-3" > Select fillings for your cake &raquo; {(user.cakes[user.cakes.length -1].fillings.length === 0 ? 'None' : user.cakes[user.cakes.length -1].fillings.join(', ')) }</p>
            <p className="pill mb-1"> Number of Extra Primary Flowers &raquo;  {user.cakes[user.cakes.length -1].extraPrimary} </p>
            <p className="pill mb-1"> Number of Extra Secondary Flowers &raquo;  {user.cakes[user.cakes.length -1].extraPrimary} </p>
            <p className="pill mb-1"> Additional sectional thickness &raquo;  {user.cakes[user.cakes.length -1].extraThickness} in.</p>
            <p></p>
            <div style={{'marginLeft': '1%', 'marginTop': 0 }}>
              <div className='card'>
                <div className="card-header">
                  <span className="text-light">Cake's name : {user.cakes[user.cakes.length -1].name} &bull; Theme Color Code : {user.cakes[user.cakes.length -1].themeColorCode}</span>
                </div>
                <div className="cake-card-body" style={{ wordBreak: 'break-all' }} >
                  <form className="flex-row justify-center justify-space-between-md " onSubmit={handleFormSubmit}>
                    <p>Customer {user.username} &bull; Email Contact:  {user.email}</p>

                    Your cake package comes with an FEC Online Photo Album hosted for 6 months.<br></br>
                    Up-front deposit amount for this order reservation is:<br></br>
                    <div style={{ 'display' : 'flex', 'height': '17%', 'marginBottom': 20 }}>

                      <label style={{ 'width' : '13%','height': '15%', 'fontSize': 42, 'marginLeft': '35%', 'marginTop': 5 }}>$</label>
                      <input type="text" value={'20.00'} className="form-input text-right" onChange={handleChange}
                             style={{ 'width' : '20%','height': '17%', 'fontSize': 28, 'paddingRight': 15, 'marginLeft': -20 }} />

                      <button className="btn col-3 col-md-3" type="submit" >
                        Submit
                      </button>
                      {/* <NumberFormat value={2456981} displayType={'text'} thousandSeparator={true} prefix={'$'} /> */}
                    </div>
                                     
                    <p style={{ 'fontFamily': 'var(--designer-font-primary)', 'fontSize': 24, 'letterSpacing': 1 }}>Thank you for letting FEC Designer serve you!</p>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
             
         
        
      </div>
  
      <div className="col-12 col-lg-4 mb-3">  
          {/* {loading ? (<div>Loading...</div>) : ( <CakeList cakes={user.cakes} />)} */}
          
      </div>  
        
      <div className={`col-12 col-lg-7 mb-3 ${Auth.loggedIn && 'col-lg-8'}`}>         
        {/* <form className="flex-row justify-center justify-space-between-md " onSubmit={handleFormSubmit}>
            
            Cake package comes with online photo album hosted for 6 months.
            Upfront deposit amount for this order reservation is:
            $<input 
                type="number"
                value={20} 
                className="form-input text-center" style={{ 'width' : '45%','height': '9%', 'fontSize': 20 }} />

          <button className="btn col-3 col-md-3" type="submit">
            Submit
          </button>
        </form> */}
      </div>
      <div className="col-12 col-lg-4 mb-3">  </div> 

      <div className="col-12 col-lg-8 mb-3">
        {/* <CakeList cakes={user.cakes} /> */}
      </div><div className="col-12 col-lg-3 mb-3"> </div>

      <div className={`col-12 col-lg-8 mb-3 ${Auth.loggedIn && 'col-lg-8'}`}>         
        {/* <CommentList comments={user.comments} title="Cake Review & Consulting" /> */}
        {/* {user.comments.length ? (<p>Current comments and replies </p>) : (<p>No cake order or discussion found </p>)} */}
      </div>
      <div className="col-12 col-lg-3 mb-3"></div>                   

      <div className={`text-error col-12 col-lg-12 mb-4 ${Auth.loggedIn && 'col-lg-8'}`}>
        {/* {<CommentForm />} */} {error}
      </div>     
    </div>
  </main>
  );
};

export default CakeDiscussion;
//  {/* {loading ? (<div>Loading...</div>) : ( <CommentList comments={user.comments} title="Cake Review - Comments & Feedback" />)} */}
//  <CommentList comments={user.comments} title="Cake Review - Comments & Feedback" />