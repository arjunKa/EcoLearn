import React, { useState } from "react";
import TreesCalc from "../components/Calculators/treesCalc"
import GardenCalc from "../components/Calculators/gardenCalc"
import WaterSavedCalc from "../components/Calculators/waterSavedCalc"
import FoodWasteCalc from "../components/Calculators/foodWasteCalc";
import CarEmissionCalc from "../components/Calculators/carEmissionCalc";
import RecyclingCalc from "../components/Calculators/recyclingCalc";
import RenewableEnergyCalc from "../components/Calculators/renewableEnergyCalc";

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
                {/* Left Filter Side (Filter by type of Calc??) */}
                <div style={{ display: "flex", flexDirection: "column", paddingLeft: "100px" }}>
                    <label for="calcType"> Filter Type </label>
                    <select name="calcType" id="calcType" style={{ width: "250px" }}>
                        <option> </option>
                        <option value="planting"> Planting </option>
                        <option value="automotive"> Automotive </option>
                        <option value="electricity"> Electricity </option>
                    </select>
                </div>

                {/* Right Filter Side (Filter by specific Calc in left side filter) */}
                <div style={{ display: "flex", flexDirection: "column", paddingRight: "100px" }}>
                    <label for="calc"> Tool Filter </label>
                    <select name="calc" id="calc" onChange={handleChange} style={{ width: "250px" }}>
                        <option value="treesPlanted"> Trees </option>
                        <option value="garden"> Garden </option>
                        <option value="recycling"> Recycling </option>
                        <option value="foodWaste"> Food Waste </option>
                        <option value="carEmissions"> Car Emissions </option>
                        <option value="water"> Water Saved </option>
                        <option value="energy"> Renewable Energy </option>
                    </select>
                </div>
            </div>

            {/* Where Calculators are displayed */}
            <Calculator/>
        </div>
    );
};

export default Tools;