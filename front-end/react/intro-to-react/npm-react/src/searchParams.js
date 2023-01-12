import React, { useState, useEffect } from "react";
import useDropdown from "./useDropdown";
import pet, { ANIMALS } from '@frontendmasters/pet';

const breeds = [];

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("animal", 'dog', ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown('breed', '', breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals( {
      location,
      breed,
      type: animal
    });

    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed('');

    pet.breeds(animal).then(({breeds}) => {
      const breedStrings = breeds.map(({name}) => name);
      setBreeds(breedStrings);
    }, console.error);
  }, [animal, setBreed, setBreeds]);

  return (
    <div>
      <h1>{location}</h1>
      <form className="search-params" onSubmit={(e) => {
        e.preventDefault();
        requestPets();
      }}>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown /> 
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
