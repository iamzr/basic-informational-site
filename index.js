const http = require("http");
const fs = require("fs").promises;

const port = 8080;

const server = http.createServer((req, res) => {
  let file;
  switch (req.url) {
    case "/":
      file = "./index.html";
      break;

    case "/index":
      file = "./index.html";
      break;

    case "/about":
      file = "./about.html";
      break;

    case "/contact-me":
      file = "./contact-me.html";
      break;

    default:
      file = "./404.html";
      break;
  }

  fs.readFile(file)
    .then((contents) => {
      res.status = 200;
      res.setHeader("Content-type", "text/html");
      res.end(contents);
    })
    .catch((err) => {
      res.setHeader(404);
      res.end(err);
    });
});

server.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
