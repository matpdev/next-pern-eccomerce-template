import React from "react";
import Layout from "../../layout/Layout";
import OrdersAdmin from "./partials/OrdersAdmin";

function Dashboard() {

  return (
    <Layout title="Admin">
      <OrdersAdmin></OrdersAdmin>
    </Layout>
  );
}

export default Dashboard;