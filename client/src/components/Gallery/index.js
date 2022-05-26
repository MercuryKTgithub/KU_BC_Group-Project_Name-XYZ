import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
 import photo from "../../assets/small/wedding/wk-1.jpg";

function Gallery(props) {
    const currentCategory = {
        name: "wedding",
        description:
        "Photos of customer order wedding cakes",
    };

    return(
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.name}</p>
            <div className='flex-row'>
                <img 
                
                     src={photo}
                    alt="wedding cake"
                    className='img-thumbnail mx-1'

                />
            </div>
        </section>
    )
}

export default Gallery;