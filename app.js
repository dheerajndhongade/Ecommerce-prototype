let adminRoute = require("./routes/admin");
let shopRoute = require("./routes/shop");

let express = require("express");
let bodyParser = require("body-parser");
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoute);
app.use(shopRoute);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3000, () => {
  console.log("server running at port 3000");
});
