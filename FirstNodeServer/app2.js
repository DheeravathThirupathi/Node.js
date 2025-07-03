const http = require("http");
const requestHandler = require("./user2");

const server = http.createServer(requestHandler);

const PORT = 3005;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
