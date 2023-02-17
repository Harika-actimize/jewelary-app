import React, { useState } from "react";
import Sidebar from "./navbar";
import Footer from './footer';
import NavbarDarkExample from './navigation';
import { useSelector } from "react-redux";
import {Card,Button} from 'react-bootstrap';
import { Container,Row,Col } from "react-bootstrap"
import ReactImageMagnify from 'react-image-magnify';

function Categorydetails(){
	const catimagdata = useSelector((state) => state.loadFavImgdata.activeitem);
	console.log("/////////////>",catimagdata)
    const data = catimagdata
    const similardata = catimagdata.similarimage
    const [activeImg, setActiveImg] = useState(similardata[0])
    
   

    console.log("/////////////,,,,,,,,,,,,,,,,,,,,,>",similardata)
    return(
        <div>
        <Sidebar/>
        <NavbarDarkExample/>
        <>
        <Container>
            <Row>
            <p style={{fontFamily: "Inter,sans-serif",letterSpacing: ".005em",color: "#68717e",fontSize: ".875rem",lineHeight: "22px",fontWeight: 300}}>New / All of the Hearts</p>
		{/* <div className="container py-4 px-4 justify-content-center"> */}
            <Col xs={6} md={2}>
            {
				similardata.map((itmes,index)=>{
					console.log("dataaaaaaaaaaaaa",itmes);
					return(
                        < img src={itmes} key={index} height ='119'width='95'className="relatedimg" style={{marginBottom:20}} onClick={()=>{setActiveImg(itmes)}}></img>
					//  <Card key={index} style= {{width:"95",height:"119"}}>
                    //     <Card.Img variant="top" src={itmes}/>
					//  <Card.Img variant="top" src={itmes.imagelink}/> 
                    // <Card.Img variant="top" src={itmes.imagelink1}/>  
					//  </Card> 
                    ) 
                })
            }  
            </Col>
            <Col xs={6} md={5} className="activeimg">

            <ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: activeImg,
    },
    largeImage: {
        src:  activeImg,
        width: 1200,
        height: 1800
    }
}} />
            {/* <SideBySideMagnifier
            
                        // fillGapLeft="10px"
                        overlayBoxImageSize="cover"
                        // fillGapRight="10px"
                        zoomContainerBorder="1px solid #ccc"
                        zoomContainerBoxShadow="0 4px 8px rgba(0,0,0,.5)"
                            imageSrc={activeImg}
                            imageAlt="Example"
                            mouseActivation={MOUSE_ACTIVATION.DOUBLE_CLICK} // Optional
                            touchActivation={TOUCH_ACTIVATION.DOUBLE_TAP} // Opt
                            /> */}
            {/* <img src={data.imagelink} style={{ width: '18rem'}}/> */}
            </Col>
            <Col md={5}>
            <p className="detailname">{data.imagename}</p>
            <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
<span className={index<=data.starrating?"star checked":"star"}>&#9733;</span>
        );
      })}
    </div>
    <p className="detailprice" ><del style={{marginRight:" 5%"}}>{data.actualprice}</del>{data.price}</p>
     <button className="addtobag">Add To Bag .<span style={{marginLeft:"2%"}}>{data.price}</span></button>
     <button className="favorite"><i style={{marginRight:" 2%"}} className="fa fa-heart-o"></i>Favorite</button>
     <p className="store"><i className="fa fa-institution" style={{fontSize:18,marginRight:15}}></i>Store Availability</p>
     <p><a href="#" className="selectstore">Select a Store</a></p>
    <p><i className="fa fa-adn" style={{fontSize:24}}></i> 4 easy payments of $14 with Affirm.<a  className="learnmore" href="#">Learn more</a> </p>
    <p><i className="fa fa-gift" style={{fontSize:24}}></i>Make gifting easy.<a  className="learnmore" href="#">Drop a Hint</a></p>
            {/* <p>{data.starrating}</p> */}
            </Col>
            
							
		{/* </div>  */}
        </Row>
        </Container>
		</>
        <Footer/>
        </div>
    )
}
export default Categorydetails;


