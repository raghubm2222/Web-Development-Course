const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/bmi-calculator", (req, res) => {
  res.sendFile(__dirname + "/bmi-calculator.html");
});

app.post("/calculate", (req, res) => {
  const data = req.body;
  const num1 = Number(data.num1);
  const num2 = Number(data.num2);
  console.log(req.body);
  res.send(
    "<h2>The Sum of " + num1 + " and " + num2 + " = " + (num1 + num2) + "</h2>"
  );
});

app.post("/bmi", (req, res) => {
  const data = req.body;
  const height = data.height / 100;
  const weight = data.weight;
  const bmi = weight / (height * height);
  res.send(
    "<div><h2>Yout BMI(Body mass Index) is " +
      bmi +
      "</h2><br><br>" +
      "<h4>Your BMI indicates that your weight is " +
      getHealth(bmi) +
      "</h4></div>"
  );
});

app.listen(3000, () => {
  console.log("Server is running on 3000");
});

function getHealth(bmi) {
  var health = "";
  if (bmi <= 18.5) {
    health = "Under Weight";
  } else if (bmi > 18.5 && bmi <= 24.9) {
    health = "Normal";
  } else if (bmi > 24.9 && bmi <= 29.9) {
    health = "Over Weight";
  } else if (bmi > 29.9 && bmi <= 34.9) {
    health = "Obese";
  } else {
    health = "Extermely Obese";
  }
  return health;
}
