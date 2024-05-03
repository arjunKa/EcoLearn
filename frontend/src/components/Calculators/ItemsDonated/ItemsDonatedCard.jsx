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
import waterImg from "../../../images/waterImage.jpg";

const ItemsDonatedCard = () => {
  return (
    <div className="calc_box_card">
      <Card className="card">
        {/* left side */}
        <CardImg
          alt="Card image cap"
          src={waterImg}
          top
          className="custom-card-img"
        />
        <CardBody>
          <CardTitle tag="h5">Items Donated</CardTitle>
          <CardSubtitle className="mb-1 text-muted" tag="h6">
            Items Donated Tool
          </CardSubtitle>
          <CardText>
            By donating certain items instead of disposing them, you can reduce
            the carbon emission that would be produced in the disposal procedure
            of your items.
          </CardText>
          <Button>More</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ItemsDonatedCard;
