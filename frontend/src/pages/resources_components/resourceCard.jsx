import {
  Button,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  Card,
  CardGroup,
} from "reactstrap";

import "../Resources.css";

const ResourceCard = () => {
  return (
    <div>
      <CardGroup className="card-group">
        <Card className="card-group_card">
          <CardImg
            alt="Card image cap"
            src="https://fastly.picsum.photos/id/93/2000/1334.jpg?hmac=HdhcVTbAYkFCXsu1qBRWeEPiy05Qjc3LbnMWJlfEFjo"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Trees API</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Details about the API
            </CardSubtitle>
            <CardText>
              This API allows you retrieve data about different types of trees,
              such as amount of carbon is can consume in its lifetime.
            </CardText>
            <Button href="https://ecolearn.azurewebsites.net/api/trees/" target="_blank">API</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://fastly.picsum.photos/id/89/4608/2592.jpg?hmac=G9E4z5RMJgMUjgTzeR4CFlORjvogsGtqFQozIRqugBk"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Gardens API</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Details about the API
            </CardSubtitle>
            <CardText>
              This API allows you retrieve data about different types of
              Vegetables and crop and its carbon consumption data. Units are kg
              carbon per bush, sq m, etc. such as amount of carbon is can
              consume in its lifetime.
            </CardText>
            <Button href="https://ecolearn.azurewebsites.net/api/gardens/" target="_blank">API</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://fastly.picsum.photos/id/200/1920/1280.jpg?hmac=-eKjMC8-UrbLMpy1A4OWrK0feVPB3Ka5KNOGibQzpRU"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Food Waste API</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Details about the API
            </CardSubtitle>
            <CardText>
              See detailed data about how much carbon each kind of meat
              produces.
            </CardText>
            <Button>API</Button>
          </CardBody>
        </Card>
      </CardGroup>

      <Card body>
      <CardTitle tag="h5">
        Main API
      </CardTitle>
      <CardText>
        See list of all APIs.
      </CardText>
      <Button>
        Go to API
      </Button>
    </Card>

      <Card className="card2">
        <div className="text-center">
          Total carbon reduction per type of tree
        </div>
      </Card>
    </div>
  );
};
export default ResourceCard;
