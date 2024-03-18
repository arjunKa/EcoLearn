import React from "react";
import { styled } from "styled-components";
import { MyButton } from "../Common/CommonUI";


{/* Type of Item */}
{/* Weight in Kg Recycled */}


const RecyclingCalc = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginLeft: "200px", marginRight: "200px", marginTop: "30px" }}>             
            {/* Heading outside of Calc */}
            <h1 style={{ display: "flex", justifyContent: "flex-end" }}>
                Recycling
            </h1>

            {/* Block for inside Calc */}
            <div style={{ display: "flex", flexDirection: "row", padding: "10px 5px 10px 0px", border: "2px solid #000", borderRadius: "25px" }}>
                {/* Calc Options */}
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", flexGrow: 2 }}>
                    {/* Left Side */}
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {/* Drop down for what material to be recycled */}
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <label for="material"> Material Recycled </label>
                            <select name="material" id="material">
                                <option value="paper"> Paper </option>
                                <option value="glass"> Glass </option>
                                <option value="plastic"> Plastic </option>
                                <option value="metals"> Metals </option>
                                <option value="textile"> Textiles </option>
                                <option value="card"> Card?? </option>
                            </select>
                        </div>
                    </div>

                    {/* Right Side */}                    
                    <div style={{ display: "flex", flexDirection: "column" }}> 
                        {/* Input for weight of material */}
                        <div style={{ display: "flex", flexDirection: "column", paddingBottom: "5px" }}>
                            <label for="recycleWeight" style={{ paddingRight: "5px" }}> Weight of Material (Kg) </label>
                            <input type="number" id="recycleWeight" name="recycleWeight" min="0" step=".01" ></input>
                        </div>

                        {/* Submit Button */}
                        <div style={{ display: "flex", alignItems: "flex-start"}}>
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

export default RecyclingCalc;