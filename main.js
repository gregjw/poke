import React from 'react';
import {render} from 'react-dom';
import Poke from './Poke.js';

render(
  <Poke type="basic" text="Hello"/>,
  document.querySelector('#app')
);