import React from "react";
import PropTypes from "prop-types";

const CreateItem = ({
  name,
  amount,
  handleItemIncrease,
  handleItemDecrease,
}) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <button
        onClick={() => handleItemDecrease(name)}
        className="btn btn-outline-secondary fw-bold my-auto"
      >
        -
      </button>
      <p className="px-3 fs-5 fw-light create-item-text text-center my-auto">
        {amount}
      </p>
      <button
        onClick={() => handleItemIncrease(name)}
        className="btn btn-outline-secondary fw-bold my-auto"
      >
        +
      </button>
    </div>
  );
};

CreateItem.propTypes = {
  name: PropTypes.string,
  amount: PropTypes.number,
  handleItemDecrease: PropTypes.func,
  handleItemIncrease: PropTypes.func,
};

export default CreateItem;
