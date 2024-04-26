import { Progress, Tooltip } from "reactstrap";
import React, { useState } from "react";
import Metrics from "../../Metrics/Metrics";

const ProgressBarWaterSaved = ({ calc }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <div className="progress_bar_div">

      {/* Render cumulative progress bar with total carbon reduction */}
      <Progress
        className="my-2"
        value={calc.carbon_reduction}
        max={calc.carbon_reduction}
        style={{
          height: "30px",
        }}
        color={"dark"}
      >
        {calc.carbon_reduction} kg of carbon reduction
      </Progress>

      <p>
        In {calc.province},{" "}
        <span
          style={{ textDecoration: "underline", color: "blue" }}
          href="#"
          id="kwh_calc"
        >
          {Math.round((calc.carbon_reduction / calc.power) * 100) / 100}{" "}
          kilowatt hours
        </span>{" "}
        <Tooltip
          placement="top"
          isOpen={tooltipOpen}
          autohide={false}
          target="kwh_calc"
          toggle={toggle}
        >
          {calc.power} kg of CO2 is required to produce 1 kwh in {calc.province}
          . {calc.carbon_reduction}kg/{calc.power}kg ={" "}
          {Math.round((calc.carbon_reduction / calc.power) * 100) / 100} kwh
        </Tooltip>
        <i className="fa-solid fa-bolt"></i> is required to produce the amount
        of litres <i className="fa-solid fa-bottle-water"></i> you entered.{" "}
      </p>

      {/* Display metrics value */}
      <Metrics calc={calc.carbon_reduction} />
    </div>
  );
};

export default ProgressBarWaterSaved;
