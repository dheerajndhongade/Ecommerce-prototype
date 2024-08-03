let route = require("./routes");

let express = require("express");
let bodyParser = require("body-parser");
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send(
    `<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add</button></form>`
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send(`<h1>Hello from express</h1>`);
});

app.listen(3000, () => {
  console.log("server running at port 3000");
});
