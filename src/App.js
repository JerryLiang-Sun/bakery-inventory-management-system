import React, { useReducer, useState } from "react";

import Header from "./components/Header";
import Time from "./components/Time";
import Orders from "./components/Orders";
import Bakery from "./components/Bakery";

import { initialInventory } from "./data";
import { initialData } from "./data";

const initialCurrentOrder = [];

const initialCompletedOrders = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const orderItem = state.find((item) => item.name === action.name);

      if (orderItem) {
        const amount =
          orderItem.amount >= action.inventory
            ? orderItem.amount
            : orderItem.amount + 1;
        return state.map((item) =>
          item.name === action.name ? { name: item.name, amount } : item
        );
      } else if (action.inventory === 0) {
        return state;
      } else {
        return [...state, { name: action.name, amount: 1 }];
      }
    }
    case "REMOVE": {
      const orderItem = state.find((item) => item.name === action.name);

      if (orderItem && orderItem.amount > 1) {
        orderItem.amount--;
        return state.map((item) =>
          item.name === action.name ? orderItem : item
        );
      } else if (orderItem && orderItem.amount === 1) {
        return state.filter((item) => item.name !== action.name);
      } else {
        return state;
      }
    }
    case "COMPLETE": {
      return [];
    }
    case "CLEAR": {
      return [];
    }
    default:
      return state;
  }
};

const completedOrdersReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.order];
    case "DISCARD": {
      return state.filter((order) => order.id !== action.id);
    }
    case "SERVE": {
      return state.filter((order) => order.id !== action.id);
    }
    default:
      return state;
  }
};

const inventoryReducer = (state, action) => {
  switch (action.type) {
    case "ORDER_SERVED": {
      return state.map((item) => {
        const orderItem = action.order.find(
          (element) => element.name === item.name
        );
        if (orderItem) {
          return {
            name: item.name,
            inventory: item.inventory - orderItem.amount,
          };
        } else {
          return item;
        }
      });
    }
    case "INVENTORY_CHANGE": {
      return state.map((item) => {
        const changeAmount = action.items[item.name.split(" ").join("_")];

        return { ...item, inventory: item.inventory + changeAmount };
      });
    }
    default:
      return state;
  }
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE": {
      let stateCopy = JSON.parse(JSON.stringify(state));
      for (const item of action.items) {
        const originalAmount =
          stateCopy[item.name.split(" ").join("_")][action.weekDay][
            action.hour - 1
          ];
        const newAmount = Math.floor(
          (originalAmount + item.amount) / stateCopy.weekNum
        );

        stateCopy[item.name.split(" ").join("_")][action.weekDay][
          action.hour - 1
        ] = newAmount;
      }

      return stateCopy;
    }
    case "WEEK_NUM_UPDATE": {
      const stateCopy = JSON.parse(JSON.stringify(state));
      stateCopy.weekNum += 1;
      return stateCopy;
    }
    default:
      return state;
  }
};

const App = () => {
  const [weekDay, setWeekDay] = useState(1);
  const [hour, setHour] = useState(1);
  const [order, dispatch] = useReducer(reducer, initialCurrentOrder);
  const [completedOrders, completedOrdersDispatch] = useReducer(
    completedOrdersReducer,
    initialCompletedOrders
  );
  const [inventory, inventoryDispatch] = useReducer(
    inventoryReducer,
    initialInventory
  );
  const [data, dataDispatch] = useReducer(dataReducer, initialData);
  const [ordered, setOrdered] = useState({
    "Boston Cream": false,
    "Apple Fritter": false,
    "Double Chocolate": false,
    "Old Fashion Plain": false,
    "Chocolate Chip Muffin": false,
  });
  const [view, setView] = useState(true);

  const nextHour = () => {
    setHour((prevHour) => {
      if (!view) {
        const items = [];
        for (const [good, served] of Object.entries(ordered)) {
          if (!served) {
            items.push({ name: good, amount: 0 });
          }
        }
        dataDispatch({ type: "UPDATE", items: items, hour, weekDay });
      }

      if (prevHour === 24) {
        return 1;
      } else {
        if (prevHour + 1 === 24 && weekDay === 7) {
          setWeekDay(1);
        } else if (prevHour + 1 === 24) {
          setWeekDay((prevWeekDay) => prevWeekDay + 1);
        }
        return prevHour + 1;
      }
    });
  };

  const prevHour = () => {
    setHour((prevHour) => {
      if (prevHour === 1) {
        return 24;
      } else {
        if (prevHour - 1 === 23 && weekDay === 1) {
          setWeekDay(7);
        } else if (prevHour - 1 === 23) {
          setWeekDay((prevWeekDay) => prevWeekDay - 1);
        }
        return prevHour - 1;
      }
    });
  };

  const handleView = () => {
    setView((prevView) => !prevView);
  };

  return (
    <div className="container min-vh-100 min-vw-100">
      <button
        onClick={handleView}
        className={`btn view-button btn${view ? "" : "-outline"}-dark`}
      >
        VIEW
      </button>
      <Header />
      <Time
        hour={hour}
        nextHour={nextHour}
        prevHour={prevHour}
        weekDay={weekDay}
      />
      <Orders
        inventory={inventory}
        currentOrder={order}
        currentOrderDispatch={dispatch}
        completedOrders={completedOrders}
        completedOrdersDispatch={completedOrdersDispatch}
        inventoryDispatch={inventoryDispatch}
        dataDispatch={dataDispatch}
        hour={hour}
        weekDay={weekDay}
        setOrdered={setOrdered}
      />
      <p className="fs-1 fw-light text-center pt-5 pb-2">Bakery</p>
      <Bakery
        inventory={inventory}
        inventoryDispatch={inventoryDispatch}
        hour={hour}
        weekDay={weekDay}
        data={data}
      />
    </div>
  );
};

export default App;
