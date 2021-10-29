import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import './Header.css';

const Header = () => {

    const { user, logOut } = useAuth();

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
                            <Nav.Link as={Link} to="/home" className="text-white">HOME</Nav.Link>
                            <Nav.Link className="text-white">MY ORDERS</Nav.Link>
                            <Nav.Link className="text-white">MANAGE ALL ORDERS</Nav.Link>
                            <Nav.Link as={Link} to="/addnewservice" className="text-white">ADD NEW SERVICE</Nav.Link>
                            <Nav.Link className="text-white">ABOUT US</Nav.Link>
                            {
                                user?.email ? <Button onClick={logOut} className="logout-button me-2" variant="light">Log out</Button>
                                    :
                                    <Nav.Link className="login-button" href="/login">Login</Nav.Link>

                            }
                            <Navbar.Text className="text-light">
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