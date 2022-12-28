const http = require("http");
const fs = require("fs");
const path = require("path");

// PORT = process.env.PORT ?? 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(
      path.join(__dirname, "public", "index.html"),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    );
  }
  /*

  if (req.url !== "/") {
    const file = path.join(__dirname, "public", req.url);
    const extention = path.extname(file);
    console.log(extention);
    let type;
    switch (extention) {
      case extention === ".html":
        type = "text/html";
      case extention === ".jpg":
        type = "image/jpeg";
    }
    fs.readFile(path.join(__dirname, "public", req.url), (err, content) => {
      res.writeHead(200, { "Content-Type": type });
    });
  }
  */
});

server.listen(8080, () => {
  console.log("Server is running on port http://localhost:8080");
});
