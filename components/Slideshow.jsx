import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";

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
    url: "/images/reviews.webp",
  },

  {
    url: "/images/reviews3.webp",
  },
  {
    url: "/images/reviews4.webp",
  },
  {
    url: "/images/reviews5.jpg",
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            {/* <div style={{ backgroundImage: `url(${slideImage.url})` }}></div> */}
            <Image
              src={slideImage.url}
              alt="reviews"
              height={500}
              width={400}
              objectFit="cover"
            />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
