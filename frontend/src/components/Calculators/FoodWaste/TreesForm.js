import {
  Form,
  Label,
  FormGroup,
  Input,
  Col, Row,
  Button

} from 'reactstrap';
import React, { useState, useEffect } from 'react';

const TreesForm = ({ onUpdate }) => {


  const [selectedOption, setSelectedOption] = useState('basswood');
  const [amount, setAmount] = useState(''); // State for amount input

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

    <Form style={{ border: '1px solid blue'}} >
      <Row>
        <Col md={4} >
          <FormGroup >
            <Label for="exampleNumber">
              Quantity
            </Label>
            <Input
              id="exampleNumber"
              name="amount"
              placeholder="number placeholder"
              type="number" value={amount} onChange={handleAmountChange}
              onBlur={handleAmountChange}
              required
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>

            <Label for="exampleSelect">
              Type of Meat
            </Label>

            <Input
              id="exampleSelect"
              name="select"
              type="select" value={selectedOption} onChange={handleSelectedOptionChange}
              onBlur={handleSelectedOptionChange}
            >
              <option value="Chicken"> Chicken </option>
              <option value="beech"> Beef </option>
              <option value="Beef"> Lamb </option>
              <option value="Pork"> Pork </option>
              <option value="Fish"> Fish </option>

            </Input>
          </FormGroup>
        </Col>
      </Row>

    </Form>



  );

}
export default TreesForm;