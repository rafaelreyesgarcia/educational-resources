import React, { useState } from "react";

const animals = ["dog", "cat", "bird", "hamster", "chicken"];

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState('dog');
  const [breed, setBreed] = useState([]);

  return (
    <div>
      <h1>{location}</h1>
      <form className="search-params">
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option>ALL</option>
            {animals.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
            disabled={breed.length === 0}
          >
            <option>ALL</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default SearchParams;
