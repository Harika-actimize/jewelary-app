import {
    Nav,
    Navbar,
    Container,
    Button,
    Image,
    NavDropdown,
    Col,
    Row,
  } from "react-bootstrap";
import React, { Component } from "react";

export default function Bannerice() {
    return (
            <Container>
                <Row>
                  <Col>
                  <div className="content">
                  <img width="100%" height="100%"  src="https://res.cloudinary.com/kendra-scott/image/upload/w_1500,c_fit/v1674673874/homepage-imageuploader/Elisa_feature_D_2.jpg"></img>
                  <figcaption className="text-block">
                  
    <h1 style={{fontFamily: "Inter,sans-serif"}}>The Elisa Neckless</h1>
    <p>Loved by celebs, trendstters,and you,Shop<br></br>Our one-of-a-kind icon that can really do it all.</p>
  <button style={{border: "none",padding: "3%"}}>SHOP THE ELISA</button>
  
  </figcaption>
  </div>
          </Col>
          </Row>
          </Container>
       
        );
  }
