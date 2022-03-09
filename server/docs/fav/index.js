const getFav = require("./getFav");
const addItem = require("./addItem");
const removeItem = require("./removeItem");

module.exports = {
  "/cart": {
    ...getFav,
  },
  "/cart/add": {
    ...addItem,
  },
  "/cart/delete": {
    ...removeItem,
  },
};
