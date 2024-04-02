import {
    Form,
    Label,
    FormGroup,
    Input,
    Col, Row,
    Button
  
} from 'reactstrap';
import React, { useState, useEffect } from 'react';

const RecyclingForm = () => {
    
    const [selectedOption, setSelectedOption] = useState('paper');
    const [age, setAge] = useState('');

    return (
        <Form style={{ border: '1px solid blue',  borderRadius: "20px", margin: "10px" }} >
            <Row>
                <Col md={4}>
                    <FormGroup style={{ paddingLeft: "10px" }}>
                        
                        <Label for="exampleSelect">
                            Select
                        </Label>

                        <Input
                        id="exampleSelect"
                        name="select"
                        type="select" value={selectedOption} onChange={(event) => setSelectedOption(event.target.value)}
                        >
                            <option value="paper"> Paper </option>
                            <option value="glass"> Glass </option>
                            <option value="plastic"> Plastic </option>
                            <option value="metal"> Metal </option>
                            <option value="textile"> Textile </option>
                        </Input>
                    </FormGroup>
                </Col>

                <Col md={8}>
                    <FormGroup>
                        <Label for="exampleNumber">
                            Weight Kg
                        </Label>
                        <Input  style={{width: "500px"}}
                            id="exampleNumber"
                            name="weight"
                            placeholder="number placeholder"
                            type="number" value={age} onChange={(event) => setAge(event.target.value)}
                            min="0"
                            required
                        />
                    </FormGroup>
                </Col>
            </Row>
        </Form>
    );
}