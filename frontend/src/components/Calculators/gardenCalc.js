import React, {useState} from "react";
import { styled } from "styled-components";
import { MyButton } from "./Trees/TreesCalc";

const GardenCalc = () => {

    const [garden, setGarden] = useState("grass");
    const handleChange = (event) => {
        setGarden(event.target.value);
    };

    function PlantType () {
        if (garden === "grass"){
            return (
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                    <div style={{ display: "flex", flexDirection: "column", paddingBottom: "5px"}}>
                        {/* Area of grass patch */}
                        <form style={{display: "flex", flexDirection: "column"}}>
                            <label for="grassArea" style={{paddingRight: "5px" }}> Area of Grass (m^2) </label>
                            <input type="number" id="grassArea" name="grassArea" min="0" step=".01" style={{ width: "180px"}}></input>
                        </form>
                    </div>

                    {/* Submit Button */}
                    <div style={{ display: "flex", alignItems: "flex-start"}}>
                        <MyButton> Calculate </MyButton>
                    </div>
                </div>
            );
        } else if (garden === "shrub") {
            return (
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                    <div style={{ display: "flex", flexDirection: "column", paddingBottom: "5px"}}> 
                        {/* Number of Shrubs */}
                        <form style={{display: "flex", flexDirection: "column"}}>
                            <label for="numShrubs" style={{paddingRight: "5px" }}> # of Shrubs Planted </label>
                            <input type="number" id="numShrubs" name="numShrubs" min="0" style={{ width: "180px"}}></input>
                        </form>
                    </div>

                    {/* Submit Button */}
                    <div style={{ display: "flex", alignItems: "flex-start"}}>
                        <MyButton> Calculate </MyButton>
                    </div>
                </div>
            );
        } else if (garden === "flower") {
            return (
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>  
                    <div style={{ display: "flex", flexDirection: "column", paddingBottom: "5px"}}>
                        {/* Weight of flower planted */}
                        <form style={{display: "flex", flexDirection: "column"}}>
                            <label for="flowerWeight" style={{paddingRight: "5px" }}> Weight of flowers (lb)?? </label>
                            <input type="text" id="flowerWeight" name="flowerWeight" min="0" style={{ width: "180px"}}></input>
                        </form>
                    </div>

                    {/* Submit Button */}
                    <div style={{ display: "flex", alignItems: "flex-start"}}>
                        <MyButton> Calculate </MyButton>
                    </div>
                </div>
            );
        } else if (garden === "vegetables") {
            return (
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                    <div style={{ display: "flex", flexDirection: "column", paddingBottom: "5px"}}>
                        {/* Weight of vegetables planted */}
                        <form style={{display: "flex", flexDirection: "column"}}>
                            <label for="vegWeight" style={{paddingRight: "5px" }}> Weight of Veggies (lb)?? </label>
                            <input type="text" id="vegWeight" name="vegWeight" min="0" style={{ width: "180px"}}></input>
                        </form>
                    </div>
                    
                    {/* Submit Button */}
                    <div style={{ display: "flex", alignItems: "flex-start"}}>
                        <MyButton> Calculate </MyButton>
                    </div>

                </div>
            );
        } else {
            return null;
        }
    }

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
                            <select name="plant" id="plant" onChange={handleChange} style={{ width: "170px" }}>
                                <option value="grass"> Grass </option>
                                <option value="shrub"> Shrub </option>
                                <option value="flower"> Flowers/Small Plants </option>
                                <option value="vegetables"> Vegetable </option>
                            </select>
                        </div>

                    </div>

                    {/* Right Side */}
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <PlantType/>
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