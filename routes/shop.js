let express = require("express");
let path = require("path");
let router = express.Router();
let routeDir = require("../util/path");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(routeDir, "views", "shop.html"));
});

module.exports = router;
