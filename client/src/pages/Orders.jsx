import {
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHeader,
  TableRow,
} from "@windmill/react-ui";
import OrderItem from "components/OrderItem";
import { useOrders } from "context/OrderContext";
import Layout from "layout/Layout";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import orderService from "services/order.service";

const Orders = () => {
  const { orders, setOrders } = useOrders();
  const [currentPage, setCurrentPage] = useState(1);
  const history = useHistory();

  const handlePage = (num) => {
    setCurrentPage(num);
  };
  const goToDetails = (order) => {
    history.push({
      pathname: `orders/${order.order_id}`,
      state: { order },
    });
  };
  useEffect(() => {
    orderService.getAllOrders(currentPage).then((res) => setOrders(res.data));
  }, [currentPage, setOrders]);


  if (orders?.length === 0) {
    return (
      <Layout loading={orders === null}>
        <h1 className="my-10 text-center text-4xl font-semibold">Pedidos</h1>
        <p>Você ainda não fez um pedido</p>
      </Layout>
    );
  }

  return (
    <Layout title="Orders" loading={orders === null}>
      <h1 className="my-10 text-center text-4xl font-semibold">Pedidos</h1>
      <TableContainer>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>N° de Items</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Valor</TableCell>
              <TableCell>Data</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders?.items.map((order) => (
              <TableRow
                className="cursor-pointer"
                onClick={() => goToDetails(order)}
                key={order.order_id}
              >
                <OrderItem order={order} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={orders?.total}
            resultsPerPage={5}
            onChange={handlePage}
            label="Table navigation"
          />
        </TableFooter>
      </TableContainer>
    </Layout>
  );
};

export default Orders;
