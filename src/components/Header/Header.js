import React, { useContext } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { UserContext } from "../../App";
import logo from '../../images/assests-img/Group 33141.png'

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <div>
      
      <Navbar bg="dark-light">
        <img style={{width: '80px'}} src={logo} alt=""/>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Nav className="mr-auto d-flex">
          <Nav.Link style={{fontWeight: '1000'}} as={Link} to="/home">Home</Nav.Link>
          <Nav.Link style={{fontWeight: '1000'}} as={Link} to="/booking">Booking</Nav.Link>
          
          <Nav.Link style={{fontWeight: '1000'}} as={Link} to="/destination">Destination</Nav.Link>
        </Nav>
        { loggedInUser ? loggedInUser.email : <Button as={Link} to="" variant="outline-primary">Log in</Button>}
      </Navbar>
      
      
    </div>
  );
};

export default Header;
