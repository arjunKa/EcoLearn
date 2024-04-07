import React, { useState, useEffect } from "react";
import Header from "../components/Homepage/header"
import JsonData from "../data/data.json"

const Home = (props) => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return(
    <div>
      <Header data={landingPageData.Header}/>
    </div>
  );
};

export default Home;