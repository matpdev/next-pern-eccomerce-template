const router = require("express").Router();
const verifyToken = require("../middleware/verifyToken");
const {
  getFav,
  addItem,
  deleteItem,
} = require("../controllers/fav.controller");

router.use(verifyToken);
//get fav items
router.route("/").get(getFav);
//add fav item
router.route("/add").post(addItem);
//delete fav item
router.route("/delete").delete(deleteItem);

module.exports = router;
