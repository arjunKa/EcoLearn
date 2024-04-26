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

const TreesCard = () => {
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
          <CardTitle tag="h5">Water Saved Tool</CardTitle>
          <CardSubtitle className="mb-1 text-muted" tag="h6">
            Water Saved
          </CardSubtitle>
          <CardText>
            It takes lots of energy to pump, treat, and heat water, so saving
            water reduces greenhouse gas emissions. Saving water around the home
            is simple. This tool will show how much carbon you reduced by how
            much you reduced your water usage.
          </CardText>
          <Button>More</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default TreesCard;
