let route = require("./routes");

let express = require("express");
let app = express();

app.use((req, res, next) => {
  console.log("In the middleware");
  next();
});
app.use((req, res, next) => {
  console.log("In another middleware");
  res.send(`<h1>Hello from express</h1>`);
});

app.listen(3000, () => {
  console.log("server running at port 3000");
});
