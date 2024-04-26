import React from "react";
import "../Common/Common.css";

const Header = (props) => {
  return (
    <div className="intro">
      <img src="/ecoLearn.svg" alt="My Happy SVG" className="logo" />
      <h1>{props.data ? props.data.title : "Loading"}</h1>
      <p>{props.data ? props.data.paragraph : "Loading"}</p>
      <a href="" className="">
        <p>Learn More</p>
      </a>{" "}
    </div>
  );
};

export default Header;
