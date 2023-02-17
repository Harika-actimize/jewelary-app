import React from "react";
import Sidebar from "./navbar";
import Footer from './footer';
import NavbarDarkExample from './navigation';
import { useSelector } from "react-redux";
import {Card,Button,Container,Row,Col} from 'react-bootstrap';


function FavoritesOpen(){
	const catimagdata = useSelector((state) => state.loadFavImgdata.activeitem);
	console.log("/////////////>",catimagdata)
    let data = catimagdata
    return(
        <div>
        <Sidebar/>
        <NavbarDarkExample/>
        <>
		<div className="container py-4 px-4 justify-content-center">
			<h2 style={{fontFamily: "cormorant,serif",}}>Top Sale Favorites</h2>
			<Container>
				<Row>
					<Col>
					<Card>
					<Card.Img variant="top" src={data.imagelink}/>
					{/* <Card.Body>
					<Card.Text>{data.imagename}</Card.Text>
					 </Card.Body> */}
					</Card> 
					</Col>
					<Col>
					<p style={{fontFamily: "cormorant,serif",fontSize:24}}>{data.imagename}</p>
					</Col>
					</Row>
					</Container> 		
		</div> 
		</>

        <Footer/>
        </div>
    )
}
export default FavoritesOpen;


