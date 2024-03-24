import React from "react";
import { MyButton } from "../Common/CommonUI";


const FoodWasteCalc = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginLeft: "200px", marginRight: "200px", marginTop: "30px" }}> 
            {/* Heading outside of Calc */}
            <h1 style={{ display: "flex", justifyContent: "flex-end" }}>
                Food Waste
            </h1>

            {/* Block for inside Calc */}
            <div style={{ display: "flex", flexDirection: "row", padding: "10px 5px 10px 0px", border: "2px solid #000", borderRadius: "25px" }}>
                {/* Calc Options */}
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", flexGrow: 2 }}>
                    {/* Left Side */}
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {/* Drop down for what meat type */}
                        <div style={{ display: "flex", flexDirection: "column" }}>
                        <label for="meat"> Type of Meat </label>
                            <select name="meat" id="meat">
                                <option value="beef"> Beef </option>
                                <option value="chicken"> Chicken </option>
                                <option value="fish"> Fish </option>
                                <option value="lamb"> Lamb </option>
                                <option value="pork"> Pork </option>
                            </select>
                        </div>
                    </div>

                    {/* Right Side */}                    
                    <div style={{ display: "flex", flexDirection: "column" }}> 
                        {/* Input for weight of meat */}
                        <div style={{ display: "flex", flexDirection: "column", paddingBottom: "5px" }}>
                            <label for="meatWeight" style={{ paddingRight: "5px" }}> Weight of Meat (Kg) </label>
                            <input type="number" id="meatWeight" name="meatWeight" min="0" step=".01" ></input>
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

export default FoodWasteCalc;