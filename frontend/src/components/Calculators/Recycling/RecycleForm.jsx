import { Form, Label, FormGroup, Input, Col, Row } from "reactstrap";
import React, { useState } from "react";

const RecycleForm = ({ onUpdate }) => {
  const [selectedOption, setSelectedOption] = useState("paper");
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


  return (
    <Form>
      <Row>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleNumber">Weight in kg</Label>
            <Input
              id="exampleNumber"
              name="value"
              placeholder="number placeholder"
              type="number"
              value={value}
              min="0"
              onChange={handleValueChange}
              onBlur={handleValueChange}
              required
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleSelect">Material saved</Label>

            <Input
              id="exampleSelect"
              name="select"
              type="select"
              value={selectedOption}
              onChange={handleSelectedOptionChange}
              onBlur={handleSelectedOptionChange}
            >
              <option value="paper"> Paper </option>
              <option value="glass"> Glass </option>
              <option value="plastic"> Plastic </option>
              <option value="metal"> Metal </option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};
export default RecycleForm;
