# generating images using react and dall-e 2 API

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
  apiKey: import.meta.env.REACT_APP_API_KEY,
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

