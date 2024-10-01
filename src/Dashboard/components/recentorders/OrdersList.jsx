import React from "react";

import RecentOrders from "./RecentOrders";
import "./OrdersList.css";

const OrdersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div>
        <h2>No users found.</h2>
      </div>
    );
  }

  return (
    <ul>
      {props.items.map((user) => (
        <RecentOrders
          key={user.id}
          id={user.id}
          state={user.state}
          date={user.date}
          qty={user.qty}
          size={user.size}
          est_Date={user.est_Date}
        />
      ))}
    </ul>
  );
};

export default OrdersList;
