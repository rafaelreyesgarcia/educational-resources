const http = require("http");
const url = require("url");
const itemsJson = require("./items.json");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );

    console.log("request.method", req.method);

    let parsed = url.parse(req.url, true);

    console.log(parsed);

    if (req.method === "GET") {
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 200;
      res.write(JSON.stringify(itemsJson));
      res.end();
      console.log("GET returned:", itemsJson);
    }

    if (req.method === "PUT") {
      let newItemName = parsed.query.newItemName;
      let newItemPrice = parsed.query.newItemPrice;

      if (!newItemName) {
        console.log("PUT: newItemName is invalid");
        res.statusCode = 404;
        res.end();
        return;
      }

      if (!newItemPrice) {
        console.log("PUT: newItemPrice is invalid");
        res.statusCode = 404;
        res.end();
        return;
      }

      let newId = new Date(Date.now()).toISOString();

      itemsJson.push({
        id: newId,
        name: newItemName,
        price: newItemPrice,
      });
    }

    if (req.method === "POST") {
      let itemId = parsed.query.id;

      switch (parsed.pathname) {
        case "/updateName":
          let newItemName = parsed.query.newItemName;

          if (!newItemName) {
            console.log("POST: newItemName is invalid");
            res.statusCode = 404;
            res.end();
            return;
          }

          var jsonIndex = itemsJson.findIndex((item) => item.id === itemId);

          if (jsonIndex >= 0) {
            itemsJson[jsonIndex].name = newItemName;
            res.statusCode = 200;
          } else {
            res.statusCode = 404;
          }

          res.end();

          break;

        case "/updatePrice":
          let newPrice = parsed.query.newPrice;

          if (!newPrice) {
            console.log("POST: newPrice is invalid");
            res.statusCode = 404;
            res.end();
            return;
          }

          var jsonIndex = itemsJson.findIndex((item) => item.id === itemId);

          if (jsonIndex >= 0) {
            itemsJson[jsonIndex].price = newPrice;
            res.statusCode = 200;
          } else {
            res.statusCode = 404;
          }

          res.end();

          break;

        default:
          res.statusCode = 404;
          res.end();

          break;
      }
    }

    if (req.method === "DELETE") {
      // res.statusCode = 501;
      var itemId = parsed.query.id;
      var jsonIndex = itemsJson.findIndex((item) => item.id === itemId);

      if (jsonIndex >= 0) {
        itemsJson.splice(jsonIndex, 1);
        res.statusCode = 202;
      } else {
        res.statusCode = 404;
      }

      res.end();
    }

    if (req.method === "OPTIONS") {
      res.statusCode = 200;
      res.end();
    }
  })
  .listen(3000, () => {
    console.log("server started at port 3000...");
  });
