const express = require("express");
const app = express();

app.use(express.json());

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/search", function(req, res) {
  res.render("search");
  console.log("Search page has been activated");
});

app.get("/mybobalist", function(req, res) {
  res.render("bobalist");
  console.log("Bobalist page has been activated");
});

app.post("/mybobalist", function(req, res) {});

var port = 3000;
app.listen(port, function() {
  //   console.log(`App running on port ${port}...`);
});
