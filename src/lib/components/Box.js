import React from 'react';

  
const Box = (props) => {  
  return (
    <div style={{
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'start',
      background: 'rgba(0,0,0,0.3)',
      padding: '1rem 2rem 2rem',
      margin: '1rem 0 1.5rem 0',
      borderRadius: '1.65rem'
      }}>
      <h6 style={{
        margin: '1.5rem 0 1.35rem 0'
        }}>
          {props.boxlabel}
      </h6>
      <input type='text' className='box' placeholder={props.boxcontent}
      style={{
        background: '#fafafa',
        color: 'black',
        display: 'inline-flex',
        
        minHeight: '3rem',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem 4rem 2rem 1rem',
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