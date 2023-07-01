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
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem 4rem',
        borderRadius: '0.65em',
        fontSize: '1.2em',
        cursor: 'pointer'
      }}
    />	
    </div>
  )
}

export default Box;