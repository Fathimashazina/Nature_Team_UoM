import './Header.css'
import { Carousel,Container } from 'react-bootstrap'
import CaroselItems from './CaroselItems'
function Header() {
    return <>
        <div className="header-wrapper">
            <div className="main-info">
            <Container fluid>
                <Carousel fade>
                {
                    CaroselItems.map(item => {
                        return (
                            <Carousel.Item>
                                <img
                                className="d-block w-100 carousel-img"
                                src={item.CaroselImage}
                                alt={item.imgAltCarousel}
                                />
                                <Carousel.Caption>
                                    <h3>{ item.label }</h3>
                                    <p>{ item.description }</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                        })
                }
                </Carousel>
            </Container>
            </div>  
        </div>
    </>
}

export default Header