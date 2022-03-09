import FavItem from "components/FavItem";
import { useFav } from "context/FavContext";
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

const Fav = () => {
  const { favData, isLoading } = useFav();

  if (favData?.items?.length === 0) {
    return (
      <Layout>
        <h1 className="my-10 text-center text-4xl font-semibold">Favoritos</h1>
        <div className="h-full flex flex-col justify-center items-center">
          <ShoppingCart size={150} />
          <p>Você não favoritou nada</p>
          <Button tag={Link} to="/">
            Continue a Navegar
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout loading={isLoading || favData === undefined}>
      <h1 className="my-10 text-center text-4xl font-semibold">Favoritos</h1>
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
            {favData?.items?.map((item) => {
              return (
                <TableRow
                  key={item.product_id}
                  tag={Link}
                  to={{
                    pathname: `/products/${item.product_id}`,
                  }}
                >
                  <FavItem item={item} />
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <TableFooter className="flex flex-col justify-end items-end">
          <Button tag={Link} to="/">
            Continue a Navegar
          </Button>
        </TableFooter>
      </TableContainer>
    </Layout>
  );
};

export default Fav;
