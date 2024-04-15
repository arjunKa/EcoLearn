import { Progress } from "reactstrap";
import React, { useState, useEffect } from "react";

const ProgressBarFoodWaste = ({ calc }) => {
  const [progressColor, setProgressColor] = useState("primary");
  const [totalCarbonReduction, setTotalCarbonReduction] = useState(1000);
  const colors = ["", "success", "warning", "danger"];

  useEffect(() => {
    // Calculate the total carbon reduction by summing up the 'total' values in the calc array
    const total = calc.reduce((acc, item) => acc + item.total, 0);
    setTotalCarbonReduction(total);
  }, [calc]);

  return (
    <div className="progress_bar_div">
      {/* Render individual progress bars for each item */}
      {calc.map((item, index) => (
        <Progress
          key={index}
          className="my-2"
          value={item.total}
          max={100} // Assuming the max value of each progress bar is 100
          style={{
            height: "20px",
            marginBottom: "10px",
          }}
          color={colors[index % colors.length]} // Set color based on total value
        >
          {item.type}: {item.total} carbon reduction
        </Progress>
      ))}

      <Progress multi>
        {calc.map((item, index) => (
          <Progress
            bar
            key={index}
            max={totalCarbonReduction}
            value={item.total}
            // Assuming the max value of each progress bar is 100

            color={colors[index % colors.length]} // Set color based on total value
          >
            {item.type}: {item.total} carbon reduction
          </Progress>
        ))}
      </Progress>

      {/* Render cumulative progress bar with total carbon reduction */}
      <Progress
        className="my-2"
        value={totalCarbonReduction}
        max={calc.length} // Assuming the max value of cumulative progress bar
        style={{
          height: "20px",
        }}
        color={"dark"} // Set color based on total value
      >
        Cumulative: {totalCarbonReduction} carbon reduction
      </Progress>
    </div>
  );
};

export default ProgressBarFoodWaste;
