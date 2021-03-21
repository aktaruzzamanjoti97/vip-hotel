import React, { useContext, useEffect, useState } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../images/assests-img/metro3.png";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <div>
      <Navbar bg="light outline-info" variant="primary">
        <img style={{ width: "70px" }} src={logo} alt="" />
        <Nav className="mr-auto pl-2 pr-2 nav-style">
          <h3>বাংলাদেশ রেলওয়ে জংশন</h3>
        </Nav>
        <Nav inline>
          <Nav.Link as={Link} style={{ fontWeight: "600" }} to="/home">
            Home
          </Nav.Link>
          <Nav.Link as={Link} style={{ fontWeight: "600" }} to="/login">
            Destination
          </Nav.Link>
          {loggedInUser && <h5 className=" m-2">{loggedInUser.email}</h5>}
          {loggedInUser.email ? (
            <Button variant="dark">Log Out</Button>
          ) : (
            <Button variant="success" as={Link} to="/login">
              Log In
            </Button>
          )}
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
