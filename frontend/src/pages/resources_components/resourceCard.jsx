import {
  Button,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  Card,
  CardGroup,
  ListGroupItemHeading,
  ListGroup,
  ListGroupItem,
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
              This API allows you to retrieve data about different types of
              trees, such as the amount of carbon a particular tree can consume
              in its lifetime.
            </CardText>
            <Button
              href="https://ecolearn.azurewebsites.net/api/trees/"
              target="_blank"
            >
              API
            </Button>
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
              This API allows you to retrieve data about different types of
              vegetables and crops. You can see carbon consumption data. Units
              are kg carbon per bush, sq. m of grass, etc.
            </CardText>
            <Button
              href="https://ecolearn.azurewebsites.net/api/gardens/"
              target="_blank"
            >
              API
            </Button>
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
            <Button
              href="https://ecolearn.azurewebsites.net/api/food/"
              target="_blank"
            >
              API
            </Button>
          </CardBody>
        </Card>
      </CardGroup>

      <Card body>
        <CardTitle tag="h5">Main API</CardTitle>
        <CardText>See list of all APIs.</CardText>
        <Button href="https://ecolearn.azurewebsites.net/api/" target="_blank">
          Go to API
        </Button>
      </Card>
      
      <Card className="card2">
        <CardBody> 
          <CardTitle tag="h5"> Additional Resources </CardTitle>
          <CardText> For additional resources on where to find all the information we used to learn about carbon emmisions can be found through these links. </CardText>
        </CardBody>
        <CardGroup>
          <Card color="light"> 
            <ListGroup carbon> 
              <ListGroupItemHeading> Carbon Emissions Information </ListGroupItemHeading>
                <ListGroupItem> 
                  <a href="https://www.omnicalculator.com/ecology"> https://www.omnicalculator.com/ecology </a>
                </ListGroupItem>
                <ListGroupItem> 
                  <a href="https://www.ecomatcher.com/how-to-calculate-co2-sequestration/"> https://www.ecomatcher.com/how-to-calculate-co2-sequestration/ </a>
                </ListGroupItem>
                <ListGroupItem> 
                  <a href="https://www.co2everything.com"> https://www.co2everything.com </a>
                </ListGroupItem>
                <ListGroupItem> 
                  <a href="https://co2.myclimate.org/en/calculate_emissions"> https://co2.myclimate.org/en/calculate_emissions </a>
                </ListGroupItem>
                <ListGroupItem> 
                  <a href="https://www.ecomatcher.com/seeding-the-future-how-innovation-in-climate-tech-is-redefining-green-solutions/"> https://www.ecomatcher.com/seeding-the-future-how-innovation-in-climate-tech-is-redefining-green-solutions/ </a>
                </ListGroupItem>
            </ListGroup>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card color="success"> 
            <ListGroup tree>
              <ListGroupItemHeading> Trees </ListGroupItemHeading>
                <ListGroupItem> 
                  <a href="https://treecanada.ca/carbon-calculator/"> https://treecanada.ca/carbon-calculator/ </a>
                </ListGroupItem>
                <ListGroupItem> 
                  <a href="https://www.fortomorrow.eu/en/blog/co2-tree"> https://www.fortomorrow.eu/en/blog/co2-tree </a>
                </ListGroupItem>
                <ListGroupItem> 
                  <a href="https://8billiontrees.com/carbon-offsets-credits/carbon-ecological-footprint-calculators/how-much-carbon-does-a-tree-capture/"> https://8billiontrees.com/carbon-offsets-credits/carbon-ecological-footprint-calculators/how-much-carbon-does-a-tree-capture/ </a>
                </ListGroupItem>
                <ListGroupItem> 
                  <a href="https://bwi.info/start.aspx"> https://bwi.info/start.aspx </a>
                </ListGroupItem>
                <ListGroupItem> 
                  <a href="https://treeplantation.com/index.html"> https://treeplantation.com/index.html </a>
                </ListGroupItem>
            </ListGroup>
          </Card>
        </CardGroup>

        <CardGroup>
          <Card color="secondary"> 
            <ListGroup garden> 
              <ListGroupItemHeading> Garden </ListGroupItemHeading>
              <ListGroupItem> 
                  <a href="https://www.researchgate.net/publication/282543110_Modeling_Carbon_Sequestration_in_Home_Lawns"> https://www.researchgate.net/publication/282543110_Modeling_Carbon_Sequestration_in_Home_Lawns </a>
              </ListGroupItem>
              <ListGroupItem> 
                  <a href="https://www.researchgate.net/publication/46171031_Quercus_ilex_L_carbon_sequestration_capability_related_to_shrub_size"> https://www.researchgate.net/publication/46171031_Quercus_ilex_L_carbon_sequestration_capability_related_to_shrub_size </a>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </CardGroup>

        <CardGroup>
          <Card color="info"> 
            <ListGroup recycling> 
              <ListGroupItemHeading> Recycling & Waste Reduction </ListGroupItemHeading>
              <ListGroupItem> 
                  <a href="https://www.canada.ca/en/environment-climate-change/services/environmental-indicators/solid-waste-diversion-disposal.html"> https://www.canada.ca/en/environment-climate-change/services/environmental-indicators/solid-waste-diversion-disposal.html </a>
              </ListGroupItem>
              <ListGroupItem> 
                  <a href="https://recyclewits.com/tools-calculators/carbon-footprint-savings/#:~:text=For%20every%20kg%2Flbs%20of,kg%2F12.92%20lbs%20of%20CO2"> https://recyclewits.com/tools-calculators/carbon-footprint-savings/#:~:text=For%20every%20kg%2Flbs%20of,kg%2F12.92%20lbs%20of%20CO2 </a>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </CardGroup>

        <CardGroup>
          <Card color="danger"> 
            <ListGroup food> 
              <ListGroupItemHeading> Food Waste </ListGroupItemHeading>
              <ListGroupItem> 
                  <a href="https://myemissions.green/food-carbon-footprint-calculator/"> https://myemissions.green/food-carbon-footprint-calculator/ </a>
              </ListGroupItem>
              <ListGroupItem> 
                  <a href="https://www.omnicalculator.com/ecology/vegan-footprint"> https://www.omnicalculator.com/ecology/vegan-footprint </a>
              </ListGroupItem>
              <ListGroupItem> 
                  <a href="https://www.omnicalculator.com/ecology/meat-footprint"> https://www.omnicalculator.com/ecology/meat-footprint </a>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </CardGroup>

        <CardGroup>
          <Card color="secondary"> 
            <ListGroup vehicle> 
              <ListGroupItemHeading> Vehicle Emissions </ListGroupItemHeading>
              <ListGroupItem> 
                  <a href="https://www.google.com/url?q=https://ravalli.us/DocumentCenter/View/229/Vehicle-Idling%23:~:text%3DAn%2520hour%2520of%2520automobile%2520idling,of%2520CO2%2520into%2520the%2520air&sa=D&source=editors&ust=1712890750074375&usg=AOvVaw2HADZ5Y2blmDrpLpi-KISm"> 
                  https://www.google.com/url?q=https://ravalli.us/DocumentCenter/View/229/Vehicle-Idling%23:~:text%3DAn%2520hour%2520of%2520automobile%2520idling,of%2520CO2%2520into%2520the%2520air&sa=D&source=editors&ust=1712890750074375&usg=AOvVaw2HADZ5Y2blmDrpLpi-KISm 
                  </a>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </CardGroup>

        <CardGroup>
          <Card color="primary"> 
            <ListGroup water> 
              <ListGroupItemHeading> Water Saved </ListGroupItemHeading>
              <ListGroupItem> 
                  <a href="https://www.theguardian.com/environment/2007/aug/02/ethicalliving.ethicalliving#:~:text=Anyway%2C%20one%20litre%20of%20water,car%20produces%20over%2080%20kilometres"> https://www.theguardian.com/environment/2007/aug/02/ethicalliving.ethicalliving#:~:text=Anyway%2C%20one%20litre%20of%20water,car%20produces%20over%2080%20kilometres </a>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </CardGroup>

        <CardGroup>
          <Card color="warning"> 
            <ListGroup energy> 
              <ListGroupItemHeading> Renewable Energy </ListGroupItemHeading>
              <ListGroupItem> 
                  <a href="https://www.cer-rec.gc.ca/en/data-analysis/energy-commodities/electricity/report/canadas-renewable-power/index.html"> https://www.cer-rec.gc.ca/en/data-analysis/energy-commodities/electricity/report/canadas-renewable-power/index.html </a>
              </ListGroupItem>
              <ListGroupItem> 
                  <a href="https://agriculture.canada.ca/en/environment/greenhouse-gases"> https://agriculture.canada.ca/en/environment/greenhouse-gases </a>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </CardGroup>

        <CardGroup>
          <Card color="success"> 
            <ListGroup donate> 
              <ListGroupItemHeading> Item Donated </ListGroupItemHeading>
              <ListGroupItem> 
                  <a href="https://gaiaandglobalwarming.wordpress.com/about/re-using-clothes-saves-co2/#:~:text=Each%20kg%20of%20clothes%20donated%20saves%204%20kg%20of%20CO2!&text=By%20donating%20unused%20clothes%20you,good%20health%20of%20our%20planet">
                  https://gaiaandglobalwarming.wordpress.com/about/re-using-clothes-saves-co2/#:~:text=Each%20kg%20of%20clothes%20donated%20saves%204%20kg%20of%20CO2!&text=By%20donating%20unused%20clothes%20you,good%20health%20of%20our%20planet 
                  </a>
              </ListGroupItem>
              <ListGroupItem> 
                  <a href="https://sustainedfun.com/blogs/for-the-toy-industry/whats-the-carbon-footprint-of-the-toy-industry-and-does-the-number-matter"> https://sustainedfun.com/blogs/for-the-toy-industry/whats-the-carbon-footprint-of-the-toy-industry-and-does-the-number-matter </a>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </CardGroup>
      </Card>
    </div>
  );
};
export default ResourceCard;
