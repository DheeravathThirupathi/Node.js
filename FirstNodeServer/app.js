// const http = require("http");
// function requestListener(req, res) {
//   console.log(req);
// }
// http.createServer(requestListener);

//or
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<header><title>thirupathi</title></header>");
    res.write("<body><h1> Welcome to home </h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<header><title>thirupathi</title></header>");
    res.write("<body><h1> welcome to products</h1></body>");
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<header><title>thirupathi</title></header>");
  res.write("<body><h1> Hello Every One </h1></body>");
  res.write("</html>");
  return res.end();
});
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Serever running on address http://localhost:${PORT}`);
});
