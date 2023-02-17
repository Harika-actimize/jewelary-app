import { Col,Row } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import NavDropdown from 'react-bootstrap/NavDropdown'

// import Sonnet from '../../components/Sonnet';

function FillExample() {
  return (
    <>   
     <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="Home">
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
              <Col>
              <a>
                {/* <Image
                  src={New01}
                  alt="Grouparoo Logo"
                  width={500}
                  height={250}
                /> */}
              </a>
              <p>Company</p>
              </Col>
      </Tab>
      <Tab eventKey="profile" title="Profile">
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
              <Col>
              <a>
                {/* <Image
                  src={New01}
                  alt="Grouparoo Logo"
                  width={500}
                  height={250}
                /> */}
              </a>
              <p>Company</p>
              </Col>
      </Tab>
      <Tab eventKey="longer-tab" title="Loooonger Tab">
        {/* <Sonnet /> */}
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        {/* <Sonnet /> */}
      </Tab>
    </Tabs>
    </>
  );
}

export default FillExample;