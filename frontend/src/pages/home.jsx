import { useEffect, useState } from "react";
import Header from "../components/Homepage/header";
import JsonData from "../data/data.json";

const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);

    const previousBodyBackground = document.body.style.background;
    document.body.style.background = "#f4f0e8";

    return () => {
      document.body.style.background = previousBodyBackground;
    };
  }, []);

  return (
    <div className="home-page">
      <div className="home-page__inner">
        <Header data={landingPageData.Header} />
      </div>
    </div>
  );
};

export default Home;
