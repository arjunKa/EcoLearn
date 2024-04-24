import { Progress, Tooltip } from "reactstrap";
import React, { useState, useEffect } from "react";
import AxiosInstance from "../Axios";

const Metrics = ({ calc }) => {
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


if(metrics){
    return (

<div>
<h2>Metrics:</h2>
<p>
  {calc} Kg of Carbon can charge{" "}
  {Math.round(
    (calc / (metrics[0].amount / 1000)) * 100
  ) / 100}{" "}
  {metrics[0].type}s{" "}
  <i className="fa-solid fa-mobile-screen-button"></i>{" "}
  <span
    style={{ textDecoration: "underline", color: "blue" }}
    href="#"
    id="DisabledAutoHideExample"
  >
    (info)
  </span>
  <Tooltip
    placement="top"
    isOpen={tooltipOpen}
    autohide={false}
    target="DisabledAutoHideExample"
    toggle={toggle}
  >
    One cellphone takes {metrics[0].amount / 1000} KWh to
    charge fully, and to generate 1kWh hour you need 1kg of CO2 to be
    produced.
  </Tooltip>
</p>
</div>

);
};
}

export default Metrics;