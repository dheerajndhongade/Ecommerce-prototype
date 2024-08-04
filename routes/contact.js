let express = require("express");
let router = express.Router();
let path = require("path");
let routeDir = require("../util/path");

router.get("/contactus", (req, res, next) => {
  res.sendFile(path.join(routeDir, "views", "contact.html"));
});
module.exports = router;
