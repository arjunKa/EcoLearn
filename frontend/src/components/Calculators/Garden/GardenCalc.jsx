import { useState, useEffect } from "react";

import { Button, Card, Form } from "reactstrap";

import GardenForm from "./GardenForm";
import ProgressBarGarden from "./ProgressBarGarden";
import GardenCard from "./GardenCard";
import { calculateGarden } from "../../../services/ecolearnData";

const GardenCalc = () => {
  const [calc, setCalc] = useState(""); // State for age input
  const [gardenData, setGardenData] = useState([{}]); // State for storing garden data
  const [submitDisabled, setSubmitDisabled] = useState(true); // State to control submit button disable/enable

  const handleCalcUpdate = (data) => {
    setGardenData(data);
  };

  const handleButtonClick = async () => {
    try {
      const res = await calculateGarden(gardenData);
      setCalc(res);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    // Check if any quantity field is empty

    const isAnyQuantityEmpty = !gardenData.quantity || gardenData.quantity.trim() === "";
    // Update the state to enable/disable submit button accordingly
    setSubmitDisabled(isAnyQuantityEmpty);
    console.log(isAnyQuantityEmpty);
  }, [gardenData]);

  return (
    <section className="calc-panel">
      <div className="calc-panel__heading">
        <span className="calc-panel__eyebrow">Calculator</span>
        <h2 className="calc-panel__title">Garden</h2>
        <p className="calc-panel__subtitle">
          Estimate yearly carbon reduction from grass, shrubs, or small plants
          growing in your home garden.
        </p>
      </div>

      <Card className="calc-surface">
        <div className="calc_box">
          <GardenCard />

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
                  Here is your estimated yearly carbon reduction.
                </p>
                <ProgressBarGarden calc={calc} />
              </div>
            )}
          </div>
        </div>
      </Card>
    </section>
  );
};

export default GardenCalc;
