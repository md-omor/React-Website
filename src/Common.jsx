import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="header" className="">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row d-flex align-items-center justify-content-center">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 justify-content-center flex-column">
                  <h1 className="col-md-8">
                    {props.name}
                    <strong className="text-primary ms-2 brand_name">
                      Md Omor
                    </strong>
                  </h1>
                  <h2 className="my-3 col-md-12 h5">
                    We are the team of talentet developer making website
                  </h2>
                  <div className="mt-3 outline-primary">
                    <NavLink
                      to={props.visit}
                      className="btn btn-outline-primary rounded-pill get_started"
                    >
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    alt="home img"
                    className="img-fluid animated"
                    id="animated"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
