import CartItem from "components/CartItem";
import { useCart } from "context/CartContext";
import Layout from "layout/Layout";
import React from "react";
import { Link } from "react-router-dom";
import {
  TableContainer,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  Button,
} from "@windmill/react-ui";
import { ShoppingCart } from "react-feather";
import { formatCurrency } from "helpers/formatCurrency";

const Cart = () => {
  const { cartData, isLoading, cartSubtotal } = useCart();

  if (cartData?.items?.length === 0) {
    return (
      <Layout title="Cart" loading={isLoading}>
        <h1 className="my-10 text-center text-4xl font-semibold">
          Carrinho de Compras
        </h1>
        <div className="h-full flex flex-col justify-center items-center">
          <ShoppingCart size={150} />
          <p>Carrinho vazío</p>
            <Button tag={Link} to="/">Continue a Comprar</Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout loading={isLoading || cartData === undefined}>
      <h1 className="my-10 text-center text-4xl font-semibold">
      Carrinho de Compras
      </h1>
      <TableContainer>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell>Produto</TableCell>
              <TableCell>Valor</TableCell>
              <TableCell>Quantidade</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Remover</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cartData?.items?.map((item) => {
              return (
                <TableRow key={item.product_id}>
                  <CartItem item={item} />
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <TableFooter className="flex flex-col justify-end items-end">
          <div className="mb-2">Total: {formatCurrency(cartSubtotal)}</div>
          <Button tag={Link} to={{
            pathname: "/cart/checkout",
            state: {
              fromCartPage: true
            }
          }}>
            Checkout
          </Button>
        </TableFooter>
      </TableContainer>
    </Layout>
  );
};

export default Cart;
