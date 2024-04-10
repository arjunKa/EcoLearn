import React, { useState, useEffect } from "react";

import {
    Button,
    Card, Form
} from "reactstrap";

import TreesForm from "./TreesForm";
import ProgressBarTrees from "./ProgressBarTrees";
import AxiosInstance from '../../Axios'
import TreesCard from "./TreesCard";

const TreesCalc = () => {

    const [calc, setCalc] = useState(''); // State for age input
    const [treeData, setTreeData] = useState([{}]); // State for storing tree data
    const [submitDisabled, setSubmitDisabled] = useState(true); // State to control submit button disable/enable

    useEffect(() => {
        // Ensure at least one TreesForm is rendered initially
        if (treeData.length === 0) {
            setTreeData([{}]);
        }
    }, []);

    useEffect(() => {
        // Check if any quantity field is empty
        
        const isAnyQuantityEmpty = treeData.some((item) => !item.age || item.age.trim() === '');
        // Update the state to enable/disable submit button accordingly
        setSubmitDisabled(isAnyQuantityEmpty);
    }, [treeData]);


    const handleCalcUpdate = (index, data) => {
        const updatedTreeData = [...treeData];
        updatedTreeData[index] = data;
        setTreeData(updatedTreeData);
    };

    const handleButtonClick = async () => {
        try {
            // Make your API request with the treeData array
            console.log(treeData);
            const res = await AxiosInstance.post("/api/ecolearning/trees/", { treeData });

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
                                <div key={index} className="calc_box_form_elements_row" >
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
                                <Button onClick={handleButtonClick} disabled={submitDisabled}>
                                    Submit
                                </Button>
                            </Form>
                        </div>

                        {/* Results shown here */}
                        {calc && (
                            <div>
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
