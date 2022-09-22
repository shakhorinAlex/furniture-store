import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const properties = {
    duration: 5000,
    autoplay: false,
    transitionDuration: 500,
    arrows: false,
    easing: "ease",
    indicators: true,
};
    

const slideImages = [
    {
        url: './images/reviews.jpg'
    },

    {
        url: './images/reviews3.jpg'
    },
    {
        url: './images/reviews4.jpg'
    },
    {
        url: './images/reviews5.jpg'
    },
];

const Slideshow = () => {
  return (
      <div className='slide-container'>
        <Slide {...properties}>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
  )
}

export default Slideshow