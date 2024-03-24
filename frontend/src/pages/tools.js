import React, { useState } from "react";
import TreesCalc from "../components/Calculators/Trees/TreesCalc"
import GardenCalc from "../components/Calculators/gardenCalc"
import WaterSavedCalc from "../components/Calculators/waterSavedCalc"
import FoodWasteCalc from "../components/Calculators/foodWasteCalc";
import CarEmissionCalc from "../components/Calculators/carEmissionCalc";
import RecyclingCalc from "../components/Calculators/recyclingCalc";
import RenewableEnergyCalc from "../components/Calculators/renewableEnergyCalc";
import {
    Form,
    Label,
    FormGroup,
    Input,
    Col, Row,
    Button, option
  
  } from 'reactstrap';

const Tools = () => {

    const [calc, setCalc] = useState("treesPlanted");
    const handleChange = (event) => {
        setCalc(event.target.value);
    };

    function Calculator() {
        if (calc === "treesPlanted") {
            return <TreesCalc/>
        } else if (calc === "garden") {
            return <GardenCalc/>
        } else if (calc === "water") {
            return <WaterSavedCalc/>
        } else if (calc === "foodWaste") {
            return <FoodWasteCalc/>
        } else if (calc === "carEmissions") {
            return <CarEmissionCalc/>
        } else if (calc === "recycling"){
            return <RecyclingCalc/>
        } else if (calc === "energy"){
            return <RenewableEnergyCalc/>
        } else {
            return null;
        }
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", padding: "25px 25px", height: "100vh" }}>
            <h1 style={{ color: "#515799"}}>
                This page is for the Tools!
            </h1>

            {/* Drop down filters to decide which calculator */}
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", paddingBottom: "25px" }}>
    

                {/* Right Filter Side (Filter by specific Calc in left side filter) */}
                <div style={{ display: "flex", flexDirection: "column", paddingRight: "100px" }}>
                    <label htmlFor="calc"> Tool Filter </label>
                    <Input type="select" name="calc" id="calc" onChange={handleChange} style={{ width: "250px" }}>
                        <option value="treesPlanted"> Trees </option>
                        <option value="garden"> Garden </option>
                        <option value="recycling"> Recycling </option>
                        <option value="foodWaste"> Food Waste </option>
                        <option value="carEmissions"> Car Emissions </option>
                        <option value="water"> Water Saved </option>
                        <option value="energy"> Renewable Energy </option>
                    </Input>
                </div>
            </div>

            {/* Where Calculators are displayed */}
            <Calculator/>
        </div>
    );
};

export default Tools;