import {
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
      <Card className="calc-info-card">
        <CardImg
          alt="Card image cap"
          src={image}
          top
          className="custom-card-img"
        />
        <CardBody>
          <span className="calc-info-card__tag">Diet choices</span>
          <CardTitle className="calc-info-card__title" tag="h5">
            Food Waste - Meat Reduced
          </CardTitle>
          <CardSubtitle className="calc-info-card__subtitle" tag="h6">
            Quantify your carbon reduction by cutting out meat from your diet.
          </CardSubtitle>
          <CardText className="calc-info-card__text">
            By cutting out meat in your diet you can lower carbon emission,
            since the breeding and cultivation of livestock produces carbon, as
            well as the processing the meat undergoes before it is ready to be
            sold in a store.
          </CardText>
          <div className="calc-info-card__footnote">Focus: carbon intensity across meat categories</div>
        </CardBody>
      </Card>
    </div>
  );
};

export default FoodWasteCard;
