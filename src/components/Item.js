import React from "react";
import PropTypes from "prop-types";

const Item = ({ text, currentOrderDispatch, inventory }) => {
  const handleRemove = () => {
    currentOrderDispatch({ type: "REMOVE", name: text });
  };

  const handleAdd = () => {
    currentOrderDispatch({ type: "ADD", name: text, inventory });
  };

  return (
    <div className="d-flex align-items-center mb-5">
      <button
        onClick={handleRemove}
        className="btn btn-outline-secondary fw-bold"
      >
        {"-"}
      </button>
      <p className="px-3 fs-5 fw-light item-text text-center mt-auto mb-auto">
        {text}
      </p>
      <button onClick={handleAdd} className="btn btn-outline-secondary fw-bold">
        {"+"}
      </button>
    </div>
  );
};

Item.propTypes = {
  text: PropTypes.string,
  currentOrderDispatch: PropTypes.func,
  inventory: PropTypes.number,
};

export default Item;
