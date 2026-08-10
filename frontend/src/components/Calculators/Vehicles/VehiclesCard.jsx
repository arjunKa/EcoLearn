import {
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  Card,
} from "reactstrap";
import carImg from "../../../images/carImage.jpg";

const VehiclesCard = () => {
  return (
    <div className="calc_box_card">
      <Card className="calc-info-card">
        <CardImg
          alt="Card image cap"
          src={carImg}
          top
          className="custom-card-img"
        />
        <CardBody>
          <span className="calc-info-card__tag">Transportation</span>
          <CardTitle className="calc-info-card__title" tag="h5">
            Vehicle Emissions
          </CardTitle>
          <CardSubtitle className="calc-info-card__subtitle" tag="h6">
            Quantify how much carbon you have saved by reducing how much you
            drive.
          </CardSubtitle>
          <CardText className="calc-info-card__text">
            Transportation is one of the largest source to carbon dioxide gas,
            and it is one of the main contributors to climate change. So even
            reducing the amount we drive by 10% can significantly help cut
            carbon dioxide emissions. So taking other means of transportation
            like walking or riding your bike could help. Taking public
            transportation would vastly lower the amount of emissions per rider
            than a car would.
          </CardText>
          <div className="calc-info-card__footnote">Focus: reduced driving and idling minutes</div>
        </CardBody>
      </Card>
    </div>
  );
};

export default VehiclesCard;
