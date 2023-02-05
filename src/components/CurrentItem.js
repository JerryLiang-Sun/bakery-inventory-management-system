import React from "react";

const CurrentItem = ({ text, amount }) => {
  return (
    <div className="current-item mx-3 my-1 px-3 border border-1 rounded border-secondary border-opacity-50">
      <p className="mt-auto mb-auto">{text}</p>
      <p className="mt-auto mb-auto">{amount}</p>
    </div>
  );
};

export default CurrentItem;
