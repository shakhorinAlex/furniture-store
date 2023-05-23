import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import Sidebar from "./Sidebar";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const { showCart, setShowCart, totalQuantities } = useStateContext();

  // change class if page is active tab

  return (
    <nav className="">
      <div className="navbar" id="navbar">
        <div className="container" id="container">
          <div className="sidebar">
            <Sidebar />
          </div>
          <ul className="nav-links">
            <li
              className={`nav-links__item ${
                router.pathname === "/" && "active-nav-link"
              }`}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`nav-links__item ${
                router.pathname === "/products" && "active-nav-link"
              }`}
            >
              <Link href="/products">Products</Link>
            </li>
            <li
              className={`nav-links__item ${
                router.pathname === "/about" && "active-nav-link"
              }`}
            >
              <Link href="/about">About Us</Link>
            </li>
            <li
              className={`nav-links__item ${
                router.pathname === "/contact" && "active-nav-link"
              }`}
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <div className="logo">
            <Link href="/">Store</Link>
          </div>
          <button
            type="button"
            className="cart-icon"
            onClick={() => setShowCart(true)}
          >
            <AiOutlineShopping />
            <span className="cart-item-qty">{totalQuantities}</span>
          </button>

          {showCart && <Cart />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
