import React from 'react';
import {render} from 'react-dom';
import Poke from './src/Poke.js';

function App(){
  return (
    <div>
      <Poke set="medium" type="primary" text="Test"/>
    </div>
  );
}

render(
  <App />,
  document.querySelector('#app')
);