import { Form, Label, FormGroup, Input, Col, Row } from "reactstrap";
import React, { useState } from "react";

const GardenForm = ({ onUpdate }) => {
  const [selectedOption, setSelectedOption] = useState("grass");
  const [value, setValue] = useState(""); // State for age input

  const handleValueChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    onUpdate({ value: newValue, selectedOption });
  };

  const handleSelectedOptionChange = (event) => {
    const newSelectedOption = event.target.value;
    setSelectedOption(newSelectedOption);
    onUpdate({ value, selectedOption: newSelectedOption });
  };

  function PlantType() {
    if (selectedOption === "grass") {
      return "Area of Grass (m^2)";
    } else if (selectedOption === "shrub") {
      return "# of Shrubs";
    } else if (selectedOption === "vegetable") {
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
              name="value"
              placeholder="number placeholder"
              type="number"
              value={value}
              onChange={handleValueChange}
              onBlur={handleValueChange}
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
              <option value="vegetable"> Flower/Vegetables </option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};
export default GardenForm;
