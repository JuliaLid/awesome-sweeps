import React from "react";
import PropTypes from "prop-types";

const OrderStatus = props => (

  
  <div>
    <p>
      Your submission was received on <strong>{props.createdAt}.</strong>.
    </p>
    <p>
      The current processing status is
      <span>
        <strong>{props.orderProcessingStatus}</strong>
      </span>.
    </p>
    <p>
      Your prize was shipped on <strong>{props.shipDate}</strong>.
    </p>
  </div>
);

export default OrderStatus;
