import React from 'react';
  
const Button = (props) => {  
  return (
    <button
    className="dribbble-button"
    style={{
      backgroundColor: 'black',
      color: 'white',
      fontFamily: 'monospace',
      fontSize: '2.4rem',
      border: '4px solid white',
      padding: '1.65rem 3.85rem',
      borderRadius: '0px',
      boxShadow: '6px 6px 0px 0px rgba(0, 0, 0, 1),8px 8px 0px 0px rgba(255, 255, 255, 1)'
    }}
    >    
    {props.label}
    </button>
  )
}

export default Button;