import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';


function headerComponent(){
    return (
        <>
        <Container fluid className="bg-dark py-5">
            <Container className="px-4 px-lg-5 my-5">
                <Container className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="text-white-50 lead fw-normal mb-0">With this shop homepage template</p>
                </Container>    
            </Container>

        </Container>
        </>
    )
}

export default headerComponent;