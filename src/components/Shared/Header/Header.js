import React from 'react';
import { Container, Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import './Header.css';

const Header = () => {

    const { user, logOut } = useAuth();

    return (
        <div>
            <>
                <Navbar fixed="top" variant="dark" collapseOnSelect expand="lg" className="navbar-style">
                    <Container>
                        <Navbar.Brand href="#home" className="me-5">
                            <img
                                alt=""
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            <span className="tour-text">Tour</span>
                            <span className="line-text tour-text">Line</span>
                            <span className="trip-text tour-text">Trip</span></Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link as={HashLink} to="/home#home" className="text-primary fw-bold">HOME</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services" className="text-primary fw-bold">SERVICES</Nav.Link>
                            <Nav.Link as={Link} to="/about" className="text-primary fw-bold">ABOUT US</Nav.Link>
                            <Nav.Link as={HashLink} to="/contact#contact" className="text-primary fw-bold">CONTACT US</Nav.Link>
                            <NavDropdown className="text-white fw-bold" title="ORDERS" id="collasible-nav-dropdown">
                                <Nav.Link as={Link} to="/myorders" className="dropdown-text">MY ORDERS</Nav.Link>
                                <Nav.Link as={Link} to="/dashboard" className="dropdown-text">DASHBOARD</Nav.Link>
                                <Nav.Link as={Link} to="/addnewservice" className="dropdown-text">ADD NEW SERVICE</Nav.Link>
                            </NavDropdown>

                            {
                                user?.email ? <Button onClick={logOut} className="logout-button me-2" variant="light">Log out</Button>
                                    :
                                    <Nav.Link as={HashLink} to="/login#login" className="login-button">Login</Nav.Link>

                            }
                            <Navbar.Text className="text-dark">
                                User: <small className="fw-bold">{user?.displayName}</small>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;