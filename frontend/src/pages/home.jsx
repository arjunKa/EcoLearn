import React, { useState, useEffect } from "react";
import Header from "../components/Homepage/header";
import JsonData from "../data/data.json";
import "../components/logo/logo.css";
// import Logo from "../components/logo/Logo";

const Home = (props) => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  document.body.style = "background: #2c2c2c;";

  return (
    <div class="container">
      <div className="homepage">
        {/* <div><img src = "/ecoLearn.svg" alt="My Happy SVG" className="logo"/></div> */}
        <Header data={landingPageData.Header} />
      </div>
    </div>
  );
};

export default Home;
