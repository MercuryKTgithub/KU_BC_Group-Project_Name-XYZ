import React, { useState } from 'react';
import NavSub from './components/NavSub';
import Gallery from './components/Gallery';
 

// Apply useState on an array
function Catalog() {
  const [categories] = useState([
    {
      name: 'Birthday Cakes',
      description: 'Photos of our most recent cake design models',
    },
    { name: 'Wedding Cakes', description: 'Some of the design strength but still reflect our traditional buttercream based floral aesthetics' },
     
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
         {/* {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )} */}
      </main>
    </div>
  );
}

export default Catalog;