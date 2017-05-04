import React from 'react';
import {render} from 'react-dom';
import Poke from './Poke.js';

function App(){
  return (
    <div>
      <Poke set="vanilla" type="primary" text="Test"/>
      <Poke set="vanilla" type="secondary" text="Test"/>
      <Poke set="vanilla" type="tertiary" text="Test"/>
      <Poke set="vanilla" type="warning" text="Test"/>
    </div>
  );
}

render(
  <App />,
  document.querySelector('#app')
);