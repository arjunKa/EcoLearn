import {
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  Card,
} from "reactstrap";
import waterImg from "../../../images/waterImage.jpg";

const TreesCard = () => {
  return (
    <div className="calc_box_card">
      <Card className="calc-info-card">
        <CardImg
          alt="Card image cap"
          src={waterImg}
          top
          className="custom-card-img"
        />
        <CardBody>
          <span className="calc-info-card__tag">Utilities</span>
          <CardTitle className="calc-info-card__title" tag="h5">
            Water Saved Tool
          </CardTitle>
          <CardSubtitle className="calc-info-card__subtitle" tag="h6">
            Water Saved
          </CardSubtitle>
          <CardText className="calc-info-card__text">
            It takes lots of energy to pump, treat, and heat water, so saving
            water reduces greenhouse gas emissions. Saving water around the home
            is simple. This tool will show how much carbon you reduced by how
            much you reduced your water usage.
          </CardText>
          <div className="calc-info-card__footnote">Focus: litres saved and province-specific power mix</div>
        </CardBody>
      </Card>
    </div>
  );
};

export default TreesCard;
