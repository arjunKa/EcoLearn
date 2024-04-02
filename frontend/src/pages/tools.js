import React, { useState } from "react";
import TreesCalc from "../components/Calculators/Trees/TreesCalc";
import GardenCalc from "../components/Calculators/Garden/GardenCalc";
import WaterSavedCalc from "../components/Calculators/waterSavedCalc";
import FoodWasteCalc from "../components/Calculators/FoodWaste/FoodWasteCalc";
import VehiclesCalc from "../components/Calculators/Vehicles/VehiclesCalc";
import RecyclingCalc from "../components/Calculators/recyclingCalc";
import RenewableEnergyCalc from "../components/Calculators/renewableEnergyCalc";
import {

    Input,

} from 'reactstrap';
import ItemsDonatedCalc from "../components/Calculators/itemsDonatedCalc";
import './Tools.css'

const Tools = () => {

    const [calc, setCalc] = useState("treesPlanted");
    const handleChange = (event) => {
        setCalc(event.target.value);
    };

    function Calculator() {
        if (calc === "treesPlanted") {
            return <TreesCalc />
        } else if (calc === "garden") {
            return <GardenCalc />
        } else if (calc === "water") {
            return <WaterSavedCalc />
        } else if (calc === "foodWaste") {
            return <FoodWasteCalc />
        } else if (calc === "carEmissions") {
            return <VehiclesCalc />
        } else if (calc === "recycling") {
            return <RecyclingCalc />
        } else if (calc === "energy") {
            return <RenewableEnergyCalc />
        } else if (calc === "items") {
            return <ItemsDonatedCalc />
        } else {
            return null;
        }
    }

    return (
        <div style={{ padding: "25px 25px" }} className="page">
            <h1 style={{ color: "#515799" }}>
                This page is for the Tools!
            </h1>

            {/* Drop down filters to decide which calculator */}

            {/* Right Filter Side (Filter by specific Calc in left side filter) */}
            <div>
                <label htmlFor="calc"> Tool Filter </label>
                <Input type="select" name="calc" id="calc" onChange={handleChange} style={{ width: "250px" }}>
                    <option value="treesPlanted"> Trees </option>
                    <option value="garden"> Garden </option>
                    <option value="recycling"> Recycling </option>
                    <option value="foodWaste"> Food Waste </option>
                    <option value="carEmissions"> Car Emissions </option>
                    <option value="water"> Water Saved </option>
                    <option value="energy"> Renewable Energy </option>
                    <option value="items"> Items Donated </option>
                </Input>
            </div>


            {/* Where Calculators are displayed */}
            <div className="calculator">
                <Calculator />
            </div>
        </div>
    );
};

export default Tools;