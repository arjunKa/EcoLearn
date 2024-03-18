import React from "react";
import { MyButton } from "../Common/CommonUI";
import treeImg from "../../public/treeImage.jpeg"

const TreesCalc = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginLeft: "200px", marginRight: "200px", marginTop: "30px" }}> 
            {/* Heading outside of Calc */}
            <h1 style={{ display: "flex", justifyContent: "flex-end" }}>
                Trees Planted
            </h1>
            {/* Block for inside Calc */}
            <div style={{ display: "flex", flexDirection: "row", padding: "10px 5px 10px 20px", border: "2px solid #000", borderRadius: "25px" }}>
                {/* Calc Options */}
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", flexGrow: 1 }}>
                    {/* left side */}
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {/* Drop down menu for type of tree */}
                        <div style={{display: "flex", flexDirection: "column", padding: "10px" }}>
                            <label for="trees"> Species </label>
                            <select name="trees" id="trees" style={{ width: "170px" }}>
                                <option> </option>
                                <option value="basswood"> Basswood </option>
                                <option value="beech"> Beech </option>
                                <option value="birch"> Birch </option>
                                <option value="blackCherry"> Black Cherry </option>
                                <option value="blackWalnut"> Black Walnut </option>
                                <option value="cedar"> Cedar </option>
                                <option value="citrus"> Citrus </option>
                                <option value="douglasFir"> Douglas Fir </option>
                                <option value="eucalyptus"> Eucalyptus </option>
                                <option value="fruit"> Fruit </option>
                                <option value="bamboo"> Giant Bamboo </option>
                                <option value="locust"> Locust </option>
                                <option value="mahogany"> Mahogany </option>
                                <option value="maple"> Maple </option>
                                <option value="neem"> Neem </option>
                                <option value="nut"> Nut </option>
                                <option value="oak"> Oak </option>
                                <option value="paulownia"> Paulownia </option>
                                <option value="pine"> Pine </option>
                                <option value="poplar"> Poplar </option>
                                <option value="rosewood"> Rosewood </option>
                                <option value="sequoia"> Sequoia </option>
                                <option value="spruce"> Spruce </option>
                                <option value="sugarMaple"> Sugar Maple </option>
                                <option value="teak"> Teak </option>
                                <option value="willow"> Willow </option>
                            </select>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div style={{ display: "flex", flexDirection: "column", paddingBottom: "10px" }}>
                        {/* Input box for Age */}
                        <form style={{ paddingTop: "37px", paddingBottom: "20px" }}>
                            <label for="age" style={{ padding: "0rem 1rem" }}> Age </label>
                            <input type="number" min="0" id="age" name="age" style={{ width: "100px"}}></input>
                        </form>

                        {/* Submit Button */}
                        <MyButton style={{margin: "0px 60px", width: "100px"}}>Submit</MyButton>

                    </div>
                </div>

                {/* Image area within Calc */}
                <div style={{ display: "flex", justifyContent: "space-around", flexGrow: 1 }}>
                   <img src={treeImg} style={{ width: "70%", height: "70%" }}></img>
                </div>

            </div>
            {/* Reference Link */}
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
                Reference Link: 
                <a href="https://treecanada.ca/carbon-calculator/" style={{ paddingLeft: "5px"}}> https://treecanada.ca/carbon-calculator/ </a>
            </div>
        </div>    
    );
};

export default TreesCalc;
