import { useEffect } from "react";
import ResourceCard from "./resources_components/resourceCard";

import "../styles/Resources.css";

const Resources = () => {
  useEffect(() => {
    const previousBodyBackground = document.body.style.background;
    document.body.style.background = "#eef1e7";

    return () => {
      document.body.style.background = previousBodyBackground;
    };
  }, []);

  return (
    <div className="resources-page">
      <section className="resources-hero">
        <span className="resources-hero__kicker">Knowledge hub</span>
        <h1 className="resources-hero__title">Resources</h1>
        <p className="resources-hero__copy">
          Browse the datasets powering EcoLearn and the outside references that
          support each calculator.
        </p>
      </section>

      <div className="resources-page__content">
        <ResourceCard />
      </div>
    </div>
  );
};

export default Resources;
