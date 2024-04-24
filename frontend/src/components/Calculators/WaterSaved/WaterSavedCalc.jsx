import React, { useState, useEffect } from "react";

import { Button, Card, Form } from "reactstrap";

import GardenForm from "./WaterSavedForm";
import ProgressBarGarden from "./ProgressBarWaterSaved";
import AxiosInstance from "../../Axios";
import TreesCard from "./WaterSavedCard";

const WaterSavedCalc = () => {
  const [calc, setCalc] = useState(""); // State for age input
  const [treeData, setTreeData] = useState([{}]); // State for storing tree data
  const [submitDisabled, setSubmitDisabled] = useState(true); // State to control submit button disable/enable

  const handleCalcUpdate = (data) => {
    setTreeData(data);
  };

  const handleButtonClick = async () => {
    // Make your API request with the treeData array
    console.log(treeData);
    const res = {};
    res.type = "water";
    res.amount = 0.298;
    res.total = res.amount * treeData.value;
    // Handle the response as needed
    console.log(res.data);
    setCalc([res]);
  };

  useEffect(() => {
    // Check if any quantity field is empty

    const isAnyQuantityEmpty = !treeData.value || treeData.value.trim() === "";
    // Update the state to enable/disable submit button accordingly
    setSubmitDisabled(isAnyQuantityEmpty);
    console.log(isAnyQuantityEmpty);
  }, [treeData]);

  return (
    <div>
      {/* Heading outside of Calc */}
      <h1 style={{ display: "flex", justifyContent: "flex-end" }}>
        Water Saved
      </h1>

      {/* Block for inside Calc */}
      <Card>
        <div className="calc_box">
          {/* Box of whole Calculator */}
          <TreesCard />

          {/* Calc Options */}
          <div className="calc_box_form">
            <div className="calc_box_form_elements">
              {/* Add New TreesForm here */}

              <div>
                <GardenForm onUpdate={(data) => handleCalcUpdate(data)} />
              </div>

              <Form>
                <Button onClick={handleButtonClick} disabled={submitDisabled}>
                  Submit
                </Button>
              </Form>
            </div>

            {/* Results shown here */}
            {calc && (
              <div>
                <h2>Result:</h2>
                <p>Here is your calculation result.</p>
                <ProgressBarGarden calc={calc} />
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default WaterSavedCalc;
