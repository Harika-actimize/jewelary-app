
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
import {loadFavImgsError, loadFavImgsStart, loadFavImgsSuccess,activeitem} from '../actions/userActions';
import {loadFavImgApi} from '../api/userApi'
// import { getDataAxios } from "../redux/reducers/data";

const AddPost = () => {
	
	// const [contacts, setContacts] = useState({})
	const history = useNavigate(); 
  


	const dispatch = useDispatch()
	const favimagdata = useSelector((state) => state.loadFavImgdata.favimages);
	let data = Object.values(favimagdata)
	// console.log('favimagdata', favimagdata);

	const loadData =async()=>{
		dispatch(loadFavImgsStart())
		const result = await loadFavImgApi()
		// console.log(result)
		if(result.status === 200){
			dispatch(loadFavImgsSuccess(result.data))
		}else{
			dispatch(loadFavImgsError(result))
		}
	}
	const goToHome=(data)=>{
		//   alert("hi"); 
		
		dispatch(activeitem(data))
		  history("/favorite");
		
		}; 
	useEffect(() => {

		loadData()
	}, [])
	// console.log("/////////////",favimagdata)
	return(
		<>
		<div className="container py-4 px-4 justify-content-center">
			<h2 style={{fontFamily: "cormorant,serif",}}>Top Sale Favorites</h2>
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
				data.map((itmes,index)=>{
					
					// console.log("data",itmes);
					return(
						<SwiperSlide key={index}>
					<Card>
					<Card.Img variant="top" src={itmes.imagelink} onClick={()=>goToHome(itmes)}  />
					<Card.Body>
					<Card.Text className="hidecontent" >{itmes.imagename}</Card.Text>
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
export default AddPost;




