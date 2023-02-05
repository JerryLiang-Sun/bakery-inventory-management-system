import React from "react";
import PropTypes from "prop-types";
import { weekDays } from "../data";

const Time = ({ hour, nextHour, prevHour, weekDay }) => {
  const time = hour > 12 ? hour - 12 : hour;
  const period = hour >= 12 && hour !== 24 ? "PM" : "AM";

  return (
    <div>
      <div className="d-flex flex-row justify-content-center pt-2">
        <p className="fs-5 fw-semibold">{weekDays[weekDay - 1]}</p>
      </div>
      <div className="d-flex flex-row justify-content-center align-items-center pb-2">
        <button onClick={prevHour} className="btn btn-outline-secondary">
          {"<"}
        </button>
        <p className="px-5 fs-5 fw-semibold text-center mt-auto mb-auto">{`${time}:00 ${period}`}</p>
        <button onClick={nextHour} className="btn btn-outline-secondary">
          {">"}
        </button>
      </div>
    </div>
  );
};

Time.defaultProps = {
  hour: 1,
};

Time.propTypes = {
  hour: PropTypes.number,
  weekDay: PropTypes.number,
  nextHour: PropTypes.func,
  prevHour: PropTypes.func,
};

export default Time;
