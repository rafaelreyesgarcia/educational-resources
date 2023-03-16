// array of objects
const cities = [
  {
    name: "New York",
    state: "New York",
    population: 8537673,
    lat: 40.7128,
    long: -74.0060
  },
  {
    name: "Los Angeles",
    state: "California",
    population: 39776830,
    lat: 34.0522,
    long: -118.2437
  },
  // more cities...
];

function searchCities(searchTerm) {
  // Convert search term to lowercase for case-insensitive search
  searchTerm = searchTerm.toLowerCase();

  // Filter cities array to include only cities in the United States
  const usCities = cities.filter(city => city.state !== undefined);

  // Filter usCities array to include only cities that match the search term
  const matchingCities = usCities.filter(city => {
    const cityName = city.name.toLowerCase();
    const stateName = city.state.toLowerCase();
    return cityName.includes(searchTerm) || stateName.includes(searchTerm);
  });

  return matchingCities;
}

console.log(searchCities('los angeles'))