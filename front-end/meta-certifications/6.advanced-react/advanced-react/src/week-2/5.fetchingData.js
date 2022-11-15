console.log('another customer approaching');

fetch('https://randomuser.me/api/?results=1')
  .then(response => response.json())
  .then(data => console.log(data));

console.log(`out valued customer, please
  give me a moment while i get some
  information back from the records dept...`);

  