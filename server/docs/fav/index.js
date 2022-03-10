const getFav = require("./getFav");
const addItem = require("./addItem");
const removeItem = require("./removeItem");

module.exports = {
  "/fav": {
    ...getFav,
  },
  "/fav/add": {
    ...addItem,
  },
  "/fav/delete": {
    ...removeItem,
  },
};
