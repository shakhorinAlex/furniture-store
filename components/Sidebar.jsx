import React from "react";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";

export default function Sidebar() {
  return (
    <Menu>
      <ul className="nav-links">
        <li className="nav-links__item">
          <Link href="/">Home</Link>
        </li>
        <li className="nav-links__item">
          <Link href="/products">Products</Link>
        </li>
        <li className="nav-links__item">
          <Link href="/about">About Us</Link>
        </li>
        <li className="nav-links__item">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </Menu>
  );
}
