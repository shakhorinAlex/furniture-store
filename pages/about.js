import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="about">
      <section className="section about__hero">
        <div className="container">
          <h1 className="about__hero__title">About Us</h1>
          <p className="about__hero__description">
            Your premier destination for high quality furniture that combines
            style and functionality. We believe that your home should be a
            reflection of your unique taste and personality, and that is why we
            strive to offer a wide selection of modern contemporary furniture
            that caters to various design preferences.
          </p>
          <Link href="/products">
            <button className="btn">See our products</button>
          </Link>
        </div>
      </section>
      <section className="section about__content">
        <div className="container">
          <img
            className="about__content--img"
            src="/images/aboutSectionImg.webp"
            alt="about section img"
          />
          <div className="about__content--right-side">
            <h2 className="about__content--title">Store Furniture</h2>
            <p className="about__content--description">
              At Furniture Store, we are passionate about providing our
              customers with exceptional furniture pieces that enhance their
              living spaces. Our team of experienced designers and craftsmen
              work tirelessly to create furniture that is not only aesthetically
              pleasing but also built to last. Each piece in our collection is
              meticulously crafted with attention to detail, using the finest
              materials and techniques.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
