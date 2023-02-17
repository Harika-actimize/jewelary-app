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

export default function Shopnow() {
    return (
            <Container className="b-content">
              <Row>
                
                <Col md="6">
                  <img width={"100%"} height={"auto"} style={{marginBottom:"5%"}}  src="https://res.cloudinary.com/kendra-scott/image/upload/v1674758664/homepage-imageuploader/Rectangle_1_44.jpg"></img>
                   </Col>
                   <Col md="6">
                <div style={{textAlign:"center",marginTop:"10%",marginBottom:"5%"}}>
                    <h1 style={{marginBottom: "10px",lineHeight: "50px",fontFamily: "Cormorant",fontWeight: "400",fontSize:"42px"}}>The Valentine's Day Gift Quiz</h1>
                    <p>Year-round, when you purchase from our Shop<br></br>
                     for Good collection, a portion of proceeds <br></br>
                     benefits women and youth causes.</p>
                    <a className="btn-headline ks-cta js-ks-button shopnow"  href="https://www.kendrascott.com/birthday-signup.html">Sign Up Now </a>
                </div>
          
                 </Col>
                  
         
          </Row>

                <Row>
                <Col md="6">
                <div style={{textAlign:"center",marginTop:"10%",marginBottom:"5%"}}>
                    <h1 style={{marginBottom: "10px",lineHeight: "50px",fontFamily: "Cormorant",fontWeight: "400",fontSize:"42px"}}>Shop for Good</h1>
                    <p>Shop the looks we love and never leave home<br></br>
                          without—from statement-making pieces to <br></br>
                             everyday essentials and more.                    
                    </p>
                    <a className="btn-headline ks-cta js-ks-button shopnow"  href="https://www.kendrascott.com/birthday-signup.html">Sign Up Now </a>
                </div>
          
                 </Col>
                  <Col md="6">
                  <img width={"100%"} height={"auto"} style={{marginBottom:"5%"}} src="https://res.cloudinary.com/kendra-scott/image/upload/v1673039401/homepage-imageuploader/Rectangle_1.jpg"></img>
                   </Col>
         
          </Row>
                    </Container>
        
       
        );
  }
