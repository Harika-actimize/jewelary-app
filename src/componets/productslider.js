
import { database,dbRef } from '../firebase';
import React, { useState ,useEffect } from "react";
import {Card,Button} from 'react-bootstrap';
// import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { Swiper,SwiperSlide} from "swiper/react";
import {FreeMode} from "swiper";
import FavoritesOpen from './favoritesopen';
// import axios from 'axios';  
import "swiper/css";
import "swiper/css/free-mode";
import "bootstrap/dist/css/bootstrap.min.css";
import  Productcard from "./card";
import {useNavigate } from 'react-router-dom';
import {loadProImgsError, loadProImgsStart, loadProImgsSuccess} from '../actions/userActions';
import {loadProImgApi} from '../api/userApi'
// import { getDataAxios } from "../redux/reducers/data";

const Product = () => {
	const history = useNavigate(); 
  
const goToHome=()=>{
//   alert("hi"); 
  history("/product");
}; 
	// const [contacts, setContacts] = useState({})
	const dispatch = useDispatch()
	const proimagdata = useSelector((state) => state.loadFavImgdata.proimages);
	const prodata = Object.values(proimagdata)
	// console.log('catimagdata', catimagdata);

	const loadData =async()=>{
		dispatch(loadProImgsStart())
		const result = await loadProImgApi()
		// console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@",result)
		if(result.status === 200){
			dispatch(loadProImgsSuccess(result.data))
		}else{
			dispatch(loadProImgsError(result))
		}
	}
	useEffect(() => {

		loadData()
	}, [])
	// console.log("/////////////",favimagdata)
	return(
		<>
		<div className="container py-4 px-4 justify-content-center">
			<h2 style={{fontFamily: "cormorant,serif",}}>Top Sale Products</h2>
               <Swiper
			   freeMode={true}
			   grabCursor={true}
			   modules={[FreeMode]}
			   className="mySwiper"
			  breakpoints={{
				0:{
					slidesPerView:1,
					spaceBetween:10,
				},
				480:{
					slidesPerView:2,
					spaceBetween:10,
				},
				768:{
					slidesPerView:3,
					spaceBetween:15,
				},
				1024:{
					slidesPerView:4,
					spaceBetween:15,
				},
				1280:{
					slidesPerView:5,
					spaceBetween:20,
				}

			  }}
			   >
				{
				prodata.map((itmes,index)=>{
					
					// console.log("catdata",catdata);
					return(
						<SwiperSlide key={index}>
					<Card>
					<Card.Img variant="top" src={itmes.imagelink}/>
					<Card.Body>
					<Card.Text>{itmes.imagename}</Card.Text>
					{/* <Card.Text style={{color:"green"}}>{product.actulprice}</Card.Text> */}
					{/* <Card.Text  style={{color:"blue"}}>{u.description}</Card.Text> */}
					{/* <div className="product-actions"> */}
					{/* <Button variant="primary" style={{marginRight:9}}>Buy Now</Button> */}
					{/* <Button variant="primary" onClick={()=>{this.setState({viewDetails:false,currentItem:null})}}>Back</Button> */}
					{/* <Button variant="primary" onClick={()=>{
					this.setState({PresentItem:u,Description:true})
					}}>Viwe Details</Button> */}
					{/* </div> */}
					 </Card.Body>
					</Card>  
				   </SwiperSlide>
					)
                  
				})}
				

			   </Swiper>
		</div> 
		</>
	)
			}
export default Product;