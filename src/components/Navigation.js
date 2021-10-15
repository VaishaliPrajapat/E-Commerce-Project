import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../static/Logo.svg";
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
        variant="dark"
      >
        <Container>
          <Navbar.Brand>
            <Link to="/Home" className="items">
              <img className="logo" src={Logo} alt="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="toggle_navbar">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/men" className="items">
                  Men
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/women" className="items">
                  Women
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/kids" className="items">
                  Kids
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link key={Math.random} to="/productList" className="items">
                  ProductList
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
