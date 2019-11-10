const yelp = require("yelp-fusion");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const client = yelp.client(process.env.API_KEY);

exports.getHome = async (req, res, next) => {
  console.log("Home page: activated!");
  res.status(200).json({
    status: "Home page: success"
  });
};

exports.getBobaShop = async (req, res, next) => {
  try {
    console.log("Search Page: activated!");
    const result = await client.search({
      term: "boba",
      longitude: req.query.longitude,
      latitude: req.query.latitude,
      open: true
    });

    var boba_shop =
      result.jsonBody.businesses[
        Math.floor(Math.random() * result.jsonBody.businesses.length)
      ];

    var boba_shop_data = {
      name: boba_shop.name,
      rating: boba_shop.rating,
      price: boba_shop.price, // given in meters
      distance: (boba_shop.distance * 0.000621371).toFixed(2),
      address: boba_shop.location.address1,
      phone: boba_shop.phone,
      picture: boba_shop.picture,
      yelp: boba_shop.url
    };

    res.status(200).json({
      boba_shop_data
    });
  } catch (err) {
    res.status(404).json({
      status: "ERROR",
      message: err
    });
  }
};

exports.getMyBobaList = async (req, res, next) => {
  console.log("Bobalist page has been activated");
  res.status(200).json({
    status: "My page: success"
  });
};

exports.postBoba = async (req, ers, next) => {};
