import React, { useState } from "react";
import { styled } from "styled-components";
import treeImg from "../../../public/treeImage.jpeg"
import {
    Button,
    CardImg, CardBody, CardText, CardTitle, CardSubtitle,
    Card
} from "reactstrap";

import TreesForm from "./TreesForm";
import ProgressBarTrees from "./ProgressBarTrees";

export const MyButton = styled.button`
    type: submit;
    background-color: #808080;
    text-align: center;
    opacity: 1;
    height: 40px;
    width: 30%;
    margin: 0px 155px;
    &:hover { opacity: 0.8 }
`

const TreesCalc = () => {

    //     try {
    //         const response = await axios.get('/api/ecolearning/', {
    //             params: {
    //                 // query: inputValue,
    //                 option_type: selectedOption.toLowerCase()
    //             }
    //         });
    //         setResponseData(response.data);

    //         // Log response.data.type after setting the response data
    //         console.log(response.data.type);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }

    const [calc, setCalc] = useState(''); // State for age input

    const handleCalcUpdate = (newCalc) => {
        setCalc(newCalc);
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", marginLeft: "200px", marginRight: "200px", marginTop: "30px" }}>
            {/* Heading outside of Calc */}
            <h1 style={{ display: "flex", justifyContent: "flex-end" }}>
                Trees Planted
            </h1>

            {/* Block for inside Calc */}
            <Card>

                <div style={{ display: "flex", flexDirection: "row", flexGrow: 1, padding: 30 }}>
                    {/* Box of whole Calculator */}

                    <div style={{ width: '400px', padding: 20 }}>
                        <Card >
                            {/* left side */}
                            <CardImg
                                alt="Card image cap"
                                src={treeImg}
                                top
                                width="10%"
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
                    <div>
                        <TreesForm onUpdate={handleCalcUpdate} />
                        {calc && (
                            <div>
                                <ProgressBarTrees calc={calc} />
                                <h2>Response Data:</h2>
                                <p>{JSON.stringify(calc, null, 2)}</p>
                            </div>
                        )}


                    </div>
                </div>

                {/* <div style={{ display: "flex", justifyContent: "space-around", flexGrow: 1 }}>
                    <img src={treeImg} style={{ width: "70%", height: "70%" }}></img>
                </div> */}


            </Card>


        </div >
    );
};



export default TreesCalc;