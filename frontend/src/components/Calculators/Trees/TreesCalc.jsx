import { useState, useEffect } from "react";

import { Button, Card, Form, Spinner } from "reactstrap";

import TreesForm from "./TreesForm";
import ProgressBarTrees from "./ProgressBarTrees";
import TreesCard from "./TreesCard";
import { calculateTrees } from "../../../services/ecolearnData";

const TreesCalc = () => {
  const [calc, setCalc] = useState("");
  const [treeData, setTreeData] = useState([{}]);
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (treeData.length === 0) {
      setTreeData([{}]);
    }
  }, []);

  useEffect(() => {
    const isAnyQuantityEmpty = treeData.some(
      (item) => !item.quantity || item.quantity.trim() === ""
    );
    setSubmitDisabled(isAnyQuantityEmpty);
  }, [treeData]);

  const handleCalcUpdate = (index, data) => {
    const updatedTreeData = [...treeData];
    updatedTreeData[index] = data;
    setTreeData(updatedTreeData);
  };

  const handleButtonClick = async () => {
    try {
      setIsFetching(true);
      const res = await calculateTrees(treeData);
      setCalc(res);
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setIsFetching(false);
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
    <section className="calc-panel">
      <div className="calc-panel__heading">
        <span className="calc-panel__eyebrow">Calculator</span>
        <h2 className="calc-panel__title">Trees Planted</h2>
        <p className="calc-panel__subtitle">
          Add one or more tree types to estimate how much carbon those plantings
          can absorb over their lifetime.
        </p>
      </div>

      <Card className="calc-surface">
        <div className="calc_box">
          <TreesCard />

          <div className="calc_box_form">
            <div className="calc_box_form_elements">
              {treeData.map((_, index) => (
                <div key={index} className="calc_box_form_elements_row">
                  <TreesForm
                    onUpdate={(data) => handleCalcUpdate(index, data)}
                  />
                  {index !== 0 && (
                    <Button
                      style={{ marginTop: "10px" }}
                      onClick={() => handleDeleteRow(index)}
                    >
                      Delete
                    </Button>
                  )}
                </div>
              ))}
              <div className="calc-actions">
                <Form>
                  <Button onClick={handleAddRow}>Add another tree type</Button>
                </Form>
                <Form>
                  <Button onClick={handleButtonClick} disabled={submitDisabled}>
                    Calculate impact
                  </Button>
                </Form>
              </div>
            </div>
            {isFetching && (
              <div className="calc-spinner-wrap">
                <Spinner color="primary">Loading...</Spinner>
              </div>
            )}
            {calc && (
              <div className="calc-results">
                <h3 className="calc-results__title">Results</h3>
                <p className="calc-results__copy">
                  Here is your estimated carbon absorption.
                </p>
                <ProgressBarTrees calc={calc} />
              </div>
            )}
          </div>
        </div>
      </Card>
    </section>
  );
};

export default TreesCalc;
