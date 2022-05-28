import React, {useState} from 'react';
// import { useQuery } from '@apollo/client'; // useQuery hook that expect a parameter passed in
// import Auth from '../utils/auth';
// import { QUERY_ME_BASIC } from '../utils/queries';
// import { Link } from 'react-router-dom';
// import { QUERY_ME } from '../utils/queries';
import { primaryflowers } from '../../utils/primaryflowers';
import { secondaryflowers } from '../../utils/secondaryflowers';

const getFormattedPrice = (price) => `$${price.toFixed(2)}`;

const CakeOrderForm = () => {
  // -- Use object destructuring to extract `data` from the `useQuery` Hook's response and rename it `userData` to be more descriptive
  // const [isChecked, setIsChecked] = useState(false);

  const [checkedState, setCheckedState] = useState(
    new Array(primaryflowers.length).fill(false)
  );

  const [checkedStateSecondary, setCheckedStateSecondary] = useState(
    new Array(secondaryflowers.length).fill(false)
  );

  const [total, setTotal] = useState(0);
  const [secondaryTotal, setSecondaryTotal] = useState(0);
  const [flowerWishlist, setFlowerWishlist] = useState("");
  const [secondaryFlowerWishlist, setSecondaryFlowerWishlist] = useState("");

// ```````````````````````````````````````````````````
// -- Executes a reducer function on each element of the array, resulting in a single output value
  const handlePrimaryOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    
    setCheckedState(updatedCheckedState);
    let totalPrimaryFlowers = '';
    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          totalPrimaryFlowers += primaryflowers[index].name + "*";
          return sum + primaryflowers[index].price;
        }
        return sum;
      },
      0
    );
    setTotal(totalPrice);
    setFlowerWishlist(totalPrimaryFlowers)
  };

  const handleSecondaryOnChange = (position) => {
    const updatedCheckedStateOfSecondary = checkedStateSecondary.map((item, index) =>
      index === position ? !item : item
    );
    
    setCheckedStateSecondary(updatedCheckedStateOfSecondary);
    let totalPrimaryFlowers = '';
    const totalPrice = updatedCheckedStateOfSecondary.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          totalPrimaryFlowers += secondaryflowers[index].name + "*";
          return sum + secondaryflowers[index].price;
        }
        return sum;
      },
      0
    );
    setSecondaryTotal(totalPrice);
    setSecondaryFlowerWishlist(totalPrimaryFlowers)
  };
//`````````````````````````````````````````````````
  return (
    <div >
      <div >
        <h2>Cake's Baseline Order</h2>
              <div  className="flex-row justify-space-between-md " style={{'backgroundColor' : "transparent" }}>
              
                <div className="col-6 col-md-6" style={{'backgroundColor' : "transparent" }}>
                  <h4>Select primary flowers for your cake</h4>
                  {primaryflowers.map(({ name, price }, index) => {
                    return (
                      <div>
                        <input style={{'margin': "10px 10px" }}
                          type="checkbox"
                          id={`custom-checkbox-${index}`}
                          name={name}
                          value={name}
                          checked={checkedState[index]}
                          onChange={() => handlePrimaryOnChange(index)}
                        />&nbsp;&nbsp;
                        <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                        {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{getFormattedPrice(price)} */}
                      </div>
                    );
                  })}
                  {/* <div>Total:</div> */}
                  {/* <div>{getFormattedPrice(total)} {flowerWishlist}</div> */}
                  <div>{flowerWishlist}</div>
                </div>

                <div className="col-6 col-md-6 "style={{'backgroundColor' : "transparent"  }}>
                  <h4>Select secondary flowers for your cake</h4>
                  {secondaryflowers.map(({ name, price }, index) => {
                    return (
                      <div>
                        <input style={{'margin': "10px 10px" }}
                          type="checkbox"
                          id={`custom-checkbox-${index}`}
                          name={name}
                          value={name}
                          checked={checkedStateSecondary[index]}
                          onChange={() => handleSecondaryOnChange(index)}
                        />&nbsp;&nbsp;
                        <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                        {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{getFormattedPrice(price)}  */}
                      </div>
                    );                    
                  })}
                   {/* <div>Total:</div> */}
                   {/* <div>{getFormattedPrice(secondaryTotal)} {secondaryFlowerWishlist}</div> */}
                   <div>{secondaryFlowerWishlist}</div>
                </div>

                
                
                {/* <div className="col-3 col-md-3" style={{'backgroundColor' : "lime" }} ></div>
                <div className="col-3 col-md-3" style={{'backgroundColor' : "blue" }}>&nbsp;</div> */}

              </div>
         
        <div >
          
        </div>
      </div>
    </div>
  );
}

export default CakeOrderForm;
