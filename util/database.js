const mysql = require("mysql");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: "12@Dheeraj",
});
module.exports = pool.promise();
