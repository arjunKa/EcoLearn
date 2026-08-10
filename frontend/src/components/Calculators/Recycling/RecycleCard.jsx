import {
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  Card,
} from "reactstrap";
import recyclingImg from "../../../images/recyclingImage.jpg";

const RecycleCard = () => {
  return (
    <div className="calc_box_card">
      <Card className="calc-info-card">
        <CardImg
          alt="Card image cap"
          src={recyclingImg}
          top
          className="custom-card-img"
        />
        <CardBody>
          <span className="calc-info-card__tag">Waste reduction</span>
          <CardTitle className="calc-info-card__title" tag="h5">
            Recycling
          </CardTitle>
          <CardSubtitle className="calc-info-card__subtitle" tag="h6">
            Recycling
          </CardSubtitle>
          <CardText className="calc-info-card__text">
            It takes a lot of energy to dispose of waste material. Which is why
            it is important to try to recycle and reuse whatever you can.
          </CardText>
          <div className="calc-info-card__footnote">Focus: material-specific savings by weight</div>
        </CardBody>
      </Card>
    </div>
  );
};

export default RecycleCard;
