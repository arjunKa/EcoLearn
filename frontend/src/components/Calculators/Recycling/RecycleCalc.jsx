import React, { useState, useEffect } from "react";

import { Button, Card, Form, Spinner } from "reactstrap";

import RecycleForm from "./RecycleForm";
import ProgressBarRecycle from "./ProgressBarRecycle";
import AxiosInstance from "../../Axios";
import RecycleCard from "./RecycleCard";

const RecycleCalc = () => {
  const [calc, setCalc] = useState(""); // State for age input
  const [treeData, setTreeData] = useState([{}]); // State for storing tree data
  const [submitDisabled, setSubmitDisabled] = useState(true); // State to control submit button disable/enable
  const [isFetching, setIsFetching] = useState(false);

  const handleCalcUpdate = (data) => {
    setTreeData(data);
  };

  const handleButtonClick = async () => {
    try {
      // Make your API request with the treeData array
      console.log(treeData);
      setIsFetching(true);
      const res = await AxiosInstance.get("/api/recycle", {
        params: {
          type: treeData.selectedOption.toLowerCase(),
        },
      });
      
      setIsFetching(false);
      if(res.data.length ==0) {
        
        return;
      }
      // Handle the response as needed

      // const modifiedData = { ...res.data, quantity: 5 };
      console.log(res.data);
      const modifiedData = res.data.map((item) => ({
        ...item,
        quantity: parseInt(treeData.value),
      }));
      console.log(modifiedData);
      setCalc(modifiedData);
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
              {/* Add New TreesForm here */}

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
