import React from "react";
import { MyButton } from "../Common/CommonUI";

{/* How many litres of Water saved */}

const WaterSavedCalc = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginLeft: "200px", marginRight: "200px", marginTop: "30px" }}>
            {/* Heading outside of Calc */}
            <h1 style={{ display: "flex", justifyContent: "flex-end" }}>
                Water Saved Calculator
            </h1>
        
            {/* Block for inside Calc */}
            <div style={{ display: "flex", flexDirection: "row", padding: "10px 5px 10px 0px", border: "2px solid #000", borderRadius: "25px" }}>
                {/* Calc Options */}
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", flexGrow: 2 }}>
                    {/* Left Side */}
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {/* Input for Amount of water saved */}
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <label for="water" style={{ paddingRight: "5px" }}> Water Saved (L) </label>
                            <input type="number" id="water" name="water" min="0" step=".001" style={{width:"140px"}}></input>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {/* Submit Button */}
                        <div style={{ display: "flex", alignItems: "flex-start", paddingTop: "15px"}}>
                            <MyButton style={{width: "100px"}}> Calculate </MyButton>
                        </div>
                    </div>
                </div>

                {/* Image area within Calc */}
                <div style={{ display: "flex", justifyContent: "space-around", flexGrow: 1, backgroundColor: "#808080" }}>
                    Hello
                </div>
            </div>
        </div>
    );

};

export default WaterSavedCalc;