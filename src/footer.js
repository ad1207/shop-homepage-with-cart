import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
function footerComponent(){
    return(
        <>
        <Container fluid className="py-5 bg-dark">
        <p className="m-0 text-center text-white">Copyright © Your Website 2021</p>
        </Container>
        </>
    );
}

export default footerComponent;