# prompt engineering 101

## **getting started**

[source of this tutorial](https://buildspace.so/notes/prompt-engineering-101-sd)

[lexica art](https://lexica.art/)  

- search engine for stable diffusion  
- generates SD images right on the site

generate button

- guidance scale to 10
- image size 512x512

example of prompt 

***illustration of jupiter clouds by dan mumford, alien landscape and vegetation, epic scene, a lot of swirling clouds, high exposure, highly detailed, fantastical, vibrant red tinted colors, uhd***

***illustration***  
style choice 

***jupiter clouds***    
image subject

***dan mumford***  
artist inspiration

***alien landscape and vegetation***  
more descriptions about the image

rest of the prompt are details on fine tuning the image.

***uhd***   
ultra hd

## stable difusion

**installs react router**

npm install react-router-dom@6 

**import BrowserRouter from react-router-dom to index.js**

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <App /> }>
        <Route index element={ <ComponentA /> } />
        <Route path='/stableDiffusion' element={ <ComponentB /> }/>
      </Route>
    </Routes>
  </BrowserRouter>
)
```

App serves as the home page that acts as a parent route for the two pages to render (componentA and componentB).

ComponentA will have index attribute to define it as the component to render once app renders.

**path** set to backwardslash / defines the default route to render.

**element** attribute must point to the component to render




