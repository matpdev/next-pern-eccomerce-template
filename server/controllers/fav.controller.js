const favService = require("../services/fav.service");

const getFav = async (req, res) => {
  const userId = req.user.id;

  // get fav items
  const fav = await favService.getFav(userId);
  res.json({ items: fav });
};

// add item to fav
const addItemToFav = async (req, res) => {
  const fav_id = req.user.fav_id;
  const fav = await favService.addItem({ ...req.body, fav_id });
  res.status(200).json({ data: fav });
};

// delete item from fav
const deleteItemFromFav = async (req, res) => {
  const { product_id } = req.body;
  const fav_id = req.user.fav_id;

  const data = await favService.removeItem({ fav_id, product_id });
  res.status(200).json(data);
};

const increaseItemQuantityFav = async (req, res) => {
  const { product_id } = req.body;
  const fav_id = req.user.fav_id;

  const fav = await favService.increaseQuantity({ fav_id, product_id });
  res.json(fav);
};

// decrement item quantity by 1
const decreaseItemQuantityFav = async (req, res) => {
  const { product_id } = req.body;
  const fav_id = req.user.fav_id;

  const fav = await favService.decreaseQuantity({ fav_id, product_id });
  res.json(fav);
};
module.exports = {
  getFav,
  addItemToFav,
  deleteItemFromFav,
  decreaseItemQuantityFav,
  increaseItemQuantityFav
};
