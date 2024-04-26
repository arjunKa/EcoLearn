import {
  Button,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  Card,
  Form,
} from "reactstrap";
import recyclingImg from "../../../images/recyclingImage.jpg";

const RecycleCard = () => {
  return (
    <div className="calc_box_card">
      <Card className="card">
        {/* left side */}
        <CardImg
          alt="Card image cap"
          src={recyclingImg}
          top
          className="custom-card-img"
        />
        <CardBody>
          <CardTitle tag="h5">Recycling</CardTitle>
          <CardSubtitle className="mb-1 text-muted" tag="h6">
            Recycling
          </CardSubtitle>
          <CardText>
            It takes a lot of energy to dispose of waste material. Which is why
            it is important to try to recycle and reuse whatever you can.
          </CardText>
          <Button>More</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default RecycleCard;
