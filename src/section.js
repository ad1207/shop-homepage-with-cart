import React, { useState, useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { StarFill } from 'react-bootstrap-icons';
import CartContext from "./cartCon";

export function CardComponent(name) {
    const cart = useContext(CartContext);
    const check = (values) =>{
        for(var i=0;i<cart.cartArray.length;i++){
            if(cart.cartArray[i].id===values.id){
                return false
            }
        }
        return true
    }
    const click = (values) =>{
        if(check(values)){
            cart.handleIncrement(values);
        }
        else{
            cart.handleDecrement(values);
        }
        
        
    }
    return (
        <Col className="mb-5">
            <Card className="h-100">
                <Card.Img variant="top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
                {name.sale ? <Badge bg="dark" className="position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</Badge> : <></>}
                <Card.Body className="p-4 text-center">
                    <Card.Title><h5 className="fw-bolder">{name.title}</h5></Card.Title>
                    <Card.Text>
                        <Row className="d-flex justify-content-center small text-warning mb-2">
                            <Col xs="1" sm="1" lg="1"><StarFill/></Col>
                            <Col xs="1" sm="1" lg="1"><StarFill/></Col>
                            <Col xs="1" sm="1" lg="1"><StarFill/></Col>
                            <Col xs="1" sm="1" lg="1"><StarFill/></Col>
                            <Col xs="1" sm="1" lg="1"><StarFill/></Col>
                        </Row>
                        <span className="text-muted"><del>{name.mute}</del> </span>
                        {name.text}
                    </Card.Text>
                </Card.Body>
                <Container className="p-4 text-center">
                    <Button variant="outline-dark" onClick={() => click({id:name.id,name:name.title,price:name.text})}>{check({id:name.id,name:name.title,price:name.text}) ? <>Add to Cart</> : <>Remove from Cart</>}</Button>
                </Container>
            </Card>
        </Col>
    );
}

function ViewCardComponent(name) {
    return (
        <Col className="mb-5">
            <Card className="h-100">
                <Card.Img variant="top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
                <Card.Body className="p-4 text-center">
                    <Card.Title><h5 className="fw-bolder">{name.title}</h5></Card.Title>
                    <Card.Text>
                        {name.text}
                    </Card.Text>
                </Card.Body>
                <Container className="p-4 text-center">
                    <Button variant="outline-dark" >View options</Button>
                </Container>
            </Card>
        </Col>
    );
}

function sectionComponent() {
    return (
        <>
            <Container className="py-5">
                <Container className="px-4 px-lg-5 mt-5">
                    <Row className="gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        <ViewCardComponent title="Fancy Product" text="$40.00 - $80.00" id="1"/>
                        <CardComponent title="Special Item" button="Add to Cart" sale="true" text="$18.00" mute="$20.00" id="2"/>
                        <CardComponent title="Sale Item" button="Add to Cart" sale="true" text="$25.00" mute="$50.00" id="3"/>
                        <CardComponent title="Popular Item" button="Add to Cart" text="$40.00" id="4"/>
                        <CardComponent title="Sale Item" button="Add to Cart" sale="true" text="$25.00" mute="$50.00" id="5"/>
                        <ViewCardComponent title="Fancy Product" text="$120.00 - $280.00" id="6"/>
                        <CardComponent title="Special Item" button="Add to Cart" sale="true" text="$18.00" mute="$20.00" id="7"/>
                        <CardComponent title="Popular Item" button="Add to Cart" text="$40.00" id="8"/>
                    </Row>
                </Container>
            </Container>

        </>
    )
}

export default sectionComponent;