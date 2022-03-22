// const numbers = [1, 4, 9, 16];

// const numbers2 = numbers.map(function (value) {
//   return value - 2;
// });
// console.log(numbers2);

//COOKIE BUTTON//
const btnCreateCookie = document.getElementById("btnCreateCookie");
btnCreateCookie.addEventListener("click", (event) => (document.cookie = "Rokas=123"));

const app = require("express")();
app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});
app.listen(8080, () => console.log("listening on port 8080"));
