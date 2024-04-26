import { Progress, Tooltip } from "reactstrap";
import React, { useState, useEffect } from "react";
import Metrics from "../../Metrics/Metrics";

const ProgressBarVehicles = ({ calc }) => {
  const colors = ["", "success", "warning", "danger"];

  return (
    <div className="progress_bar_div">
      {/* Render individual progress bars for each item */}
      <Progress
        className="my-2"
        value={calc.carbon_reduction_driving}
        max={calc.carbon_reduction_driving} // Assuming the max value of each progress bar is 100
        style={{
          height: "30px",
        }}
        color={colors[1 % colors.length]} // Set color based on total value
      >
        {calc.type}: {calc.carbon_reduction_driving} carbon reduction from
        driving
      </Progress>
      <Progress
        className="my-2"
        value={calc.carbon_reduction_idling}
        max={calc.carbon_reduction_idling}
        // Assuming the max value of each progress bar is 100
        style={{
          height: "30px",
        }}
        color={colors[1 % colors.length]} // Set color based on total value
      >
        {calc.type}: {calc.carbon_reduction_idling} carbon reduction from idling
      </Progress>
      {/* Render cumulative progress bar with total carbon reduction */}
      <Progress
        className="my-2"
        value={calc.total_carbon_reduction}
        max={calc.total_carbon_reduction} // Assuming the max value of cumulative progress bar
        style={{
          height: "30px",
        }}
        color={"dark"} // Set color based on total value
      >
        Cumulative: {calc.total_carbon_reduction} carbon reduction
      </Progress>
      In total you have reduced {calc.total_carbon_reduction} Kg of Carbon.
      {/* Display metrics value */}
      <Metrics calc={calc.total_carbon_reduction} />
    </div>
  );
};

export default ProgressBarVehicles;
