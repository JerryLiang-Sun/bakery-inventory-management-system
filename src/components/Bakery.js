import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import CreateItem from "./CreateItem";
import Graph from "./Graph";

const getAllAmount = (hour, weekDay, data, inventory) => {
  const allAmount = {
    Boston_Cream: {
      threeHour: 0,
      rest: 0,
    },
    Apple_Fritter: {
      threeHour: 0,
      rest: 0,
    },
    Double_Chocolate: {
      threeHour: 0,
      rest: 0,
    },
    Old_Fashion_Plain: {
      threeHour: 0,
      rest: 0,
    },
    Chocolate_Chip_Muffin: {
      threeHour: 0,
      rest: 0,
    },
  };

  const goods = Object.keys(data).filter((prop) => prop != "weekNum");
  for (let i = hour; i < 21; i++) {
    for (const good of goods) {
      if (i < hour + 3) {
        allAmount[good].threeHour += data[good][weekDay][i - 1];
      }
      allAmount[good].rest += data[good][weekDay][i - 1];
    }
  }

  for (const [good, amount] of Object.entries(allAmount)) {
    const inventoryAmount = inventory.find(
      (item) => item.name.split(" ").join("_") === good
    ).inventory;
    allAmount[good].threeHour =
      amount.threeHour - inventoryAmount < 0
        ? 0
        : amount.threeHour - inventoryAmount;
    allAmount[good].rest =
      amount.rest - inventoryAmount < 0 ? 0 : amount.rest - inventoryAmount;
  }

  return allAmount;
};

const Bakery = ({ inventory, inventoryDispatch, weekDay, hour, data }) => {
  const [inventoryChanges, setInventoryChanges] = useState({
    Boston_Cream: 0,
    Apple_Fritter: 0,
    Chocolate_Chip_Muffin: 0,
    Old_Fashion_Plain: 0,
    Double_Chocolate: 0,
  });
  const [allAmount, setAllAmount] = useState(() =>
    getAllAmount(hour, weekDay, data, inventory)
  );

  useEffect(() => {
    setAllAmount(getAllAmount(hour, weekDay, data, inventory));
  }, [hour, inventory]);

  const handleItemIncrease = (name) => {
    const property = name.split(" ").join("_");
    setInventoryChanges((prev) => ({
      ...prev,
      [property]: prev[property] + 1,
    }));
  };

  const handleItemDecrease = (name) => {
    const property = name.split(" ").join("_");
    const inInventory = inventory.find((item) => item.name === name);
    setInventoryChanges((prev) => ({
      ...prev,
      [property]:
        prev[property] - 1 + inInventory.inventory < 0
          ? prev[property]
          : prev[property] - 1,
    }));
  };

  const handleOnSet = () => {
    inventoryDispatch({
      type: "INVENTORY_CHANGE",
      items: { ...inventoryChanges },
    });

    setInventoryChanges({
      Boston_Cream: 0,
      Apple_Fritter: 0,
      Chocolate_Chip_Muffin: 0,
      Old_Fashion_Plain: 0,
      Double_Chocolate: 0,
    });
  };

  return (
    <div>
      <div className="container p-5 text-center border border-2 rounded border-secondary border-opacity-50">
        <div className="row">
          <div className="col-3 fs-3 text-start">Name</div>
          <div className="col fs-3">Stock</div>
          <div className="col-5 fs-3">Create</div>
          <div className="col fs-3">Next 3 Hours</div>
          <div className="col fs-3">Rest of Day</div>
        </div>
        {inventory.map((item) => {
          return (
            <div key={item.name} className="row">
              <div className="col-3 fs-4 fw-light text-start my-4">
                {item.name}
              </div>
              <div className="col fs-4 fw-light my-4">{item.inventory}</div>
              <div className="col-5 fs-4 fw-light my-4">
                <CreateItem
                  name={item.name}
                  amount={inventoryChanges[item.name.split(" ").join("_")]}
                  handleItemDecrease={handleItemDecrease}
                  handleItemIncrease={handleItemIncrease}
                />
              </div>
              <div className="col fs-4 fw-light my-4">
                {allAmount[item.name.split(" ").join("_")].threeHour}
              </div>
              <div className="col fs-4 fw-light my-4">
                {allAmount[item.name.split(" ").join("_")].rest}
              </div>
            </div>
          );
        })}
        <div className="row mt-3">
          <div className="col-3"></div>
          <div className="col"></div>
          <div className="col-5">
            <button onClick={handleOnSet} className="btn btn-secondary px-4">
              Set
            </button>
          </div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
      </div>
      <Graph weekDay={weekDay} data={data} />
    </div>
  );
};

Bakery.propTypes = {
  inventory: PropTypes.array,
  inventoryDispatch: PropTypes.func,
  hour: PropTypes.number,
  weekDay: PropTypes.number,
  data: PropTypes.object,
};

export default Bakery;
