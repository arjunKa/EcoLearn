import React, { useState, useEffect } from "react";

import { Button, Card, Form, Spinner } from "reactstrap";

import FoodForm from "./FoodForm";
import ProgressBarFood from "./ProgressBarFood";
import FoodCard from "./FoodCard";
import data from "./data.json";

const FoodCalc = () => {
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

  const handleButtonClick1 = async () => {
    try {
      // Make your API request with the treeData array
      console.log(foodData);
      setIsFetching(true);
      const res = await AxiosInstance.post("/api/ecolearning/food/", {
        foodData,
      });
      setIsFetching(false);

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

    console.log(data);
    console.log(foodData);

    for (let i = 0; i < foodData.length; i++) {
      if (foodData[i]) {
        console.log(foodData[i]);
        var result = data.find((item) => item.type.toLowerCase() === foodData[i].selectedOption.toLowerCase());
        console.log(result);
        res.list.push({
          type: data[i].type,
          total: result.amount_carbon * foodData[i].quantity,
          amount_carbon:  parseFloat(result.amount_carbon)
        });
        res.total += parseFloat(result.amount_carbon) * foodData[i].quantity;
      }
    }

    console.log(res);
    setCalc(res);
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
    <div>
      {/* Heading outside of Calc */}
      <h1 style={{ display: "flex", justifyContent: "flex-end" }}>
        Meats
      </h1>

      {/* Block for inside Calc */}
      <Card>
        <div className="calc_box">
          {/* Box of whole Calculator */}
          <FoodCard />

          {/* Calc Options */}
          <div className="calc_box_form">
            <div className="calc_box_form_elements">
              {/* Add New TreesForm here */}
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
              <Form>
                <Button onClick={handleAddRow}>Add new row</Button>
              </Form>
              <Form>
                <Button onClick={handleButtonClick} disabled={submitDisabled}>
                  Submit
                </Button>
              </Form>
            </div>

            {isFetching && (
              <Spinner className="m-5" color="primary">
                Loading...
              </Spinner>
            )}
            {/* Results shown here */}
            {calc && (
              <div>
                <h2>Result:</h2>
                <p>Here is your calculation result.</p>
                <ProgressBarFood calc={calc} />
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FoodCalc;
