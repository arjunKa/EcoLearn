import { Progress, Tooltip } from "reactstrap";
import React, { useState } from "react";
import Metrics from "../../Metrics/Metrics";

const ProgressBarItemsDonated = ({ calc }) => {
  const colors = ["", "success", "warning", "danger"];

  return (
    <div className="progress_bar_div">
      <div className="text-center">Relative carbon reduction:</div>
      {calc.list.map((item, index) => (
        <div key={index}>
          <div className="text-center">
            1 {item.type} item <i className="fa-solid fa-tree"></i> absorbs{" "}
            {item.amount_carbon.toFixed(2)} kg{" "}
            <i className="fa-solid fa-fire-flame-simple"></i> Carbon.{" "}
          </div>
          <Progress
            key={index}
            className="my-2"
            value={item.total}
            max={item.total} // Assuming the max value of each progress bar is 100
            style={{
              height: "30px",
              marginBottom: "10px",
            }}
            color={colors[index % colors.length]} // Set color based on total value
          >
            {item.type}: {item.total} kg carbon
          </Progress>
        </div>
      ))}

      <div className="text-center">In total you have absorbed: </div>

      {/* Render cumulative progress bar with total carbon reduction */}
      <Progress
        className="my-2"
        value={calc.total}
        max={calc.total}
        style={{
          height: "30px",
        }}
        color={"dark"}
      >
        {calc.total} kg of carbon
      </Progress>

      {/* Display metrics value */}
      <Metrics calc={calc.total} />
    </div>
  );
};

export default ProgressBarItemsDonated;
