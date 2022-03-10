import API from '../api/axios.config'

class FavService {
   getFav() {
      return API.get('/fav')
   }

   async addToFav(product_id, quantity){
      return await API.post("/fav/add", {product_id, quantity})
   }

   async removeFromFav(product_id) {
      return await API.delete("/fav/delete", {
         data: {product_id: Number(product_id)}
      })
   }

   async increment(product_id) {
      return API.put("/cart/increment", { product_id });
    }
  
    async decrement(product_id) {
      return API.put("/cart/decrement", { product_id });
    }
}

export default new FavService();