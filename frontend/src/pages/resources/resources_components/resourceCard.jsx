import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
} from "reactstrap";
import { DATA_SOURCE_MODE } from "../../../config/appConfig";
import { getCollectionLink } from "../../../services/ecolearnData";
import foodWasteImage from "../../../images/foodWasteImage.jpg";
import potatoImage from "../../../images/potatoImage.jpg";
import treeImage from "../../../images/treeImage.jpeg";

const dataCards = [
  {
    title: "Trees Dataset",
    subtitle: "Carbon capture by tree type",
    body:
      "Explore how different tree species contribute to long-term carbon absorption, from common planted varieties to large mature trees.",
    image: treeImage,
    link: getCollectionLink("trees"),
  },
  {
    title: "Gardens Dataset",
    subtitle: "Home-grown carbon impact",
    body:
      "See the repo or API values behind grass, shrubs, and small plant calculations so the garden tool stays transparent and editable.",
    image: potatoImage,
    link: getCollectionLink("gardens"),
  },
  {
    title: "Food Dataset",
    subtitle: "Diet-related emissions",
    body:
      "Review the reference values behind meat-related carbon estimates used in the food waste calculator and compare category intensity.",
    image: foodWasteImage,
    link: getCollectionLink("food"),
  },
];

const resourceGroups = [
  {
    title: "Carbon Basics",
    accent: "sage",
    links: [
      "https://www.omnicalculator.com/ecology",
      "https://www.ecomatcher.com/how-to-calculate-co2-sequestration/",
      "https://www.co2everything.com",
      "https://co2.myclimate.org/en/calculate_emissions",
      "https://www.ecomatcher.com/seeding-the-future-how-innovation-in-climate-tech-is-redefining-green-solutions/",
    ],
  },
  {
    title: "Trees",
    accent: "forest",
    links: [
      "https://treecanada.ca/carbon-calculator/",
      "https://www.fortomorrow.eu/en/blog/co2-tree",
      "https://8billiontrees.com/carbon-offsets-credits/carbon-ecological-footprint-calculators/how-much-carbon-does-a-tree-capture/",
      "https://bwi.info/start.aspx",
      "https://treeplantation.com/index.html",
    ],
  },
  {
    title: "Garden",
    accent: "earth",
    links: [
      "https://www.researchgate.net/publication/282543110_Modeling_Carbon_Sequestration_in_Home_Lawns",
      "https://www.researchgate.net/publication/46171031_Quercus_ilex_L_carbon_sequestration_capability_related_to_shrub_size",
    ],
  },
  {
    title: "Recycling & Waste",
    accent: "teal",
    links: [
      "https://www.canada.ca/en/environment-climate-change/services/environmental-indicators/solid-waste-diversion-disposal.html",
      "https://recyclewits.com/tools-calculators/carbon-footprint-savings/#:~:text=For%20every%20kg%2Flbs%20of,kg%2F12.92%20lbs%20of%20CO2",
    ],
  },
  {
    title: "Food Waste",
    accent: "rose",
    links: [
      "https://myemissions.green/food-carbon-footprint-calculator/",
      "https://www.omnicalculator.com/ecology/vegan-footprint",
      "https://www.omnicalculator.com/ecology/meat-footprint",
    ],
  },
  {
    title: "Vehicle Emissions",
    accent: "slate",
    links: [
      "https://www.google.com/url?q=https://ravalli.us/DocumentCenter/View/229/Vehicle-Idling%23:~:text%3DAn%2520hour%2520of%2520automobile%2520idling,of%2520CO2%2520into%2520the%2520air&sa=D&source=editors&ust=1712890750074375&usg=AOvVaw2HADZ5Y2blmDrpLpi-KISm",
    ],
  },
  {
    title: "Water Saved",
    accent: "blue",
    links: [
      "https://www.theguardian.com/environment/2007/aug/02/ethicalliving.ethicalliving#:~:text=Anyway%2C%20one%20litre%20of%20water,car%20produces%20over%2080%20kilometres",
    ],
  },
  {
    title: "Renewable Energy",
    accent: "gold",
    links: [
      "https://www.cer-rec.gc.ca/en/data-analysis/energy-commodities/electricity/report/canadas-renewable-power/index.html",
      "https://agriculture.canada.ca/en/environment/greenhouse-gases",
    ],
  },
  {
    title: "Items Donated",
    accent: "mint",
    links: [
      "https://gaiaandglobalwarming.wordpress.com/about/re-using-clothes-saves-co2/#:~:text=Each%20kg%20of%20clothes%20donated%20saves%204%20kg%20of%20CO2!&text=By%20donating%20unused%20clothes%20you,good%20health%20of%20our%20planet",
      "https://sustainedfun.com/blogs/for-the-toy-industry/whats-the-carbon-footprint-of-the-toy-industry-and-does-the-number-matter",
    ],
  },
];

