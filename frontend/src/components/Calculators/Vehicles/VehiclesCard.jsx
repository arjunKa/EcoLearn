import {
  Button,
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
      <Card className="card">
        {/* left side */}
        <CardImg
          alt="Card image cap"
          src={carImg}
          top
          className="custom-card-img"
        />
        <CardBody>
          <CardTitle tag="h5">Vehicle Emissions</CardTitle>
          <CardSubtitle className="mb-1 text-muted" tag="h6">
            Quantify how much carbon you have saved by reducing how much you
            drive.
          </CardSubtitle>
          <CardText>
            Transportation is one of the largest source to carbon dioxide gas,
            and it is one of the main contributors to climate change. So even
            reducing the amount we drive by 10% can significantly help cut
            carbon dioxide emissions. So taking other means of transportation
            like walking or riding your bike could help. Taking public
            transportation would vastly lower the amount of emissions per rider
            than a car would.
          </CardText>
          <Button>More</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default VehiclesCard;
