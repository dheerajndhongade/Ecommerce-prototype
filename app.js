let http = require("http");
let server = http.createServer((req, res) => {
  console.log("Dheeraj N Dhongade");
  res.setHeader("Content-type", "text/html");
  if (req.url === "/home") {
    res.write("<html>");
    res.write("<head><title>Home</title></head>");
    res.write("<body><h1>Welcome home</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/about") {
    res.write("<html>");
    res.write("<head><title>About Us</title></head>");
    res.write("<body><h1>Welcome to About Us page</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/node") {
    res.write("<html>");
    res.write("<head><title>Node.js Project</title></head>");
    res.write("<body><h1>Welcome to my Node Js project</h1></body>");
    res.write("</html>");
    return res.end();
  }
});
server.listen("4000", () => {
  console.log("server running at port 4000");
});
