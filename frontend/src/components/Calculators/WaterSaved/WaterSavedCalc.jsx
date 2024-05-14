import React, { useState, useEffect } from "react";

import { Button, Card, Form } from "reactstrap";

import WaterSavedForm from "./WaterSavedForm";
import ProgressBarWaterSaved from "./ProgressBarWaterSaved";
import AxiosInstance from "../../Axios";
import TreesCard from "./WaterSavedCard";
import data from "./data.json";

const WaterSavedCalc = () => {
  const [calc, setCalc] = useState(""); // State for age input
  const [treeData, setTreeData] = useState([{}]); // State for storing tree data
  const [submitDisabled, setSubmitDisabled] = useState(true); // State to control submit button disable/enable

  const handleCalcUpdate = (data) => {
    setTreeData(data);
  };

  const handleButtonClick1 = async () => {
    // Make your API request with the treeData array

    const res = {};
    res.type = "water";
    // kg of carbon per litre of water:
    res.amount = 0.298;
    res.carbon_reduction = res.amount * treeData.value;
    res.selectedOption = treeData.selectedOption;
    // Handle the response as needed

    try {
      const res2 = await AxiosInstance.get("/api/province", {
        params: {
          name: res.selectedOption,
        },
      });
      console.log(res2.data);
      // Handle the response as needed
      res.province = res2.data[0].name;
      res.power = res2.data[0].amount_carbon;
    } catch (err) {
      console.error("Error fetching data:", err);
    }

    console.log(res);
    setCalc(res);
  };

  const handleButtonClick = async () => {
    // Make your API request with the treeData array

    const res = {};

    console.log(treeData);

    var result = data.find(
      (item) =>
        item.name.toLowerCase() === treeData.selectedOption.toLowerCase()
    );
    console.log(result);
    result.amount = 0.298;
    result.carbon_reduction = result.amount * treeData.value;
    result.province = result.province;
    result.power = result.amount_carbon;
    
    console.log(result);

    console.log(result);
    setCalc(result);
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
                <WaterSavedForm onUpdate={(data) => handleCalcUpdate(data)} />
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
                <ProgressBarWaterSaved calc={calc} />
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default WaterSavedCalc;
