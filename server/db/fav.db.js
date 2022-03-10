const pool = require("../config");

const createFavDb = async (userId) => {
  const { rows: fav } = await pool.query(
    "INSERT INTO fav(user_id) values($1) returning fav.id",
    [userId]
  );

  return fav[0];
};

const getFavDb = async (userId) => {
  // get fav items
  const fav = await pool.query(
    `SELECT products.*, fav_item.quantity, round((products.price * fav_item.quantity)::numeric, 2) as subtotal from users
      join fav on users.user_id = fav.user_id
      join fav_item on fav.id = fav_item.fav_id
      join products on products.product_id = fav_item.product_id
      where users.user_id = $1
      `,
    [userId]
  );

  return fav.rows;
};

//add item to fav
const addItemFavDb = async ({ fav_id, product_id, quantity }) => {
  await pool.query(
    `INSERT INTO fav_item(fav_id, product_id, quantity) 
         VALUES($1, $2, $3) ON CONFLICT (fav_id, product_id) 
        DO UPDATE set quantity = fav_item.quantity + 1 returning *`,
    [fav_id, product_id, quantity]
  );

  const results = await pool.query(
    "Select products.*, fav_item.quantity, round((products.price * fav_item.quantity)::numeric, 2) as subtotal from fav_item join products on fav_item.product_id = products.product_id where fav_item.fav_id = $1",
    [fav_id]
  );

  return results.rows;
};

//delete item from fav
const deleteItemFavDb = async ({ fav_id, product_id }) => {
  const { rows } = await pool.query(
    "delete from fav_item where fav_id = $1 AND product_id = $2 returning *",
    [fav_id, product_id]
  );
  return rows[0];
};

const increaseItemQuantityDbFav = async ({ fav_id, product_id }) => {
  await pool.query(
    "update fav_item set quantity = quantity + 1 where fav_item.fav_id = $1 and fav_item.product_id = $2",
    [fav_id, product_id]
  );

  const results = await pool.query(
    `Select products.*, fav_item.quantity, 
       round((products.price * fav_item.quantity)::numeric, 2) as subtotal
       from fav_item join products 
       on fav_item.product_id = products.product_id 
       where fav_item.fav_id = $1
      `,
    [fav_id]
  );
  return results.rows;
};

// decrement item quantity by 1
const decreaseItemQuantityDbFav = async ({ fav_id, product_id }) => {
  await pool.query(
    "update fav_item set quantity = quantity - 1 where fav_item.fav_id = $1 AND fav_item.product_id = $2 returning *",
    [fav_id, product_id]
  );

  const results = await pool.query(
    "Select products.*, fav_item.quantity, round((products.price * fav_item.quantity)::numeric, 2) as subtotal from fav_item join products on fav_item.product_id = products.product_id where fav_item.fav_id = $1",
    [fav_id]
  );
  return results.rows;
};

const emptyFavDb = async (favId) => {
  return await pool.query("delete from fav_item where fav_id = $1", [favId]);
};

module.exports = {
  createFavDb,
  getFavDb,
  addItemFavDb,
  deleteItemFavDb,
  increaseItemQuantityDbFav,
  decreaseItemQuantityDbFav,
  emptyFavDb,
};
