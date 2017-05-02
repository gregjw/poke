import React from 'react';
import {render} from 'react-dom';
import Poke from './src/Poke.js';

function App(){
  return (
    <div>
      <Poke type="basic" bgColor="#000" text="Hello"/>
      <Poke type="pressable" bgColor="#000" text="Hello"/>
      <Poke type="inactive" bgColor="#000" text="Hello"/>
    </div>
  );
}

render(
  <App />,
  document.querySelector('#app')
);