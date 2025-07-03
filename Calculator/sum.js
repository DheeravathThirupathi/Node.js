const sumRequestHandler = (req, res) => {
  console.log("in sum req handler", req.url);
  const body = [];
  req.on("data", (chunk) => {
    console.log(chunk);
    body.push(chunk);
    req.on("end", () => {
      const bodystr = Buffer.concat(body).toString();
      const params = new URLSearchParams(bodystr);
      const bodyObj = Object.fromEntries(params);
      const result = Number(bodyObj.first) + Number(bodyObj.second);
      console.log(result);

      res.setHeader("Content-Type", "text/html");
      res.write(`
  <html lang="en">
  <head>
    <title>practice set2</title>
  </head>
  <body>
    <h1>Your result is ${result}</h1>
  </body>
  </html>
    `);
      return res.end();
    });
  });
  req.on;
};
exports.sumRequestHandler = sumRequestHandler;
