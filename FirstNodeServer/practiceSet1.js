const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.headers, req.method);

  if (req.url === "/home") {
    res.write("<h1>welcome to home</h1>");
    res.end();
  } else if (req.url === "/mens") {
    res.write("<h1>welcome to mens</h1>");
    res.end();
  } else if (req.url === "/womens") {
    res.write("<h1>welcome to womens</h1>");
    res.end();
  } else if (req.url === "/kids") {
    res.write("<h1>welcome to kids</h1>");
    res.end();
  } else if (req.url === "/cart") {
    res.write("<h1>welcome to cart</h1>");
    res.end();
  }

  res.write(`
    <html lang="en">
<head>
  <title>practice set</title>
</head>
<body>
  <ul><li><a href="home">Home</a></li>
    <li><a href="mens">Men</a></li>
      <li><a href="womens">Womens</a></li>
        <li><a href="kids">Kids</a></li>
          <li><a href="cart">cart</a></li>
          </ul>
          
</body>
</html>
    `);
  res.end();
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Serever running on address http://localhost:${PORT}`);
});
