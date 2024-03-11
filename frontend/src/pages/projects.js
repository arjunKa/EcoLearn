import React from "react";
import VehicleEmmisions from "../components/Projects/vehicleEmission";

const Projects = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", padding: "25px 25px", height: "100vh" }}>
            <h1> This page is to display the Projects! </h1>

            {/* drop down menu to choose grade group */}
            <div style={{display: "flex", flexDirection: "row", paddingTop: "25px" }}>
                <label for="gradeFilter" style={{ paddingRight: "7px" }}> Grade Range </label>
                <select name="gradeFilter" id="gradeFilter"> 
                    <option> </option>
                    <option value="gr1-3"> Grades 1 - 3 </option>
                    <option value="gr4-5"> Grades 4 - 5 </option>
                    <option value="gr6-8"> Grades 6 - 8 </option>
                    <option value="gr9-12"> Grades 9 - 12 </option>
                </select>
            </div>

            {/* Display individual project components */}
            <div>
                <VehicleEmmisions/>
            </div>

        </div>
    );
};

export default Projects;