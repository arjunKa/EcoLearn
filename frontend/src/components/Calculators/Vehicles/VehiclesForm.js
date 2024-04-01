import {
  Form,
  Label,
  FormGroup,
  Input,
  Col, Row,
  Button

} from 'reactstrap';
import React, { useState, useEffect } from 'react';

const VehiclesForm = ({ onUpdate }) => {


  const [selectedOption, setSelectedOption] = useState('fseries');
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

    <Form style={{ border: '1px solid blue' }} >
      <Row>
        <Col md={4} >
          <FormGroup >
            <Label for="exampleNumber">
              How many Km of driving did you eliminate?
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
              Vehicle
            </Label>

            <Input
              id="exampleSelect"
              name="select"
              type="select" value={selectedOption} onChange={handleSelectedOptionChange}
              onBlur={handleSelectedOptionChange}
            >
              <option value="fseries"> Ford F-Series Pickup Truck</option>
              <option value="ram"> Ram Pickup Truck</option>
              <option value="civic"> Honda Civic </option>
              <option value="sierra"> GMC Sierra </option>
              <option value="silverado"> Chevorlet Silverado </option>
              <option value="rav4"> Toyota Rav4 </option>
              <option value="crv"> Honda CRV </option>
              <option value="corolla"> Toyota Corolla </option>
              <option value="escape"> Ford Escape </option>
              <option value="caravan"> Dodge Grand Caravan </option>

            </Input>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={4} >
          <FormGroup >
            <Label for="exampleNumber">
              How many minutes of idling did you prevent?
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


      </Row>

    </Form>



  );

}
export default VehiclesForm;