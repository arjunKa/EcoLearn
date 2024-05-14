import React, { useState, useEffect } from "react";

import { Button, Card, Form } from "reactstrap";

import GardenForm from "./GardenForm";
import ProgressBarGarden from "./ProgressBarGarden";
import GardenCard from "./GardenCard";
import data from "./data.json";

const GardenCalc = () => {
  const [calc, setCalc] = useState("");
  const [gardenData, setGardenData] = useState([{}]); // State for storing garden data
  const [submitDisabled, setSubmitDisabled] = useState(true); // State to control submit button disable/enable

  const handleCalcUpdate = (data) => {
    setGardenData(data);
  };

  const handleButtonClick1 = async () => {
    try {
      // Make your API request with the gardenData array
      console.log(gardenData);
      const res = await AxiosInstance.get("/api/ecolearning/gardens", {
        params: {
          type: gardenData.selectedOption.toLowerCase(),
          quantity: gardenData.quantity,
        },
      });

      // Handle the response as needed
      console.log(res.data);
      setCalc(res.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  const handleButtonClick = async () => {
    // Make your API request with the treeData array

    const res = {};

    res.total = 0;
    res.list = [];

    console.log(gardenData);

    var result = data.find(
      (item) =>
        item.type.toLowerCase() === gardenData.selectedOption.toLowerCase()
    );
    console.log(result);
    res.carbon_reduction = result.amount_carbon * gardenData.quantity;

    console.log(res);
    setCalc(res);
  };

  useEffect(() => {
    // Check if any quantity field is empty

    const isAnyQuantityEmpty =
      !gardenData.quantity || gardenData.quantity.trim() === "";
    // Update the state to enable/disable submit button accordingly
    setSubmitDisabled(isAnyQuantityEmpty);
    console.log(isAnyQuantityEmpty);
  }, [gardenData]);

  return (
    <div>
      {/* Heading outside of Calc */}
      <h1 style={{ display: "flex", justifyContent: "flex-end" }}>Garden</h1>

      {/* Block for inside Calc */}
      <Card>
        <div className="calc_box">
          {/* Box of whole Calculator */}
          <GardenCard />

          {/* Calc Options */}
          <div className="calc_box_form">
            <div className="calc_box_form_elements">
              {/* Add New gardensForm here */}

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

export default GardenCalc;
