import React from "react";
import TreesCalc from "../components/Calculators/TreesCalc"

const Tools = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                padding: "25px 25px",
                height: "100vh",
            }}
        >
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
                    <select name="calc" id="calc" style={{ width: "250px" }}>
                        <option> </option>
                        <option value="treesPlanted"> Trees </option>
                        <option value="garden"> Garden </option>
                        <option value="energySaved"> Energy Saved </option>
                        <option value="gasReduced"> Gas Saved </option>
                    </select>
                </div>
            </div>

            {/* Where Calculators are displayed */}
            <TreesCalc/>
        </div>
    );
};

export default Tools;