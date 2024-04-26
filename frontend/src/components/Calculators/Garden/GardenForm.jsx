import { Form, Label, FormGroup, Input, Col, Row } from "reactstrap";
import React, { useState } from "react";

const GardenForm = ({ onUpdate }) => {
  const [selectedOption, setSelectedOption] = useState("grass");
  const [quantity, setQuantity] = useState(""); // State for age input

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

  function PlantType() {
    if (selectedOption === "grass") {
      return "Area of Grass (m^2)";
    } else if (selectedOption === "shrub") {
      return "# of Shrubs";
    } else if (selectedOption === "small plant") {
      return "Weight in kg";
    }
  }

  return (
    <Form>
      <Row>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleNumber">{PlantType()}</Label>
            <Input
              id="exampleNumber"
              name="quantity"
              placeholder="number placeholder"
              type="number"
              value={quantity}
              min="0"
              onChange={handleQuantityChange}
              onBlur={handleQuantityChange}
              required
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleSelect">Type of agriculture</Label>

            <Input
              id="exampleSelect"
              name="select"
              type="select"
              value={selectedOption}
              onChange={handleSelectedOptionChange}
              onBlur={handleSelectedOptionChange}
            >
              <option value="grass"> Grass </option>
              <option value="shrub"> Shrub </option>
              <option value="small plant"> Flower/Vegetables </option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};
export default GardenForm;
