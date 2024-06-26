import { Progress } from "reactstrap";
import React, { useState, useEffect } from "react";
import Metrics from "../../Metrics/Metrics";

const ProgressBarTrees = ({ calc }) => {
  const colors = ["", "success", "warning", "danger"];

  return (
    <div className="progress_bar_div">
      {/* Render individual progress bars for each item */}
      <div className="text-center">Total carbon reduction per type of tree</div>
      {calc.list.map((item, index) => (
        <div key={index}>
          <div className="text-center">
            1 {item.type} <i className="fa-solid fa-tree"></i> tree absorbs{" "}
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
            {item.quantity} {item.type} trees: {item.total.toFixed(2)} Kg of Carbon
          </Progress>
        </div>
      ))}
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
        {calc.total.toFixed(2)} Kg of Carbon
      </Progress>
      In their lifetime, the trees you have planted will consume {calc.total.toFixed(2)} Kg
      of Carbon.
      {/* Display metrics value */}
      <Metrics calc={calc.total} />
    </div>
  );
};

export default ProgressBarTrees;
