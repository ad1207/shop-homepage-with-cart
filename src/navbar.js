import React, { useContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { CartFill } from 'react-bootstrap-icons';
import CartContext from "./cartCon";
import { BrowserRouter, Route, Routes,Link,useNavigate } from 'react-router-dom';

function NavbarComponent() {
    const getValue = useContext(CartContext);
    const navigate = useNavigate();
    const cartClick = () =>{
        navigate("/cart");
    }
    return (
        <>
            <Navbar expand="lg" variant="light" bg="light">
                <Container className="px-4 px-lg-5">
                    <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#">About</Nav.Link>
                            <NavDropdown title="Shop" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#">All Products</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">Popular Items</NavDropdown.Item>
                                <NavDropdown.Item href="#">New Arrivals</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Button variant="outline-dark" onClick={()=>cartClick()}><span className="px-1">
                            <CartFill size={20}/>
                            </span><>Cart</><span className='badge bg-dark text-white ms-1 rounded-pill'><>{getValue.cart}</></span> </Button>
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarComponent;