import {
  Form,
  Label,
  FormGroup,
  Input,
  Col, Row,

} from 'reactstrap';
import React, { useState } from 'react';

const VehiclesForm = ({ onUpdate }) => {


  const [selectedOption, setSelectedOption] = useState('fseries');
  const [amount, setAmount] = useState(0); // State for amount input
  const [idling, setIdling] = useState(0); // State for amount input
  // onUpdate({ amount, selectedOption, idling });

  const handleAmountChange = (event) => {
    const newAmount = event.target.value;
    setAmount(newAmount);
    onUpdate({ amount: newAmount, selectedOption, idling });
  };

  const handleSelectedOptionChange = (event) => {
    const newSelectedOption = event.target.value;
    setSelectedOption(newSelectedOption);
    onUpdate({ amount, selectedOption: newSelectedOption, idling: idling });
  };

  const handleIdlingChange = (event) => {
    const newIdling = event.target.value;
    setIdling(newIdling);
    onUpdate({ amount, selectedOption, idling: newIdling });
  };

  return (

    <Form >
      <Row style={{alignItems:"baseline"}}>
        <Col md={4} >
          <FormGroup >
            <Label for="exampleNumber">
              How many Km of driving did you eliminate?
            </Label>
            <Input
              id="amount"
              name="amount"
              placeholder="number placeholder"
              type="number" value={amount} onChange={handleAmountChange}
              min={0}
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
            <Label for="idling">
              How many minutes of idling did you prevent?
            </Label>
            <Input
              id="idling"
              name="idling"
              placeholder="number placeholder"
              type="number" value={idling} onChange={handleIdlingChange}
              min={0}
              required
            />
          </FormGroup>
        </Col>


      </Row>

    </Form>



  );

}
export default VehiclesForm;