import { Progress } from "reactstrap";
import React, { useState, useEffect } from "react";
import AxiosInstance from "../../Axios";

const ProgressBarTrees = ({ calc }) => {
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
      {/* Render individual progress bars for each item */}
      <div className="text-center">Total carbon reduction per type of tree</div>
      {calc.list.map((item, index) => (
        <div key={index}>
          <div className="text-center">
            1 {item.type} <i className="fa-solid fa-tree"></i> tree absorbs{" "}
            {item.amount_carbon} kg{" "}
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
            {item.quantity} {item.type} trees: {item.total} Kg of Carbon
          </Progress>
        </div>
      ))}
      <div className="text-center">Relative carbon reduction</div>
      <Progress
        style={{
          height: "30px",
          marginBottom: "10px",
        }}
        multi
      >
        {calc.list.map((item, index) => (
          <Progress
            bar
            key={index}
            max={calc.total}
            value={item.total}
            // Assuming the max value of each progress bar is 100

            color={colors[index % colors.length]} // Set color based on total value
          >
            {item.type}: {item.total} Kg of Carbon
          </Progress>
        ))}
      </Progress>
      {/* Render cumulative progress bar with total carbon reduction */}
      <div className="text-center">In total you have absorbed: </div>
      <Progress
        className="my-2"
        value={calc.total}
        max={calc.list.length} // Assuming the max value of cumulative progress bar
        style={{
          height: "30px",
          marginBottom: "10px",
        }}
        color={"dark"} // Set color based on total value
      >
        {calc.total} Kg of Carbon
      </Progress>
      In their lifetime, the trees you have planted will consume {calc.total} Kg
      of Carbon.
      {/* Display metrics value */}
      {metrics && (
        <div>
          <h2>Metrics:</h2>
          <p>
            {calc.total} Kg of Carbon can charge{" "}
            {Math.round((calc.total / metrics[0].amount_carbon) * 100) / 100}{" "}
            {metrics[0].type}s <i className="fa-solid fa-mobile-screen-button"></i>
          </p>
        </div>
      )}
    </div>
  );
};

export default ProgressBarTrees;
