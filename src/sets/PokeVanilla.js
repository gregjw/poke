import React from 'react';
import styled from 'styled-components';

const PrimaryButton = styled.button`
  border: none;  
  background: #2C3979;
  color: white;
  font-size: 1.2em;
  margin: 1em;
  position: relative;
  padding: 0.75em 2em;
  border-radius: 5px;
  transition: .2s;

  &:active{
    transition: .2s;
    box-shadow: inset 0 0px 10px rgba(0,0,0,1);
  }

  &:hover{
    opacity: .9;
  }
`;

const SecondaryButton = styled(PrimaryButton)`
  background: #1F93ED;
  &:hover{
    box-shadow:rgba(0, 0, 0, 0.3) 0 7.5px 7.5px 0;
    -webkit-box-shadow:rgba(0, 0, 0, 0.3) 0 7.5px 7.5px 0;
    -moz-box-shadow:rgba(0, 0, 0, 0.3) 0 7.5px 7.5px 0;
  }

  &:active{
    box-shadow: none;
  } 
`;

const TertiaryButton = styled(PrimaryButton)`
  background: grey;
  opacity: .5;

  &:hover{
    opacity: .3;
  }
`;

const WarningButton = styled(PrimaryButton)`
  transition: .2s;
  background: crimson;
  &:hover{
    transition: .2s;
  }
`;

function Button(props) {
  if(props.type == "primary"){
    return (
      <PrimaryButton>
        {props.text}
      </PrimaryButton>
    );
  } else if(props.type == "secondary") {
    return (
      <SecondaryButton>
        {props.text}
      </SecondaryButton>
    ); 
  } else if(props.type == "tertiary") {
    return (
      <TertiaryButton>
        {props.text}
      </TertiaryButton>
    ); 
  } else if(props.type == "warning") {
    return (
      <WarningButton>
        {props.text}
      </WarningButton>
    ); 
  }
}

export default Button