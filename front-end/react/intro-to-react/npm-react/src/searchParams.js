import React, { useState } from "react";
import useDropdown from "./useDropdown";

const animals = ["dog", "cat", "bird", "hamster", "chicken"];
const breeds = [];

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, AnimalDropdown] = useDropdown("animal", 'dog', animals);
  const [breed, BreedDropdown] = useDropdown('breed', '', breeds);

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
        <AnimalDropdown />
        <BreedDropdown /> 
      </form>
    </div>
  );
};

export default SearchParams;
