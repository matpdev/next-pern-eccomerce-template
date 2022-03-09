class LocalFav {
  isExist = (id) => !!this.getItem(id);

  getItems = () => JSON.parse(localStorage.getItem("__fav")) || [];

  getItem = (id) =>
    this.getItems().find((product) => product.product_id === id);

  saveItems = (data) => localStorage.setItem("__fav", JSON.stringify(data));

  removeItem = (id) =>
    this.saveItems(
      this.getItems().filter((product) => product.product_id !== id)
    );


  addItem = (product, quantity) => {
    if (this.isExist(product.product_id)) {
      this.saveItems(
        this.getItems().map((prod) => {
          if (product.product_id === prod.product_id) {
            prod.quantity += quantity || 1;
          }
          return prod;
        })
      );
    } else {
      product.quantity = 1;
      product.subtotal = product.price;
      this.saveItems([...this.getItems(), product]);
    }
  };
  clearfav = () => localStorage.removeItem("__fav")
}

export default new LocalFav();
