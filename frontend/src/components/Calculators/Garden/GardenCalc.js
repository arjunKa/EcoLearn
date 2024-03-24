import React, { useState } from "react";
import { styled } from "styled-components";
import treeImg from "../../../public/potatoImage.jpg"
import {
    Button,
    CardImg, CardBody, CardText, CardTitle, CardSubtitle,
    Card
} from "reactstrap";

import GardenForm from "./GardenForm";
import ProgressBarGardens from "./ProgressBarGarden";
import "./Garden.css";


const TreesCalc = () => {


    const [calc, setCalc] = useState(''); // State for age input

    const handleCalcUpdate = (newCalc) => {
        setCalc(newCalc);
    };

    return (
        <div>
            {/* Heading outside of Calc */}
            <h1 style={{ display: "flex", justifyContent: "flex-end" }}>
                Gardens
            </h1>

            {/* Block for inside Calc */}
            <Card>

                <div className="calc_box">
                    {/* Box of whole Calculator */}

                    <div className="calc_box_card">
                        <Card className="card">
                            {/* left side */}
                            <CardImg
                                alt="Card image cap"
                                src={treeImg}
                                top
                                className="custom-card-img"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Card title
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-1 text-muted"
                                    tag="h6"
                                >
                                    Card subtitle
                                </CardSubtitle>
                                <CardText>
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                </CardText>
                                <Button>
                                    Button
                                </Button>
                            </CardBody>
                        </Card>
                    </div>

                    {/* Calc Options */}
                    <div className="calc_box_form">
                        <GardenForm onUpdate={handleCalcUpdate} />
                        {calc && (
                            <div style={{ border: '1px solid black' }}>
                                <ProgressBarGardens calc={calc} />
                                <h2>Response Data:</h2>
                                <p>{JSON.stringify(calc, null, 2)}</p>
                            </div>
                        )}

                    </div>
                </div>

            </Card>

        </div >
    );
};



export default TreesCalc;