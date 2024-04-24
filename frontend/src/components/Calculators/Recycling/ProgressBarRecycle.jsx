import { Progress } from "reactstrap";
import React, { useLayoutEffect, useState } from "react";
import Metrics from '../../Metrics/Metrics';

const ProgressBarRecycle = ({ calc }) => {
  const [total, setTotal] = useState(parseFloat(calc[0].amount_carbon)*calc[0].quantity);
  

  useLayoutEffect(() => {
    console.log(calc)
    setTotal(parseFloat(calc[0].amount_carbon)*calc[0].quantity);

}, []);

  return (
    <div className="progress_bar_div">
      <div className="text-center">In total you have reduced: </div>
      {/* Render cumulative progress bar with total carbon reduction */}
      <Progress
        className="my-2"
        value={total}
        max={total} // Assuming the max value of cumulative progress bar
        style={{
          height: "30px",
        }}
        color={"dark"} // Set color based on total value
      >
        {total} grams carbon reduction
      </Progress>

      {/* Display metrics value */}
      <Metrics calc = {total} />
    </div>
  );
};

export default ProgressBarRecycle;
