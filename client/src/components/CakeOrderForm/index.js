import React, {useState} from 'react';
// import { useQuery } from '@apollo/client'; // useQuery hook that expect a parameter passed in
// import Auth from '../utils/auth';
// import { QUERY_ME_BASIC } from '../utils/queries';
import { useNavigate } from 'react-router-dom';
// import { QUERY_ME } from '../utils/queries';
import { useMutation } from '@apollo/client';
import { ADD_CAKE } from '../../utils/mutations';

import { primaryflowers } from '../../utils/primaryflowers';
import { secondaryflowers } from '../../utils/secondaryflowers';
import { cakefillings } from '../../utils/cakefillings';

const CakeOrderForm = () => {
  // -- Use object destructuring to extract `data` from the `useQuery` Hook's response and rename it `userData` to be more descriptive
  // const [isChecked, setIsChecked] = useState(false);
  let navigate = useNavigate();
  const [checkedState, setCheckedState] = useState(
    new Array(primaryflowers.length).fill(false)
  );

  const [checkedStateSecondary, setCheckedStateSecondary] = useState(
    new Array(secondaryflowers.length).fill(false)
  );

  const [checkedStateFillings, setCheckedStateFillings] = useState(
    new Array(cakefillings.length).fill(false)
  );
 
  const [shape, setFavorite] = useState('Round');  
  const [frostings, setFavoriteFrosting] = useState('Swiss Buttercream');

  const handleRectCheckedChange = () => {
    setFavorite('Rectangular');
  };

  const handleRoundCheckedChange = () => {
    setFavorite('Round');
  };

  const handleSquareCheckedChange = () => {
    setFavorite('Square');
  };

  const handleHeartCheckedChange = () => {
    setFavorite('Heart');
  };

  const handleItalianFrostingCheckedChange = () => {
    setFavoriteFrosting('Italian Buttercream');
  };

  const handleSwissFrostingCheckedChange = () => {
    setFavoriteFrosting('Swiss Buttercream');
  };

  console.log(frostings);

  const[extraPrimary, setExtraPrimaryText] = useState(0);
  const[extraSecondary, setExtraSecondaryText] = useState(0);
  const[extraThickness, setExtraThicknessText] = useState(0);
  const[themeColorCode, setThemeColorCodeText] = useState("");
  const[name, setCakeNameText] = useState("");

  console.log(shape);

  const min = 1;
  const max = 30;

  const handleExtraPrimaryChange = event => {
    const numericText = Math.max(min, Math.min(max, Number(event.target.value)));
    setExtraPrimaryText(numericText);
  }

  console.log(extraPrimary);

  const handleExtraSecondaryChange = event => {
    const numericText = Math.max(min, Math.min(max, Number(event.target.value)));
    setExtraSecondaryText(numericText);
  }

  console.log(extraSecondary);

  const handleExtraThicknessChange = event => {
    const numericText = Math.max(min, Math.min(max, Number(event.target.value)));
    setExtraThicknessText(numericText);
  }
  
  console.log(extraThickness);

  const handleThemeColorCodeTextChange = event => {
    const re = /^[a-zA-Z0-9]{8}$/;
    if (!event.target.value === '' || !re.test(event.target.value)) {
        setThemeColorCodeText(event.target.value);
    }
  }
  console.log(themeColorCode);

  // -- required field : name
  const handleCakeNameTextChange = event => {
    setCakeNameText(event.target.value);
  }

  console.log(name);

  // reusable RadioButton class 
  const RadioButton = ({ label, value, onChange }) => {
    return (
      <label>
        <input type="radio" checked={value} onChange={onChange} />
        {label}
      </label>
    );
  };
;
  const [total, setTotal] = useState(0);
  const [secondaryTotal, setSecondaryTotal] = useState(0);
  const [fillingsTotal, setFillingsTotal] = useState(0);
// ``````````````````````````````````````````````````````````````````````````````````````
// objective: get the list of selected flowers via checkboxes indirectly thru (1) and (2)

// ``````````````````````````````````````````````````````````````````````````````````````
  const [flowerWishlist, setFlowerWishlist] = useState(""); //(1)
  const [secondaryFlowerWishlist, setSecondaryFlowerWishlist] = useState(""); //(2)

  const [primaryFlowers, setFlowerWishlistArr] = useState([]); //(3)
  const [secondaryFlowers, setSecondaryFlowerWishlistArr] = useState([]); //(4)  

  const [fillingsWishlist, setfillingsWishlist] = useState(""); //(5)
  const [fillings, setFillingWishListArr] = useState([]); //(6)

// ``````````````````````````````````````````````````
  const handlePrimaryOnChange = (position) => {
      const updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item
      );
      
      setCheckedState(updatedCheckedState);
      let totalSelectedPrimaryFlowers = '';
      let arrPrimaryFlowers = []
      const totalPrice = updatedCheckedState.reduce(
        (sum, currentState, index) => {
          if (currentState === true) {
            totalSelectedPrimaryFlowers += primaryflowers[index].name + "+";
            arrPrimaryFlowers.push(primaryflowers[index].name);
            return sum + primaryflowers[index].price;
          }
          return sum;
        },
        0
      );
      setTotal(totalPrice);
      setFlowerWishlist(totalSelectedPrimaryFlowers); // 
      setFlowerWishlistArr(arrPrimaryFlowers);
  };

  const handleSecondaryOnChange = (position) => {
    const updatedCheckedStateSecondary = checkedStateSecondary.map((item, index) =>
      index === position ? !item : item
    );
    
    setCheckedStateSecondary(updatedCheckedStateSecondary);
    let totalSelectedSecondaryFlowers = '';
    let arrSelectedSecondaryFlowers = [];
    const totalPrice = updatedCheckedStateSecondary.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          totalSelectedSecondaryFlowers += secondaryflowers[index].name + "+";
          arrSelectedSecondaryFlowers.push(secondaryflowers[index].name);
          return sum + secondaryflowers[index].price;
        }
        return sum;
      },
      0
    );
    // console.log("mmmmmmmmmmmmmmmmmmmmm")
    // console.log(updatedCheckedStateSecondary); // list of true, false

    setSecondaryTotal(totalPrice);
    setSecondaryFlowerWishlist(totalSelectedSecondaryFlowers); 
    setSecondaryFlowerWishlistArr(arrSelectedSecondaryFlowers);
     
  };

  const handleFillingsOnChange = (position) => {
    const updateCheckedStateFillings = checkedStateFillings.map((item, index) =>
      index === position ? !item : item
    );
    
    setCheckedStateFillings(updateCheckedStateFillings);
    let totalSelectedFillings = '';
    let arrSelectedFillings = [];
    const totalPrice = updateCheckedStateFillings.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          totalSelectedFillings += cakefillings[index].name + "+";
          arrSelectedFillings.push(cakefillings[index].name);
          return sum + cakefillings[index].price;
        }
        return sum;
      },
      0
    );
    setFillingsTotal(totalPrice);
    setfillingsWishlist(totalSelectedFillings); // 
    setFillingWishListArr(arrSelectedFillings);
};

