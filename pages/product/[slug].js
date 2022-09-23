import React from "react";
import { client, urlFor } from "../../lib/client";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { Product, Faq } from "../../components";
import { useStateContext } from "../../context/StateContext";

const ProductDetails = ({ product, products }) => {
  const { name, image, details, price } = product;

  const normalPrice = (price * 1.1).toFixed(2);

  const { qty, incQty, decQty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  };

  return (
    <div className="container">
      <div className="product-detial-container">
        <div>
          <div className="image-container">
            <img
              className="product-detail-image"
              src={urlFor(image && image[0])}
            />
          </div>
          {/* <div className='small-images'>
                    {image?.map((item, i) => (
                        <img
                            key={i} 
                            src={urlFor(item)}
                            className=''
                            onMouseEnter=''
                        />
                    ))}
                </div> */}
        </div>

        <div className="product-details-desc">
          <h1>{name}</h1>
          <p className="product-price">
            ${price}
            <span className="normal-price">${normalPrice} 10% Off</span>{" "}
          </p>
          <div className="product-reviews">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <p>4.9/5 (500+ reviews)</p>
          </div>
          <h4>Details:</h4>
          <p className="product-details__text">{details}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="product-buttons">
            <button
              type="button"
              className="add-to-cart"
              onClick={() => onAdd(product, qty)}
            >
              Add to Cart
            </button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
          <div className="free-delivery">
            <img src="/delivery.svg" alt="delivery-icon" />
            <div>
              <h3>Free Delivery in Europe</h3>
              <p>
                {" "}
                Order now and enjoy free delivery on us! Restrictions apply.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="products-quality">
        <img src="/images/products-quality.jpg" alt="product quality img"></img>
        <div className="products-quaility__right">
          <h2>Products of Quality</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            convallis semper tortor, ipsum aliquam sit. Ut cras volutpat
            suscipit elementum dolor at vitae. Elementum hac fringilla sed enim
            natoque aliquam gravida orci commodo. Duis eget non mattis quis
            ipsum. Dolor mattis tristique enim netus viverra purus. Id enim leo,
            vitae egestas sit eget id enim. Dapibus placerat ante ornare nisl.
            Sit augue nunc felis, accumsan diam fusce. Fringilla vulputate orci
            aliquet interdum blandit et faucibus et.
          </p>
        </div>
      </div>

      <Faq />
      <div className="related-products ">
        <h2 className="products__title">Check Other Items</h2>
        <div className="related-products-container products-list">
          {products?.map((item) => (
            <Product key={item._id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
        slug {
            current
        }
    }
    `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { slug: product.slug.current },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = `*[_type == "product"]`;
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);
  return {
    props: { products, product },
  };
};

export default ProductDetails;
