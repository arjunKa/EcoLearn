import React, { useState } from "react";
import { MyButton } from "../../Common/CommonUI";
import potatoImg from "../../../public/potatoImage.jpg";
import TreesForm from "./GardenForm";
import { Card } from 'reactstrap';
import ProgressBarGardens from "./ProgressBarGardens"

const GardenCalc = () => {

    const [calc, setCalc] = useState(''); // State for age input

    const handleCalcUpdate = (newCalc) => {
        setCalc(newCalc);
    };

    return (

        <div style={{ display: "flex", flexDirection: "column", marginLeft: "200px", marginRight: "200px", marginTop: "30px" }}>
            <h1 style={{ display: "flex", justifyContent: "flex-end" }}>
                Garden
            </h1>
            <Card>

                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginLeft: "200px", marginRight: "200px", marginTop: "30px" }}>
                    {/* Heading outside of Calculator */}


                    {/* Block for inside of Calculator */}
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <TreesForm onUpdate={handleCalcUpdate} />
                        {calc && (
                            <div>
                                <ProgressBarGardens calc={calc} />
                                <h2>Response Data:</h2>
                                <p>{JSON.stringify(calc, null, 2)}</p>
                            </div>
                        )}
                    </div>

                    {/* Image */}
                    <div style={{ display: "flex", justifyContent: "space-around", flexGrow: 1, marginLeft: "50px" }}>
                        <img src={potatoImg} style={{ width: "60%", height: "100%", padding: "50px 0px 50px 0px" }}></img>
                    </div>
                </div>
            </Card>
        </div>
    );

};

export default GardenCalc;