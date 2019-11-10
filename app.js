const express = require("express");
const dotenv = require("dotenv");
const router = require("./router");
const app = express();
const yelp = require("yelp-fusion");

// Environment Variables
dotenv.config({ path: "./config.env" });

app.use(express.json());

app.use("/", router);

var port = 3000;
app.listen(port, function() {
  console.log(`App running on port ${port}...`);
});
