<div align="center">
	<img alt="react-poke" src="http://i.imgur.com/d21NJPt.png" height="170px">
</div>
<br><br><br>


Poke is a component library specifically for buttons, **built on top of [styled-components](https://github.com/styled-components/styled-components).** 

**Brought to you by [Feather](https://feather-cfm.com) and our design community, [Human Friendly](https://uiux.blog).**

## What's Poke?
Poke's aim is to provide designers & front-end developers with an easy-to-use button toolkit.  
  
The ramp for front-end basics is getting shorter to shorter and the team at [Feather](https://feather-cfm.com) thought that an incredibly specific component library would be pretty useful for developers, in the age of [Bootstrap](https://github.com/twbs/bootstrap) and [Foundation](https://github.com/zurb/foundation-sites), where the majority of developers are used to having a highly-usable tool at their fingertips within seconds.

We want to emphasise that Poke is an evolving codebase & completely open design project, please feel free to submit a pull request and contribute your own button sets.

## Usage
You can use Poke via the RawGit CDN: `https://rawgit.com/gregjw/poke/master/poke.css`


```
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
```
  
#### Sets  
  
To specify which set you want to use, just pass along the sets name in the `set` prop.  
You can contribute your own sets, Poke currently has 2 available sets:  
  
`vanilla` - The basic Poke styling  
`medium` - Mimicking the Medium.com button set  
`spotify` - Mimicking the Spotify button set  

#### States
  
Poke relies on you passing an appropriate keyword into the `state` prop.  
These keywords affects what type of button you get from the set:  
   
`primary` - The primary button from the button set  
`secondary` - The secondary button from the button set  
`tertiary` - The tertiary button from the button set   
`warning` - The warning/danger button from the button set  
  
  
## Contributing  
  
**You can easily contribute your own button sets to Poke.**  
  
### Naming  
  
If your button set is called `Example`, please name the file `PokeExample.js`  
Always prepend the name `Poke` to the front of your sets name.  
  
### Structure
  
Follow a similar structure to the example below.  
Once you've finished your button set, put it in the `src` folder and submit a pull request.  
  
```
import React from 'react';
import styled from 'styled-components';

const PrimaryButton = styled.button`
  border: none;  
  background: #2C3979;
  color: white;
  font-size: 1.2em;
  margin: 1em;
  position: relative;
  padding: 0.75em 2em;
  border-radius: 5px;
  transition: .2s;

  &:active{
    transition: .2s;
    box-shadow: inset 0 0px 10px rgba(0,0,0,1);
  }

  &:hover{
    opacity: .9;
  }
`;

const SecondaryButton = styled(PrimaryButton)`
  background: #1F93ED;
  &:hover{
    box-shadow:rgba(0, 0, 0, 0.3) 0 7.5px 7.5px 0;
    -webkit-box-shadow:rgba(0, 0, 0, 0.3) 0 7.5px 7.5px 0;
    -moz-box-shadow:rgba(0, 0, 0, 0.3) 0 7.5px 7.5px 0;
  }

  &:active{
    box-shadow: none;
  } 
`;

const TertiaryButton = styled(PrimaryButton)`
  background: grey;
  opacity: .5;

  &:hover{
    opacity: .3;
  }
`;

const WarningButton = styled(PrimaryButton)`
  transition: .2s;
  background: crimson;
  &:hover{
    transition: .2s;
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
```
  
### Extending  
You can easily customise a current set for your needs by using **styled-components**.  
You can define a new Component and extend a predefined component.  
  
In this example, our predefined component is `PrimaryButton`:  
  
```
const SecondaryButton = styled(PrimaryButton)`
  background: grey;
  opacity: .2;

  &:active{
    transition: .2s;
    box-shadow: inset 0 0px 8px rgba(0,0,0,.75);
  }
`;

```