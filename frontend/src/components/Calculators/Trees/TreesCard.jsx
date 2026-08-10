import {
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  Card,
} from "reactstrap";
import treeImg from "../../../images/Tree.png";

const TreesCard = () => {
  return (
    <div className="calc_box_card">
      <Card className="calc-info-card">
        <CardImg
          alt="Card image cap"
          src={treeImg}
          top
          className="custom-card-img"
        />
        <CardBody>
          <span className="calc-info-card__tag">Nature-based action</span>
          <CardTitle className="calc-info-card__title" tag="h5">
            Trees Planted Calculator
          </CardTitle>
          <CardSubtitle className="calc-info-card__subtitle" tag="h6">
            Quantify your carbon reduction by planting more trees.
          </CardSubtitle>
          <CardText className="calc-info-card__text">
            Planting trees can reduce your carbon footprint. As trees grow, they
            play a crucial role in helping stop climate change by absorbing
            carbon dioxide from the air, storing carbon in the trees and soil,
            and releasing oxygen back into the atmosphere.
          </CardText>
          <div className="calc-info-card__footnote">Focus: lifetime absorption by tree type</div>
        </CardBody>
      </Card>
    </div>
  );
};

export default TreesCard;
