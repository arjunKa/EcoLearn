import React from "react";
// import { MyButton } from "../../Common/CommonUI";
// import carImg from "../../public/carImage.jpg"


const VehicleEmissionCalc = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginLeft: "200px", marginRight: "200px", marginTop: "30px" }}>
            {/* Heading outside of Calc */}
            <h1 style={{ display: "flex", justifyContent: "flex-end" }}> 
                Car Emission 
            </h1>

            {/* Block for inside Calc */}
            <div style={{ display: "flex", flexDirection: "row", padding: "10px 5px 10px 10px", border: "2px solid #000", borderRadius: "25px" }}>
                {/* Calc Options */}
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", flexGrow: 2 }}>
                    {/* Left Side */}
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {/* Drop down for type of Car driven */}
                        <div style={{ display: "flex", flexDirection: "column", paddingBottom: "5px" }}>
                            <label for="car"> Type of Car </label>
                            <select name="car" id="car" style={{ width: "220px"}}> 
                                <option value="fseries"> Ford F-Series Pickup Truck</option>
                                <option value="ram"> Ram Pickup Truck</option>
                                <option value="civic"> Honda Civic </option>
                                <option value="sierra"> GMC Sierra </option>
                                <option value="silverado"> Chevorlet Silverado </option>
                                <option value="rav4"> Toyota Rav4 </option>
                                <option value="crv"> Honda CRV </option>
                                <option value="corolla"> Toyota Corolla </option>
                                <option value="ford_escape"> Ford Escape </option>
                                <option value="dodge_caravan"> Dodge Grand Caravan </option>
                            </select>
                        </div>
                    </div>  

                    {/* Right Side */}                    
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {/* Drop down for type of Car driven */}
                        <div style={{ display: "flex", flexDirection: "column", paddingBottom: "5px" }}>
                            <label for="kmDriven" style={{ paddingRight: "5px" }}> Distance saved (km) </label>
                            <input type="number" id="kmDriven" name="kmDriven" min="0" step=".01" style={{width:"180px"}}></input>  
                        </div>

                        {/* Submit Button */}
                        <div style={{ display: "flex", alignItems: "flex-start"}}>
                            {/* <MyButton style={{width: "100px"}}> Calculate </MyButton> */}
                        </div>
                    </div>
                </div>

                {/* Image area within Calc */}
                <div style={{ display: "flex", justifyContent: "space-around", flexGrow: 1,  marginLeft: "30px" }}>
                    {/* <img src={carImg} style={{ width:"60%", height: "90%", paddingTop: "35px"}}></img> */}
                </div>
            </div>

        </div>
    );

};

export default VehicleEmissionCalc;