import { Progress } from "reactstrap";
import React, { useState, useEffect } from "react";
const ProgressBarGarden = ({ calc }) => {
  const [progressColor, setProgressColor] = useState("primary");
  const [totalCarbonReduction, setTotalCarbonReduction] = useState(1000);
  const colors = ["", "success", "warning", "danger"];

  useEffect(() => {
    // Calculate the total carbon reduction by summing up the 'total' values in the calc array
    const total = calc.reduce((acc, item) => acc + item.carbon_reduction, 0);
    setTotalCarbonReduction(total);
  }, [calc]);

  return (
    <div className="progress_bar_div">
      <Progress
        multi
        style={{
          height: "30px",
        }}
      >
        {calc.map((item, index) => (
          <Progress
            bar
            key={index}
            max={totalCarbonReduction}
            value={item.carbon_reduction}
            // Assuming the max value of each progress bar is 100
            color={colors[index % colors.length]} // Set color based on total value
          >
            {item.type}: {item.carbon_reduction} grams of Carbon reduction per year
          </Progress>
        ))}
      </Progress>

      {/* Render cumulative progress bar with total carbon reduction */}
      <Progress
        className="my-2"
        value={totalCarbonReduction}
        max={calc.length} // Assuming the max value of cumulative progress bar
        style={{
          height: "30px",
        }}
        color={"dark"} // Set color based on total value
      >
        Cumulative: {totalCarbonReduction} grams carbon reduction
      </Progress>
    </div>
  );
};

export default ProgressBarGarden;
