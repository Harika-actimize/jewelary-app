
import { database,dbRef } from '../firebase';
import React, { useState ,useEffect } from "react";
import {Card,Button} from 'react-bootstrap';
// import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { Swiper,SwiperSlide} from "swiper/react";
import {FreeMode} from "swiper";
// import axios from 'axios';  
import "swiper/css";
import "swiper/css/free-mode";
import "bootstrap/dist/css/bootstrap.min.css";
import  Productcard from "./card";
import {useNavigate } from 'react-router-dom';
import {loadJewImgsError, loadJewImgsStart, loadJewImgsSuccess, selecteditem} from '../actions/userActions';
import {loadJewImgApi} from '../api/userApi'
// import { getDataAxios } from "../redux/reducers/data";

const Category = () => {
	const history = useNavigate(); 
  
	// const [contacts, setContacts] = useState({})
	const dispatch = useDispatch()
	const catimagdata = useSelector((state) => state.loadFavImgdata.jewimages);
	const catdata = Object.keys(catimagdata)

	const loadData =async()=>{
		dispatch(loadJewImgsStart())
		const result = await loadJewImgApi()
		if(result.status === 200){
			dispatch(loadJewImgsSuccess(result.data))
		}else{
			dispatch(loadJewImgsError(result))
		}
	}

	const goToHome=(data)=>{
		dispatch(selecteditem(data))
		let catId = catimagdata[data].category
		history("jewelry/"+catId);
	}; 
		
	useEffect(() => {
		loadData()
	}, [])
	console.log("/////////////",catdata)
	return(
		<>
		<div className="container py-4 px-4 justify-content-center">
			<h2 style={{fontFamily: "cormorant,serif",}}>Top Sale Category</h2>
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
				catdata.map((itmes,index)=>{
					
					console.log("catdata",catdata);
					return(
						<SwiperSlide key={index}>
					<Card>
					<Card.Img variant="top" src={catimagdata[itmes].imagelink} onClick={()=>goToHome(itmes)} />
					<Card.Body>
					<Card.Text>{catimagdata[itmes].imagename}</Card.Text>
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
export default Category;