const [addCake, { error }] = useMutation(ADD_CAKE);
// ``````````````````````````````````````````````````
// objective2: get the list of selected cake fillings  

// submit form 
// -----------------------------------------------------
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(primaryFlowers);
    try {
      await addCake({
        variables: { name, themeColorCode, shape
                         , primaryFlowers, secondaryFlowers
                         , extraPrimary, extraSecondary, extraThickness
                         , fillings, frostings }
      });
           
      // clear form value
      setThemeColorCodeText('');
      setCakeNameText('');
          
      navigate("/cakediscussion", {
        state: name
      })
    } catch (e) {
      console.error(e);
    }
  };
// End submit form  
// -----------------------------------------------------
  return (
    <div >
      <div >
        <h2>Cake's Baseline Order</h2>

        <div >
          <form className="flex-row justify-space-between-md" onSubmit={handleFormSubmit} style={{'backgroundColor' : "transparent" }}>
            <div className="col-6 col-md-6" style={{'backgroundColor' : "transparent" }}>
                  <h4>Select primary flowers for your cake</h4>
                  {primaryflowers.map(({ name, price }, index) => {
                    return (
                      <div key={index}>
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
                  {/* <div>{flowerWishlist}</div> */}
                  {/* <div>{primaryFlowers}</div> */}
            </div>

            <div className="col-6 col-md-6 "style={{'backgroundColor' : "transparent"  }}>
              <h4>Select secondary flowers for your cakes  </h4>
                {secondaryflowers.map(({ name, price }, index) => {
                  return (
                    <div key={index}>
                      <input style={{'margin': "10px 10px" }}
                        type="checkbox"
                        id={`custom-checkbox-${index}`}
                        name={name}
                        value={name}
                        checked={checkedStateSecondary[index]}
                        onChange={() => handleSecondaryOnChange(index)}
                      />&nbsp;&nbsp;
                      <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                    </div>
                  );
                })}               
                {/* <div>{secondaryFlowerWishlist}</div> */}
                {/* <div>{secondaryFlowers}</div> */}
            
            </div>
            {/* <div className="col-3 col-md-3" style={{'backgroundColor' : "lime" }} ></div>
            <div className="col-3 col-md-3" style={{'backgroundColor' : "blue" }}>&nbsp;</div> */}

            <div className="col-6 col-md-6" style={{'backgroundColor' : "transparent" }}>
              <h4>Select a cake's shape:</h4>
              <div>
                <RadioButton
                  label="Round"
                  value={shape === 'Round'}
                  onChange={handleRoundCheckedChange}
                />
                <RadioButton
                  label="Rectangular"
                  value={shape === 'Rectangular'}
                  onChange={handleRectCheckedChange}
                />
                <RadioButton
                  label="Square"
                  value={shape === 'Square'}
                  onChange={handleSquareCheckedChange}
                />
                <RadioButton
                  label="Heart"
                  value={shape === 'Heart'}
                  onChange={handleHeartCheckedChange}
                />
              </div>
              <h4>Enter number of Extra Primary Flowers: </h4>
                <input 
                  type="number"
                  value={extraPrimary} 
                  onChange={handleExtraPrimaryChange}
                  className="form-input text-center" style={{ 'width' : '25%','height': '9%', 'fontSize': 20 }} />
              <h4>Number of Extra Secondary Flowers: </h4>
                  <input 
                    type="number"
                    value={extraSecondary} 
                    onChange={handleExtraSecondaryChange}
                    className="form-input text-center" style={{'width' : '25%','height': '9%', 'fontSize': 20 }} />
              <h4>Additional sectional thickness [inches] : </h4>
                  <input 
                    type="number"
                    value={extraThickness} 
                    onChange={handleExtraThicknessChange}
                    className="form-input text-center" style={{'width' : '25%','height': '9%', 'fontSize': 20 }} />
               <h4>Choose your frosting : </h4>
               <RadioButton
                  label="Swiss Buttercream"
                  value={frostings === 'Swiss Buttercream'}
                  onChange={handleSwissFrostingCheckedChange}
                />
                <RadioButton
                  label="Italian Buttercream"
                  value={frostings === 'Italian Buttercream'}
                  onChange={handleItalianFrostingCheckedChange}
                />
            </div>
            <div className="col-6 col-md-6" style={{'backgroundColor' : "transparent" }}>
              <h4>Select fillings for your cake</h4>
                {cakefillings.map(({ name, price }, index) => {
                  return (
                    <div key={index}>
                      <input style={{'margin': "10px 10px" }}
                        type="checkbox"  
                        id={`custom-checkbox-${index}`}
                        name={name}
                        value={name}
                        checked={checkedStateFillings[index]}
                        onChange={() => handleFillingsOnChange(index)}
                      />&nbsp;&nbsp;
                      <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                      {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{getFormattedPrice(price)} */}
                    </div>
                  );
                })}                 
                {/* <div>{fillingsWishlist}</div> */}
                {/* <div>{fillings}</div> */}
            </div>
            <div className="col-6 col-md-6" style={{'backgroundColor' : "transparent" }}>
                <h4>Enter theme color code [closest to your liking]</h4>
                  <input 
                    type="text"
                    value={themeColorCode} 
                    onChange={handleThemeColorCodeTextChange}
                    className="form-input text-center" style={{'width' : '38%', 'fontSize': 30 }} />
              
            </div>

            <div className="col-6 col-md-6" style={{'backgroundColor' : "transparent" }}>
                <h4>Please give your cake a name:</h4>
                  <input 
                    type="text"
                    value={name} 
                    onChange={handleCakeNameTextChange}
                    className="form-input text-left" style={{ 'fontSize': 30 }} />
                
            </div>
            <button className="btn col-3 col-md-3" type="submit" >
                Create this cake!
            </button>
            <div className="col-9 col-md-9">
              {error && <div>Something went wrong...</div>};
            </div>
          </form>
          <div className="flex-row justify-space-between-md" style={{'paddingBottom' : 30 }} >
            &nbsp;
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default CakeOrderForm;
