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
import Poke from './src/Poke.js';

function App(){
  return (
    <div>
      <Poke set="vanilla" state="primary" text="Test"/>
      <Poke set="medium" state="primary" text="Test"/>
    </div>
  );
}

render(
  <App />,
  document.querySelector('#app')
);
```

Poke relies on you passing an appropriate keyword into the `state` prop.  
These keywords affects what type of button you get from the set:  
   
`primary` - The primary button from the button set  
`secondary` - The secondary button from the button set  
`warning` - The warning/danger button from the button set  
`disabled` - The inactive/disabled button from the button set  
  
To specify which set you want to use, just pass along the sets name in the `set` prop.  
You can contribute your own sets, Poke currently has 2 available sets:  
  
`vanilla` - The basic Poke styling  
`medium` - Mimicking the Medium.com button set  
  
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
  background: palevioletred;
  color: white;
  font-size: 1em;
  margin: 1em;
  position: relative;
  padding: 0.75em 2em;
  border-radius: 3px;
`;

const PushButton = styled(PrimaryButton)`
  transition: .2s;

  &:active{
    transition: .2s;
    box-shadow: inset 0 0px 8px rgba(0,0,0,.75);
  }
`;

const HoverButton = styled(PrimaryButton)`
  transition: .2s;

  &:hover{
    transition: .2s;
    box-shadow: 0 0px 10px rgba(0,0,0,.75);
  }
`;

const DisabledButton = styled(PrimaryButton)`
  background: grey;
  opacity: .2;
`;

function Button(props) {
  if(props.type == "primary"){
    return (
      <PrimaryButton>
        {props.text}
      </PrimaryButton>
    );
  } else if(props.type == "push") {
    return (
      <PushButton>
        {props.text}
      </PushButton>
    ); 
  }
}

export default Button
```
  
### Extending  
You can easily customise a current set for your needs by using 'styled-components'.  
You can define a new Component and extend a predefined component.  
  
In this example, our predefined component is `PrimaryButton`:  
  
```
const PushButton = styled(PrimaryButton)`
  transition: .2s;

  &:active{
    transition: .2s;
    box-shadow: inset 0 0px 8px rgba(0,0,0,.75);
  }
`;
```