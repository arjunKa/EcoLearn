import React from "react";

{/* What type of Item donated */}
{/* weight of item donated (Kg) */}

const ItemsDonatedCalc = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginLeft: "200px", marginRight: "200px", marginTop: "30px" }}>
            {/* Heading outside of Calc */}
            <h1 style={{ display: "flex", justifyContent: "flex-end" }}>
                Items Donated
            </h1>

            {/* Block for inside Calc */}
            <div style={{ display: "flex", flexDirection: "row", padding: "10px 5px 10px 0px", border: "2px solid #000", borderRadius: "25px" }}>
                {/* Calc Options */}
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", flexGrow: 2 }}>

                    {/* Left Side */}
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {/* Item Donated */}
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <label for="itemDonated"> Item Donated </label>
                            <select name="itemDonated" id="itemDonated">
                                <option value="clothing"> Clothing </option>
                                <option value="food"> Food </option>
                                <option value="toys"> Toys </option>
                            </select>
                        </div>    
                    </div>

                    {/* Right Side */}                    
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {/* Input for weight of items */}
                        <div style={{ display: "flex", flexDirection: "column", paddingBottom: "5px" }}>
                            <label for="itemWeight" style={{ paddingRight: "5px" }}> Weight (Kg) </label>
                            <input type="number" id="itemWeight" name="itemWeight" min="0" step=".01" ></input>
                        </div>

                        {/* Submit Button */}
                        <div style={{ display: "flex", alignItems: "flex-start"}}>
                            {/* <MyButton style={{width: "100px"}}> Calculate </MyButton> */}
                        </div>
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

export default ItemsDonatedCalc;