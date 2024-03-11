import React from "react";
import { styled } from "styled-components";
import treeImg from "../../public/treeImage.jpeg"

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
    return (
        <div style={{ display: "flex", flexDirection: "column" }}> 
            {/* Heading outside of Calc */}
            <h1 style={{ display: "flex", justifyContent: "flex-end", padding: "0rem 5rem 0rem 0rem" }}>
                Trees Planted!
            </h1>
            {/* Block for inside Calc */}
            <div style={{ display: "flex", flexDirection: "row", padding: "10px 5px 10px 20px", border: "2px solid #000", borderRadius: "25px" }}>
                {/* Calc Options */}
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", flexGrow: 1 }}>
                    {/* left side */}
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {/* Drop down menu for type of tree */}
                        <div style={{display: "flex", flexDirection: "column", padding: "10px" }}>
                            <label for="trees"> Type of Tree </label>
                            <select name="trees" id="trees" style={{ width: "170px" }}>
                                <option> </option>
                                <option value="spruce"> Spruce </option>
                                <option value="birch"> Birch </option>
                                <option value="oak"> Oak </option>
                                <option value="maple"> Maple </option>
                            </select>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div style={{ display: "flex", flexDirection: "column", paddingBottom: "10px" }}>
                        {/* Input box for Quantity */}
                        <form style={{ padding: "1.5rem 0" }}>
                            <label for="numOfTrees" style={{ padding: "0rem 1rem" }}> Quantity Planted </label>
                            <input type="text" id="numOfTrees" name="numOfTrees"></input>
                        </form>

                        {/* Submit Button */}
                        <MyButton>Submit</MyButton>

                    </div>
                </div>

                {/* Image area within Calc */}
                <div style={{ display: "flex", justifyContent: "space-around", flexGrow: 1}}>
                   <img src={treeImg} style={{ width: "70%", height: "70%" }}></img>
                </div>

            </div>
            
        </div>
    );
};

export default TreesCalc;