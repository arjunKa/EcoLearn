import { Progress } from "reactstrap";
import React, { useState, useEffect } from "react";
import Metrics from "../../Metrics/Metrics";
import AxiosInstance from "../../Axios";

const ProgressBarWaterSaved = ({ calc }) => {
  const colors = ["", "success", "warning", "danger"];

  return (
    <div className="progress_bar_div">
      {/* Render individual progress bars for each calc */}
      {/* Render cumulative progress bar with total carbon reduction */}
      <Progress
        className="my-2"
        value={calc.carbon_reduction}
        max={calc.carbon_reduction} // Assuming the max value of cumulative progress bar
        style={{
          height: "30px",
        }}
        color={"dark"} // Set color based on total value
      >
        {calc.carbon_reduction} kg of carbon reduction
      </Progress>

      <p>
        In {calc.province}, {Math.round( ((calc.carbon_reduction/(calc.power))*100 ))/100} kilowatt hours is required to produce
        the amount of litres you entered. {calc.power} kg of CO2 is required to produce 1 kwh in {calc.province}.
      </p>

      {/* Display metrics value */}
      <Metrics calc={calc.carbon_reduction} />
    </div>
  );
};

export default ProgressBarWaterSaved;
