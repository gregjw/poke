import React from 'react';
import styled from 'styled-components';

const PrimaryButton = styled.button`
  border: none;  
  background: rgb(2, 184, 117);
  color: white;
  font-size: 1.1em;
  margin: 1em;
  position: relative;
  padding: 0.75em 2em;
  border-radius: 50px;
`;

const SecondaryButton = styled(PrimaryButton)`
  background: transparent;
  border: 1px solid rgb(2, 184, 117);
  color: rgb(2, 184, 117);
`;

const TertiaryButton = styled(PrimaryButton)`
  background: rgb(250, 250, 250);
  border: 1px solid rgb(240, 240, 240);
  color: rgba(0, 0, 0, 0.44);
  border-radius: 3px;
`;

const WarningButton = styled(PrimaryButton)`
  background: transparent;
  border: 1px solid lightgrey;
  color: lightgrey;
  transition: .2s;

  &:hover{
    transition: .2s;
    border: 1px solid grey;
    color: grey;
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