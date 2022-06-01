import React, { useState} from 'react';

const Modal = ({ onClose, currentPhoto }) => {
  const { name, description, category, index } = currentPhoto; // destructured
//   const [value, copy] = useCopyToClipboard()
  const [buttonText, setButtonText] = useState('');
  let target = '';
// 
//   const inputHandler = event => {
//     setText(event.target.value);
//     alert(event.target.value);
//   }
// 
//   const copyMe = async () => {
//     await navigator.clipboard.writeText(text);
//     alert('Text copied');
//   }
    const handlePreClick = (event) => {
      // alert(event.target.innerText);    // Click Me
      // alert(event.target.tagName);      // BUTTON
      // setButtonText(event.target.value.innerText);
      target = event.target.innerText;
      // alert(target);
      console.log(target);
    }

  return (
    <div className="modalBackdrop">
      <div className="modalContainer" style={{ 'fontFamily': 'Fahkwang'}}>
        <h4 className="modalTitle" style={{ 'fontFamily': 'Fahkwang', fontSize : 22, fontWeight: 400, 'margin': '0 0 10px 0','color': 'var(--light)'}}>
          {name} </h4>
        <img className="embraced"
          src={require(`../../assets/large/${category}/${index}.jpg`)}
          alt="enlarged version of target cake model"
        />
        <div>
          <button type="button" title="Click to Copy to Clipboard &#013;This code can be used as an input to&#013;the order-form's Theme Color Code" className="btn m-2" style={{ 'fontFamily': 'Fahkwang', fontSize : 20, fontWeight: 400}} 
            onMouseOver={handlePreClick} onMouseEnter={handlePreClick} onClick={() => navigator.clipboard.writeText(target.toString())} >
              {description}
          </button>
          <button type="button" onClick={onClose} className="btn m-2">
            Close Photo
          </button>       
        </div>

        {/* <p onMouseDown={handlePreClick} onClick={() => navigator.clipboard.writeText(target.toString())} 
            style={{ 'fontFamily': 'Fahkwang', fontSize : 18, fontWeight: 400, 'margin': 0,'color': 'var(--light)'}} > Theme Code: {description}</p>
        */}
        {/* <button type="button" onClick={onClose} className="btn m-2">
          Close Photo
        </button> */}
      
      </div>
    </div>
  );
};

export default Modal;
