const axios = require("axios");

for (let i = 0; i < 1000; i++) {
  axios
    .get("http://localhost:8080/products")
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
