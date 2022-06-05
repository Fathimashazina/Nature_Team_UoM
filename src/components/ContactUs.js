import './ContactUs.css'
import { Container,Row,Col,Card,Form,Button } from 'react-bootstrap'
function ContactUs() {
    return <>
        <div id="contactus">
            <div className="svgContainerContactus">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250"><path fill="#000" fill-opacity="1" d="M0,0L60,21.3C120,43,240,85,360,128C480,171,600,213,720,202.7C840,192,960,128,1080,96C1200,64,1320,64,1380,64L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            </div>
            <Container>
                <Row>
                    <Col lg={6} className="mx-auto">
                        <Card>
                            <div className="cardBody">
                                <Row>
                                    <Col lg={12} className="px-4 py-2">
                                        <div className="headContact">
                                            <h1>Contact Us</h1>
                                        </div>
                                    </Col>
                                </Row>
                                <Form className='p-3'>
                                    <Row>
                                    <Col lg={6}>
                                    <Form.Group className="mb-5">
                                        <Form.Control className='borderEffect' type="text" placeholder="First Name" />
                                    </Form.Group>
                                    </Col>
                                     <Col lg={6}>
                                    <Form.Group className="mb-5">
                                        <Form.Control className='borderEffect' type="text" placeholder="Last Name" />
                                    </Form.Group>
                                    </Col>
                                    </Row>
                                    <Form.Group className="mb-5" controlId="formBasicEmail">
                                        <Form.Control className='borderEffect' type="email" placeholder="Enter Your Email" />
                                        <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>
                                     <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
                                        <Form.Control className='borderEffect' as="textarea" placeholder="Message" rows={3} />
                                    </Form.Group>
                                    <Button variant="success" type="submit" className=' w-100'>
                                        Submit
                                    </Button>
                                </Form>
                                
                            </div>
                     </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
}

export default ContactUs;