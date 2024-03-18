import React from "react";
import { styled } from "styled-components";

{/* Type of Renewable Energy (Electricity Saved, Rainwater, Solar Panels) */}
{/* Question to ask how much  time of electricity saved, rainwater (oz), solar panel size*/}

const RenewableEnergyCalc = () => {
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
                        {/* Province/Territory */}
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <label for="province"> Province/Territory </label>
                            <select name="province" id="province">
                                <option value="ab"> Alberta </option>
                                <option value="bc"> Britsh Columbia </option>
                                <option value="mb"> Manitoba </option>
                                <option value="nb"> New Bruswick </option>
                                <option value="nl"> Newfoundland and Labrador </option>
                                <option value="nt"> Northwest </option>
                                <option value="ns"> Nova Scotia </option>
                                <option value="nu"> Nunavut </option>
                                <option value="on"> Ontario </option>
                                <option value="pe"> Prince Edward Island </option>
                                <option value="qc"> Quebec </option>
                                <option value="sk"> Saskatchewan </option>
                                <option value="yt"> Yukon </option>
                            </select>
                        </div>
                    </div>

                    {/* Right Side */}                    
                    <div style={{ display: "flex", flexDirection: "column" }}>

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

export default RenewableEnergyCalc;