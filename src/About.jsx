import React from "react";
import web from "../src/Images/img2.jpg";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welsome to about page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;

{
  /* <div className="container-fluid nav-bg">
          <div className="row">
            <div className="col-10 mx-auto"></div>
          </div>
        </div> */
}
