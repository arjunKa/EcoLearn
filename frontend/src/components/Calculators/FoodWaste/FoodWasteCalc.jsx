import { useState, useEffect } from "react";

import { Button, Card, Form, Spinner } from "reactstrap";

import FoodForm from "./FoodForm";
import ProgressBarFoodWaste from "./ProgressBarFoodWaste";
import FoodWasteCard from "./FoodWasteCard";
import { calculateFoodWaste } from "../../../services/ecolearnData";

const FoodWasteCalc = () => {
  const [calc, setCalc] = useState(""); // State for age input
  const [foodData, setTreeData] = useState([{}]); // State for storing tree data
  const [submitDisabled, setSubmitDisabled] = useState(true); // State to control submit button disable/enable
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    // Ensure at least one TreesForm is rendered initially
    if (foodData.length === 0) {
      setTreeData([{}]);
    }
  }, []);

  const handleCalcUpdate = (index, data) => {
    const updatedTreeData = [...foodData];
    updatedTreeData[index] = data;
    setTreeData(updatedTreeData);
  };

  useEffect(() => {
    // Check if any quantity field is empty

    const isAnyQuantityEmpty = foodData.some(
      (item) => !item.quantity || item.quantity.trim() === ""
    );
    // Update the state to enable/disable submit button accordingly
    setSubmitDisabled(isAnyQuantityEmpty);
    console.log(isAnyQuantityEmpty);
  }, [foodData]);

  const handleButtonClick = async () => {
    try {
      setIsFetching(true);
      const res = await calculateFoodWaste(foodData);
      setIsFetching(false);
      setCalc(res);
    } catch (err) {
      setIsFetching(false);
      console.error("Error fetching data:", err);
    }
  };

  const handleAddRow = () => {
    setTreeData([...foodData, {}]);
  };

  const handleDeleteRow = (index) => {
    const updatedTreeData = [...foodData];
    updatedTreeData.splice(index, 1);
    setTreeData(updatedTreeData);
  };

  return (
    <section className="calc-panel">
      <div className="calc-panel__heading">
        <span className="calc-panel__eyebrow">Calculator</span>
        <h2 className="calc-panel__title">Food Waste</h2>
        <p className="calc-panel__subtitle">
          Add one or more meat categories to estimate how much carbon is tied to
          the food choices you reduced.
        </p>
      </div>

      <Card className="calc-surface">
        <div className="calc_box">
          <FoodWasteCard />

          <div className="calc_box_form">
            <div className="calc_box_form_elements">
              {foodData.map((_, index) => (
                <div key={index} className="calc_box_form_elements_row">
                  <FoodForm
                    onUpdate={(data) => handleCalcUpdate(index, data)}
                  />
                  {index !== 0 && (
                    <Button onClick={() => handleDeleteRow(index)}>
                      Delete
                    </Button>
                  )}
                </div>
              ))}
              <div className="calc-actions">
                <Form>
                  <Button onClick={handleAddRow}>Add another food type</Button>
                </Form>
                <Form>
                  <Button onClick={handleButtonClick} disabled={submitDisabled}>
                    Calculate impact
                  </Button>
                </Form>
              </div>
            </div>

            {isFetching && (
              <div className="calc-spinner-wrap">
                <Spinner color="primary">Loading...</Spinner>
              </div>
            )}
            {calc && (
              <div className="calc-results">
                <h3 className="calc-results__title">Results</h3>
                <p className="calc-results__copy">
                  Here is your estimated food-related carbon reduction.
                </p>
                <ProgressBarFoodWaste calc={calc} />
              </div>
            )}
          </div>
        </div>
      </Card>
    </section>
  );
};

export default FoodWasteCalc;
