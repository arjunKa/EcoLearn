import React from "react";
import TreesCalc from "../components/Calculators/TreesCalc"

const Tools = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                // justifyContent: "centre",
                // alignItems: "centre",
                height: "100vh",
            }}
        >
            <h1
                style={{
                    color: "#515799",
                }}
            >
                This page is for the Tools!
            </h1>
            <div>
                Hello
            </div>
            <div>Hello</div>
            <TreesCalc/>
        </div>
    );
};

export default Tools;