const { sumRequestHandler } = require("./sum");

const RequestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/" && req.method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
<html lang="en">
<head>
  <title>practice set2</title>
</head>
<body>
  <h1>Wel-come to Home page</h1>
  <a href="/calculator">Go To Calculator</a>
</body>
</html>
    `);
    return res.end();
  } else if (
    (req.url === "/calculator" || req.url === "/calculator/") &&
    req.method === "GET"
  ) {
    res.setHeader("Content-Type", "text/html");
    res.write(`
<html>
<head>
  <title>practice set2</title>
</head>
<body>
  <h1>Calculator</h1>
  <form action="/calculator-result" method="POST">
    <input type="text" name="first" placeholder="Enter first Num">
    <input type="text" name="second" placeholder="Enter second Num">
    <input type="submit" value="Sum">
  </form>
</body>
</html>
    `);
    return res.end();
  } else if (
    req.url.toLowerCase() === "/calculator-result" &&
    req.method === "POST"
  ) {
    return sumRequestHandler(req, res);
  }

  res.setHeader("Content-Type", "text/html");
  res.write(`
  <html lang="en">
  <head>
    <title>practice set2</title>
  </head>
  <body>
    <h1>404 Page Does not Exist</h1>
    <a href="/">Go To Home</a>
  </body>
  </html>
    `);
  return res.end();
};

exports.RequestHandler = RequestHandler;
