import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';




function Nav() {

const [categories] = useState([
    {
        name: "Order",
        description:
        "Photos of customer order wedding cakes",
    },
    { name: "Gallery",
      description: 
      "Photos of customer order birthday cakes",
    },
    { name: "About",
      description: 
      "Photos of customer order birthday cakes",
    },
]);    

const [currentCategory, setCurrentCategory] = useState(categories[0]);

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
                  setCurrentCategory(category)
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