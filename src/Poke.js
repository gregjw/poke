import React from 'react';
import styled from 'styled-components';

import Vanilla from './PokeVanilla.js';
import Medium from './PokeMedium.js';
import Spotify from './PokeSpotify.js';

function Poke(props) {
  if(props.set == "vanilla"){
    return (
      <Vanilla type={props.type} text={props.text}/>
    );
  } else if(props.set == "medium"){
    return (
      <Medium type={props.type} text={props.text}/>
    );
  } else if(props.set == "spotify"){
    return (
      <Spotify type={props.type} text={props.text}/>
    );
  }
}

export default Poke