import React from 'react';
import styled from 'styled-components';

const PrimaryButton = styled.button`
  border: none;
  text-transform: uppercase;
  background: #1ED760;
  color: white;
  font-size: 1em;
  margin: 1em;
  position: relative;
  padding: 0.75em 3em;
  border-radius: 55px;
  transition: .2s;
  opacity: .9;

  &:hover{
    opacity: 1;
    transition: .2s;
    padding: 0.85em 3.1em;
  }
`;

const SecondaryButton = styled(PrimaryButton)`
  background: transparent;
  border: 2px solid #1ED760;
  color: #1ED760;
`;

const TertiaryButton = styled(PrimaryButton)`
  background: #202020;
  border: 2px solid #EEE;
  color: #FFF;
  transition: .2s;
`;

const WarningButton = styled(PrimaryButton)`
  background: #EB182C;
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