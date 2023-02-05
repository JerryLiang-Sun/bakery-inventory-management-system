import React from "react";
import PropTypes from "prop-types";

import Item from "./Item";
import CurrentItem from "./CurrentItem";
import AccordionOrder from "./AccordionOrder";

const Orders = ({
  inventory,
  currentOrder,
  currentOrderDispatch,
  completedOrders,
  completedOrdersDispatch,
  inventoryDispatch,
  dataDispatch,
  hour,
  weekDay,
  setOrdered,
}) => {
  const handleComplete = () => {
    let fail = false;
    currentOrder.forEach((item) => {
      const inventoryItem = inventory.find(
        (element) => element.name == item.name
      );
      if (item.amount > inventoryItem.inventory) {
        fail = true;
      }
    });
    if (fail) return;
    currentOrderDispatch({ type: "COMPLETE" });
    const date = new Date();
    const id = [
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ].join("-");
    completedOrdersDispatch({
      type: "ADD",
      order: {
        date: `Order ${completedOrders.length + 1}`,
        id,
        order: currentOrder,
      },
    });
  };

  const handleDiscard = () => {
    currentOrderDispatch({ type: "CLEAR" });
  };

  return (
    <div className="d-flex flex-row justify-content-around pt-4">
      <div className="d-flex flex-column order-block border border-2 rounded border-secondary border-opacity-50">
        <p className="pt-2 fs-3 align-self-center">Completed Orders</p>
        <div className="accordion mb-auto" id="completed-orders">
          {completedOrders.map((order) => (
            <AccordionOrder
              key={order.id}
              id={order.id}
              text={order.date}
              order={order.order}
              completedOrdersDispatch={completedOrdersDispatch}
              inventoryDispatch={inventoryDispatch}
              dataDispatch={dataDispatch}
              hour={hour}
              weekDay={weekDay}
              setOrdered={setOrdered}
            />
          ))}
        </div>
      </div>
      <div className="d-flex flex-column order-block border border-2 rounded border-secondary border-opacity-50">
        <p className="pt-2 fs-3 align-self-center">Current Order</p>
        <div className="d-flex flex-column flex-grow-1">
          {currentOrder.map((item) => (
            <CurrentItem
              key={item.name}
              text={item.name}
              amount={item.amount}
            />
          ))}
          <div className="d-flex justify-content-between mt-auto mb-3">
            <button
              onClick={handleDiscard}
              className={`mx-3 btn btn-danger ${
                currentOrder.length === 0 ? "disabled" : ""
              }`}
            >
              Discard
            </button>
            <button
              onClick={handleComplete}
              className={`mx-3 btn btn-success ${
                currentOrder.length === 0 ? "disabled" : ""
              }`}
            >
              Save
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center order-block border border-2 rounded border-secondary border-opacity-50">
        <p className="pt-2 fs-3">Items</p>
        <div className="d-flex flex-column align-items-center flex-grow-1">
          {inventory.map((item) => (
            <Item
              key={item.name}
              text={item.name}
              currentOrderDispatch={currentOrderDispatch}
              inventory={item.inventory}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

Orders.propTypes = {
  inventory: PropTypes.array,
  currentOrder: PropTypes.array,
  currentOrderDispatch: PropTypes.func,
  completedOrders: PropTypes.array,
  completedOrdersDispatch: PropTypes.func,
  inventoryDispatch: PropTypes.func,
  dataDispatch: PropTypes.func,
  hours: PropTypes.number,
  weekDay: PropTypes.number,
  setOrdered: PropTypes.func,
};

export default Orders;
