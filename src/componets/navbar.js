import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import { SidebarData } from "./SidebarData";
// import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../images/logo.png';


const Nav = styled.div`
background: #15171c;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const NavIcon = styled(Link)`
margin-left: 2rem;
font-size: 2rem;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const SidebarNav = styled.nav`
background: #15171c;
width: 250px;
height: 100vh;
display: flex;
justify-content: center;
position: fixed;
top: 0;
left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
transition: 350ms;
z-index: 10;
`;

const SidebarWrap = styled.div`
width: 100%;
`;

const Sidebar = () => {
const [sidebar, setSidebar] = useState(false);

const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      {/* <IconContext.Provider value={{ color: "#fff" }}> */}
		{/* <Nav>
		
		<h1
			style={{ textAlign: "center",
					marginLeft: "200px",
					color: "green" }}
		>
			GeeksforGeeks
		</h1>
		</Nav> */}
		{/* <SidebarNav sidebar={sidebar}>
		<SidebarWrap>
			<NavIcon to="#">
			<AiIcons.AiOutlineClose onClick={showSidebar} />
			</NavIcon>
			{SidebarData.map((item, index) => {
			return <SubMenu item={item} key={index} />;
			})}
		</SidebarWrap>
		</SidebarNav>
	</IconContext.Provider> */}
      <div>
<p className='banner-box'> <a href="/jewelry/"><span style={{fontSize:15}}><b>FREE SHIPPING on orders $100+</b></span></a></p>
<a href='#' className='UsableNetAssistive accessible-desktop-ada' title="By activating this link you will enable accessibility for all the data and features of the site">ENABLE ACCESSIBILITY</a>
</div>
      <div>
      <Container fluid style={{"marginTop":"2%"}}>
      <Row>
        
        {/* <Col><NavIcon to="#">
			<FaIcons.FaBars className="ljSNGj" onClick={showSidebar} />
		</NavIcon> <i className="fa fa-map-marker marker store" aria-hidden="true">My Store</i></Col> */}
    <Col><i className="fa fa-map-marker" aria-hidden="true">My Store</i></Col>
        <Col> <img src={logo} width={275} height={90} style={{ "marginTop": "-5%","alignItems":"center"}} /></Col>
        <Col> 
  <input type="text" placeholder="Search.." name="search2"></input>
  <button type="submit"><i className="fa fa-search"></i></button>
  <i className="fa fa-user usericon"></i>
  <i className="fa fa-heart hearticon"></i>
   <i className="fa fa-shopping-bag bagicon" aria-hidden="true"></i>
    </Col>
      </Row>
      </Container>
    </div>
    <hr></hr>

    </>
  );
}

export default Sidebar;