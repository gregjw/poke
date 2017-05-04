import React from 'react';
import styled from 'styled-components';

const PrimaryButton = styled.button`
  border: none;  
  background: rgb(2, 184, 117);
  color: white;
  font-size: 1em;
  margin: 1em;
  position: relative;
  padding: 0.75em 2em;
  border-radius: 3px;
  transition: .2s;

  &:active{
    transition: .2s;
    box-shadow: inset 0 0px 8px rgba(0,0,0,.75);
  }
`;

const SecondaryButton = styled(PrimaryButton)`
  background: grey;
  opacity: .2;
`;

const WarningButton = styled(PrimaryButton)`
  transition: .2s;

  &:hover{
    transition: .2s;
    box-shadow: 0 0px 10px rgba(0,0,0,.75);
  }
`;

const DisabledButton = styled(PrimaryButton)`
  background: grey;
  opacity: .2;
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
  } else if(props.type == "warning") {
    return (
      <WarningButton>
        {props.text}
      </WarningButton>
    ); 
  } else if(props.type == "disabled") {
    return (
      <DisabledButton>
        {props.text}
      </DisabledButton>
    ); 
  }
}

export default Button