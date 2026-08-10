import {
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  Card,
} from "reactstrap";
import image from "../../../images/potato.png";

const GardenCard = () => {
  return (
    <div className="calc_box_card">
      <Card className="calc-info-card">
        <CardImg
          alt="Card image cap"
          src={image}
          top
          className="custom-card-img"
        />
        <CardBody>
          <span className="calc-info-card__tag">Home growing</span>
          <CardTitle className="calc-info-card__title" tag="h5">
            Garden Calculator
          </CardTitle>
          <CardSubtitle className="calc-info-card__subtitle" tag="h6">
            Quantify your carbon reduction by planting more agriculture in your garden 
          </CardSubtitle>
          <CardText className="calc-info-card__text" tag="p">
            Gardening helps reduce carbon emissions because plants help absorb carbon dioxide during photosynthesis and stores it in their roots. Also 
            growing your own vegetables in your garden reduces your carbon footprint by eliminating the need for packaging and transportation which will
            lessen the use of fossil fuels. 
          </CardText>
          <div className="calc-info-card__footnote">Focus: annual reduction from planted areas and crops</div>
        </CardBody>
      </Card>
    </div>
  );
};

export default GardenCard;
