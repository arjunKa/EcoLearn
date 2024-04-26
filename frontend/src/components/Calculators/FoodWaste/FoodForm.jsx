import { Form, Label, FormGroup, Input, Col, Row } from "reactstrap";
import React, { useState, useEffect } from "react";

const FoodForm = ({ onUpdate }) => {
  const [selectedOption, setSelectedOption] = useState("chicken");
  const [quantity, setQuantity] = useState(""); // State for quantity input

  const handleQuantityChange = (event) => {
    const newQuantity = event.target.value;
    setQuantity(newQuantity);
    onUpdate({ quantity: newQuantity, selectedOption });
  };

  const handleSelectedOptionChange = (event) => {
    const newSelectedOption = event.target.value;
    setSelectedOption(newSelectedOption);
    onUpdate({ quantity, selectedOption: newSelectedOption });
  };

  return (
    <Form>
      <Row>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleNumber">Quantity in kg</Label>
            <Input
              id="exampleNumber"
              name="quantity"
              placeholder="number placeholder"
              type="number"
              value={quantity}
              min="0"
              step="0.1"
              onChange={handleQuantityChange}
              onBlur={handleQuantityChange}
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
