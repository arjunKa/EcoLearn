import React from "react";
import { Form } from "react-router-dom";

const TreesCalc = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}> 
            {/* Heading outside of Calc */}
            <h1 style={{ display: "flex", justifyContent: "flex-end", padding: "0rem 5rem 0rem 0rem" }}>
                Trees Planted!
            </h1>
            {/* Block for inside Calc */}
            <div style={{ display: "flex", flexDirection: "row", padding: "0.5rem 5rem" }}>
                {/* Calc Options */}
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", flexGrow: 1, backgroundColor: "#515579" }}>
                    {/* left side */}
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {/* Drop down menu for type of tree */}
                        <div style={{display: "flex", flexDirection: "column", padding: "1rem" }}>
                            <label for="trees"> Type of Tree </label>
                            <select name="trees" id="trees">
                                <option> </option>
                                <option value="spruce"> Spruce </option>
                                <option value="birch"> Birch </option>
                                <option value="oak"> Oak </option>
                                <option value="maple"> Maple </option>
                            </select>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div style={{ display: "flex", flexDirection: "column"}}>
                        {/* Input box for Quantity */}
                        <form style={{ padding: "1.5rem 0" }}>
                            <label for="numOfTrees" style={{ padding: "0rem 1rem" }}> Quantity Planted </label>
                            <input type="text" id="numOfTrees" name="numOfTrees"></input>
                        </form>
                    </div>
                </div>

                {/* Image area within Calc */}
                <div style={{ display: "flex", flexGrow: 1, backgroundColor: "#000000" }}>
                    image
                </div>

            </div>
            
        </div>
    );
};

export default TreesCalc;