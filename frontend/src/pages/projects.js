import React, {useState} from "react";
import VehicleEmmisions from "../components/Projects/vehicleEmission";

const Projects = () => {

    const [grade, setGrade] = useState("default");
    const handleChange = (event) => {
        setGrade(event.target.value);
    };

    function GradeRange() {
        if (grade === "default"){
            return(
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                    <VehicleEmmisions/>
                    <div style={{ display: "flex", flexDirection: "row", border: "2px solid #000", borderRadius: "25px", width: "100%",  margin: "10px 35px 0px 35px"}}> 
                        Part 2
                    </div>
                </div>
            );
        } else if (grade === "gr1-3") {

        } else if (grade === "gr4-5") {

        } else if (grade === "gr6-8") {

        } else if (grade === "gr9-12"){

        } else {
            return null;
        }
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", padding: "25px 25px", height: "100vh" }}>
            <h1> This page is to display the Projects! </h1>

            {/* drop down menu to choose grade group */}
            <div style={{display: "flex", flexDirection: "row", paddingTop: "25px" }}>
                <label for="gradeFilter" style={{ paddingRight: "7px" }}> Grade Range </label>
                <select name="gradeFilter" id="gradeFilter" onChange={handleChange}> 
                    <option value="default"> </option>
                    <option value="gr1-3"> Grades 1 - 3 </option>
                    <option value="gr4-5"> Grades 4 - 5 </option>
                    <option value="gr6-8"> Grades 6 - 8 </option>
                    <option value="gr9-12"> Grades 9 - 12 </option>
                </select>
            </div>

            {/* Display individual project components */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
                <GradeRange/>
            </div>

        </div>
    );
};

export default Projects;