import {
  Form,
  Label,
  FormGroup,
  Input,
  Col, Row,
  Button

} from 'reactstrap';
import React, { useState, useEffect } from 'react';

const GardenForm = ({ onUpdate }) => {


  const [selectedOption, setSelectedOption] = useState('grass');
  const [value, setValue] = useState(''); // State for age input

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
        <Col md={4} >
          <FormGroup >
            <Label for="amount">
              Litres water saved
            </Label>
            <Input
              id="amount"
              name="amount"
              placeholder="number placeholder"
              type="number" value={value} onChange={handleValueChange}
              onBlur={handleValueChange}
              required
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>

            <Label for="exampleSelect">
              Type of agriculture
            </Label>

            <Input
              id="exampleSelect"
              name="select"
              type="select" value={selectedOption} onChange={handleSelectedOptionChange}
              onBlur={handleSelectedOptionChange}
            >
              <option value="ontario"> Ontario </option>
              <option value="quebec"> Quebec </option>
              <option value="yukon"> Yukon </option>
            </Input>
          </FormGroup>
        </Col>
      </Row>

    </Form>



  );

}
export default GardenForm;