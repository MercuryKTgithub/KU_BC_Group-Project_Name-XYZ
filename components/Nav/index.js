import React from 'react';

function Nav() {

// Defined categories created as objects inside an array.
const categories = [
    {
        name: "wedding",
        description:
        "Photos of customer order wedding cakes",
    },
    {   name: "birthday",
        description: 
        "Photos of customer order birthday cakes",
    },
];    

// console logs nav link clicked 
function categorySelected(name) {
    console.log(`${name} clicked`)
}

    return(
        <header>
            <nav className='nav'>
                <ul className='flex-row'>
                    <li className=''>
                        <a href="/" className="">
                            FEC
                        </a>
                    </li>
                    {categories.map((category) => (
                        <li
                        className=''
                        key={category.name}
                        >
                            <span onClick={() => categorySelected(category.name)}>
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );

}

export default Nav;