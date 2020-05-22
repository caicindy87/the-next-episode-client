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

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="/" exact>
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/show" exact>
                TV Shows
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/" exact>
                Create an Account
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};

export default NavBar;

// Goes inbetween <toggle and collaspe
{
  /* <Form className="form-center">
  <FormControl type="text" placeholder="Search" className="" />
</Form>; */
}
