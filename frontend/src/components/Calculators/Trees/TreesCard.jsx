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
import treeImg from "../../../public/Tree.png";

const TreesCard = () => {
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
          <CardTitle tag="h4" style={{fontFamily: "TimesNewRoman", fontWeight: "bold"}}>Trees Planted Calculator</CardTitle>
          <CardSubtitle className="mb-1 text-muted" tag="h5" style={{fontFamily: "TimesNewRoman"}}>
            Quantify your carbon reduction by planting more trees.
          </CardSubtitle>
          <CardText style={{fontFamily: "TimesNewRoman"}}>
            {/* Different types of trees consume different amounts of carbon. Select
            the different types of trees you planted and how many of them are,
            and we will show you how much carbon each consumes in it's lifetime. */}
            Planting trees can reduce your carbon footprint. As trees grow, they play a crucial role in helping stop climate change
            by absorbing carbon dioxide from the air, storing carbon in the trees and soil, and releasing oxygen back into the atmosphere. 
          </CardText>
          <Button>Learn More</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default TreesCard;
