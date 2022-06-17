import React, {useState} from 'react';
import { useQuery, useMutation } from '@apollo/client'; // useQuery hook that expect a parameter passed in
import { useNavigate } from 'react-router-dom';
import { QUERY_ME } from '../../utils/queries';
import { ADD_CAKE } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { validateColorCodeLength,  validateColorCodeField, validateRequiredField } from '../../utils/helpers'
import { primaryflowers } from '../../utils/primaryflowers';
import { secondaryflowers } from '../../utils/secondaryflowers';
import { cakefillings } from '../../utils/cakefillings';

const CakeOrderForm = () => {
  const { data: userData } = useQuery( QUERY_ME );
  const user = userData?.me
  // const loggedIn = Auth.loggedIn(); // is the user logged-in?
  console.log("mmmmmmmmmmm");
  console.log(user);
  console.log("mmmmmmmmmm");
  // const [addCake, { error }] = useMutation(ADD_CAKE);
  
  const [addCake, { error }] = useMutation(ADD_CAKE, {
    update(cache, { data: { addCake } }) {
      try {
        const { me } = cache.readQuery({ query: QUERY_ME });
        // me.push(addCake);
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, cakes: [...me.cakes, addCake] } },
        });
       
      } catch (e) {
        console.warn("First cake insertion by user!")
      }
  
    }
  });

  const [nameUntouched, setNameUntouched] = useState(0);
  const [colorCodeUntouched, setColorCodeEmailUntouched] = useState(0);
  const MAX_LEN_NOT_MET_MSG = "Theme Color Code must have exactly 7 characters!";
  const WEIRD_CHAR_MSG = "It appears you have entered a special character or no text at all. Numericalpha only please.";
  const MUST_HAVE_NAME_MSG = "Please give your cake creation a name. It is required";
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
  const [errorMessage, setErrorMessage] = useState(''); 
  const [errorMessageCakeName, setErrorMessageCakeName] = useState('');
  const[extraPrimary, setExtraPrimaryText] = useState(0);
  const[extraSecondary, setExtraSecondaryText] = useState(0);
  const[extraThickness, setExtraThicknessText] = useState(0);
  const[themeColorCode, setThemeColorCodeText] = useState("");
  const[name, setCakeNameText] = useState("");

  console.log(shape);

  const min = 1;
  const max = 30;
  const maxinch = 12;

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
    const numericText = Math.max(min, Math.min(maxinch, Number(event.target.value)));
    setExtraThicknessText(numericText);
  }
  
  console.log(extraThickness);

 // -- Must have input-fields
  const handleThemeColorCodeTextChange = event => {
    setColorCodeEmailUntouched(colorCodeUntouched + 1);
    setThemeColorCodeText(event.target.value)

    if (!validateColorCodeField(event.target.value))
    {
      setErrorMessage(WEIRD_CHAR_MSG);
    }

    else if (!validateColorCodeLength(event.target.value)) {
      setErrorMessage(MAX_LEN_NOT_MET_MSG);
    }     

    else{
      setErrorMessage('');
    }

  }

