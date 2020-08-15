var http = require("http");
var express = require("express");
var app = express();
var axios = require("axios");
var cors = require("cors");

const songURL = "https://api.genius.com/search?q=";
const artistURL = "https://api.genius.com/artists/";
const authToken =
  "TGI4Q8hy_mBkD0d0MBH8XFoidCFetnk5f4VsbPUbf_ARDqdS0t5f3r3bM7zfNaMa";

app.use(cors({ origin: "*" }));
app.options("*", cors());

app.get("/", (req, res) => {
  res.json("Home endpoint");
});

app.get("/api", (req, res) => {
  axios
    .get(`${songURL}${req.query.song_info}`, {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
    .then(response => {
      return res
        .send({
          songInfo: {
            authorID: response.data.response.hits[0].result.primary_artist.id,
            songLyricsURL: response.data.response.hits[0].result.url
          }
        })
        .status(200);
    })
    .catch(error => {
      return res.send(error);
    });
});

app.get("/api/artist", (req, res) => {
  axios
    .get(`${artistURL}${req.query.id}`, {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
    .then(response => {
      var desc;
      response.data.response.artist.description.dom.children[0].children.forEach(
        element => {
          if (element.children != null) {
            desc += element.children[0];
            console.log(typeof element.children[0]);
          } else {
            desc += element;
          }
          console.log(element.children);
        }
      );
      const description = desc.replace(/undefined/g, "");
      return res.send({ artistDesc: description });
    })
    .catch(error => {
      return res.send(error);
    });
});

const port = 5000;

var server = http.createServer(app, function(request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello World\n");
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
