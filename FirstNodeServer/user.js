const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // Serve form page
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html lang="en">
<head>
  <title>Document</title>
</head>
<body>
  <h1>Enter your Details</h1>
  <form action="/submit-details" method='POST'>
    <input type="text" name="username" placeholder="Enter your Name"><br>
    <label for="male">Male</label>
    <input type="radio" id="male" name="gender" value="male"><br>
    <label for="female">Female</label>
    <input type="radio" id="female" name="gender" value="female"><br>
    <input type="submit" value="Submit">
  </form>
</body>
</html>
    `);
    return res.end();
  }

  // Handle form submission
  else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method === "POST"
  ) {
    const body = [];

    // ✅ Listen for data chunks
    req.on("data", (chunk) => {
      console.log("Chunk received:", chunk); // Show raw chunk (Buffer)
      console.log("As string:", chunk.toString()); // Show readable string
      body.push(chunk); // Save chunk
    });

    // ✅ When all data is received
    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString(); // Combine all chunks into 1 string
      console.log("Full body:", fullBody); // See full form data

      // ✅ Parse URL-encoded form data
      const parsed = new URLSearchParams(fullBody);
      const username = parsed.get("username");
      const gender = parsed.get("gender");

      // ✅ Save to file
      fs.writeFileSync(
        "user-txt.txt",
        `Username: ${username}, Gender: ${gender}`
      );

      // Redirect back to home
      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
    });

    return; // Prevent further code execution
  }

  // Default response
  res.setHeader("Content-Type", "text/html");
  res.write("<html><head><title>Fallback</title></head>");
  res.write("<body><h1>Hello Everyone</h1></body></html>");
  return res.end();
});

const PORT = 3004;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
