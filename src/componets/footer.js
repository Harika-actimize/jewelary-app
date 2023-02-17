import React from "react";
import {
Box,
Container,
Row,
Col,
FooterLink,
Heading,
} from "./footerstyle";

const Footer = () => {
return (
	<>
	<div style={{ borderTop: "2px solid #f4e200"}}>
	<footer className="footer">
		
	<Container style={{marginBottom:"5%"}}>
		<Row>
		<Col md="8">
			<Heading>ABOUT US</Heading>
			<FooterLink href="#">Kendra's Story</FooterLink>
			<FooterLink href="#">Kendra Gives Back</FooterLink>
			<FooterLink href="#">Press</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Refer a Friend</FooterLink>
		</Col>
		<Col>
			<Heading>NEED HELP?</Heading>
			<FooterLink href="#">Monday – Sunday 8am – 5pm CT</FooterLink>
			<FooterLink href="#">Call 866-677-7023</FooterLink>
			<FooterLink href="#">service@kendrascott.com</FooterLink>
			<FooterLink href="#">Find a Kendra Scott</FooterLink>
            <FooterLink href="#">Store</FooterLink>
            <FooterLink href="#">Find Other Retailers</FooterLink>
            <FooterLink href="#">Book a Virtual</FooterLink>
            <FooterLink href="#">Appointment</FooterLink>
            <FooterLink href="#">Buy A Gift Card</FooterLink>
		</Col>
		<Col>
			<Heading>YOUR ORDER</Heading>
			<FooterLink href="#">Uttar Pradesh</FooterLink>
			<FooterLink href="#">Ahemdabad</FooterLink>
			<FooterLink href="#">Indore</FooterLink>
			<FooterLink href="#">Mumbai</FooterLink>
		</Col>
        <Col>
			<Heading>OTHER HELPFUL LINKS</Heading>
			<FooterLink href="#">Uttar Pradesh</FooterLink>
			<FooterLink href="#">Ahemdabad</FooterLink>
			<FooterLink href="#">Indore</FooterLink>
			<FooterLink href="#">Mumbai</FooterLink>
		</Col>
		
		<Col md="4">
        <p className="social-top">Be an insider! Sign up and get 15% off your next purchase.</p>
        <a className="btn-headline ks-cta js-ks-button singup"  href="https://www.kendrascott.com/birthday-signup.html">Sign Up Now </a>
		<div>
            <ul className="social-network social-circle" style={{marginLeft: "-44px !important",fontSize: "30px",}}>
             <li><a href="#" className="icoInstagram" title="Facebook"><i className="fa fa-instagram"></i></a></li>
             <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
             <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
			 <li><a href="#" className="icoTwitter" title="Linkedin"><i className="fa fa-twitter"></i></a></li>
			 <li><a href="#" className="icoPintrest" title="Linkedin"><i className="fa fa-pinterest"></i></a></li>
			 <li><a href="#" className="icoPintrest" title="Linkedin"><i className="fa fa-youtube-play"></i></a></li>
            </ul>				
		</div>
        </Col>
		</Row>
	</Container>
	</footer>
	</div>
	<div style={{marginBottom:"5%"}}>
	<span style={{borderRight: "2px solid #c3c6cb",marginLeft:"10%",marginRight:"3%"}}>Privacy Policy</span>
	<span style={{borderRight: "2px solid #c3c6cb",marginRight:"3%"}}> Accessibility Policy</span>
	<span style={{borderRight: "2px solid #c3c6cb",marginRight:"3%"}}>Sitemap</span>
	<span style={{borderRight: "2px solid #c3c6cb",marginRight:"3%"}}>Manage Cookie Preferences</span>
	<span style={{borderRight: "2px solid #c3c6cb",marginRight:"3%"}}>Do Not Sell My Information</span>
	<span style={{borderRight: "2px solid #c3c6cb",marginRight:"3%"}}>© KENDRA SCOTT, LLC</span>
			</div>
</>
);
};
export default Footer;
