# Learned the use of readfile

- Make you handle errors well.

```js
const fs = require("fs");
fs.readFile("me.txt", "utf8", (err, data) => {
  if (err) {
    return console.error(err.message);
  }

  console.log(data);
});

// break things
```