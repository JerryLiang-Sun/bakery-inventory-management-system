import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const getData = (data, weekDay) => {
  const newData = [];
  for (let i = 1; i <= 24; i++) {
    let hourData = {};
    for (let [name, bakedGood] of Object.entries(data)) {
      if (name === "weekNum") continue;
      const time = i > 12 ? i - 12 : i;
      hourData = {
        ...hourData,
        [`${name}_name`]: name,
        time: `${time}:00`,
        [`${name}_amount`]: bakedGood[weekDay][i - 1],
      };
    }
    newData.push(hourData);
  }

  return newData;
};

const Graph = ({ weekDay, data }) => {
  const [graphData, setGraphData] = useState(() => getData(data, weekDay));

  useEffect(() => {
    setGraphData(getData(data, weekDay));
  }, [data]);

  return (
    <div className="d-flex justify-content-center mx-auto my-5 graph">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={750} height={300} data={graphData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="time"
            label={{ value: "Time", offset: 40, position: "insideBottom" }}
          />
          <YAxis
            label={{ value: "Demand", angle: -90, position: "insideLeft" }}
          />
          <Tooltip />
          <Legend verticalAlign="top" />
          <Line
            type="basis"
            dot={false}
            name="Boston Cream"
            dataKey="Boston_Cream_amount"
            stroke="#82ca9d"
            activeDot={{ r: 8 }}
          />
          <Line
            type="basis"
            dot={false}
            name="Old Fashion Plain"
            dataKey="Old_Fashion_Plain_amount"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line
            type="basis"
            dot={false}
            name="Double Chocolate"
            dataKey="Double_Chocolate_amount"
            stroke="#ba1c70"
            activeDot={{ r: 8 }}
          />
          <Line
            type="basis"
            dot={false}
            name="Chocolate Chip Muffin"
            dataKey="Chocolate_Chip_Muffin_amount"
            stroke="#0c6244"
            activeDot={{ r: 8 }}
          />
          <Line
            type="basis"
            dot={false}
            name="Apple Fritter"
            dataKey="Apple_Fritter_amount"
            stroke="#ff8000"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

Graph.propTypes = {
  weekDay: PropTypes.number,
  hour: PropTypes.number,
  data: PropTypes.object,
};

export default Graph;
