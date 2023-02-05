import React from "react";
import PropTypes from "prop-types";

const AccordionOrder = ({
  id,
  text,
  order,
  completedOrdersDispatch,
  inventoryDispatch,
  dataDispatch,
  hour,
  weekDay,
  setOrdered,
}) => {
  const handleDiscard = () => {
    completedOrdersDispatch({ type: "DISCARD", id });
  };

  const handleServe = () => {
    order.forEach((item) => {
      setOrdered((prev) => ({ ...prev, [item.name]: true }));
    });
    completedOrdersDispatch({ type: "SERVE", id });
    inventoryDispatch({ type: "ORDER_SERVED", order });
    dataDispatch({ type: "UPDATE", items: order, hour, weekDay });
  };
  return (
    <div className="accordion-item mx-3">
      <h2 className="accordion-header">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${id}`}
        >
          {text}
        </button>
      </h2>
      <div
        id={id}
        className="accordion-collapse collapse"
        data-bs-parent="#completed-orders"
      >
        <div className="d-flex flex-column align-items-start p-3">
          {order.map((item) => (
            <div
              key={item.name}
              className="d-flex justify-content-between w-100"
            >
              <p>{item.name}</p>
              <p>{item.amount}</p>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-between p-3">
          <button onClick={handleDiscard} className="btn btn-danger">
            Discard
          </button>
          <button onClick={handleServe} className="btn btn-success">
            Serve
          </button>
        </div>
      </div>
    </div>
  );
};

AccordionOrder.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  order: PropTypes.array,
  completedOrdersDispatch: PropTypes.func,
  inventoryDispatch: PropTypes.func,
  dataDispatch: PropTypes.func,
  hour: PropTypes.number,
  weekDay: PropTypes.number,
  setOrdered: PropTypes.func,
};

export default AccordionOrder;
