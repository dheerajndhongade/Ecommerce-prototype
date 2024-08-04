let adminRoute = require("./routes/admin");
let shopRoute = require("./routes/shop");
let path = require("path");
let contactRoute = require("./routes/contact");
let routeDir = require("./util/path");

let express = require("express");
let bodyParser = require("body-parser");
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoute);
app.use(shopRoute);
app.use(contactRoute);

app.use((req, res, next) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, "views", "Page-not-found.html"));
});

app.listen(3000, () => {
  console.log("server running at port 3000");
});