const ResourceCard = () => {
  const isRepoMode = DATA_SOURCE_MODE === "repo";

  return (
    <div className="resources-hub">
      <section className="resources-section resources-section--data">
        <div className="resources-section__header">
          <div>
            <span className="resources-kicker">Project Data</span>
            <h2 className="resources-section__title">Inspect the numbers behind the tools</h2>
          </div>
          <p className="resources-section__copy">
            Open the active source powering EcoLearn. In repo mode this points
            to committed JSON, and in API mode it links to the live backend.
          </p>
        </div>

        <div className="resources-data-grid">
          {dataCards.map((card) => (
            <Card className="resources-data-card" key={card.title}>
              <div className="resources-data-card__image-wrap">
                <img
                  alt={card.title}
                  className="resources-data-card__image"
                  src={card.image}
                />
              </div>
              <CardBody className="resources-data-card__body">
                <span className="resources-data-card__eyebrow">{card.subtitle}</span>
                <CardTitle className="resources-data-card__title" tag="h3">
                  {card.title}
                </CardTitle>
                <CardText className="resources-data-card__text">
                  {card.body}
                </CardText>
                <Button
                  className="resources-data-card__button"
                  href={card.link}
                  target="_blank"
                >
                  {isRepoMode ? "Open Dataset" : "Open Endpoint"}
                </Button>
              </CardBody>
            </Card>
          ))}
        </div>

        <Card className="resources-source-card">
          <CardBody className="resources-source-card__body">
            <div>
              <span className="resources-source-card__label">Current mode</span>
              <h3 className="resources-source-card__title">
                {isRepoMode ? "Frontend-only repo dataset" : "API-capable deployment"}
              </h3>
              <p className="resources-source-card__text">
                The resources page adapts to your configured data source, so you
                can keep sharing the app without requiring the backend to be online.
              </p>
            </div>
            <Button
              className="resources-source-card__button"
              href={getCollectionLink("metrics")}
              target="_blank"
            >
              Open Active Source
            </Button>
          </CardBody>
        </Card>
      </section>

      <section className="resources-section resources-section--library">
        <div className="resources-section__header">
          <div>
            <span className="resources-kicker">Reference Library</span>
            <h2 className="resources-section__title">Research, calculators, and explainers</h2>
          </div>
          <p className="resources-section__copy">
            These source links back the concepts used throughout the calculators
            and are grouped so the page feels browsable instead of overwhelming.
          </p>
        </div>

        <div className="resources-library-grid">
          {resourceGroups.map((group) => (
            <Card
              className={`resources-library-card resources-library-card--${group.accent}`}
              key={group.title}
            >
              <CardBody className="resources-library-card__body">
                <h3 className="resources-library-card__title">{group.title}</h3>
                <ul className="resources-library-card__list">
                  {group.links.map((link) => (
                    <li className="resources-library-card__item" key={link}>
                      <a
                        className="resources-library-card__link"
                        href={link}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResourceCard;
