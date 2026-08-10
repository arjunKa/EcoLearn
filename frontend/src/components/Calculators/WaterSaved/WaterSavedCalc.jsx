import { useState, useEffect } from "react";

import { Button, Card, Form } from "reactstrap";

import GardenForm from "./WaterSavedForm";
import ProgressBarWaterSaved from "./ProgressBarWaterSaved";
import TreesCard from "./WaterSavedCard";
import { calculateWaterSaved } from "../../../services/ecolearnData";

const WaterSavedCalc = () => {
  const [calc, setCalc] = useState(""); // State for age input
  const [treeData, setTreeData] = useState([{}]); // State for storing tree data
  const [submitDisabled, setSubmitDisabled] = useState(true); // State to control submit button disable/enable

  const handleCalcUpdate = (data) => {
    setTreeData(data);
  };

  const handleButtonClick = async () => {
    try {
      const res = await calculateWaterSaved(treeData);
      setCalc(res);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    // Check if any quantity field is empty

    const isAnyQuantityEmpty = !treeData.value || treeData.value.trim() === "";
    // Update the state to enable/disable submit button accordingly
    setSubmitDisabled(isAnyQuantityEmpty);
    console.log(isAnyQuantityEmpty);
  }, [treeData]);

  return (
    <section className="calc-panel">
      <div className="calc-panel__heading">
        <span className="calc-panel__eyebrow">Calculator</span>
        <h2 className="calc-panel__title">Water Saved</h2>
        <p className="calc-panel__subtitle">
          Convert litres of saved water into emissions impact using the power
          profile of the province you choose.
        </p>
      </div>

      <Card className="calc-surface">
        <div className="calc_box">
          <TreesCard />

          <div className="calc_box_form">
            <div className="calc_box_form_elements">
              <div>
                <GardenForm onUpdate={(data) => handleCalcUpdate(data)} />
              </div>
              <div className="calc-actions">
                <Form>
                  <Button onClick={handleButtonClick} disabled={submitDisabled}>
                    Calculate impact
                  </Button>
                </Form>
              </div>
            </div>

            {calc && (
              <div className="calc-results">
                <h3 className="calc-results__title">Results</h3>
                <p className="calc-results__copy">
                  Here is your estimated carbon reduction from water savings.
                </p>
                <ProgressBarWaterSaved calc={calc} />
              </div>
            )}
          </div>
        </div>
      </Card>
    </section>
  );
};

export default WaterSavedCalc;
