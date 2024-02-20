// import React from "react";
// import "./project.css";
// import projectImage from "../../assets/ProjectImages/3D_GPS.png";
// import csharp from "../../assets/icons/csharp.svg";
// import unity from "../../assets/icons/unity.svg";

const Tool = ({ date, header }) => (
  <div className="portfolio__project-container">
    <div className="portfolio__project-container-image">
      {/* <img src={imgUrl} alt="blog_image" /> */}
    </div>
    <div className="portfolio__project-container-content">
      <div>
        <p>{date}</p>
      </div>

      <div className="portfolio__project-container-content-image-and-text">
        <div className="portfolio__project-container-content-text">
          <h3>{header}</h3>

          <div className="portfolio__project-container-content-logos">
            <a target="_blank">
              <img src={csharp} alt="logo" />
            </a>
            <a target="_blank">
              <img src={unity} alt="logo" />
            </a>
          </div>

          <div className="portfolio__blog-container_article-content_options">
            <a
              href="https://lassonde.yorku.ca/lassonde-robotics-professor-helps-local-high-school-students"
              target="_blank"
            >
              <div className="button">Article</div>
            </a>
            <a
              href="https://www.youtube.com/watch?v=h0Q62fK-7ZQ"
              target="_blank"
            >
              <div className="button">Demo</div>
            </a>
          </div>

          <p>
            I worked in the VGR (Vision Graphics and Robotics) laboratory at
            York University to develop a prototype of a 3D GPS software. The
            software would be used by Emergency Medical Services to better
            navigate the streets, and also featured a VR component with the
            ability to use the software in VR. Unity game development software
            and C# programming language were used. 3D models were built using
            SketchUp.
            <br></br>
            <b>Other Links: </b>
            <br></br>
            <ul>
              <li>
                <a
                  href="https://vgrserver.eecs.yorku.ca/~jenkin/papers/2017/icinco2017.pdf"
                  target="_blank"
                >
                  Autonomous Trail Following: Paper on 'Autonomous Trail
                  Following'
                </a>
              </li>
              <li>
                <a href="https://vgr.lab.yorku.ca/students/" target="_blank">
                  Vision Graphics and Robotics student Alumnae which includes my
                  name VGR York U Alumnae
                </a>
              </li>
            </ul>
          </p>
        </div>

        <div className="portfolio__project-container-content-image">
          <img src={projectImage} alt="3D GPS Street view" />
        </div>
      </div>
    </div>
  </div>
);

export default Tool;
