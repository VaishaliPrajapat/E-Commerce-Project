import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../static/Fashion_logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Navigation = () => {
  // Navigation Bar
  return (
    <>
      <Navbar
        fixed="top"
        className="navbar"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand>
            <Link to="/home" className="items">
              <img className="logo" src={Logo} alt="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="toggle_navbar">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/home" className="items">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about" className="items">
                  About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link key={Math.random} to="/productList" className="items">
                  Collection
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/contact" className="items">
                  Contact
                </Link>
              </Nav.Link>
              
              {/* <Nav.Link><Link to="/statistic" className="items">Statistic</Link></Nav.Link>   */}
            </Nav>
            <Nav>
              <Nav.Link>
                <Link to="/login" className="items">
                  Log In
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/wishlist" className="items">
                  Wishlist
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/bag" className="items">
                  Bag
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navigation;
