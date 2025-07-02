console.log("I Love My Country");
const fs = require("fs");
fs.writeFile("Output.txt", "writting files", (err) => {
  if (err) console.log("Error Occured");
  else console.log("File write succesfuly");
});
