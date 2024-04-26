import {
  Button,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  Card,
} from "reactstrap";
import image from "../../../images/foodWasteImage.jpg";

const FoodWasteCard = () => {
  return (
    <div className="calc_box_card">
      <Card className="card">
        {/* left side */}
        <CardImg
          alt="Card image cap"
          src={image}
          top
          className="custom-card-img"
        />
        <CardBody>
          <CardTitle tag="h5">Food Waste - Meat Reduced</CardTitle>
          <CardSubtitle className="mb-1 text-muted" tag="h6">
            Quantify your carbon reduction by cutting out meat from your diet.
          </CardSubtitle>
          <CardText>
            By cutting out meat in your diet you can lower carbon emission,
            since the breeding and cultivation of livestock produces carbon, as
            well as the processing the meat undergoes before it is ready to be
            sold in a store.
          </CardText>
          <Button>More</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default FoodWasteCard;
