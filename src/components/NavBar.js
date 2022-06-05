import logo from '../images/nTeam LOGO.png'
// import { Link } from 'react-router-dom'
import { scroller } from "react-scroll";
import { Navbar, Container, Nav} from 'react-bootstrap'
import './NavBar.css'

function NavBar() {
    return <>
        <Navbar
            bg="light"
            expand="lg"
            variant="light"
            className='navBar'
            collapseOnSelect
            fixed='top'>
        <Container>
            <Navbar.Brand onClick={() => scroller.scrollTo('home', {
                smooth: true,
                offset: -98,
                duration: 500
          })}>
                <img src={ logo } alt="Nature Team UoM Logo" className='logo' style={{ maxWidth : "260px"}} />        
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto my-2 my-lg-0">
                <Nav.Link  eventKey="1" onClick={() => scroller.scrollTo('home', {
                smooth: true,
                offset: -98,
                duration: 500
          })}>HOME</Nav.Link>        
                <Nav.Link  eventKey="2" onClick={() => scroller.scrollTo('aboutus', {
                smooth: true,
                offset: -98,
                duration: 500
          })}>ABOUT US</Nav.Link>
                <Nav.Link  eventKey="3"onClick={() => scroller.scrollTo('blog', {
                smooth: true,
                offset: -98,
                duration: 500
          })}>BLOG</Nav.Link>
                <Nav.Link  eventKey="4" onClick={() => scroller.scrollTo('news', {
                smooth: true,
                offset: -98,
                duration: 500
          })}>NEWS</Nav.Link>   
                <Nav.Link  eventKey="5" onClick={() => scroller.scrollTo('project', {
                smooth: true,
                offset: -98,
                duration: 500
          })}>PROJECT</Nav.Link>               
                <Nav.Link  eventKey="6" onClick={() => scroller.scrollTo('contactus', {
                smooth: true,
                offset: -98,
                duration: 500
          })}>CONTACT US</Nav.Link>                 
            </Nav>
            
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
}

export default NavBar