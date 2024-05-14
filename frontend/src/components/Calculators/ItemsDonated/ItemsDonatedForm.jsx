import { Form, Label, FormGroup, Input, Col, Row } from "reactstrap";
import {React,  useState} from "react";

const ItemsDonatedForm = ({ onUpdate }) => {
  const [values, setValues] = useState([
    { name: "clothing", quantity: null },
    { name: "food", quantity: null },
    { name: "toys", quantity: null },
  ]);

  // Function to handle input value change for each type
  const handleValueChange = (index, quantity) => {
    const newValues = [...values];

    newValues[index].quantity = quantity; // Convert value to float
    setValues(newValues);
    onUpdate(newValues); // Call onUpdate with the updated values array
  };

  return (
    <Form>
      <Row>
        {values.map((item, index) => (
          <Col md={4} key={index}>
            <FormGroup>
              <Label for={item.name}>Amount of {item.name}</Label>
              <Input
                id={item.name}
                name={item.name}
                placeholder="number placeholder"
                type="number"
                onChange={(e) => handleValueChange(index, e.target.value)}
                min={0}
                step={0.1}
                required
              />
            </FormGroup>
          </Col>
        ))}
      </Row>
    </Form>
  );
};
export default ItemsDonatedForm;
