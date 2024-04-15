import { Form, Label, FormGroup, Input, Col, Row } from "reactstrap";
import React, { useState, useEffect } from "react";

const FoodForm = ({ onUpdate }) => {
  const [selectedOption, setSelectedOption] = useState("chicken");
  const [amount, setAmount] = useState(""); // State for amount input

  const handleAmountChange = (event) => {
    const newAmount = event.target.value;
    setAmount(newAmount);
    onUpdate({ amount: newAmount, selectedOption });
  };

  const handleSelectedOptionChange = (event) => {
    const newSelectedOption = event.target.value;
    setSelectedOption(newSelectedOption);
    onUpdate({ amount, selectedOption: newSelectedOption });
  };

  return (
    <Form>
      <Row>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleNumber">Quantity in grams</Label>
            <Input
              id="exampleNumber"
              name="amount"
              placeholder="number placeholder"
              type="number"
              value={amount}
              min="0"
              step="0.1"
              onChange={handleAmountChange}
              onBlur={handleAmountChange}
              required
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleSelect">Type of Meat</Label>

            <Input
              id="exampleSelect"
              name="select"
              type="select"
              value={selectedOption}
              onChange={handleSelectedOptionChange}
              onBlur={handleSelectedOptionChange}
            >
              <option value="chicken"> Chicken </option>
              <option value="beef"> Beef </option>
              <option value="lamb"> Lamb </option>
              <option value="pork"> Pork </option>
              <option value="fish"> Fish </option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};
export default FoodForm;
