import { Row, Container, Col } from 'react-bootstrap';
import Image from './Components/Image'
import { Navbar, Nav, FormControl, Button } from 'react-bootstrap';

function StoreListing() {
  return (

    <div>
        <Navbar bg="white" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <Image src="../public/Instacart-logo.webp" alt="Instacart Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
              <Button variant="outline-primary" style={{ marginLeft: '10px' }}>Sign In</Button>
              <Button variant="primary" style={{ marginLeft: '10px' }}>Sign Up</Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div>
            <div className="jumbotron jumbotron-fluid bg-image">
              <Container className="text-center">
                  <Image src="../public/Instacart-logo.webp" alt="Instacart Logo" className="img-fluid" style={{ maxWidth: '200px' }} />
                  <h1 className="display-4">Browse stores in Houston</h1>
                  <p className="lead">Discover stores near you and shop for groceries online.</p>
                  <hr className="my-4" />
                  <p className="lead">
                    <Button variant="primary">Learn more</Button>
                  </p>
              </Container>
            </div>
        </div>
        
  
 
      <h2>Browse stores in Houston</h2>
      <Container style={{ marginTop: "40px", textAlign: "center" }}>
        <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}}>
          <Col>
            <Row>
              <Col xs="auto">
                <Image src="../public/publix-img.png" roundedCircle />
              </Col>
              <Col>
                <h5 style={{ fontWeight: "bold" }}>Publix</h5>
                <p>Delivery * Pickup</p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col xs="auto">
                <Image src="../public/aldi-img.webp" roundedCircle />
              </Col>
              <Col>
                <h5 style={{ fontWeight: "bold" }}>Aldi</h5>
                <p>Delivery * Pickup</p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col xs="auto">
                <Image src="public/foodlion-img.webp" roundedCircle />
              </Col>
              <Col>
                <h5 style={{ fontWeight: "bold" }}>Foodlion</h5>
                <p>Delivery</p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col xs="auto">
                <Image src="../public/sams-img.webp" roundedCircle />
              </Col>
              <Col>
                <h5 style={{ fontWeight: "bold" }}>Sams Club</h5>
                <p>Delivery * Pickup</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default StoreListing
