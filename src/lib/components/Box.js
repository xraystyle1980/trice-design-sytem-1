import React from 'react';

  
const Box = (props) => {  
  return (
    <div style={{
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'start'
      }}>
      <label>{props.boxlabel}</label>
      <br />
    <input type='text' className='box' placeholder={props.boxcontent}
      style={{
        background: '#fafafa',
        color: 'black',
        display: 'inline-flex',
        width: '100%',
        minHeight: '3rem',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem 4rem',
        borderRadius: '1rem',
        border: '4px solid black',
        fontSize: '2rem',
        cursor: 'pointer'
      }}
    />	
    </div>
  )
}

export default Box;