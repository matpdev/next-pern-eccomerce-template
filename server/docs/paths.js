const auth = require("./auth");
const users = require("./users");
const products = require("./products");
const orders = require("./orders");
const cart = require("./cart");
const fav = require("./fav");

module.exports = {
  paths: {
    ...auth,
    ...users,
    ...products,
    ...orders,
    ...cart,
    ...fav
  },
};
