import {
    Button,
    CardImg, CardBody, CardText, CardTitle, CardSubtitle,
    Card, Form
} from "reactstrap";
import recyclingImg from "../../../public/recyclingImg.jpg"

const RecyclingCard = () => {
    return (
        <div className="calc_box_card">
        <Card className="card">
            {/* left side */}
            <CardImg
                alt="Card image cap"
                src={recyclingImg}
                top
                className="custom-card-img"
            />
            <CardBody>
                <CardTitle tag="h5">
                    Card title
                </CardTitle>
                <CardSubtitle
                    className="mb-1 text-muted"
                    tag="h6"
                >
                    Card subtitle
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
}

export default RecyclingCard;