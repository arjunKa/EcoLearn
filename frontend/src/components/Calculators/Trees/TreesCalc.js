import React, { useState, useEffect } from "react";

import {
    Button,
    CardImg, CardBody, CardText, CardTitle, CardSubtitle,
    Card, Form
} from "reactstrap";

import TreesForm from "./TreesForm";
import ProgressBarTrees from "./ProgressBarTrees";
import axios from "axios";
import TreesCard from "./TreesCard";

const TreesCalc = () => {

    const [calc, setCalc] = useState(''); // State for age input
    const [treeData, setTreeData] = useState([{}]); // State for storing tree data

    useEffect(() => {
        // Ensure at least one TreesForm is rendered initially
        if (treeData.length === 0) {
            setTreeData([{}]);
        }
    }, []);

    const handleCalcUpdate = (index, data) => {
        const updatedTreeData = [...treeData];
        updatedTreeData[index] = data;
        setTreeData(updatedTreeData);
    };

    const handleButtonClick = async () => {
        try {
            // Make your API request with the treeData array
            console.log(treeData);
            const res = await axios.post("/api/ecolearning/trees", { treeData });

            // Handle the response as needed
            console.log(res.data);
            setCalc(res.data);

        } catch (err) {
            console.error('Error fetching data:', err);
        }
    };

    const handleAddRow = () => {
        setTreeData([...treeData, {}]);
    };

    const handleDeleteRow = (index) => {
        const updatedTreeData = [...treeData];
        updatedTreeData.splice(index, 1);
        setTreeData(updatedTreeData);
    };

    return (
        <div>
            {/* Heading outside of Calc */}
            <h1 style={{ display: "flex", justifyContent: "flex-end" }}>
                Trees Planted
            </h1>

            {/* Block for inside Calc */}
            <Card>

                <div className="calc_box">
                    {/* Box of whole Calculator */}
                    <TreesCard />


                    {/* Calc Options */}
                    <div className="calc_box_form">

                        <div className="calc_box_form_elements">
                            {/* Add New TreesForm here */}
                            {treeData.map((_, index) => (
                                <div key={index}>
                                    <TreesForm onUpdate={(data) => handleCalcUpdate(index, data)} />
                                    {index !== 0 && <Button onClick={() => handleDeleteRow(index)}>Delete</Button>}
                                </div>
                            ))}
                            <Form>
                                <Button onClick={handleAddRow}>
                                    Add new row
                                </Button>
                            </Form>
                            <Form>
                                <Button onClick={handleButtonClick}>
                                    Submit
                                </Button>
                            </Form>
                        </div>

                        {/* Results shown here */}
                        {calc && (
                            <div style={{ border: '1px solid black' }}>
                                <h2>Result:</h2>
                                <p>Here is your calculation result.</p>
                                <ProgressBarTrees calc={calc} />

                                <p>{JSON.stringify(calc, null, 2)}</p>
                            </div>
                        )}


                    </div>
                </div>

            </Card>
        </div>
    );
};

export default TreesCalc;
