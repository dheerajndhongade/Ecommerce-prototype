let fs = require("fs");

let routeHandler = (req, res) => {
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
  } else if (req.url === "/") {
    fs.readFile("message.txt", (err, data) => {
      res.write("<html>");
      res.write("<head><title>Enter Message</title></head>");
      res.write(
        `<body><p>${data}</p><form action="/message" method="POST"><input type="text" name="message"><button type="submit" >send Message</button></form></body>`
      );
      res.write("</html>");
      return res.end();
    });
  } else if (req.url === "/message" && req.method === "POST") {
    let body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      let parsedData = Buffer.concat(body).toString();
      let message = parsedData.split("=")[1];
      console.log(parsedData);
      fs.writeFileSync("message.txt", message);
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title><head>");
    res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
    res.write("</html>");
    res.end();
  }
};
module.exports = routeHandler;
