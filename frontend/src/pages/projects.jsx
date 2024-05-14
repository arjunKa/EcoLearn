import React, { useState } from "react";

import {
  Button,
  CardImg,
  CardText,
  CardTitle,
  Card,
  CardImgOverlay,
} from "reactstrap";
const Projects = () => {
  return (
    <div style={{ padding: "25px 25px" }} className="page">
      <h1 style={{ color: "#515799" }}>Projects</h1>
      <Card inverse>
        <CardImg
          alt="Card image cap"
          src="https://ourcanadaproject.ca/wp-content/themes/RemixVision2020/assets/images/capstone4.jpg"
          style={{
            height: "auto",
          }}
          width="100%"
        />
        <CardImgOverlay>
          <CardTitle tag="h1">
            <span style={{ backgroundColor: "black" }}>LSF Projects</span>
          </CardTitle>
          <CardText style={{ fontSize: "24px" }}>
            <span style={{ backgroundColor: "black" }}>
              LSF works with Our Canada Project to provide projects for students
              to develop their understanding on carbon emissions and to make an
              impact.
            </span>
          </CardText>
          <CardText>
            <small className="text">Last updated 3 mins ago</small>
          </CardText>
          <Button href="https://ourcanadaproject.ca/" target="_blank">
            Go to Our Canada Projects
          </Button>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default Projects;
