import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const Product = ({ product: { image, name, slug, price } }) => {
  const normalPrice = (price * 1.1).toFixed(2);

  // const [showBtn, setShowBtn] = React.useState(false);
  // const handleMouseEnter = () => setShowBtn(true);
  // const handleMouseLeave = () => setShowBtn(false);
  // onMouseEnter={handleMouseEnter}
  // onMouseLeave = { handleMouseLeave };

  return (
    <div className="product-card-container">
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            alt={name}
            className="product-card__image"
          />
          <p className="product__name">{name}</p>
          <p className="product__price">
            ${price}{" "}
            <span className="product__price--normal">${normalPrice}</span>
            10% Off
          </p>
          <a className="product__button">View Details</a>
        </div>
      </Link>
    </div>
  );
};

export default Product;

{
  /* 
          <div className="product__button-container">
  
  {showBtn && <a className="product__add-to-cart">Hello</a>} */
}
