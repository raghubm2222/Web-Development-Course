const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(
    "<div><h1>Main Page</h1><p>New Method</p><button>Submit</button></div>"
  );
});

app.get("/contact", (req, res) => {
  res.send("Contact me at: raghu@gmail.com");
});

app.get("/about", (req, res) => res.send("Hello im a Flutter Developer"));

app.get("/hobies", (req, res) => {
  res.send("<ul><li>Code</li><li>Cricket</li></ul>");
});

app.listen(3000, function () {
  console.log("App Listining at http://localhost.3000");
});
