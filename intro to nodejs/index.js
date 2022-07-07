const axios = require("axios");

axios
  .post("http://localhost:3000/calculate", { num1: 10, num2: 20 })
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });
