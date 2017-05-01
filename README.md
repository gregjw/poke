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
import Poke from './Poke.js';

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
```

Poke's buttons on you passing an appropriate keyword into the `type` prop.
These keywords affect how the component gets styled by default.  
  
`basic` - The titular Poke button  
`pressable` - The default skeuomorphically pressable button  
`inactive` - The default inactive button  