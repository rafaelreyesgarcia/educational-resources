import React from 'react';
import { useState } from 'react';
import './App.css';

function StableDiffusion() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState("");
  const [placeholder, setPlaceholder] = useState(
    `Illustration of jupiter clouds by dan mumford, alien landscape and vegetation, epic scene, a lot of swirling clouds, high exposure, highly detailed, fantastical, vibrant red tinted colors, uhd...`
  );

  const generateImage = async () => {
    // console.log(prompt);

    const lexicaRequest = `https://lexica.art/api/v1/search?q=${prompt}`;

    // console.log(lexicaRequest);

    setPlaceholder(`search ${prompt} again?`);
    setLoading(true);

    const response = await fetch(lexicaRequest)
      .then(response => response.json());
    
    const randomNumber = Math.floor(Math.random() * 50);
    // console.log(randomNumber);

    setResult(response.images[randomNumber].src);
    setLoading(false);

    // console.log(res);
  }

  return (
    <div className='container'>
      {
        loading 
        ? (
        <>
          <h2>Generating...please wait...</h2>
        </>
      ) : (
        <>
          <h2>stable diffusion with lexica.art API</h2>
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

export default StableDiffusion;
