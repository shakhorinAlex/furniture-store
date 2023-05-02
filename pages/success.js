import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../context/StateContext";
import { fireConfetti } from "../lib/utils";
import Image from "next/image";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    fireConfetti();
  }, []);

  return (
    <div className="success-wrapper container">
      <div className="hero__img-wrapper">
        <Image
          className="hero__img"
          src="/images/heroBc.webp"
          alt="hero"
          layout="fill"
          objectFit="cover"
          priority={true}
          // placeholder="blur"
        />
      </div>
      <div className="success">
        <p className="success-icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">
          Check your email for the recipt and order details.
        </p>
        <p className="description">
          If you have any questions write to us at:
          <a className="email" href="mailto:aleksander.szachorin@gmail.com">
            aleksander.szachorin@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
