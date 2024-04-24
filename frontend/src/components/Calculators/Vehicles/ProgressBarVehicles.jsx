import { Progress, Tooltip } from "reactstrap";
import React, { useState, useEffect } from "react";
import AxiosInstance from "../../Axios";
import Metrics from "../../Metrics/Metrics";

const ProgressBarVehicles = ({ calc }) => {
  const colors = ["", "success", "warning", "danger"];
  const [metrics, setMetrics] = useState(""); // State for age input
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  useEffect(() => {
    // Trigger getMetrics when calc is updated
    if (calc) {
      getMetrics();
    }
  }, [calc]);

  const getMetrics = async () => {
    try {
      // Make your API request with the treeData array

      const res = await AxiosInstance.get("/api/metric/", {
        params: {
          type: "cellphone",
        },
      });

      // Handle the response as needed
      console.log(res.data);
      setMetrics(res.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

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
        max={calc.carbon_reduction_idling}
        value={calc.carbon_reduction_idling}
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
      In total you have reduced{" "}
      {calc.total_carbon_reduction} Kg of Carbon.
      {/* Display metrics value */}
      <Metrics calc={calc.total_carbon_reduction} />
    </div>
  );
};

export default ProgressBarVehicles;
