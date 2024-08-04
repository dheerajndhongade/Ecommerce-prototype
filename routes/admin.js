let express = require("express");
let router = express.Router();
let path = require("path");
let routeDir = require("../util/path");

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(routeDir, "views", "add-product.html"));
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
