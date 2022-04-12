import React, { useContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './checkOut.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { CartFill, FileEarmarkArrowDownFill } from 'react-bootstrap-icons';
import CartContext from "./cartCon";
import { BrowserRouter, Route, Routes, Link, useNavigate } from 'react-router-dom';

function Navbar1Component() {
    const getValue = useContext(CartContext);
    const navigate = useNavigate();
    const ContinueClick = () => {
        navigate("/");
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
                        <Button variant="outline-dark" onClick={() => ContinueClick()}><span className="px-1">
                            Continue Shopping</span></Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

function ListItems(object) {
    const cart = useContext(CartContext);
    const click = (values) => {
        cart.handleDecrement(values);
    }
    return (
        <>
            <Container className="px-4 px-lg-5 mt-3 mb-3" >
                <Row className="mt-3 mb-3 text-dark block" style={{ height: "10rem", borderRadius: "1rem" }}>
                    <Col><><div className="image"><img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"></img></div>
                        <div className="maincontainer">
                            <div className="objectname">{object.name}</div>
                            <div className="objectprice"><div className="price">{object.price}</div>
                                <div className="but"><Button variant="outline-dark" onClick={() => click({ name: object.name, price: object.price })}>Remove from Cart</Button></div>
                            </div>

                        </div></>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

function Bill(){
    const cart = useContext(CartContext);
    let amount = cart.amount
    let gst = (amount*0.18)
    let total = amount+gst
    amount = amount.toFixed(2);
    gst = gst.toFixed(2);
    total = total.toFixed(2);
    return (
        <>
            <Container className="px-4 px-lg-5 mt-3 mb-3">
                <Row className="billrow">
                    <div className="billing">
                        <div className="amount">
                            Amount = ${amount}
                        </div>
                        <div className="gst">
                            Tax = ${gst}
                        </div>
                        <hr></hr>
                        <div className="total">
                            <h4>Total = ${total}</h4>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    )
}

function CheckoutPage() {
    const cartValues = useContext(CartContext);
    const arraylength = cartValues.cartArray.length;
    return (
        <>
            <Navbar1Component />
            <Container className="px-4 px-lg-5 mt-5" style={{}}><h3>My Cart</h3></Container>
            {(arraylength > 0) ? <>
                {cartValues.cartArray.map(item => <ListItems name={item.name} price={item.price} />)}
            </> : <><Container className="px-4 px-lg-5 mt-3 mb-3"><h4>
                Oops! The Cart seems Empty
            </h4></Container></>}
            <Bill />
        </>
    )
}

export default CheckoutPage