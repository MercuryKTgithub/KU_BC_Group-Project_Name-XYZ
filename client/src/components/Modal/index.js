import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
  const { name, description, category, index } = currentPhoto; // destructured

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h4 className="modalTitle" style={{ 'fontFamily': 'Fahkwang', fontSize : 22, fontWeight: 400, 'margin': '0 0 1 0','color': 'var(--light)'}}>{name} </h4>
        <img className="embraced"
          src={require(`../../assets/large/${category}/${index}.jpg`)}
          alt="current category"
        />
        <p style={{ 'fontFamily': 'Fahkwang', fontSize : 18, fontWeight: 400, 'margin': 0,'color': 'var(--light)'}} > Theme Code: {description}</p>
        <button type="button" onClick={onClose} className="btn m-2">
          Close Photo
        </button>
      </div>
    </div>
  );
};

export default Modal;
