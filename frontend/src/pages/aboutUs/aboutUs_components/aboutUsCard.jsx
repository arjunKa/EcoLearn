import {
  Button,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  Card,
  CardGroup,
  Row,
  Col,
} from "reactstrap";

const AboutUsCard = () => {
  return (
    <div>
      <Row style={{ paddingBottom: "20px" }}>
        <Col sm="6">
          <Card body>
            <CardTitle tag="h5">Our C4 Challenge Question</CardTitle>
            <CardText>
              Project CF: What carbon impact measuring tool can we implement
              that will work nationally for Kindergarten to Grade 12 students to
              help them select and lead school and community based action
              projects to positively impact climate change?
            </CardText>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardTitle tag="h5">Significance</CardTitle>
            <CardText>
              Students participating in sustainability projects don’t have the
              necessary tools to quantify the impacts of their actions. Lack of
              time and funding limits the school’s ability to diverge their
              focus on creating an application that addresses this issue.
            </CardText>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col sm="6">
          <Card body>
            <CardTitle tag="h5">The Team</CardTitle>
            <CardText>
              Mustafa Mohammed - Environmental and Urban Change<br></br>
              Meekah Bell-Ofori - Psychology<br></br>
              Joanna El-Solakhy - Biomedical Sciences<br></br>
              Cason Ng - Computer Engineering<br></br>
              Arjun Kaura - Software Engineering<br></br>
              Ali A. Salman - Biomedical Sciences<br></br>
              Ali Naqi - Liberal Arts & Professional Studies
            </CardText>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardTitle tag="h5">
              Partner: Learning for a Sustainable Future
            </CardTitle>
            <CardText>
              Our partner is LSF. They are a Canadian charity that has been
              working for over 30 years to integrate sustainability education
              into Canada’s school system. In partnership with educators, youth,
              governments, businesses, and community members, we are empowering
              our children to change the world.
            </CardText>
            <Button href="https://lsf-lst.ca/" target="_blank">Go to LSF</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default AboutUsCard;
