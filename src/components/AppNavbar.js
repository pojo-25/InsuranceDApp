import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import { LinkContainer } from "react-router-bootstrap";

import Logo from "../assets/logo-notext.png";
import FaucetButton from "./reach/FaucetButton";
import Balance from "./reach/Balance";
import RegularPayment from "./reach/RegularPayment";


const AppNavbar = () => {


    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <img
                        src={Logo}
                        width="60"
                        className="d-inline-block align-top"
                        alt="Reach Logo" />
                    {' '}
                    <p className="d-inline-block ml-3">Insurance dApp </p>
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <Nav.Link>About</Nav.Link>
                    </LinkContainer>
                    
                    <FaucetButton />
                    <Balance />
                   
                   
                </Nav>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;