//   const handleThemeColorCodeTextChange = event => {
//     setColorCodeEmailUntouched(colorCodeUntouched + 1);
//     setThemeColorCodeText(event.target.value)
//     const isValid = validateColorCodeLength(event.target.value);
//       if (!isValid) {
//         setErrorMessage('Theme Color Code must have exactly 7 characters!');
//       }     
//       else if (!validateColorCodeField(event.target.value))
//       {
//         setErrorMessage('It appears you have entered a special character or no text at all. Numericalpha only please.');
//       }
//       else{
//         setErrorMessage('');
//       }
// 
//   }


  console.log(themeColorCode);

  // -- required field : name
  const handleCakeNameTextChange = event => {
    setNameUntouched(nameUntouched + 1);
    setCakeNameText(event.target.value);
    const valid = validateRequiredField(event.target.value);
    if (!valid) {
      setErrorMessageCakeName(MUST_HAVE_NAME_MSG);
    }
    else{
      setErrorMessageCakeName('');
    }
     
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
  const [total, setTotal] = useState(0); // may need computing later on
  const [secondaryTotal, setSecondaryTotal] = useState(0);
  const [fillingsTotal, setFillingsTotal] = useState(0);
// ``````````````````````````````````````````````````````````````````````````````````````
// objective: get the list of selected flowers via checkboxes indirectly 

// ``````````````````````````````````````````````````````````````````````````````````````

  const [primaryFlowers, setFlowerWishlistArr] = useState([]);  
  const [secondaryFlowers, setSecondaryFlowerWishlistArr] = useState([]);  
  const [fillings, setFillingWishListArr] = useState([]);  

// ``````````````````````````````````````````````````
  const handlePrimaryOnChange = (position) => {
      const updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item
      );
      
      setCheckedState(updatedCheckedState);
      let arrPrimaryFlowers = []
      const totalPrice = updatedCheckedState.reduce(
        (sum, currentState, index) => {
          if (currentState === true) {
            arrPrimaryFlowers.push(primaryflowers[index].name);
            return sum + primaryflowers[index].price;
          }
          return sum;
        },
        0
      );
      setTotal(totalPrice);
      setFlowerWishlistArr(arrPrimaryFlowers);
  };

  const handleSecondaryOnChange = (position) => {
    const updatedCheckedStateSecondary = checkedStateSecondary.map((item, index) =>
      index === position ? !item : item
    );
    
    setCheckedStateSecondary(updatedCheckedStateSecondary);
    let arrSelectedSecondaryFlowers = [];
    const totalPrice = updatedCheckedStateSecondary.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          arrSelectedSecondaryFlowers.push(secondaryflowers[index].name);
          return sum + secondaryflowers[index].price;
        }
        return sum;
      },
      0
    );
    // console.log(updatedCheckedStateSecondary); // list of true, false

    setSecondaryTotal(totalPrice);
    setSecondaryFlowerWishlistArr(arrSelectedSecondaryFlowers);
     
  };

  const handleFillingsOnChange = (position) => {
    const updateCheckedStateFillings = checkedStateFillings.map((item, index) =>
      index === position ? !item : item
    );
    
    setCheckedStateFillings(updateCheckedStateFillings);
    let arrSelectedFillings = [];
    const totalPrice = updateCheckedStateFillings.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          arrSelectedFillings.push(cakefillings[index].name);
          return sum + cakefillings[index].price;
        }
        return sum;
      },
      0
    );
    setFillingsTotal(totalPrice);
    setFillingWishListArr(arrSelectedFillings);
};

// const [addCake, { error }] = useMutation(ADD_CAKE);

// submit form 
// -----------------------------------------------------
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(nameUntouched, colorCodeUntouched);
    console.log(errorMessage, );
    if ((!errorMessage) && (!errorMessageCakeName) && (nameUntouched >= 1) && (colorCodeUntouched >= 1) ) {
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
    }// end if
  };
// End submit form  
// -----------------------------------------------------
  return (
    <div >
      {/* <div > */}
      <div className='flex-row justify-space-between'>
        {/* <h2>Cake's Baseline Order</h2> */}

          <div className={`col-12 col-lg-8 mb-3 ${Auth.loggedIn && 'col-lg-8'}`}><h2>Cake's Baseline Order</h2>
          </div>
          {Auth.loggedIn && user ? (<div className="col-12 col-lg-3 mb-3"><h5>Welcome, {user.username}!</h5></div> ) : 
          <div className="col-12 col-lg-3 mb-3">Please register to place orders</div>  }

          {/* <div className={`col-12 col-lg-9 mb-3 ${Auth.loggedIn && 'col-lg-8'}`}>
            What's here;</div>
          {Auth.loggedIn && user ? (<div className="col-12 col-lg-3 mb-3"><h5>Welcome, {user.username}!</h5></div> ) : 
          <div className="col-12 col-lg-3 mb-3">&nbsp;</div>  } */}

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
                {/* <div>{fillings}</div> */}
            </div>
            <div className="col-6 col-md-6" style={{'backgroundColor' : "transparent" }}>
                <h4>Enter theme color code [closest to your liking]</h4>
                  <input 
                    type="text" maxLength={7}
                    value={themeColorCode} onBlur={handleThemeColorCodeTextChange}
                    onChange={handleThemeColorCodeTextChange}
                    className="form-input text-center" style={{'width' : '38%', 'fontSize': 26 }} />
              
            </div>

            <div className="col-6 col-md-6" style={{'backgroundColor' : "transparent" }}>
                <h4>Please give your cake a name:</h4>
                  <input 
                    type="text"
                    value={name} onBlur={handleCakeNameTextChange}
                    onChange={handleCakeNameTextChange}
                    className="form-input text-left" style={{ 'fontSize': 26 }} />
                
            </div>
            <button className="btn col-3 col-md-3" type="submit" >
                Create this cake!
            </button>
            <div className="col-9 col-md-9 text-right text-error">
              {error && <div>Something went wrong...</div>}
              {errorMessage} <br></br>
              {errorMessageCakeName}
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
