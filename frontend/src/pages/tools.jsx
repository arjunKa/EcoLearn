import { useEffect, useState } from "react";
import TreesCalc from "../components/Calculators/Trees/TreesCalc";
import GardenCalc from "../components/Calculators/Garden/GardenCalc";
import WaterSavedCalc from "../components/Calculators/WaterSaved/WaterSavedCalc";
import FoodWasteCalc from "../components/Calculators/FoodWaste/FoodWasteCalc";
import VehiclesCalc from "../components/Calculators/Vehicles/VehiclesCalc";
import RecyclingCalc from "../components/Calculators/Recycling/RecycleCalc";
import RenewableEnergyCalc from "../components/Calculators/renewableEnergyCalc";
import { Input } from "reactstrap";
import ItemsDonatedCalc from "../components/Calculators/itemsDonatedCalc";
import "./styles/Tools.css";

const Tools = () => {
  const [calc, setCalc] = useState("treesPlanted");

  useEffect(() => {
    const previousBodyBackground = document.body.style.background;
    document.body.style.background = "#f3f0e6";

    return () => {
      document.body.style.background = previousBodyBackground;
    };
  }, []);

  const toolOptions = [
    { value: "treesPlanted", label: "Trees" },
    { value: "garden", label: "Garden" },
    { value: "recycling", label: "Recycling" },
    { value: "foodWaste", label: "Food Waste" },
    { value: "carEmissions", label: "Vehicle Emissions" },
    { value: "water", label: "Water Saved" },
    { value: "energy", label: "Renewable Energy" },
    { value: "items", label: "Items Donated" },
  ];

  const handleChange = (event) => {
    setCalc(event.target.value);
  };

  function Calculator() {
    if (calc === "treesPlanted") {
      return <TreesCalc />;
    } else if (calc === "garden") {
      return <GardenCalc />;
    } else if (calc === "water") {
      return <WaterSavedCalc />;
    } else if (calc === "foodWaste") {
      return <FoodWasteCalc />;
    } else if (calc === "carEmissions") {
      return <VehiclesCalc />;
    } else if (calc === "recycling") {
      return <RecyclingCalc />;
    } else if (calc === "energy") {
      return <RenewableEnergyCalc />;
    } else if (calc === "items") {
      return <ItemsDonatedCalc />;
    } else {
      return null;
    }
  }

  return (
    <div className="tools-page">
      <section className="tools-hero">
        <span className="tools-hero__kicker">Interactive tools</span>
        <h1 className="tools-hero__title">Carbon calculators</h1>
        <p className="tools-hero__copy">
          Switch between EcoLearn calculators to explore how everyday actions
          connect to emissions, savings, and long-term climate impact.
        </p>
      </section>

      <section className="tools-selector-card">
        <div>
          <span className="tools-selector-card__label">Choose a calculator</span>
          <h2 className="tools-selector-card__title">Pick the scenario you want to explore</h2>
          <p className="tools-selector-card__copy">
            The selected tool updates below and uses either repo-backed data or
            the live API depending on your current app mode.
          </p>
        </div>
        <div className="tools-selector-card__control">
          <label className="tools-selector-card__field-label" htmlFor="calc">
            Active Tool
          </label>
          <Input
            className="tools-selector-card__select"
            id="calc"
            name="calc"
            onChange={handleChange}
            type="select"
            value={calc}
          >
            {toolOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Input>
        </div>
      </section>

      <div className="calculator">
        <Calculator />
      </div>
    </div>
  );
};

export default Tools;
