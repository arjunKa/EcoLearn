import React, { useState, useEffect } from "react";

import { Button, Card, Form, Spinner } from "reactstrap";

import RecycleForm from "./RecycleForm";
import ProgressBarRecycle from "./ProgressBarRecycle";
import AxiosInstance from "../../Axios";
import RecycleCard from "./RecycleCard";
import data from "./data.json";

const RecycleCalc = () => {
  const [calc, setCalc] = useState(""); // State for age input
  const [recycleData, setRecycleData] = useState([{}]); // State for storing recycle data
  const [submitDisabled, setSubmitDisabled] = useState(true); // State to control submit button disable/enable
  const [isFetching, setIsFetching] = useState(false);

  const handleCalcUpdate = (data) => {
    setRecycleData(data);
  };

  const handleButtonClick1 = async () => {
    try {
      // Make your API request with the recycleData array
      console.log(recycleData);
      setIsFetching(true);
      const res = await AxiosInstance.get("/api/recycle", {
        params: {
          type: recycleData.selectedOption.toLowerCase(),
        },
      });

      setIsFetching(false);
      if (res.data.length == 0) {
        return;
      }
      // Handle the response as needed

      // const modifiedData = { ...res.data, quantity: 5 };
      console.log(res.data);
      const modifiedData = res.data.map((item) => ({
        ...item,
        quantity: parseFloat(recycleData.value),
      }));
      console.log(modifiedData);
      setCalc(modifiedData);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  const handleButtonClick = async () => {
    // Make your API request with the treeData array

    const res = {};

    res.total = 0;
    res.list = [];
    res.quantity = parseFloat(recycleData.value);

    console.log(recycleData);

    var result = data.find(
      (item) =>
        item.type.toLowerCase() === recycleData.selectedOption.toLowerCase()
    );
    console.log(result);
    res.amount_carbon = parseFloat(result.amount_carbon)
    res.carbon_reduction = res.amount_carbon * res.quantity;

    console.log(res);
    setCalc(res);
  };

  useEffect(() => {
    // Check if any quantity field is empty

    const isAnyQuantityEmpty =
      !recycleData.value || recycleData.value.trim() === "";
    // Update the state to enable/disable submit button accordingly
    setSubmitDisabled(isAnyQuantityEmpty);
    console.log(isAnyQuantityEmpty);
  }, [recycleData]);

  return (
    <div>
      {/* Heading outside of Calc */}
      <h1 style={{ display: "flex", justifyContent: "flex-end" }}>Recycling</h1>

      {/* Block for inside Calc */}
      <Card>
        <div className="calc_box">
          {/* Box of whole Calculator */}
          <RecycleCard />

          {/* Calc Options */}
          <div className="calc_box_form">
            <div className="calc_box_form_elements">
              {/* Add New recyclesForm here */}

              <div>
                <RecycleForm onUpdate={(data) => handleCalcUpdate(data)} />
              </div>

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
                <ProgressBarRecycle calc={calc} />
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default RecycleCalc;
