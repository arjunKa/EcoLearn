import { Progress } from "reactstrap";
import React, { useState, useEffect } from "react";
import Metrics from "../../Metrics/Metrics";

const ProgressBarFoodWaste = ({ calc }) => {
  const colors = ["", "success", "warning", "danger"];

  return (
    <div className="progress_bar_div">
      {/* Render individual progress bars for each item */}
      <div className="text-center">
        Total carbon reduction per type of plant
      </div>
      {calc.list.map((item, index) => (
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
          {item.type}: {item.total} carbon reduction
        </Progress>
      ))}

      {calc.list.length > 1 && (
        <div>
          <div className="text-center">Relative carbon absorption:</div>

          <Progress
            multi
            style={{
              height: "30px",
              marginBottom: "10px",
            }}
          >
            {calc.list.map((item, index) => (
              <Progress
                bar
                key={index}
                max={item.total}
                value={item.total}
                // Assuming the max value of each progress bar is 100

                color={colors[index % colors.length]} // Set color based on total value
              >
                {item.type}: {item.total} carbon reduction
              </Progress>
            ))}
          </Progress>
        </div>
      )}

      {/* Render cumulative progress bar with total carbon reduction */}
      <div className="text-center">In total you have absorbed: </div>
      <Progress
        className="my-2"
        value={calc.total}
        max={calc.total} // Assuming the max value of cumulative progress bar
        style={{
          height: "30px",
          marginBottom: "10px",
        }}
        color={"dark"} // Set color based on total value
      >
        Cumulative: {calc.total} carbon reduction
      </Progress>

      {/* Display metrics value */}
      <Metrics calc={calc.total} />
    </div>
  );
};

export default ProgressBarFoodWaste;
