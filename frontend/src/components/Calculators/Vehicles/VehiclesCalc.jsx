import { useState } from "react";

import { Button, Card, Form } from "reactstrap";

import VehiclesForm from "./VehiclesForm";
import ProgressBarVehicles from "./ProgressBarVehicles";
import VehiclesCard from "./VehiclesCard";
import { calculateVehicle } from "../../../services/ecolearnData";

const VehiclesCalc = () => {
  const [calc, setCalc] = useState(""); // State for age input
  const [treeData, setTreeData] = useState({
    amount: "0",
    selectedOption: "fseries",
    idling: "0",
  }); // State for storing tree data

  const handleCalcUpdate = (data) => {
    setTreeData(data);
  };

  const handleButtonClick = async () => {
    try {
      const res = await calculateVehicle(treeData);
      setCalc(res);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  return (
    <section className="calc-panel">
      <div className="calc-panel__heading">
        <span className="calc-panel__eyebrow">Calculator</span>
        <h2 className="calc-panel__title">Vehicle Emissions</h2>
        <p className="calc-panel__subtitle">
          Compare reduced driving and prevented idling to estimate the carbon
          impact of changing how you get around.
        </p>
      </div>

      <Card className="calc-surface">
        <div className="calc_box">
          <VehiclesCard />

          <div className="calc_box_form">
            <div className="calc_box_form_elements">
              <div>
                <VehiclesForm onUpdate={(data) => handleCalcUpdate(data)} />
              </div>
              <div className="calc-actions">
                <Form>
                  <Button onClick={handleButtonClick}>Calculate impact</Button>
                </Form>
              </div>
            </div>

            {calc && (
              <div className="calc-results">
                <h3 className="calc-results__title">Results</h3>
                <p className="calc-results__copy">
                  Here is your estimated transportation-related carbon savings.
                </p>
                <ProgressBarVehicles calc={calc} />
              </div>
            )}
          </div>
        </div>
      </Card>
    </section>
  );
};

export default VehiclesCalc;
