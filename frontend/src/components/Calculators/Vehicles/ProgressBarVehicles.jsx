import { Progress } from "reactstrap";
import React, { useState, useEffect } from "react";
const ProgressBarVehicles = ({ calc }) => {
  const [progressColor, setProgressColor] = useState("primary");
  const [totalCarbonReduction, setTotalCarbonReduction] = useState(1000);
  const colors = ["", "success", "warning", "danger"];

  // useEffect(() => {
  //     // Check the calc value and update the progress color accordingly
  //     if (calc.amount_carbon < 30) {
  //         setProgressColor('danger');
  //     } else {
  //         setProgressColor('success');
  //     }
  // }, [calc]); // Run the effect whenever the calc value changes

  return (
    <div className="progress_bar_div">
      {/* Render individual progress bars for each item */}

      <Progress
        className="my-2"
        value={calc.carbon_reduction_driving}
        max={calc.carbon_reduction_driving} // Assuming the max value of each progress bar is 100
        style={{
          height: "20px",
          marginBottom: "10px",
        }}
        color={colors[1 % colors.length]} // Set color based on total value
      >
        {calc.type}: {calc.carbon_reduction_driving} carbon reduction from driving
      </Progress>

      <Progress multi>
        <Progress
          bar
          max={calc.carbon_reduction_idling}
          value={calc.carbon_reduction_idling}
          // Assuming the max value of each progress bar is 100

          color={colors[1 % colors.length]} // Set color based on total value
        >
          {calc.type}: {calc.carbon_reduction_idling} carbon reduction from idling
        </Progress>
      </Progress>

      {/* Render cumulative progress bar with total carbon reduction */}
      <Progress
        className="my-2"
        value={calc.total_carbon_reduction}
        max={calc.total_carbon_reduction} // Assuming the max value of cumulative progress bar
        style={{
          height: "20px",
        }}
        color={"dark"} // Set color based on total value
      >
        Cumulative: {calc.total_carbon_reduction} carbon reduction
      </Progress>
    </div>
  );
};

export default ProgressBarVehicles;
