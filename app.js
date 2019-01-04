var http = require("http");
const app = require("./server/index");
var server = http.createServer(function(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello world!");
});
server.listen(process.env.PORT);
