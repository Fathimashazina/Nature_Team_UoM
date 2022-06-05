import { Container, Row , Col ,ListGroup } from 'react-bootstrap'
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaTwitter ,FaPhoneAlt,FaMailBulk } from 'react-icons/fa'

import './Footer.css'
function Footer() {
    return (
        <>
            <div className="footer pt-4 mt-4">
                <Container fluid className='text-center text-md-left'>
                    <Row>  
                        <Col xs={12} md={6} lg={3} className="footerColumn">
                            <ListGroup horizontal>
                                <ListGroup.Item onClick={()=> window.open("https://www.facebook.com/NTEAMUOM/", "_blank")}><FaFacebookF /></ListGroup.Item>
                                <ListGroup.Item onClick={()=> window.open("https://youtu.be/BzDNoTfzquk", "_blank")}><FaYoutube /></ListGroup.Item>
                                <ListGroup.Item onClick={()=> window.open("https://www.linkedin.com/company/nature-team-uom/?trk=public_profile_experience-item_profile-section-card_image-click&originalSubdomain=lk", "_blank")}><FaLinkedinIn /></ListGroup.Item>
                                <ListGroup.Item onClick={()=> window.open("https://twitter.com/nteamuom", "_blank")}><FaTwitter/></ListGroup.Item>
                            </ListGroup>  
                        </Col>
                        <Col xs={12} md={6} lg={3} className="footerColumn text-left">
                            <div>
                            Nature Team,<br/>
                            University of Moratuwa,<br/>
                            Katubedda 10400,<br/>
                            Sri Lanka<br/>                 
                            </div>  
                        </Col>
                        <Col xs={12} md={6} lg={3} className="footerColumn text-left">
                            <ListGroup horizontal>
                                <ListGroup.Item onClick={() => window.open("https://www.facebook.com/NTEAMUOM/", "_blank")}><FaPhoneAlt /> { ' ' } +94 77 777 777</ListGroup.Item>
                                <ListGroup.Item onClick={() => window.open("https://youtu.be/BzDNoTfzquk", "_blank")}><FaMailBulk />{' '} abc@gmail.com</ListGroup.Item>
                            </ListGroup>   
                        </Col>
                    </Row>
                </Container>
                <div className="CopyRight">
                    <Container fluid>
                        &copy; {new Date().getFullYear()} Copyright: <a href="#"> Nature Team UoM </a>
                    </Container>
                </div>
        </div>
        </>
    )
}

export default Footer