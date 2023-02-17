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

export default function Coursol() {
    return (
            <Container style={{marginTop:"1%"}}>
                <Row>
                  <Col>
                  <div  className="content">
                  <img width={"100%"} height={"100%"}  src="https://res.cloudinary.com/kendra-scott/image/upload/w_1500,c_fit/v1675284976/homepage-imageuploader/date_night_D.jpg"></img>
                  <figcaption className="coursol-block">
                  
                  <h1 style={{fontFamily: "Inter,sans-serif"}}>Love is in the Air</h1>
                  <p>From an adventurous day out to a romantic <br></br>night in,leave a wow-worthy impression in our<br></br>date-night essentials</p>
                <button style={{border: "none",padding: "3%",backgroundColor:"#F7A8B4"}}>SHOP DATE NIGHT LOOKS</button>
                
                </figcaption>
        </div>
        {/* <video style ={{width:"100%",height:"360"}} loop={true} autoPlay muted >
              <source src="https://res.cloudinary.com/kendra-scott/video/upload/v1674120212/Libraries/SiteGenesisSharedLibrary/images/homepage/html-banner/1-25-2023_V-day/HP-Hero-Video-Desktop.mp4" type="video/mp4"></source>
          </video>  */}
            </Col>
          </Row>
          </Container>
       
        );
  }
