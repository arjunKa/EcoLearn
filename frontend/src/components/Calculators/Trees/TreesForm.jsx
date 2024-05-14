import { Form, Label, FormGroup, Input, Col, Row } from "reactstrap";
import React, { useState } from "react";

const TreesForm = ({ onUpdate }) => {
  const [selectedOption, setSelectedOption] = useState("basswood");
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
      <Row style={{ alignItems: "baseline" }}>
        <Col md={5}>
          <FormGroup>
            <Label for="exampleSelect">Type of Tree</Label>

            <Input
              id="exampleSelect"
              name="select"
              type="select"
              value={selectedOption}
              onChange={handleSelectedOptionChange}
              onBlur={handleSelectedOptionChange}
            >
              <option value="basswood"> Basswood </option>
              <option value="beech"> Beech </option>
              <option value="birch"> Birch </option>
              <option value="black Cherry"> Black Cherry </option>
              <option value="black Walnut"> Black Walnut </option>
              <option value="cedar"> Cedar </option>
              <option value="douglas Fir"> Douglas Fir </option>
              <option value="maple"> Maple </option>
              <option value="nut"> Nut </option>
              <option value="oak"> Oak </option>
              <option value="pine"> Pine </option>
              <option value="spruce"> Spruce </option>

            </Input>
          </FormGroup>
        </Col>

        <Col md={5}>
          <FormGroup>
            <Label for="exampleNumber">Quantity</Label>
            <Input
              id="exampleNumber"
              name="quantity"
              placeholder="number placeholder"
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              onBlur={handleQuantityChange}
              min={0}
              required
            />
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};
export default TreesForm;
