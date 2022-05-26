import React, { useState } from 'react';


const PhotoList = ({ category }) => {

    const [photos] = useState([
        {
          name:"kids cake",
          category: "birthday",
          description: "User uploaded birthday cake.",
        },
        {
          name: "birthday cake",
          category: "birthday",
          description: "User uploaded birthday cake.",
        },
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
        {
            name: "cake",
            category: "wedding",
            description: "User ordered wedding cake."
        }
      ]);

      const currentPhotos = photos.filter((photo) => photo.category === category);

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