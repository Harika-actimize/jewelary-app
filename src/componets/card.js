import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card,Button, Container } from "react-bootstrap";



const Poductcard = props=>{
    let {imgSrc , price ,title} =props.data;
    return(
        <Container> 
        <Card >
        <div className="overflow-hidden round p-0 bg-light">
            <Card.Img variant="top" src={imgSrc}/>
        
        <Card.Body className="text-center">
            <Card.Title className="display-6">{price}</Card.Title>
            <p className="imagename">{title}</p>
        </Card.Body>
        </div>
        </Card>
       
        </Container>
    )
}
export default Poductcard;