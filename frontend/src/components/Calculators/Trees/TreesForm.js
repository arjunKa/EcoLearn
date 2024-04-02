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
  const [age, setAge] = useState(''); // State for age input

  const handleAgeChange = (event) => {
    const newAge = event.target.value;
    setAge(newAge);
    onUpdate({ age: newAge, selectedOption });
};

const handleSelectedOptionChange = (event) => {
    const newSelectedOption = event.target.value;
    setSelectedOption(newSelectedOption);
    onUpdate({ age, selectedOption: newSelectedOption });
};

  return (

    <Form style={{ border: '1px solid blue', borderRadius: "20px"}} >
      <Row>
        <Col md={4} >
          <FormGroup style={{ paddingLeft: "10px"}}>
            <Label for="exampleNumber">
              Quantity of trees planted
            </Label>
            <Input
              id="exampleNumber"
              name="age"
              placeholder="number placeholder"
              type="number" value={age} onChange={handleAgeChange}
              min="0"
              onBlur={handleAgeChange}
              required
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>

            <Label for="exampleSelect">
              Type of Tree
            </Label>

            <Input
              id="exampleSelect"
              name="select"
              type="select" value={selectedOption} onChange={handleSelectedOptionChange}
              onBlur={handleSelectedOptionChange}
            >
              <option value="basswood"> Basswood </option>
              <option value="beech"> Beech </option>
              <option value="birch"> Birch </option>
              <option value="blackCherry"> Black Cherry </option>
              <option value="blackWalnut"> Black Walnut </option>
              <option value="cedar"> Cedar </option>
              <option value="citrus"> Citrus </option>
              <option value="douglasFir"> Douglas Fir </option>
              <option value="eucalyptus"> Eucalyptus </option>
              <option value="fruit"> Fruit </option>
              <option value="bamboo"> Giant Bamboo </option>
              <option value="locust"> Locust </option>
              <option value="mahogany"> Mahogany </option>
              <option value="maple"> Maple </option>
              <option value="neem"> Neem </option>
              <option value="nut"> Nut </option>
              <option value="oak"> Oak </option>
              <option value="paulownia"> Paulownia </option>
              <option value="pine"> Pine </option>
              <option value="poplar"> Poplar </option>
              <option value="rosewood"> Rosewood </option>
              <option value="sequoia"> Sequoia </option>
              <option value="spruce"> Spruce </option>
              <option value="sugarMaple"> Sugar Maple </option>
              <option value="teak"> Teak </option>
              <option value="willow"> Willow </option>
            </Input>
          </FormGroup>
        </Col>
      </Row>

    </Form>



  );

}
export default TreesForm;