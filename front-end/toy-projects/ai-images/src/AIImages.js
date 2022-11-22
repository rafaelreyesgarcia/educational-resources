import React from 'react';
import { useState } from 'react';
import { Configuration, OpenAIApi } from "openai";

import './App.css';

function AIImages() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState("");
  const [placeholder, setPlaceholder] = useState(
    `fluorescent interstellar sunset...`
  );

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    console.log(prompt);

    setPlaceholder(`search ${prompt} again?`);
    setLoading(true);

    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "512x512",
    });

    setLoading(false);
    setResult(res.data.data[0].url);
  }

  return (
    <div className='App container'>
      {
        loading 
        ? (
        <>
          <h2>Generating...please wait...</h2>
        </>
      ) : (
        <>
          <h2>generate an image using open AI API</h2>
          <textarea 
            placeholder={placeholder}
            onChange={(e) => setPrompt(e.target.value)}
            rows="10"
            cols="40"
          />
          <button
            onClick={generateImage}
            className='btn'
          >
            generate an image
          </button>
          {result.length > 0 ? (
            <img 
              className='result-image'
              src={result}
              alt='result'
            />
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
}

export default AIImages;
