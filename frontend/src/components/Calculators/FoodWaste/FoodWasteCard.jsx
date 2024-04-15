import {
  Button,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  Card,
} from "reactstrap";
import foodWasteImg from "../../../public/foodWasteImage.jpg";

const FoodWasteCard = () => {
  return (
    <div className="calc_box_card">
      <Card className="card">
        {/* left side */}
        <CardImg
          alt="Card image cap"
          src={foodWasteImg}
          top
          className="custom-card-img"
        />
        <CardBody>
          <CardTitle tag="h4" style={{fontFamily: "TimesNewRoman", fontWeight: "bold"}}>Food Waste - Meat Reduced</CardTitle>
          <CardSubtitle className="mb-1 text-muted" tag="h5" style={{fontFamily: "TimesNewRoman"}}>
            Quantify your carbon reduction by cutting out meat from
            your diet.
          </CardSubtitle>
          <CardText style={{fontFamily: "TimesNewRoman"}}> Choosing not to eat meat can reduce your carbon footprint. Since grazing animals need extensive land, 
            which often leads to deforestation. Additionally, livestock generate significant amounts of methane, which is a damaging greenhouse gas. Vegetarian 
            options like: tofu, beans, peas, and nuts have a low carbon footprint, making them a more enviromentally friendly choice. 
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default FoodWasteCard;
