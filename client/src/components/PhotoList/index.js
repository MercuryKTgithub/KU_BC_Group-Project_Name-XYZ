import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'Flower Cake Model - I',
      category: 'birthday',
      description: 'FEC1110'
    },
    {
      name: 'Flower Cake Model - II',
      category: 'birthday',
      description: 'FEC2120'
    },
    {
      name: 'Flower Cake Model - III',
      category: 'birthday',
      description: 'FEC3131'
    },
    {
      name: 'Flower Cake Model - IV',
      category: 'birthday',
      description: 'FEC4140'
    },
    {
      name: 'Flower Cake Model - V',
      category: 'birthday',
      description: 'FEC5150'
    },
    {
      name: 'Flower Cake Model - VI',
      category: 'birthday',
      description: 'FEC7170'
    },
    {
      name: 'Flower Cake Model - VII',
      category: 'birthday',
      description: 'FEC8180'
    },
    {
      name: 'Flower Cake Model - VIII',
      category: 'birthday',
      description: 'FEC9190'
    },
    {
      name: 'Wedding Cake Model - I',
      category: 'wedding',
      description: 'FEC11WE'
    },
    {
      name: 'Wedding Cake Model - II',
      category: 'wedding',
      description: 'FEC22WE'
    },
    {
      name: 'Wedding Cake Model - III',
      category: 'wedding',
      description: 'FEC33WE'
    },
    {
      name: 'Wedding Cake Model - IV',
      category: 'wedding',
      description: 'FEC44WE'
    },
    // theme ends
    {
      name: 'Please click on provided  button to get the color theme code',
      category: 'theme-code',
      description: 'CCT-982'
    },
    {
      name: 'Please click on provided  button to get the color theme code',
      category: 'theme-code',
      description: 'CCT-964'
    },
    {
      name: 'Please click on provided  button to get the color theme code',
      category: 'theme-code',
      description: 'CCT-946'
    },
    {
      name: 'Please click on provided  button to get the color theme code',
      category: 'theme-code',
      description: 'CCT-928'
    },
    {
      name: 'Please click on provided  button to get the color theme code',
      category: 'theme-code',
      description: 'CCT-919'
    },
    {
      name: 'Please click on provided  button to get the color theme code',
      category: 'theme-code',
      description: 'CCT-312'
    },
    {
      name: 'Please click on provided  button to get the color theme code',
      category: 'theme-code',
      description: 'CCT-324'
    },
    {
      name: 'Please click on provide  button to get the color theme code',
      category: 'theme-code',
      description: 'CCT-336'
    },
    {
      name: 'Please click on provided  button to get the color theme code',
      category: 'theme-code',
      description: 'CCT-428'
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
            src={require(`../../assets/small/${category}/${i}.jpg`)}
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
