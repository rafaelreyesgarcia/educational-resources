# generating images using react, DALL-E OpenAI and Lexica.art APIs

[source of the tutorial](https://www.freecodecamp.org/news/generate-images-using-react-and-dall-e-api-react-and-openai-api-tutorial/)

## **create react application**

`npx create-react-app my-app`

**vite is an optional way of creating a react app**

### UI components

**text field**        
receive input to query from user

**button**  
triggers API request


## **integrate dall-e 2 API with react application**

[open ai](https://beta.openai.com/)
sign up

add open ai api key to .env file

**install openAI API SDK**

`npm install openai`

import Configuration and OpenAIApi

`import { Configuration, OpenAIApi } from "openai";`

**create configuration variable**

```jsx
const configuration = new Configuration({
  // apiKey: import.meta.env.REACT_APP_API_KEY, original tutorial
  apiKey: process.env.REACT_APP_API_KEY,
});
```

**pass configuration instance to openAIAPI**

```jsx
const openai = new OpenAIApi(configuration);
```

**code generateImage function**

```jsx
const generateImage = async () => {
  await openai.createImage({
    prompt: prompt,
    n: 1,
    size: "512x512",
  });
};
```

`openai.createImage` is used to create an image using a user query

***n*** is the number of images the API will return

***size*** is the size of the image

1024x1024 0.02 per image

512x512 0.018 per image

256x256 0.016 per image

createImage call returns a response that we can store in a variable

`let response = res.data.data[0].url`

`setResult(res.data.data[0].url)`

image link will be stored in the result state

**conditionally render image in the UI**

```jsx
{
  result.length > 0
  ? (
    <img className="result-image" src={result} alt="result" />
  )
  : (
    <></>
  )
}
```

## **getting started with lexica.art**

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



