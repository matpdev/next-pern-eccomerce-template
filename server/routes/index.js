const router = require("express").Router();
const cart = require("./cart");
const fav = require("./fav");
const order = require("./order");
const product = require("./product");
const users = require("./users");
const auth = require("./auth");
const payment = require("./payment");
const swaggerUi = require("swagger-ui-express");
const docs = require("../docs");

router.use("/auth", auth);
router.use("/users", users);
router.use("/products", product);
router.use("/orders", order);
router.use("/cart", cart);
router.use("/fav", fav);
router.use("/payment", payment);
router.use("/docs", swaggerUi.serve, swaggerUi.setup(docs));

module.exports = router;
