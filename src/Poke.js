import React from 'react';
import styled from 'styled-components';

import Vanilla from './sets/PokeVanilla.js';
import Medium from './sets/PokeMedium.js';

function Poke(props) {
  if(props.set == "vanilla"){
    return (
      <Vanilla type={props.type} text={props.text}/>
    );
  } else if(props.set == "medium"){
    return (
      <Medium type={props.type} text={props.text}/>
    );
  }
}

export default Poke