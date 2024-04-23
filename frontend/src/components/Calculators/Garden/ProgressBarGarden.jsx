import { Progress } from "reactstrap";
import React, { useState, useEffect } from "react";
import AxiosInstance from "../../Axios";

const ProgressBarGarden = ({ calc }) => {
  const [progressColor, setProgressColor] = useState("primary");
  const [totalCarbonReduction, setTotalCarbonReduction] = useState(1000);
  const colors = ["", "success", "warning", "danger"];
  const [metrics, setMetrics] = useState(""); // State for age input

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
      {metrics && (
        <div>
          <h2>Metrics:</h2>
          <p>
            {calc.carbon_reduction} g of Carbon can charge{" "}
            {Math.round((calc.carbon_reduction / (metrics[0].amount_carbon*1000)) * 100) / 100}{" "}
            {metrics[0].type}s{" "}
            <i className="fa-solid fa-mobile-screen-button"></i>
          </p>
        </div>
      )}
    </div>
  );
};

export default ProgressBarGarden;
