import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container } from 'react-bootstrap'
import './News.css'
import OwlCarouselItem from './OwlCarouselItems';

const options = {
  margin: 30, //8
  responsiveClass: true,
  nav: true,
  autoplay: true,
  dots : true,
  loop : true,
  // navText: ["Prev", "Next"],
  // smartSpeed: 1000,
  responsive: {
      0: {
          items: 1,
      },
      768: {
          items: 2,
      },
      991: {
          items: 3,
      },
      1200: {
          items: 3,
      },
      1920: {
          items: 3,
      }
  },
};

class News extends React.Component{
  render() {
    return <>
    <Container id='news'>
      <h1>News</h1>
        <OwlCarousel className='owl-theme' {...options}>    
          {
            OwlCarouselItem.map(item => {
              return (
                <div className='item'>
                  <div className="overflow">
                    <img
                      src={item.CarouselImg}
                      alt={item.imgAlt}
                      className='card-img' />
                  </div>
                  <h2>{ item.title }</h2>
                  <p>{ item.description }</p>
                </div>
              )
            })
          }      
    </OwlCarousel>  
    </Container>
      
    </>
  }
  
}

export default News