import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Nav, Navbar, Form, FormControl } from "react-bootstrap";
import styled from "styled-components";

import SearchBar from "./SearchBar";

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

const NavBar = ({
  currentUser,
  handleLogout,
  history,
  searchTerm,
  changeSearchTerm,
  fetchShows,
}) => {
  return (
    <Styles>
      <Navbar expand="lg" class="navbar">
        <Navbar.Brand href="/">The Next Episode</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <SearchBar
          searchTerm={searchTerm}
          changeSearchTerm={changeSearchTerm}
          fetchShows={fetchShows}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {!!localStorage.getItem("token") && (
              <Nav.Item>
                <Nav.Link href="/savedshows">Saved Shows</Nav.Link>
              </Nav.Item>
            )}
            <Nav.Item>
              <Nav.Link href="/shows">TV Shows</Nav.Link>
            </Nav.Item>
            {!!localStorage.getItem("token") ? (
              <Nav.Item>
                <Nav.Link
                  onClick={() => {
                    history.push("/");
                    handleLogout();
                  }}
                >
                  Log Out
                </Nav.Link>
              </Nav.Item>
            ) : (
              <Nav.Item>
                <Nav.Link href="/login">Log In</Nav.Link>
              </Nav.Item>
            )}
            {!!localStorage.getItem("token") ? null : (
              <Nav.Item>
                <Nav.Link href="/signup">Create Account</Nav.Link>
              </Nav.Item>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};

export default withRouter(NavBar);
