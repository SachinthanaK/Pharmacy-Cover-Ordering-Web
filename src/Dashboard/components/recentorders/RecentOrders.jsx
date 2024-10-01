import React from "react";

import "./RecentOrders.css";

const RecentOrders = (props) => {
  return (
    <li>
      <div>
        <div>
          <h2>{props.id}</h2>
          <h3 className="">state={props.state} </h3>
          <h3>date={props.date} </h3>
          <h3>qty={props.qty} </h3>
          <h3>size={props.size} </h3>
          <h3>est_Date={props.est_Date}</h3>
        </div>
      </div>
    </li>
  );
};

export default RecentOrders;
