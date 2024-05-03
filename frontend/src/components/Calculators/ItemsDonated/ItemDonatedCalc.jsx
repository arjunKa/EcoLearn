import React, { useState, useEffect } from "react";

import { Button, Card, Form } from "reactstrap";

import ProgressBarItemsDonated from "./ProgressBarItemsDonated";
import ItemsDonatedCard from "./ItemsDonatedCard";
import data from "./data.json";
import ItemsDonatedForm from "./ItemsDonatedForm";

const ItemDonatedCalc = () => {
  const [calc, setCalc] = useState(""); // State for age input
  const [treeData, setTreeData] = useState([
    { name: "clothing", quantity: 0 },
    { name: "food", quantity: 0 },
    { name: "toys", quantity: 0 },
  ]); // State for storing tree data
  const [submitDisabled, setSubmitDisabled] = useState(true); // State to control submit button disable/enable

  const handleCalcUpdate = (data) => {
    setTreeData(data);
  };

  const handleButtonClick = async () => {
    // Make your API request with the treeData array

    const res = {};

    res.total = 0;
    res.list = [];
    // Handle the response as needed

    // const result = data.find(item => item.type === res.selectedOption);
    // const result = data;
    console.log(data);
    console.log(treeData);

    for (let i = 0; i < treeData.length; i++) {
      if (treeData[i]) {
        console.log(treeData[i]);
        var result = data.find((item) => item.type === treeData[i].name);
        console.log(result);
        res.list.push({
          type: data[i].type,
          total: result.amount * treeData[i].quantity,
          amount_carbon:  parseFloat(result.amount)
        });
        res.total += parseFloat(result.amount) * treeData[i].quantity;
      }
    }

    console.log(res);
    setCalc(res);
  };

  useEffect(() => {
    // Check if any quantity field is empty

    const isAnyQuantityEmpty = treeData.some(
      (item) => !item.quantity
    );
    // Update the state to enable/disable submit button accordingly
    setSubmitDisabled(isAnyQuantityEmpty);
  }, [treeData]);

  return (
    <div>
      {/* Heading outside of Calc */}
      <h1 style={{ display: "flex", justifyContent: "flex-end" }}>
        Items Donated
      </h1>

      {/* Block for inside Calc */}
      <Card>
        <div className="calc_box">
          {/* Box of whole Calculator */}
          <ItemsDonatedCard />

          {/* Calc Options */}
          <div className="calc_box_form">
            <div className="calc_box_form_elements">
              {/* Add New TreesForm here */}

              <div>
                <ItemsDonatedForm onUpdate={(data) => handleCalcUpdate(data)} />
              </div>

              <Form>
                <Button onClick={handleButtonClick} disabled={submitDisabled}>Submit</Button>
              </Form>
            </div>

            {/* Results shown here */}
            {calc && (
              <div>
                <h2>Result:</h2>
                <p>Here is your calculation result.</p>
                <ProgressBarItemsDonated calc={calc} />
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ItemDonatedCalc;
