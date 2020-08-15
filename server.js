var express = require("express");
var serveStatic = require("serve-static");
var history = require("connect-history-api-fallback");
var path = require("path");

const app = express();
app.use(
  history({
    verbose: true
  })
);

app.use(serveStatic(path.join(__dirname, "/dist")));

var port = process.env.PORT || 8000;
app.listen(port);
console.log("server started " + port);
