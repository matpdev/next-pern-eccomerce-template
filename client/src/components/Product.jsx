import { Button, CardBody } from "@windmill/react-ui";
import { useCart } from "context/CartContext";
import { useFav } from "context/FavContext";
import React from "react";
import { ShoppingCart, Heart } from "react-feather";
import { Link } from "react-router-dom";
import { formatCurrency } from "../helpers/formatCurrency";

const Product = ({ product }) => {
  const { addItem } = useCart();
  const { addItemFav } = useFav();

  const addToCart = async (e) => {
    e.preventDefault();
    await addItem(product, 1);
  };

  const addToFav = async (e) => {
    e.preventDefault()
    await addItemFav(product, 1)
  }
  return (
    <Link to={`/products/${product.product_id}`}>
      <div className="group" style={{ border: "1px solid red" }}>
        <span className="block relative h-48 rounded overflow-hidden">
          <img
            className="w-full h-full object-contain object-center"
            src={product.image_url}
            alt={product.name}
            loading="lazy"
            decoding="async"
            title={product.name}
          />
        </span>
        <CardBody className="flex flex-col items-stretch mt-4">
          <h2 className="title-font text-lg font-medium overflow-ellipsis whitespace-nowrap overflow-hidden">
            {product.name}
          </h2>
          <p className="">{formatCurrency(product.price)}</p>
          <CardBody className="flex flex-col items-stretch">
            <Button
              iconLeft={Heart}
              className="mt-2 transition duration-200 ease-out lg:bg-opacity-0 group-hover:bg-opacity-100"
              onClick={(e) => addToFav(e)}
              size="regular"
            >
              {" "}
              Favoritos
            </Button>
            <Button
              iconLeft={ShoppingCart}
              className="mt-2 transition duration-200 ease-out lg:bg-opacity-0 group-hover:bg-opacity-100"
              size="regular"
              onClick={(e) => addToCart(e)}
            >
              {" "}
              Carrinho
            </Button>
          </CardBody>
        </CardBody>
      </div>
    </Link>
  );
};

export default Product;
