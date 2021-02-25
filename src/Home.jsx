import React from "react";
import web from "../src/Images/img4.jpg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc={web}
        visit="/service"
        btname="Get started"
      />
    </>
  );
};

export default Home;

{
  /* <div className="container-fluid nav-bg">
          <div className="row">
            <div className="col-10 mx-auto"></div>
          </div>
        </div> */
}
