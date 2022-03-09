const favService = require("../services/fav.service");

const getFav = async (req, res) => {
  const userId = req.user.id;

  //get fav items
  const fav = await favService.getFav(userId);
  res.json({ items: fav });
};

const addItem = async (req, res) => {
  const fav_id = req.user.fav_id;
  const fav = await favService.addItem({ ...req.body, fav_id });
  res.status(200).json({ data: fav });
};

const deleteItem = async (req, res) => {
  const { product_id } = req.body;
  const fav_id = req.user.fav_id;

  const data = await favService.removeItem({ fav_id, product_id });
  res.status(200).json(data);
};

module.exports = {
  getFav,
  addItem,
  deleteItem,
};
