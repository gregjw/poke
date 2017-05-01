import React from 'react';
import styled from 'styled-components';

const BasicButton = styled.button`
  border: none;  
  background: palevioletred;
  color: white;
  font-size: 1em;
  margin: 1em;
  position: relative;
  padding: 0.75em 2em;
  border-radius: 3px;
`;

const PressableButton = styled(BasicButton)`
  background: white;
  color: palevioletred;
  transition: 0.25s ease;

  &:active{
    box-shadow: inset 0 0px 5px rgba(0,0,0,.75);
  }
`;

function Button(props) {
  if(props.type == "basic"){
    return (
      <BasicButton>
        {props.text}
      </BasicButton>
    );
  } else if(props.type == "pressable") {
    return (
      <PressableButton>
        {props.text}
      </PressableButton>
    ); 
  }
}

export default Button