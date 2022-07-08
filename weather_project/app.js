const { default: axios } = require("axios");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", async (req, res) => {
  const cityname = req.body.cityName;
  const apikey = "API KEy";
  const unit = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityname +
    "&units=" +
    unit +
    "&appid=" +
    apikey;
  console.log(url);
  axios
    .get(url)
    .then((response) => {
      const data = response.data;
      res.write("<p>The weather is " + data.weather[0].description + "</p>");
      res.write(
        "<h1>The temperature in " +
          data.name +
          " is " +
          data.main.temp +
          "</h1>"
      );
      res.write(
        '<img src="http://openweathermap.org/img/wn/' +
          data.weather[0].icon +
          '@2x.png" alt="weather-icon"/>'
      );
      res.write("<a href ='/'>Go Back</a>");
      res.send();
    })
    .catch((e) => res.send(e));
});

app.listen(3000, function () {
  console.log("Server running on http://localhost:3000");
});
