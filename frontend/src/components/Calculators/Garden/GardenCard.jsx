import {
  Button,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  Card,
} from "reactstrap";
import gardenImg from "../../../public/potatoImage.jpg";

const GardenCard = () => {
  return (
    <div className="calc_box_card">
      <Card className="card">
        {/* left side */}
        <CardImg
          alt="Card image cap"
          src={gardenImg}
          top
          className="custom-card-img"
        />
        <CardBody>
          <CardTitle tag="h4" style={{fontFamily: "TimesNewRoman", fontWeight: "bold"}}>Garden Calculator</CardTitle>
          <CardSubtitle className="mb-1 text-muted" tag="h5" style={{fontFamily: "TimesNewRoman"}}>
            Quantify your carbon reduction by planting more agriculture in your garden 
          </CardSubtitle>
          <CardText style={{fontFamily: "TimesNewRoman"}}>
            {/* The type of agriculture you plant and the amount you planted will consume differnt amounts of carbon. Select the type of agriculture you
            planted and the area in meters squared to display how much carbon it will reduce.  */}

            Gardening helps reduce carbon emissions because plants help absorb carbon dioxide during photosynthesis and stores it in their roots. Also 
            growing your own vegetables in your garden reduces your carbon footprint by eliminating the need for packaging and transportation which will
            lessen the use of fossil fuels. 
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default GardenCard;
