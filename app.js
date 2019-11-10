const express = require("express");
const dotenv = require("dotenv");
const app = express();
const yelp = require("yelp-fusion");

// Environment Variables
dotenv.config({ path: "./config.env" });
const client = yelp.client(process.env.API_KEY);

app.use(express.json());

app.get("/", function(req, res) {
  // res.render("home");
  res.status(200).json({
    status: "Home: success"
  });
});

app.get("/search", function(req, res) {
  // res.render("search");
  console.log("Search page has been activated");

  res.status(200).json({
    status: "Search: success"
  });
});

app.get("/mybobalist", function(req, res) {
  // res.render("bobalist");
  console.log("Bobalist page has been activated");

  res.status(200).json({
    status: "My page: success"
  });
});

app.post("/mybobalist", function(req, res) {});

var port = 3000;
app.listen(port, function() {
  console.log(`App running on port ${port}...`);
});
