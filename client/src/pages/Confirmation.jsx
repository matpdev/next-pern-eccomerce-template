import React, { useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Button } from "@windmill/react-ui";
import { useUser } from "context/UserContext";
import { CheckCircle } from "react-feather";
import Layout from "layout/Layout";

const Confirmation = () => {
  const { state } = useLocation();
  const history = useHistory();
  const { userData } = useUser();

  useEffect(() => {
    if (!state?.fromPaymentPage) {
      return history.push("/");
    }
  }, [history, state]);

  return (
    <Layout>
      <section className="grid place-items-center border p-10 shadow mt-16">
        <div className="text-center">
          <div className="grid place-items-center">
            <CheckCircle color="green" size={100} />
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl">Pedido Confirmado</h1>
            <p className="">
              Obrigado pela compra, {`${userData?.fullname}`}!
            </p>
            <p className="flex flex-col md:flex-row space-y-2.5 md:space-y-0 md:space-x-2 mt-2">
              <Button tag={Link} to="/products" layout="outline">
                Continue a comprar
              </Button>
              <Button tag={Link} to="/orders" layout="primary">
                Olhar os pedidos
              </Button>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Confirmation;
