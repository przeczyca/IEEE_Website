import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ncLogo from './assets/ncLogo.webp'
import ncImage from './assets/ncImage.jpg'
import arduinoImage from './assets/arduino_project_example.jpg'
import electricalArc from './assets/Electrical-Arc-2.webp'
import ray from './assets/ray.jpg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap';

function App() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home" className="fs-3 fw-bold">
                        <img
                            src={ncLogo}
                            height="50"
                            className="d-inline-block"
                            alt="NC Logo"
                        />&nbsp;&nbsp;
                        IEEE Student Branch
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Events</Nav.Link>
                            <Nav.Link>About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="d-flex justify-content-center align-items-center" style={{ backgroundColor: '#0077be' }}>
                <img src={ncImage} alt="NC Image" className="img-fluid" />
            </div>

            <div style={{ backgroundImage: `url(${electricalArc})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <h1 className="text-center pt-5" style={{ color: 'white' }}>Upcoming Events</h1>
                <div className="d-flex justify-content-center align-items-center mt-5 pb-5">
                    <Row xs={1} md={2} lg={3} className="g-4">
                        <Card style={{ width: '25rem' }} className="mx-3 p-0">
                            <Card.Img variant="top" src={arduinoImage} style={{ height: '18rem', objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title>Engineering Nights</Card.Title>
                                <Card.Text>
                                    Build something fun! Bring your own components or use ours.
                                </Card.Text>
                                <Card.Text>
                                    Date TBD
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '25rem' }} className="mx-3 p-0">
                            <Card.Img variant="top" src={ray} style={{ height: '18rem', objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title>Electrical/Electronics Tutoring</Card.Title>
                                <Card.Text>
                                    Someone smarter than you will explain everything for you!
                                </Card.Text>
                                <Card.Text>
                                    Thursdays and Fridays:<br />
                                    approximately 4:30 PM - 6:30 PM
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                </div >
            </div>

            <h1 className="text-center pt-5">Contact Us</h1>
            <div className="d-flex justify-content-center align-items-center">
                <Row xs={1} md={2} lg={3} className="g-4 mt-5 pb-5">
                    <Col className="mx-3" style={{ width: '25rem', textAlign: 'center' }}>
                        <h3>Email</h3>
                        <p>tempemail@notreal.ca</p>
                    </Col>
                    <Col className="mx-3" style={{ width: '25rem' }}>
                        <h3>Address</h3>
                        <p>Room V113</p>
                        <p>100 Niagara College Blvd</p>
                        <p>Welland, ON L3C 7L3</p>
                    </Col>
                </Row>
            </div>
        </>

        // about section

        // footer
        //</>
    )
}

export default App
