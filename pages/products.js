import React from "react";
import { useStateContext } from "../context/StateContext";
import { client } from "../lib/client";
import { Product } from "../components";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import Image from "next/image";
import { RiEmotionSadFill } from "react-icons/ri";

const Products = ({ products }) => {
  const { currentMonth, timeLeft } = useStateContext();

  const scrollToProducts = () => {
    const productsList = document.querySelector(".products-search");
    productsList.scrollIntoView({ behavior: "smooth" });
  };

  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const results = !searchTerm
    ? products
    : products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

  // if there is no products with this name show block with text
  // if (results.length === 0) {
  //   return (
  //     <div className="products__no-products">
  //       <h2>Sorry, no products found</h2>
  //     </div>
  //   );
  // }

  const filteredProducts = results.map((product) => (
    <Product key={product._id} product={product} />
  ));

  // if there is no products with this name show block with text not filteredProducts

  // count products on page
  const countProducts = filteredProducts.length;
  const countProductsText = countProducts === 1 ? "product" : "products";

  return (
    <div className="products container">
      <div className="products-promo-banner">
        <div className="products__img-wrapper">
          <Image
            className="products__img"
            src="/images/qualityBc.webp"
            alt="products"
            layout="fill"
            objectFit="cover"
            priority={true}
          />
        </div>
        <div className="products__content">
          <h1>{currentMonth} only SALE - 10% off</h1>
          <h2>{timeLeft}</h2>
          <p>Ending soon!</p>
          <a onClick={scrollToProducts}>
            <BsFillArrowDownCircleFill />
          </a>
        </div>
      </div>
      <div className="products-search">
        <h2>Our products</h2>
        <p className="products-count">
          Showing {countProducts} {countProductsText}
        </p>
        <input
          type="text"
          placeholder="Search for products"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      {/* {<div className="products__list">{filteredProducts}</div>} */}
      {/* if filtered products === 0 show div with text no products found otherwise show products list */}
      {filteredProducts.length === 0 ? (
        <div className="products__no-products">
          <p className="not-found-emoji">
            <RiEmotionSadFill />
          </p>
          <h3>Sorry, no products found</h3>
        </div>
      ) : (
        <div className="products__list">{filteredProducts}</div>
      )}
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = `*[_type == "product"]`;
  const products = await client.fetch(query);
  return {
    props: { products },
  };
};

export default Products;
