const http = require("http");
//const fs = require("fs");
const { RequestHandler } = require("./handler");

const server = http.createServer(RequestHandler);

const PORT = 3006;

server.listen(PORT, () => {
  console.log(`Serever running on address http://localhost:${PORT}`);
});
