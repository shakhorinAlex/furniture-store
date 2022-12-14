import React from "react";
import { client } from "../lib/client";
import { Product, Slideshow } from "../components";
import Link from "next/link";

function Home({ products }) {
  return (
    <div>
      <section className="hero section">
        <div className="container">
          <h1 className="hero__title">MODERN CONTEMPORARY OUTDOOR FURNITURE</h1>
          <p className="hero__desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper eget
            ultrices gravida gravida. Suspendisse pharetra quis eros facilisi.
          </p>
          <Link href="/products">
            <button className="btn">Shop now</button>
          </Link>
        </div>
      </section>

      <section className="section advantages">
        <div className="container">
          <ul className="advantages-list">
            <li className="advantages-list_item">
              <img className="advantages__img" src="/guarantee.svg" alt="" />
              <h4 className="advantages__title">8 YEAR GUARANTEE</h4>
              <p className="advantages__desc">For your peace of mind</p>
            </li>
            <li className="advantages-list_item">
              <img className="advantages__img" src="/norust.svg" alt="" />
              <h4 className="advantages__title">Rust Free</h4>
              <p className="advantages__desc">Quality Materials</p>
            </li>
            <li className="advantages-list_item">
              <img className="advantages__img" src="/exclusive.svg" alt="" />
              <h4 className="advantages__title">PREMIUM SERVICE</h4>
              <p className="advantages__desc">Premium delivery available</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="section products">
        <div className="container">
          <h2 className="products__title">Ready To Ship</h2>
          <p className="products__desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est id
            pretium pellentesque leo. Lorem.
          </p>
          <div className="products-list">
            {products?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        </div>
      </section>
      <section className="section quality">
        <div className="container">
          <img className="quality__img" src="/quality.svg" alt="" />
          <p className="quality__desc">COMMITED TO EUROPIAN MANUFACTURING</p>
          <h3 className="quality__title">
            Our <b>Products</b> are made with <b>high quality</b> european
            fabric and sewn by a small team <b>CRAFTSPEOPLE</b> in <b>EUROPE</b>
          </h3>
        </div>
      </section>
      <section className="section collection">
        <div className="container">
          <h2 className="collection__title">Our Collection</h2>
          <p className="collection__desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est id
            pretium pellentesque leo. Lorem.
          </p>
          <ul className="collection__container">
            <li className="collection__card card1">
              <img
                className="collection__img"
                src="./images/collection4.jpg"
                alt=""
              />
              <h4 className="collection__name">Collection 1</h4>
            </li>
            <li className="collection__card card2">
              <img
                className="collection__img"
                src="./images/collection2.jpg"
                alt=""
              />
              <h4 className="collection__name">Collection 2</h4>
            </li>
            <li className="collection__card card3">
              <img
                className="collection__img"
                src="/images/collection3.jpg"
                alt=""
              />
              <h4 className="collection__name">Collection 3</h4>
            </li>
            <li className="collection__card card4">
              <img
                className="collection__img"
                src="./images/collection1.jpg"
                alt=""
              />
              <h4 className="collection__name">Collection 4</h4>
            </li>
          </ul>
        </div>
      </section>
      <section className="section reviews">
        <div className="container">
          <div className="reviews__left-side">
            <h2 className="reviews__title">Perfect furniture for Your home</h2>
            <p className="reviews__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dictum
              quam nisi, eget est commodo neque aliquam leo. Rhoncus habitant eu
              aliquam elit ipsum sagittis, sit proin. Donec magna sapien et
              blandit vehicula vestibulum. Laoreet sagittis augue quis lacinia.
              Ut enim eget semper odio pretium rhoncus. Blandit velit augue
              donec ut rhoncus semper imperdiet adipiscing dignissim. Nisl sit
              dui etiam morbi morbi facilisi tristique.
            </p>
            <div className="reviews__stars-wrapper">
              <img className="reviews__stars" src="/star.svg" alt="" />
              <img className="reviews__stars" src="/star.svg" alt="" />
              <img className="reviews__stars" src="/star.svg" alt="" />
              <img className="reviews__stars" src="/star.svg" alt="" />
              <img className="reviews__stars" src="/star.svg" alt="" />
              <p className="reviews__stars-person-name">John Doe</p>
            </div>
          </div>
          <div className="reviews__right-side">
            <Slideshow />
          </div>
        </div>
      </section>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "product"]`;
  const products = await client.fetch(query);
  return {
    props: { products },
  };
};

export default Home;
