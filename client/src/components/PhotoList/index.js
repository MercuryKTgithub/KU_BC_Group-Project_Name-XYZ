import React, { useState } from 'react';


const PhotoList = ({ category }) => {

    const [photos] = useState([
        
        {
            name: "elegent cake",
            category: "wedding",
            description: "user ordered cake",
        },
        {
            name: "fancy cake",
            category: "wedding",
            description: "user ordered cake",
        },
      ]);

      const currentPhotos = photos

    return (
        <div>
            <div className='flex-row'>
                {currentPhotos.map((image, i) => (
                    <img
                        src={require(`../../assets/small/${category}/${i}.jpg`)}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        key={image.name}
                    />
                    ))}
            
            </div>
        </div>
    )
}

export default PhotoList;