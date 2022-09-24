import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="about">
      <section className="section about__hero">
        <div className="container">
          <h1 className="about__hero__title">About Us</h1>
          <p className="about__hero__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
            rhoncus montes, sem lacus, sed sit sed. Scelerisque aliquam justo
            tincidunt vitae ultricies enim eget. Et sodales quis odio at risus
            semper. Et ante in.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              nulla a ut diam et, sapien dis. Iaculis turpis dui sed ipsum
              etiam. Habitant feugiat at enim pharetra. Lacus, dolor viverra
              amet purus nulla a, donec in egestas. Condimentum aenean odio
              pretium justo. Vitae in ut quam fermentum, eget. Luctus fermentum
              nulla magna eget at dapibus urna sit.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
