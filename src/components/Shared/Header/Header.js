import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import logo from '../../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <>
                <Navbar sticky="top" variant="dark" collapseOnSelect expand="lg" className="navbar-style">
                    <Container>
                        <Navbar.Brand href="#home" className="me-5">
                            <img
                                alt=""
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            <span className="tour-text">Toure</span>
                            <span className="line-text tour-text">Line</span>
                            <span className="trip-text tour-text">Trip</span></Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link className="text-white" href="home">HOME</Nav.Link>
                            <Nav.Link className="text-white">SERVICES</Nav.Link>
                            <Nav.Link className="text-white">MY ORDERS</Nav.Link>
                            <Nav.Link className="text-white">MANAGE ALL ORDERS</Nav.Link>
                            <Nav.Link className="text-white" href="addnewservice">ADD NEW SERVICE</Nav.Link>
                            <Nav.Link className="text-white">ABOUT US</Nav.Link>
                            <Button className="logout-button" variant="light">Log out</Button>
                            <Nav.Link className="login-button">Login</Nav.Link>
                            <Navbar.Text className="text-light">
                                Signed in as: <a href="#login">karim</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;