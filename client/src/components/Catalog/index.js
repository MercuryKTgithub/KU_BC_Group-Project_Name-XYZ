import React, { useState } from 'react';
import NavSub from '../NavSub';
import Gallery from '../Gallery'
 

// Apply useState on an array
function Catalog() {
  const [categories] = useState([
    {
      name: 'birthday', description: 'Photos of our most recent cake design models',
    },
    { name: 'wedding', description: 'Featuring some trending cake-designs but still reflect our traditional buttercream based floral aesthetics' },
     
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  
  return (
    <div>
      <NavSub
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
       
      ></NavSub>
      <main>
        <div>
          <Gallery currentCategory={currentCategory}></Gallery>
        </div>
         
      </main>
    </div>
  );
}

export default Catalog;