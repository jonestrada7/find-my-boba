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

app.get("/findBoba", async (req, res) => {
  // res.render("search");
  console.log("Search page has been activated");
  try {
    const result = await client.search({
      term: "boba",
      longitude: req.params.longitude,
      latitude: req.params.latitude
    });

    var boba_shop =
      result.jsonBody.businesses[
        Math.floor(Math.random() * result.jsonBody.businesses.length)
      ];

    var boba_shop_data = {
      name: boba_shop.name,
      rating: boba_shop.price,
      price: boba_shop.price, // given in meters
      distance: boba_shop.distance,
      address: boba_shop.address1,
      phone: boba_shop.phone,
      picture: boba_shop.picture
    };
    var boba_shop_JSON = JSON.stringify(boba_shop_data);

    res.status(200).json({
      status: "Search: success",
      data: {
        boba_shop_JSON
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "ERROR",
      message: err
    });
  }
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
