import React from "react";
import { styled } from "styled-components";


const GardenCalc = () => {
    return(
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginLeft: "200px", marginRight: "200px", marginTop: "30px" }}>
            {/* Heading outside of Calculator */}
            <h1 style={{ display: "flex", justifyContent: "flex-end" }}>
                Garden
            </h1>

            {/* Block for inside of Calculator */}
            <div style={{ display: "flex", flexDirection: "row", padding: "10px 5px 10px 20px", border: "2px solid #000", borderRadius: "25px"}}>
                {/* Calc Option */}
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", flexGrow: 1 }}> 
                    {/* Left Side - Asking for what kind of plant */}
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {/* Drop down for what kind of plant */}
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
                            {/* Input box for Potatoes*/}
                            <label for="plant"> Type of Plant </label>
                            <select name="plant" id="plant" style={{ width: "170px" }}>
                                <option> </option>
                                <option value="grass"> Grass </option>
                                <option value="shrub"> Shrub </option>
                                <option value="flower"> Flowers/Small Plants </option>
                                <option value="vegetables"> Vegetable </option>
                            </select>
                        </div>

                    </div>

                    {/* Right Side */}
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        right side
                    </div>
                </div>

                {/* Image */}
                <div style={{ display: "flex", justifyContent: "space-around", flexGrow: 1, backgroundColor: "#808080" }}>

                </div>
            </div>
        </div>  
    );
};

export default GardenCalc;