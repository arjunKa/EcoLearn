import { useState, useEffect } from "react";

import { Button, Card, Form, Spinner } from "reactstrap";

import RecycleForm from "./RecycleForm";
import ProgressBarRecycle from "./ProgressBarRecycle";
import RecycleCard from "./RecycleCard";
import { calculateRecycle } from "../../../services/ecolearnData";

const RecycleCalc = () => {
  const [calc, setCalc] = useState(""); // State for age input
  const [recycleData, setRecycleData] = useState([{}]); // State for storing recycle data
  const [submitDisabled, setSubmitDisabled] = useState(true); // State to control submit button disable/enable
  const [isFetching, setIsFetching] = useState(false);

  const handleCalcUpdate = (data) => {
    setRecycleData(data);
  };

  const handleButtonClick = async () => {
    try {
      setIsFetching(true);
      const res = await calculateRecycle(recycleData);
      setIsFetching(false);
      if (res.length === 0) {
        return;
      }
      setCalc(res);
    } catch (err) {
      setIsFetching(false);
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    // Check if any quantity field is empty

    const isAnyQuantityEmpty =
      !recycleData.value || recycleData.value.trim() === "";
    // Update the state to enable/disable submit button accordingly
    setSubmitDisabled(isAnyQuantityEmpty);
    console.log(isAnyQuantityEmpty);
  }, [recycleData]);

  return (
    <section className="calc-panel">
      <div className="calc-panel__heading">
        <span className="calc-panel__eyebrow">Calculator</span>
        <h2 className="calc-panel__title">Recycling</h2>
        <p className="calc-panel__subtitle">
          Choose a recycled material and its weight to estimate avoided carbon
          emissions from keeping it out of the waste stream.
        </p>
      </div>

      <Card className="calc-surface">
        <div className="calc_box">
          <RecycleCard />

          <div className="calc_box_form">
            <div className="calc_box_form_elements">
              <div>
                <RecycleForm onUpdate={(data) => handleCalcUpdate(data)} />
              </div>
              <div className="calc-actions">
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
                  Here is your estimated recycling-related carbon reduction.
                </p>
                <ProgressBarRecycle calc={calc} />
              </div>
            )}
          </div>
        </div>
      </Card>
    </section>
  );
};

export default RecycleCalc;
