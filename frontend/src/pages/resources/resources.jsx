import React from "react";
import { Input, Card } from "reactstrap";
import ResourceCard from "./resources_components/resourceCard";

import "../styles/Resources.css";

const Resources = () => {
  return (
    <div style={{ padding: "25px 25px" }} className="page">
      <h1 style={{ color: "#515799" }}>Resources</h1>

      <div style={{ padding: "25px 25px" }} className="">
        <ResourceCard />

        {/* Right Filter Side (Filter by specific Calc in left side filter) */}


        {/* Where Calculators are displayed */}
       
      </div>
    </div>
  );
};

export default Resources;
