import { Progress } from "reactstrap";
import React, { useState, useEffect } from "react";
import Metrics from '../../Metrics/Metrics';

const ProgressBarGarden = ({ calc }) => {

  return (
    <div className="progress_bar_div">
      <div className="text-center">In total you have absorbed: </div>
      {/* Render cumulative progress bar with total carbon reduction */}
      <Progress
        className="my-2"
        value={calc.carbon_reduction}
        max={calc.length} // Assuming the max value of cumulative progress bar
        style={{
          height: "30px",
        }}
        color={"dark"} // Set color based on total value
      >
        {calc.carbon_reduction} grams carbon reduction
      </Progress>

      {/* Display metrics value */}
      <Metrics calc = {calc.carbon_reduction/1000} />
    </div>
  );
};

export default ProgressBarGarden;
