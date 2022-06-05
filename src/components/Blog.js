import { Container, CardGroup, Card } from 'react-bootstrap'
import './Blog.css'
import CardItems from './CardItems'

function Blog() {
    return <>
        <Container id='blog'>
            <h1>Blog</h1>
        <CardGroup className='mt-auto'>
            {
                CardItems.map(item => {
                    return (
                            <Card className='ms-lg-5 me-lg-5 ms-md-2 me-md-2 ms-sm-1 me-sm-1 shadow '>
                                <Card.Img
                                    className='ms-auto me-auto'
                                    variant="top"
                                    src={item.cardImg}
                                    style={{ height: "150px", width: "150px" }} />
                                <Card.Body>
                                    <Card.Title>{ item.title }</Card.Title>
                                </Card.Body>
                            </Card>
                )
            })
            }
        </CardGroup>
    </Container>
    </>
}

export default Blog