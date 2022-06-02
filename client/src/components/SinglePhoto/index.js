import React from 'react';

import photo from '../../assets/featured/baseline_order.png';

function SinglePhoto(props) {
  
  return (
    <div className={`col-12 col-lg-9 mb-3`}>
      <h2>Baseline Pricing</h2>
      <p>FEC Order Package features an Online Photo Album Gallergy or Wedding Guestbook designed and hosted by us, in addition to getting your cakes done on time. Customers will pay a flat rate of $20.00 deposit to get this service set-up. </p>
      <img className='border-photo-small'
        src={photo}
        width={500}
        height={400}
        alt="Current Year Baseline Pricing"
      />  
  </div>
  
  );
}
export default SinglePhoto;

 
