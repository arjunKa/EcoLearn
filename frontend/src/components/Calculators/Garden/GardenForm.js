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

const GardenForm = ({ onUpdate }) => {


  const [selectedOption, setSelectedOption] = useState('grass');
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

  function PlantType() {
    if (selectedOption === "grass") {
      return "Area of Grass (m^2)";
    } else if (selectedOption === "shrub") {
      return "Shrubs";
    } else if (selectedOption === "flower") {
      return "Weight of flowers";
    } else if (selectedOption === "vegetables") {
      return "# of Vegetables";
    }
  }

  return (

    <Form style={{ border: '1px solid blue' }} >
      <Row>
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
              <option value="grass"> Grass </option>
              <option value="shrub"> Shrub </option>
              <option value="flower"> Flowers/Small Plants </option>
              <option value="vegetables"> Vegetable </option>
            </Input>
          </FormGroup>
        </Col>

        <Col md={8}>
          <FormGroup >
            <Label for="exampleNumber">
              {PlantType()} {/* Dynamically render label text */}
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
export default GardenForm;