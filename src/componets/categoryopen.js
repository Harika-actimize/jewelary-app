import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Sidebar from "./navbar";
import Footer from './footer';
import NavbarDarkExample from './navigation';
import { useSelector,useDispatch } from "react-redux";
import {useNavigate } from 'react-router-dom';
// import {Card,Button} from 'react-bootstrap';
import { Container,Row,Col,Form,Button,Card,Accordion,FormCheck} from 'react-bootstrap';
import {activeitem} from '../actions/userActions';

// import Accordion from "react-bootstrap";
// import Form from 'react-bootstrap/Form';
// import Accordion from 'react-bootstrap/Accordion';
// import selecteditem from '../reducers/userReducer'


function Catimgopen(){
    // const [swt, setswt] = useState(true)
    const dispatch = useDispatch()
    const history = useNavigate(); 
	const catimagdata = useSelector((state) => state.loadFavImgdata.jewimages);
    const selecteditem = useSelector((state) => state.loadFavImgdata.selected_cat);
    const data = catimagdata[selecteditem].images
    // const holedata = Object.keys(catimagdata)
	// console.log("/////////////>",selecteditem,">>>>>>>>>>>>>>",catimagdata,holedata)
    // holedata.filter(i=>{
    //     console.log(selecteditem)
    // })
    // holedata.map
    console.log( catimagdata[selecteditem]
      )
    console.log( selecteditem)
    
    // const data = holedata.filter(item=>item === selecteditem)
    // console.log("==================>",selecteditem,"+++++++++++++++++++++",data);
    const goToDetails=(data)=>{
		  alert("hi"); 
		
		dispatch(activeitem(data))
       console.log(":)))))))))))",data)
		  history("/jewelry/"+catimagdata[selecteditem].category+"/"+selecteditem);
		
		}; 
    return(
        <div>
        <Sidebar/>
        <NavbarDarkExample/>
        <>
		<div className="container py-4 px-4 justify-content-center">
			{/* <h2 style={{fontFamily: "cormorant,serif",}}>Top Sale Favorites</h2> */}
			<Container>
				<Row>
					<Col md={3}>
                        <p style={{fontFamily:"Inter,sans-serif"}}>Jewelry/{catimagdata[selecteditem].category}</p>
						<h1 style={{fontFamily: "Cormorant,serif",letterSpacing: 3,color: "#0a0a0a",fontWeight: 400,textAlign: "left",paddingTop: 0,marginBottom: 30,marginTop: 0}}>{catimagdata[selecteditem].category}</h1>
                        <div>
                            <span style={{fontSize: "1.875rem",lineHeight: "36px",fontFamily:"Cormorant,serif"}}>Filter & Sort</span>
                           
                        </div>
                        <select style={{padding: "16px 40px 15px 15px",marginTop:30,marginBottom:20}}>
                            <option>Trending Now</option>
                            <option>Best Sellers</option>
                            <option>Newest</option>
                            <option>Price Low To High</option>
                            <option>Price High To Low</option>
                        </select>
                        <div>
                          <p>In Stock Near Me<span><label className="switch" style={{marginright:"10%"}}>
                        <input type="checkbox"></input>
                        <span className="slider round"></span>
                      </label></span></p>
                        
                         <div>
    <Accordion>
        <Card className="accordioncard">
        <Card.Header className="accordionheader">
            <Accordion.Toggle className="accordstyle"
            eventKey="0">Style</Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey="0">
            <Card.Body>
            <Form>
      {['checkbox'].map((type,index) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Charm Necklace"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Choker/Collar"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="Large Long Pendant"
            type={type}
            id={`inline-${type}-3`}
          />
           <Form.Check
            inline
            label="Link & Chain"
            type={type}
            id={`inline-${type}-4`}
          />
           <Form.Check
            inline
            label="Long Strand"
            type={type}
            id={`inline-${type}-5`}
          />
           <Form.Check
            inline
            label="Multi Strand"
            type={type}
            id={`inline-${type}-6`}
          />
          <Form.Check
            inline
            label="Necklace Clasp"
            type={type}
            id={`inline-${type}-7`}
          />
          <Form.Check
            inline
            label="Set"
            type={type}
            id={`inline-${type}-8`}
          />
          <Form.Check
            inline
            label="Short Pendant"
            type={type}
            id={`inline-${type}-9`}
          />
          <Form.Check
            inline
            label="Small Long Pendant"
            type={type}
            id={`inline-${type}-10`}
          />
          <Form.Check
            inline
            label="Statement"
            type={type}
            id={`inline-${type}-11`}
          />
          <Form.Check
            inline
            label="Y & Lariat"
            type={type}
            id={`inline-${type}-12`}
          />
        </div>
      ))}
    </Form>
          </Card.Body>
        </Accordion.Collapse>

      </Card>
      </Accordion>

      <Accordion>
        <Card className="accordioncard">
        <Card.Header className="accordionheader">
            <Accordion.Toggle className="accordstyle"
            eventKey="0">Metal</Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey="0">
            <Card.Body>
            <Form>
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Gold"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Silver"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="Rose Gold"
            type={type}
            id={`inline-${type}-3`}
          />
           <Form.Check
            inline
            label="Gunmetal"
            type={type}
            id={`inline-${type}-4`}
          />
           <Form.Check
            inline
            label="Mixed Metal"
            type={type}
            id={`inline-${type}-5`}
          />
           <Form.Check
            inline
            label="14K White Gold"
            type={type}
            id={`inline-${type}-6`}
          />
          <Form.Check
            inline
            label="14K Yellow Gold"
            type={type}
            id={`inline-${type}-7`}
          />
          <Form.Check
            inline
            label="14K Rose Gold"
            type={type}
            id={`inline-${type}-8`}
          />
          <Form.Check
            inline
            label="18K Gold Plated Vermeil"
            type={type}
            id={`inline-${type}-9`}
          />
          <Form.Check
            inline
            label="18K Rose Gold Plated Vermeil"
            type={type}
            id={`inline-${type}-10`}
          />
          <Form.Check
            inline
            label="Sterling Silver"
            type={type}
            id={`inline-${type}-11`}
          />
        </div>
      ))}
    </Form>
          </Card.Body>
        </Accordion.Collapse>

      </Card>
      </Accordion>

      <Accordion >
        <Card className="accordioncard">
        <Card.Header className="accordionheader">
            <Accordion.Toggle className="accordstyle"
            eventKey="0">color</Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey="0">
            <Card.Body>
            <Form>
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Clear"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="White"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="Red"
            type={type}
            id={`inline-${type}-3`}
          />
           <Form.Check
            inline
            label="Pink"
            type={type}
            id={`inline-${type}-4`}
          />
           <Form.Check
            inline
            label="Orange"
            type={type}
            id={`inline-${type}-5`}
          />
           <Form.Check
            inline
            label="Yellow"
            type={type}
            id={`inline-${type}-6`}
          />
          <Form.Check
            inline
            label="Purple"
            type={type}
            id={`inline-${type}-7`}
          />
          <Form.Check
            inline
            label="Blue"
            type={type}
            id={`inline-${type}-8`}
          />
          <Form.Check
            inline
            label="Green"
            type={type}
            id={`inline-${type}-9`}
          />
          <Form.Check
            inline
            label="Brown"
            type={type}
            id={`inline-${type}-10`}
          />
          <Form.Check
            inline
            label="Gray"
            type={type}
            id={`inline-${type}-11`}
          />
          <Form.Check
            inline
            label="Black"
            type={type}
            id={`inline-${type}-11`}
          />
        </div>
      ))}
    </Form>
          </Card.Body>
        </Accordion.Collapse>

      </Card>
      </Accordion>

      <Accordion>
        <Card className="accordioncard">
        <Card.Header className="accordionheader">
            <Accordion.Toggle className="accordstyle"
            eventKey="0">Price</Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey="0">
            <Card.Body>
            <Form>
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Under $50"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="$50 - $99"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="$100 - $249"
            type={type}
            id={`inline-${type}-3`}
          />
           <Form.Check
            inline
            label="$250 - $499"
            type={type}
            id={`inline-${type}-4`}
          />
           <Form.Check
            inline
            label="$500 - $999"
            type={type}
            id={`inline-${type}-5`}
          />
           <Form.Check
            inline
            label="$1,000 - $1,499"
            type={type}
            id={`inline-${type}-6`}
          />
          <Form.Check
            inline
            label="$1,500+"
            type={type}
            id={`inline-${type}-7`}
          />
        </div>
      ))}
    </Form>
          </Card.Body>
        </Accordion.Collapse>

      </Card>
      </Accordion>

      </div>
                        </div>
                       
					</Col>
             <Col md={9}>
                <Row>
                    
            {
				data.map((itmes,index)=>{
					console.log("dataaaaaaaaaaaaa",data);
					return(
                        <Col xxl={4} 	xl={4}sm={12} xs={12} md={6} lg={4} >
					<Card key={index} style={{ width: '100%', marginBottom:"15%"}}>
					<Card.Img variant="top" src={itmes.imagelink} onClick={()=>goToDetails(itmes)}  />
					<Card.Body>
					<Card.Text className="hidecontent">{itmes.imagename}</Card.Text>
					<Card.Text>{itmes.price}</Card.Text>
					 </Card.Body>
					</Card> 
                    </Col>
                    ) 
                })
            }
            
            </Row>
			</Col>
			</Row>
			</Container>  	
		</div> 
		</>

        <Footer/>
        </div>
    )
}
export default Catimgopen;


