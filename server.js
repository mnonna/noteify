var express = require("express");
//var serveStatic = require("serve-static");
var history = require("connect-history-api-fallback");
var path = require("path");

const app = express();

const staticFileMiddleware = express.static(path.join(__dirname + "/dist"));

app.use(staticFileMiddleware);
app.use(
  history({
    disableDotRule: true,
    verbose: true
  })
);

app.use(staticFileMiddleware);

app.get("/", function(req, res) {
  res.render(path.join(__dirname + "/dist/index.html"));
});

var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});
