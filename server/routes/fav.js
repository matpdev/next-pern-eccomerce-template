const router = require("express").Router();
const verifyToken = require("../middleware/verifyToken");
const {
  getFav,
  addItemToFav,
  deleteItemFromFav,
} = require("../controllers/fav.controller");

router.use(verifyToken);
//get fav items
router.route("/").get(getFav);
//add fav item
router.route("/add").post(addItemToFav);
//delete fav item
router.route("/delete").delete(deleteItemFromFav);

module.exports = router;
