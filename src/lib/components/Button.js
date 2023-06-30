import React from 'react';
  
const Button = (props) => {  
  return (
    <button
      className="dribbble-button"
      style={{
        backgroundColor: '#eb4c89',
        color: 'white',
        fontFamily: 'Courier',
        fontSize: '32px',
        border: 'none',
        padding: '16px 32px',
        borderRadius: '8px'
      }}
    >	
      {props.label}
    </button>
  )

}

export default Button;