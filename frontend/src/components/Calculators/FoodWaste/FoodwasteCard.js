import {
    Button,
    CardImg, CardBody, CardText, CardTitle, CardSubtitle,
    Card, Form
} from "reactstrap";
import foodwasteImg from "../../../public/foodWasteImage.jpg"

const FoodwasteCard = () => {

    return (

        <div className="calc_box_card">
            <Card className="card">
                {/* left side */}
                <CardImg
                    alt="Card image cap"
                    src={foodwasteImg}
                    top
                    className="custom-card-img"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        Food Waste - Meat Reduced
                    </CardTitle>
                    <CardSubtitle
                        className="mb-1 text-muted"
                        tag="h6"
                    >
                        Quantify how much you have reduced carbon by how much meat you have cut out of your diet.
                    </CardSubtitle>
                    <CardText>
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </CardText>
                    <Button>
                        Button
                    </Button>
                </CardBody>
            </Card>
        </div>

    );
};

export default FoodwasteCard;