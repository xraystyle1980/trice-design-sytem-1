import React from 'react';
import styled from 'styled-components';

const Buttonbase = styled.button`
background-color: #11e6bf;
color: white;
font-family: Courier;
font-size: 32px;
border: none;
padding: 16px 32px;
border-radius: 8px;
`
  
const Button = (props) => {  
  return (
    <Buttonbase>	
      {props.label}
    </Buttonbase>
  )

}

export default Button;