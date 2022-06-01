import React, { useEffect }  from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function NavSub(props) {
  const { categories = [], 
    setCurrentCategory, currentCategory, 
    // setContactSelected, contactSelected,
  } = props;

  //  the first argument is the callback function, and the second argument is an array with a single element currentCategory
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
 
      <nav>
        <ul className="flex-row" style={{'listStyle': 'none'}}>    

          {categories.map((cat) => (            
            // <li className={`mx-1 ${currentCategory.name === cat.name && !whateverTheThirdCatagoryIs && 'navActive'}`} key={cat.name}>
            <li className={`mx-1 ${currentCategory.name === cat.name && 'navActive'}`} key={cat.name}>  
              <span onClick={() => { setCurrentCategory(cat);}}> {capitalizeFirstLetter(cat.name)} </span>
              &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;
            </li>

          ))}
        </ul>
      </nav>
    </header>
  );
} // end of function NavSub

export default NavSub;