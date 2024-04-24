import React, { useState } from "react";

import { Button, Card, Form } from "reactstrap";

import VehiclesForm from "./VehiclesForm";
import ProgressBarVehicles from "./ProgressBarVehicles";
import AxiosInstance from "../../Axios";
import VehiclesCard from "./VehiclesCard";

const VehiclesCalc = () => {
  const [calc, setCalc] = useState(""); // State for age input
  const [treeData, setTreeData] = useState({amount: '0', selectedOption: 'fseries', idling: '0'}); // State for storing tree data

  const handleCalcUpdate = (data) => {
    setTreeData(data);
  };

  const handleButtonClick = async () => {
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
