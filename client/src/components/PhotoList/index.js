import React, { useState } from 'react';
import Modal from '../Modal';


const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'Flower Cake Model - I',
      category: 'birthday',
      description: 'FEC12RD'
    },
    {
      name: 'Flower Cake Model - II',
      category: 'birthday',
      description: 'FEC14RD'
    },
    {
      name: 'Flower Cake Model - III',
      category: 'birthday',
      description: 'FEC16RD'
    },
    {
      name: 'Flower Cake Model - IV',
      category: 'birthday',
      description: 'FEC18RD'
    },
    {
      name: 'Flower Cake Model - V',
      category: 'birthday',
      description: 'FEC21RD'
    },
    {
      name: 'Flower Cake Model - VI',
      category: 'birthday',
      description: 'FEC23RD'
    },
    {
      name: 'Flower Cake Model - VII',
      category: 'birthday',
      description: 'FEC25RD'
    },
    {
      name: 'Flower Cake Model - VIII',
      category: 'birthday',
      description: 'FEC27RD'
    },
    {
      name: 'Flower Cake Model - IX',
      category: 'birthday',
      description: 'FEC29RD'
    },
    {
      name: 'Flower Cake Model - X',
      category: 'birthday',
      description: 'FEC31RD'
    },
    {
      name: 'Flower Cake Model - XI',
      category: 'birthday',
      description: 'FEC33RD'
    },
    {
      name: 'Flower Cake Model - XII',
      category: 'birthday',
      description: 'FEC35HT'
    },
    {
    name: 'Flower Cake Model - XIII',
    category: 'birthday',
    description: 'FEC37CY'
    },
    {
      name: 'Flower Cake Model - XIV',
      category: 'birthday',
      description: 'FEC39CY'
    },
    {
      name: 'Flower Cake Model - XV',
      category: 'birthday',
      description: 'FEC41CY'
    },
    {
      name: 'Flower Cake Model - XVI',
      category: 'birthday',
      description: 'FEC43CY'
    }, 
   
    {
      name: 'Wedding Cake Model - I',
      category: 'wedding',
      description: 'FEC31WE'
    },
    {
      name: 'Wedding Cake Model - II',
      category: 'wedding',
      description: 'FEC32WE'
    },
    {
      name: 'Wedding Cake Model - III',
      category: 'wedding',
      description: 'FEC33WE'
    },
    {
      name: 'Wedding Cake Model - IV',
      category: 'wedding',
      description: 'FEC34WE'
    },
    {
      name: 'Wedding Cake Model - V',
      category: 'wedding',
      description: 'FEC35WE'
    },
    {
      name: 'Wedding Cake Model - VI',
      category: 'wedding',
      description: 'FEC21WE'
    },
    {
      name: 'Wedding Cake Model - VII',
      category: 'wedding',
      description: 'FEC22WE'
    },
    {
      name: 'Wedding Cake Model - VIII',
      category: 'wedding',
      description: 'FEC23WE'
    },
    {
      name: 'Wedding Cake Model - IX',
      category: 'wedding',
      description: 'FEC24WE'
    },
    {
      name: 'Wedding Cake Model - X',
      category: 'wedding',
      description: 'FEC25WE'
    },
    {
      name: 'Wedding Cake Model - XI',
      category: 'wedding',
      description: 'FEC26WE'
    },
    {
      name: 'Wedding Cake Model - XII',
      category: 'wedding',
      description: 'FEC27WE'
    },
    // theme ends
    {
      name: 'Please click on provided button to get the color theme code',
      category: 'theme-code',
      description: 'CCT-982'
    },
    {
      name: 'Please click on provided button to get the color theme code',
      category: 'theme-code',
      description: 'CCT-964'
    },
    {
      name: 'Please click on provided button to get the color theme code',
      category: 'theme-code',
      description: 'CCT-946'
    },
    {
      name: 'Please click on provided button to get the color theme code',
      category: 'theme-code',
      description: 'CCT-928'
    },
    {
      name: 'Please click on provided button to get the color theme code',
      category: 'theme-code',
      description: 'CCT-919'
    },
    {
      name: 'Please click on provided button to get the color theme code',
      category: 'theme-code',
      description: 'CCT-312'
    },
    {
      name: 'Please click on provided button to get the color theme code',
      category: 'theme-code',
      description: 'CCT-324'
    },
    {
      name: 'Please click on provided button to get the color theme code',
      category: 'theme-code',
      description: 'CCT-336'
    },
    {
      name: 'Please click on provided button to get the color theme code',
      category: 'theme-code',
      description: 'CCT-348'
    },
    {
      name: 'Please click on provided button to get the color theme code',
      category: 'theme-code',
      description: 'CCT-351'
    },
    {
      name: 'Please click on provided button to get the color theme code',
      category: 'theme-code',
      description: 'CCT-372'
    },
    {
      name: 'Please click on provided button to get the color theme code',
      category: 'theme-code',
      description: 'CCT-384'
    },
    {
      name: 'Please click on provided button to get the color theme code',
      category: 'theme-code',
      description: 'CCT-392'
    },
    {
      name: 'Please click on provided button to get the color theme code',
      category: 'theme-code',
      description: 'CCT-413'
    },
    {
      name: 'Please click on provided button to get the color theme code',
      category: 'theme-code',
      description: 'CCT-425'
    },
    {
      name: 'Please click on provided button to get the color theme code',
      category: 'theme-code',
      description: 'CCT-437'
    },
    {
      name: 'Please click on provided button to get the color theme code',
      category: 'theme-code',
      description: 'CCT-449'
    },
    {
      name: 'Please click on provided button to get the color theme code',
      category: 'theme-code',
      description: 'CCT-451'
    },
    {
      name: 'Please click on provided button to get the color theme code',
      category: 'theme-code',
      description: 'CCT-471'
    },
    {
      name: 'Please click on provided button to get the color theme code',
      category: 'theme-code',
      description: 'CCT-483'
    },
    {
      name: 'Please click on provided button to get the color theme code',
      category: 'theme-code',
      description: 'CCT-495'
    },
    {
      name: 'Please click on provided button to get the color theme code',
      category: 'theme-code',
      description: 'CCT-517'
    },
    {
      name: 'Please click on provided button to get the color theme code',
      category: 'theme-code',
      description: 'CCT-528'
    },
    {
      name: 'Please click on provided button to get the color theme code',
      category: 'theme-code',
      description: 'CCT-531'
    },
    {
      name: 'Please click on provided button to get the color theme code',
      category: 'theme-code',
      description: 'CCT-537'
    },
    {
      name: 'Please click on provided button to get the color theme code',
      category: 'theme-code',
      description: 'CCT-543'
    },
    {
      name: 'Please click on provided button to get the color theme code',
      category: 'theme-code',
      description: 'CCT-548'
    }

  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);
  console.log(currentPhotos);
  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen); //setIsModalOpen(true);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <div className="flex-row justify-space-around pb-3">

        {currentPhotos.map((image, i) => (
          <img  
            src={require(`../../assets/small/${category}/${i}.png`)}
            alt={image.name}
            className="img-thumbnail mx-1 mb-4 border-photo-small"
            onClick={() => toggleModal(image, i)}
            key={image.description}
          />
        ))}       

      </div>

    </div>
  );
};

 
export default PhotoList;
