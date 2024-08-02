let http = require("http");
let route = require("./routes");
let server = http.createServer(route);
server.listen("4000", () => {
  console.log("server running at port 4000");
});
