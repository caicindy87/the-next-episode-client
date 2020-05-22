import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, Form, FormControl } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a,
  .navbar-nav,
  .navbar-light .nav-link {
    color: #9fffcb;
    &:hover {
      color: white;
    }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9fffcb;
    &:hover {
      color: white;
    }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;

const NavBar = () => {
  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">The Next Episode</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Form className="form-center">
          <FormControl type="text" placeholder="Search" className="" />
        </Form>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link to="/" exact>
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link to="/show" exact>
                Show
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link to="/showlist" exact>
                Show List
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};

export default NavBar;

{
  /* <Styles>
<Navbar expand="lg"></Navbar>
<Nav.Item>
  <Nav.Link to="/" exact>
    Homes
  </Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link to="/show" exact>
    Show
  </Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link to="/showlist" exact>
    Show List
  </Nav.Link>
</Nav.Item>
</Styles> */
}
