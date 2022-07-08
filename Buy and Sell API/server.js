const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//imprt the producs from data.js
const products = require("./data");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send('<h2 style="text-Align:"center"">Welcome to Buy and Sell API');
});

app.get("/products", (req, res) => {
  const id = req.query.id;
  const maxprice = Boolean(req.query.maxprice);
  if (id !== undefined) {
    const product = products.find((p) => p.procductid == id);
    if (product == undefined) {
      res.statusCode = 404;
      res.statusMessage = "Product not found";
      res.send("Product not found");
    } else {
      res.send(product);
    }
  } else if (maxprice === true) {
    const product = products.reduce((acc, curr) => {
      return acc.price > curr.price ? acc : curr;
    }, {});
    res.send(product);
  } else {
    res.send(products);
  }
});

app.post("/add-product", (req, res) => {
  console.log("Product length before: " + products.length);
  const data = req.body;
  products.push({
    procductid: products.length + 1,
    ...data,
  });
  res.statusCode = 201;
  res.statusMessage = "Product Added";
  console.log("Product length after: " + products.length);
  res.send(products[products.length - 1]);
});

app.delete("/delete", (req, res) => {
  const id = req.query.id;
  if (id === undefined) {
    res.statusCode = 400;
    res.statusMessage = "Bad Request";
    res.send("Bad Request");
  } else {
    const product = products.find((p) => p.procductid == id);
    if (product == undefined) {
      res.statusCode = 404;
      res.statusMessage = "Product not found";
      res.send("Product not found");
    } else {
      products.splice(products.indexOf(product), 1);
      res.send(products);
    }
  }
});

app.listen(8080, function () {
  console.log("Server Listing on Port http://localhost:8080");
});
