import {
  Form,
  Label,
  FormGroup,
  Input,
  Col, Row,
  Button

} from 'reactstrap';
import React, { useState } from 'react';
import axios from "axios";

const TreesForm = ({ onUpdate }) => {


  const [selectedOption, setSelectedOption] = useState('');
  const [responseData, setResponseData] = useState(null);
  const [age, setAge] = useState(''); // State for age input

  const handleButtonClick = async () => {
    try {
      const res = await axios.get(
        "/api/ecolearning/trees",
        {
          params: {
            type: selectedOption.toLowerCase(),
            age: age
          },
        }
      );
      setResponseData(res.data);
      onUpdate(res.data);
      console.log(res.data);

    } catch (err) { }

  };

  return (

    <Form style={{border: '1px solid blue' }} >
      <Row>
        <Col md={8}>
          <FormGroup >
            <Label for="exampleNumber">
              Age of tree (months)
            </Label>
            <Input
              id="exampleNumber"
              name="age"
              placeholder="number placeholder"
              type="number" value={age} onChange={(event) => setAge(event.target.value)}
              required
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>

            <Label for="exampleSelect">
              Select
            </Label>

            <Input
              id="exampleSelect"
              name="select"
              type="select" value={selectedOption} onChange={(event) => setSelectedOption(event.target.value)}
            >
              <option> </option>
              <option value="basswood"> Basswood </option>
              <option value="Beech"> Beech </option>
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

      <Button onClick={handleButtonClick}>
        Submit
      </Button>


      {responseData && (
        <div>
          <h2>Response Data:</h2>
          <p>{responseData.age} {JSON.stringify(responseData, null, 2)}</p>
        </div>
      )}

    </Form>



  );

}
export default TreesForm;