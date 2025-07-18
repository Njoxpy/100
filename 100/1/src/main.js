const fs = require("fs");

fs.readFile("me.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err.message);
    return;
  }

  console.log("File content:", data);
});
