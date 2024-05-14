import { Progress, Tooltip } from "reactstrap";
import React, { useState, useEffect } from "react";
import data from "./data.json";

const Metrics = ({ calc }) => {
  const colors = ["", "success", "warning", "danger"];
  const [metrics, setMetrics] = useState(""); // State for age input
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [tooltipOpen2, setTooltipOpen2] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);
  const toggle2 = () => setTooltipOpen2(!tooltipOpen2);

  useEffect(() => {
    // Trigger getMetrics when calc is updated
    if (calc) {
      getMetrics();
    }
  }, [calc]);

  const getMetrics1 = async () => {
    try {
      // Make your API request with the treeData array

      const res = await AxiosInstance.get("/api/metric/", {
        params: {},
      });

      // Handle the response as needed
      console.log(res.data);
      setMetrics(res.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  const getMetrics = async () => {

      setMetrics(data);

  };

  if (metrics) {
    return (
      <div>
        <h2>Metrics:</h2>
        <p>
          {calc} Kg of Carbon can charge{" "}
          {(calc / metrics[0].amount).toFixed(2)}{" "}
          <span
            style={{ textDecoration: "underline", color: "blue" }}
            href="#"
            id="DisabledAutoHideExample"
          >
            {metrics[0].type}s
          </span>{" "}
          <i className="fa-solid fa-mobile-screen-button"></i>{" "}
          <Tooltip
            placement="top"
            isOpen={tooltipOpen}
            autohide={false}
            target="DisabledAutoHideExample"
            toggle={toggle}
          >
            One cellphone takes {metrics[0].amount} KWh to charge fully, and to
            generate 1kWh hour you need 1kg of CO2 to be produced.
          </Tooltip>
        </p>
        <p>
          {calc} Kg of Carbon is in{" "}
          {parseFloat((calc / metrics[1].amount)).toFixed(2)}{" "}
          <span
            style={{ textDecoration: "underline", color: "blue" }}
            href="#"
            id="DisabledAutoHideExample2"
          >
            litres of {metrics[1].type}
          </span>{" "}
          <i className="fa-solid fa-gas-pump"></i>{" "}
          <Tooltip
            placement="top"
            isOpen={tooltipOpen2}
            autohide={false}
            target="DisabledAutoHideExample2"
            toggle={toggle2}
          >
            One litre of gas produces { parseFloat(metrics[1].amount).toFixed(2)} kg of carbon.
          </Tooltip>
        </p>
      </div>
    );
  }
};

export default Metrics;
