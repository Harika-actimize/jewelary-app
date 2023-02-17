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

export default function Banner() {
    return (
            <Container className="b-content">
                <Row>
                  <Col>
                  <div className="content">
                  <img width={"100%"} height={"80%"}  src="https://res.cloudinary.com/kendra-scott/image/upload/w_1500,c_fit/v1674673874/homepage-imageuploader/personalized_D_2.jpg"></img>
                  {/* <div className="text-block">
    <h1>Find your signature style</h1>
    <p>What a beautiful sunrise</p>
  </div> */}
  </div>
          </Col>
          </Row>
          </Container>
       
        );
  }
