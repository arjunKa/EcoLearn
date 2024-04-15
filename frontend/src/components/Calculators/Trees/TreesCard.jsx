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
          <CardTitle tag="h5">Trees Planted Calculator</CardTitle>
          <CardSubtitle className="mb-1 text-muted" tag="h6">
            Details
          </CardSubtitle>
          <CardText>
            Different types of trees consume different amounts of carbon. Select
            the different types of trees you planted and how many of them are,
            and we will show you how much carbon each consumes in it's lifetime.
          </CardText>
          <Button>Learn More</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default TreesCard;
