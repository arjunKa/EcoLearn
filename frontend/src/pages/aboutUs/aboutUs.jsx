import React from "react";
import { Input, Card } from "reactstrap";

import AboutUsCard from "./aboutUs_components/aboutUsCard";

const AboutUs = () => {
  return (
    <div className="page">
      <h1 className="main_header">About Us</h1>

      <div style={{ margin: "25px 25px" }} className="">
        
        <AboutUsCard />

        {/* Right Filter Side (Filter by specific Calc in left side filter) */}


        {/* Where Calculators are displayed */}
       
      </div>
    </div>
  );
};

export default AboutUs;
