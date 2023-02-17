import { start } from '@popperjs/core';
import {Container,Image,Col,Row }from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link } from "react-router-dom";
import New01 from '../images/New01.webp';

function NavbarDarkExample() {
  return (
    <Navbar variant="dark" bg="dark" expand="lg" >
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav id='nav-new'>
            <NavDropdown className='ml-auto'
              id="nav-dropdown-dark-example"
              title="New"
              
              menuvariant="dark"
              // style={{right:0,left:"auto"}}
              // className="dropdown-menu-end"
              

            >
                <Row>
                  <Col lg={6} md={6} sm={12} xl={4} xs={12} xxl={4}>
                  <NavDropdown.Header> Categories</NavDropdown.Header>
              <NavDropdown.Item href="#action/3.1">Necklace</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Earrings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Rings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Bracelets
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Shop All New Arrivals
              </NavDropdown.Item>
              </Col>
              <Col lg={4} md={12} sm={12} xl={4} xs={12} xxl={4}>
              <NavDropdown.Header> Categories</NavDropdown.Header>
              <NavDropdown.Item href="#action/3.1">Necklace</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Earrings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Rings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Bracelets
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Shop All New Arrivals
              </NavDropdown.Item>
              </Col>
              <Col lg={4} md={12} sm={12} xl={4} xs={12} xxl={4}>
              <a>
                <Image
                className='Grouparoo-Logo'
                  src={New01}
                  alt="Grouparoo Logo"
                  width={500}
                  height={250}
                />
              </a>
              <p>Company</p>
              </Col>
              </Row>
            </NavDropdown>
          </Nav>


          <Nav id='nav-jewelary'>
            <NavDropdown
              id="nav-dropdown-dark-example0"
              title="Jewelary"
              menuVariant="dark"
              // style={{right:0,left:"auto"}}
            >
                <Row>
                  <Col lg={4} md={12} sm={12} xl={4} xs={12} xxl={4}>
                  <NavDropdown.Header> Trending Now</NavDropdown.Header>
              <NavDropdown.Item href="#action/3.1">New Arrivals</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Best Sellers
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Kendra's Picks</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              The Style Guide
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Hoops & Huggies
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Necklace Layering
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Layered Sets
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Everyday Essentials
              </NavDropdown.Item>
              </Col>
              <Col lg={4} md={12} sm={12} xl={4} xs={12} xxl={4}>
              <NavDropdown.Header> Categories</NavDropdown.Header>
              <NavDropdown.Item href="#action/3.1">Necklace</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Earrings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Rings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Bracelets
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Watches</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Charms & Chains
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Extenders & Converters
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Home & Accessories
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Men's
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              All Jewelry
              </NavDropdown.Item>
              </Col>
              <Col lg={4} md={12} sm={12} xl={4} xs={12} xxl={4}>
              <NavDropdown.Header> Shop by Metal</NavDropdown.Header>
              <NavDropdown.Item href="#action/3.1">14k Yellow Gold</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              14k White Gold
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">14k Rose Gold</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              18k Gold Vermeil
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Sterling Silver
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Gold Fashion
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Silver Fashion
              </NavDropdown.Item>
              </Col>
              <Col lg={4} md={12} sm={12} xl={4} xs={12} xxl={4}>
              <NavDropdown.Header> Featured</NavDropdown.Header>
              <NavDropdown.Item href="#action/3.1">The Elisa Necklace</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Engagement Rings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Wedding Collection</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Grad & Greek Jewelry
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Shop For Good
              </NavDropdown.Item>
              </Col>
              </Row>
            </NavDropdown>
          </Nav>
          <Nav id='nav-gifts'>
            <NavDropdown
              id="nav-dropdown-dark-example1"
              title="Gifts"
              key={start}
              menuvariant="dark"
              className='ml-auto'
              // style={{left:-83}}
             
            >
                <Row>
                  <Col lg={4} md={12} sm={12} xl={4} xs={12} xxl={4}>
                  <NavDropdown.Header> Gifts by Type</NavDropdown.Header>
              <NavDropdown.Item href="#action/3.1">Best Selling Gifts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Gifts $75 & Under
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Initial Jewelry</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Gift Sets
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Diamonds
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Birthstones
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Engravable Styles
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Gift Cards
              </NavDropdown.Item>
              </Col>
              <Col lg={4} md={12} sm={12} xl={4} xs={12} xxl={4}>
              <NavDropdown.Header> Gifts by Recipient</NavDropdown.Header>
              <NavDropdown.Item href="#action/3.1">Her</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Him
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mom</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Daughter
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Sister
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Friend
              </NavDropdown.Item>
              </Col>
              <Col lg={4} md={12} sm={12} xl={4} xs={12} xxl={4}>
              <NavDropdown.Header> Gifts by Occasion</NavDropdown.Header>
              <NavDropdown.Item href="#action/3.1">Birthday</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Anniversary
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bridal</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Bridesmaid
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Graduation
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              More Ways to Gift
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Buy Better Gifts
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Personalized Gifts
              </NavDropdown.Item>
              </Col>
              {/* <Col className="text-left  Categories">
              <NavDropdown.Header> Categories</NavDropdown.Header>
              <NavDropdown.Item href="#action/3.1">Necklace</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Earrings
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.4">
              Rings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Bracelets
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Shop All New Arrivals
              </NavDropdown.Item>
              </Col> */}
              </Row>
            </NavDropdown>
          </Nav>
          <Nav id='nav-finejewelary'>
            <NavDropdown
              id="nav-dropdown-dark-example2"
              title="Fine Jewelry"
              menuvariant="dark"
            >
                <Row>
                  <Col lg={4} md={12} sm={12} xl={4} xs={12} xxl={4}>
                  <NavDropdown.Header> Categories</NavDropdown.Header>
              <NavDropdown.Item href="#action/3.1">Necklace</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Earrings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Rings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Bracelets
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Shop All New Arrivals
              </NavDropdown.Item>
              </Col>
              <Col lg={4} md={12} sm={12} xl={4} xs={12} xxl={4}>
              <NavDropdown.Header> Shop By Metal</NavDropdown.Header>
              <NavDropdown.Item href="#action/3.1">14k Yellow Gold</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              14k White Gold
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">14k Rose Gold</NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.4">
              Rings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Bracelets
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Shop All New Arrivals
              </NavDropdown.Item> */}
              </Col>
              <Col lg={4} md={12} sm={12} xl={4} xs={12} xxl={4}>
              <NavDropdown.Header>Featured</NavDropdown.Header>
              <NavDropdown.Item href="#action/3.1">Diamonds</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Engagement Rings
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3">Wedding Collection</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Rings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Bracelets
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              All Fine Jewelry
              </NavDropdown.Item> */}
              </Col>
              </Row>
            </NavDropdown>
          </Nav>
          <Nav id='nav-demifinejewelry'>
            <NavDropdown
              id="nav-dropdown-dark-example3"
              title="Demi-Fine Jewelry"
              menuvariant="dark"
            >
                <Row>
                  <Col lg={4} md={12} sm={12} xl={4} xs={12} xxl={4}>
                  <NavDropdown.Header> Categories</NavDropdown.Header>
              <NavDropdown.Item href="#action/3.1">Necklace</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Earrings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Charms</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Rings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Bracelets
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              All Demi-Fine Jewelry
              </NavDropdown.Item>
              </Col>
              <Col lg={4} md={12} sm={12} xl={4} xs={12} xxl={4}>
              <NavDropdown.Header> Shop By Metal</NavDropdown.Header>
              <NavDropdown.Item href="#action/3.1">18k Gold Vermeil</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Sterling Silver
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Rings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Bracelets
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Shop All New Arrivals
              </NavDropdown.Item> */}
              {/* </Col>
              <Col className="text-left  Categories">
              <NavDropdown.Header> Categories</NavDropdown.Header>
              <NavDropdown.Item href="#action/3.1">Necklace</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Earrings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Rings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Bracelets
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Shop All New Arrivals
              </NavDropdown.Item>
              </Col>
              <Col className="text-left  Categories">
              <NavDropdown.Header> Categories</NavDropdown.Header>
              <NavDropdown.Item href="#action/3.1">Necklace</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Earrings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Rings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Bracelets
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Shop All New Arrivals
              </NavDropdown.Item>
              </Col> */}
              </Col>
              <Col lg={6} md={12} sm={12} xl={4} xs={12} xxl={4}>
              <a>
                <Image
                className='Grouparoo-Logo'
                  src={New01}
                  alt="Grouparoo Logo"
                  width={500}
                  height={250}
                />
              </a>
              <p>Company</p>
              </Col>
              </Row>
            </NavDropdown>
          </Nav>
          <Nav id='nav-coustmize'>
            <NavDropdown
              id="nav-dropdown-dark-example4"
              title="Coustmize"
              menuvariant="dark"
            >
                <Row>
                <Col lg={4} md={12} sm={12} xl={4} xs={12} xxl={4}>
              <a>
                <Image
                className='Grouparoo-Logo'
                  src={New01}
                  alt="Grouparoo Logo"
                  width={225}
                  height={225}
                />
              </a>
              <p>Company</p>
              </Col>
              <Col lg={4} md={12} sm={12} xl={4} xs={12} xxl={4}>
              <NavDropdown.Header> ColorBarColorBar</NavDropdown.Header>
              <NavDropdown.Item href="#action/3.1">Necklace</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Earrings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Rings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Bracelets
              </NavDropdown.Item>
              </Col>
              <Col lg={4} md={12} sm={12} xl={4} xs={12} xxl={4}>
              <a>
                <Image
                className='Grouparoo-Logo'
                  src={New01}
                  alt="Grouparoo Logo"
                  width={225}
                  height={225}
                />
              </a>
              <p>Company</p>
              </Col>
              <Col lg={4} md={12} sm={12} xl={4} xs={12} xxl={4}>
              <NavDropdown.Header> Engravable Styles</NavDropdown.Header>
              <NavDropdown.Item href="#action/3.1">Necklace</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Rings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Bracelets
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Charms
              </NavDropdown.Item>
              </Col>
              </Row>
            </NavDropdown>
          </Nav>
          <Nav id='nav-sale'>
            <NavDropdown
              id="nav-dropdown-dark-example5"
              title="Sale"
              menuvariant="dark"
            >
                <Row>
                  <Col lg={4} md={12} sm={12} xl={4} xs={12} xxl={4}>
                  <NavDropdown.Header> Categories</NavDropdown.Header>
              <NavDropdown.Item href="#action/3.1">Sale Necklaces</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Sale Earrings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sale Rings</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Sale Bracelets
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Sale Watches
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Sale Home
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Sale Men's
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Shop All Sale
              </NavDropdown.Item>
              </Col>
              {/* <Col className="text-left  Categories">
              <NavDropdown.Header> Categories</NavDropdown.Header>
              <NavDropdown.Item href="#action/3.1">Necklace</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Earrings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Rings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Bracelets
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Shop All New Arrivals
              </NavDropdown.Item>
              </Col>
              <Col className="text-left  Categories">
              <NavDropdown.Header> Categories</NavDropdown.Header>
              <NavDropdown.Item href="#action/3.1">Necklace</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Earrings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Rings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Bracelets
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Shop All New Arrivals
              </NavDropdown.Item>
              </Col>
              <Col className="text-left  Categories">
              <NavDropdown.Header> Categories</NavDropdown.Header>
              <NavDropdown.Item href="#action/3.1">Necklace</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Earrings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Rings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Bracelets
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Shop All New Arrivals
              </NavDropdown.Item>
              </Col> */}
               <Col lg={4} md={12} sm={12} xl={4} xs={12} xxl={4}>
              <a>
                <Image
                className='Grouparoo-Logo'
                  src={New01}
                  alt="Grouparoo Logo"
                  width={500}
                  height={250}
                />
              </a>
              <p>Company</p>
              </Col>
              </Row>
            </NavDropdown>
          </Nav>
          <Nav id='nav-kendra'>
            <NavDropdown
              id="nav-dropdown-dark-example6"
              title="Kendra Gives Back"
              menuvariant="dark"
            >
                <Row>
                  <Col lg={4} md={12} sm={12} xl={4} xs={12} xxl={4}>
                  <NavDropdown.Header>Learn More</NavDropdown.Header>
              <NavDropdown.Item href="#action/3.1">Kendra's Story</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Facets Blog
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Direct Retail</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Birthday Sign-Up
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.4">
              Bracelets
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Shop All New Arrivals
              </NavDropdown.Item> */}
              </Col>
              <Col lg={4} md={12} sm={12} xl={4} xs={12} xxl={4}>
              <NavDropdown.Header>Philanthropy</NavDropdown.Header>
              <NavDropdown.Item href="#action/3.1">We Give Back</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Shop For Good
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">KS WELI Women's Summit 2023</NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.4">
              Rings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Bracelets
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Shop All New Arrivals
              </NavDropdown.Item>
              </Col>
              <Col className="text-left  Categories">
              <NavDropdown.Header> Categories</NavDropdown.Header>
              <NavDropdown.Item href="#action/3.1">Necklace</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Earrings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Rings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Bracelets
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Shop All New Arrivals
              </NavDropdown.Item>
              </Col>
              <Col className="text-left  Categories">
              <NavDropdown.Header> Categories</NavDropdown.Header>
              <NavDropdown.Item href="#action/3.1">Necklace</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Earrings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Rings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Bracelets
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Shop All New Arrivals
              </NavDropdown.Item>
              </Col> */}
              </Col>
              <Col lg={4} md={12} sm={12} xl={4} xs={12} xxl={4}>
              <a>
                <Image
                className='Grouparoo-Logo'
                  src={New01}
                  alt="Grouparoo Logo"
                  width={500}
                  height={250}
                />
              </a>
              <p>Company</p>
              </Col>
              </Row>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarDarkExample;