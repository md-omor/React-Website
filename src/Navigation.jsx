import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="row">
        <div className="col-10 mx-auto">
          <Navbar bg="light" expand="lg">
            <div className="container-fluid nav-bg">
              <Navbar.Brand to="/" className="logo">
                Md Omor
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto nav_menu">
                  <Nav.Link>
                    <NavLink exact to="/" activeClassName="navigat">
                      Home
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink exact to="/service" activeClassName="navigat">
                      Services
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink exact to="/about" activeClassName="navigat">
                      About
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink exact to="/contact" activeClassName="navigat">
                      Contact
                    </NavLink>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Navbar>
        </div>
      </div>
    </>
  );
};

export default Navigation;
