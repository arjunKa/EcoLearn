import {
  Button,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  Card,
} from "reactstrap";
import treeImg from "../../../public/treeImage.jpeg";

const FoodWasteCard = () => {
  return (
    <div className="calc_box_card">
      <Card className="card">
        {/* left side */}
        <CardImg
          alt="Card image cap"
          src={treeImg}
          top
          className="custom-card-img"
        />
        <CardBody>
          <CardTitle tag="h5">Food Waste - Meat Reduced</CardTitle>
          <CardSubtitle className="mb-1 text-muted" tag="h6">
            Quantify your carbon reduction by cutting out meat from
            your diet.
          </CardSubtitle>
          <CardText>By cutting</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default FoodWasteCard;
