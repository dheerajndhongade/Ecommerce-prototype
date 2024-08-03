let express = require("express");
let router = express.Router();

router.use("/", (req, res, next) => {
  res.send(`<h1>Hello from express</h1>`);
});

module.exports = router;
