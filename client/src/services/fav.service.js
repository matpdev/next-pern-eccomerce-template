import API from '../api/axios.config'

class FavService {
   getFav() {
      return API.get('/fav')
   }

   async addToFav(product_id){
      return await API.post("/fav/add", {product_id})
   }

   async removeFromFav(product_id) {
      return await API.delete("/fav/delete", {
         data: {product_id: Number(product_id)}
      })
   }
}

export default new FavService();