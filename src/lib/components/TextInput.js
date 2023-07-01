import React from 'react';

  
const TextInput = (props) => {  
  return (
    <div style={{
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'start',
      background: 'black',
      padding: '1rem 2rem 2rem',
      margin: '1rem 0 1.5rem 0',
      borderRadius: '0',
      boxShadow: '6px 6px 0px 0px rgba(0, 0, 0, 1),8px 8px 0px 0px rgba(255, 255, 255, 1)',
      border: '4px solid white'
      }}>
      <h6 style={{
        margin: '1.5rem 0 1.35rem 0',
        fontFamily: 'monospace'
        }}>
          {props.TextInputLabel}
      </h6>
      <input type='text' className='box' placeholder={props.boxcontent}
      style={{
        background: 'white',
        color: 'black',
        display: 'inline-flex',
        fontFamily: 'monospace',
        minHeight: '3rem',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem 4rem 2rem 1rem',
        borderRadius: '0',
        border: 'none',
        fontSize: '2rem'
      }}
    />	
    </div>
  )
}

export default TextInput;