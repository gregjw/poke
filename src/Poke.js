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
  &:active{
    transition: .2s;
    box-shadow: inset 0 0px 5px rgba(0,0,0,.75);
  }
`;

const InactiveButton = styled(BasicButton)`
  background: grey;
  opacity: .2;
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
  } else if(props.type == "inactive") {
    return (
      <InactiveButton>
        {props.text}
      </InactiveButton>
    );
  }
}

export default Button