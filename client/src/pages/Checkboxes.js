import React, {useState} from 'react';
import { primaryflowers } from '../utils/primaryflowers';

const getFormattedPrice = (price) => `$${price.toFixed(2)}`;
const Checkboxes = () => {

  const [checkedState, setCheckedState] = useState(
    new Array(primaryflowers.length).fill(false)
  );

  const [total, setTotal] = useState(0);
  const [flowerWishlist, setFlowerWishlist] = useState("");

// ```````````````````````````````````````````````````
// executes a reducer function on each element of the array, 
// resulting in a single output value
  const handleOnChange = (position) => {
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
//`````````````````````````````````````````````````
  return (
    <div >
      <h3>Select flowers for your cake</h3>
      
        {primaryflowers.map(({ name, price }, index) => {
          return (
            <div  key={index} className="flex-row justify-center justify-space-between-md ">
              <div className="col-3 col-md-3">
                <input
                  type="checkbox"
                  id={`custom-checkbox-${index}`}
                  name={name}
                  value={name}
                  checked={checkedState[index]}
                  onChange={() => handleOnChange(index)}
                />&nbsp;&nbsp;
                <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
              </div>
              <div className="col-3 col-md-3" >{getFormattedPrice(price)}</div>
              <div className="col-3 col-md-3" >&nbsp;</div>
              <div className="col-3 col-md-3" >&nbsp;</div>
            </div>
          );
        })}
       
          <div >
            <div>Total:</div>
            <div>{getFormattedPrice(total)} {flowerWishlist}</div>
          </div>
    </div>
  );
}

export default Checkboxes;
