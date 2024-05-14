import React, { useState } from "react";

import { Button, Card, Form } from "reactstrap";

import VehiclesForm from "./VehiclesForm";
import ProgressBarVehicles from "./ProgressBarVehicles";
import VehiclesCard from "./VehiclesCard";
import data from "./data.json";

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

  const handleButtonClick1 = async () => {
    try {
      // Make your API request with the treeData array
      console.log(treeData);
      const res = await AxiosInstance.get("/api/ecolearning/vehicles", {
        params: {
          type: treeData.selectedOption,
          distance: treeData.amount,
          idling: treeData.idling,
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

    console.log(treeData);

    var result = data.find(
      (item) =>
        item.type.toLowerCase() === treeData.selectedOption.toLowerCase()
    );
    
    result.distance = parseFloat(treeData.amount);
    result.idling = parseFloat(treeData.idling);
    console.log(result);
    // result.carbon_reduction = result.amount_carbon * result.distance;
    result.carbon_reduction_driving = result.distance * parseFloat(result.amount_carbon);
    result.carbon_reduction_idling = 0.03 * result.idling;
    result.total_carbon_reduction =
      result.carbon_reduction_driving + result.carbon_reduction_idling;

    console.log(result);
    setCalc(result);
  };

  return (
    <div>
      {/* Heading outside of Calc */}
      <h1 style={{ display: "flex", justifyContent: "flex-end" }}>
        Vehicle Emissions
      </h1>

      {/* Block for inside Calc */}
      <Card>
        <div className="calc_box">
          {/* Box of whole Calculator */}
          <VehiclesCard />

          {/* Calc Options */}
          <div className="calc_box_form">
            <div className="calc_box_form_elements">
              {/* Add New TreesForm here */}

              <div>
                <VehiclesForm onUpdate={(data) => handleCalcUpdate(data)} />
              </div>

              <Form></Form>
              <Form>
                <Button onClick={handleButtonClick}>Submit</Button>
              </Form>
            </div>

            {/* Results shown here */}
            {calc && (
              <div>
                <h2>Result:</h2>
                <p>Here is your calculation result.</p>
                <ProgressBarVehicles calc={calc} />
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default VehiclesCalc;
