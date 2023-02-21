const express = require("express");
// creates an instance of an express aplication
const app = express();
const port = 3000;

// sets a route to /
app.get("/", (req, res) => res.send("hello world!"));

app.get("/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "hammer",
    },
    {
      id: 2,
      name: "screwdriver",
    },
    {
      id: 3,
      name: "wrench",
    },
  ];
  res.json(products);
});

// starts application by listening to incoming requests
app.listen(port, () => console.log(`express app listening on port ${port}!`));
