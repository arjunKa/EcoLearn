import React from "react";
import { styled } from "styled-components";

const RecyclingCalc = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginLeft: "200px", marginRight: "200px", marginTop: "30px" }}>                    {/* Heading outside of Calc */}
            {/* Heading outside of Calc */}
            <h1 style={{ display: "flex", justifyContent: "flex-end" }}>
                Recycling
            </h1>

            {/* Block for inside Calc */}
            <div style={{ display: "flex", flexDirection: "row", padding: "10px 5px 10px 20px", border: "2px solid #000", borderRadius: "25px" }}>
                {/* Calc Options */}
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", flexGrow: 2 }}>
                    {/* Left Side */}
                    <div>

                    </div>

                    {/* Right Side */}                    
                    <div> 
                        
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