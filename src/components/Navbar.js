import React from "react";
import { Link, withRouter } from "react-router-dom";
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
    padding: 8px;
    font-size: 15px;
  }
  .brand {
    font-size: 1.7em;
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
  handleLogout,
  history,
  searchTerm,
  changeSearchTerm,
  fetchShows,
}) => {
  return (
    <Styles>
      <Navbar expand="lg" class="navbar">
        <Link to="/" className="brand">
          The Next Episode
        </Link>
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
                <Link to="/savedshows">Saved Shows</Link>
              </Nav.Item>
            )}
            <Nav.Item>
              <a href="/shows">TV Shows</a>
            </Nav.Item>
            {!!localStorage.getItem("token") ? (
              <Nav.Item>
                <Link
                  onClick={() => {
                    history.push("/");
                    handleLogout();
                  }}
                >
                  Log Out
                </Link>
              </Nav.Item>
            ) : (
              <Nav.Item>
                <Link to="/login">Log In</Link>
              </Nav.Item>
            )}
            {!!localStorage.getItem("token") ? null : (
              <Nav.Item>
                <Link to="/signup">Create Account</Link>
              </Nav.Item>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};

export default withRouter(NavBar);
