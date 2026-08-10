import { Link } from "react-router-dom";
import "../Common/Common.css";
import { APP_BASE_PATH } from "../../config/appConfig";
import heroImage from "../../images/headerImage.jpeg";

const Header = (props) => {
  return (
    <section className="intro">
      <div className="intro__backdrop" />
      <div className="intro__content">
        <div className="intro__copy">
          <span className="intro__eyebrow">Climate learning, made practical</span>
          <div className="intro__brand">
            <img
              src={`${APP_BASE_PATH}ecoLearn.svg`}
              alt="EcoLearn logo"
              className="intro__logo"
            />
            <span className="intro__brand-text">EcoLearn</span>
          </div>
          <h1>{props.data ? props.data.title : "Loading"}</h1>
          <p>{props.data ? props.data.paragraph : "Loading"}</p>
          <div className="intro__actions">
            <Link to="/tools" className="intro__button intro__button--primary">
              Open Tools
            </Link>
            <Link
              to="/resources"
              className="intro__button intro__button--secondary"
            >
              Browse Resources
            </Link>
          </div>
          <div className="intro__stats">
            <div className="intro__stat-card">
              <strong>Frontend-only ready</strong>
              <span>Runs from repo data on GitHub Pages.</span>
            </div>
            <div className="intro__stat-card">
              <strong>Backend optional</strong>
              <span>Switch to API mode whenever you want live data.</span>
            </div>
            <div className="intro__stat-card">
              <strong>Built to explore</strong>
              <span>Carbon tools, explainers, and impact references in one place.</span>
            </div>
          </div>
        </div>
        <div className="intro__visual">
          <div className="intro__image-frame">
            <img src={heroImage} alt="Lush green leaves with sunlight" className="intro__image" />
          </div>
          <div className="intro__note">
            <span className="intro__note-label">What EcoLearn does</span>
            <p>
              Turn small everyday choices into carbon numbers people can
              understand and act on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
