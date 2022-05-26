import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';


function Nav(props) {

const {
  categories = [],
  setCurrentCategory,
  currentCategory,
} = props; 

useEffect(() => {
  document.title = capitalizeFirstLetter(currentCategory.name);
}, [currentCategory]);


// Logs navbar item clicked
// function categorySelected(name) {
//     console.log(`${name} clicked`)
// }

    return(
        <header>
            <nav className='nav'>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a data-testid="link" href="/" className="site-title">
                            FEC
                        </a>
                    </li>
                    {categories.map((category) => (
            <li className={`mx-1 ${
                currentCategory.name === category.name && 'navActive'
                }`} key={category.name}>
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
                </ul>
            </nav>
        </header>
    );

}

export default Nav;