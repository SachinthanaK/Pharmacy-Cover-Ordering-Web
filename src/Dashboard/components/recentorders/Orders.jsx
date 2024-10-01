import React from "react";

import OrdersList from "./OrdersList";

const Orders = () => {
  const ORDERS = [
    {
      // id: "u1",
      // state: "Urgent",
      // date: "2024/10/12",
      // qty: "500",
      // size: "3x3",
      // est_Date: "2024/12/30",
    },
  ];

  return <OrdersList items={ORDERS} />;
};

export default Orders;
