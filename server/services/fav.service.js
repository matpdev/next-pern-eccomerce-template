const {
  createFavDb,
  getFavDb,
  addItemDb,
  deleteItemDb,
  emptyFavDb,
} = require("../db/fav.db");
const { ErrorHandler } = require("../helpers/error");

class FavService {
  createFav = async (userId) => {
    try {
      return await createFavDb(userId);
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };

  getFav = async (userId) => {
    try {
      return await getFavDb(userId);
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };

  addItem = async (data) => {
    try {
      return await addItemDb(data);
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };

  removeItem = async (data) => {
    try {
      return await deleteItemDb(data);
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };

  emptyFav = async (favId) => {
    try {
      return await emptyFavDb(favId);
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };
}

module.exports = new FavService();
