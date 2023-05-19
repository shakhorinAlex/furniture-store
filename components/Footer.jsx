import React from "react";
import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import Image from "next/image";
import { useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Footer = () => {
  const [newsletterThankYou, setNewsletterThankYou] = useState(false);

  const handleNewsletterSubmit = (event) => {
    event.preventDefault();
    toast.success("Thanks for subscribing to newsletter", {
      position: "top-center",
      autoClose: 5000, // Duration in milliseconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setNewsletterThankYou(true);
  };

  return (
    <div className="footer-container">
      <div className="footer-banner">
        <div className="footer-banner__content">
          <h2 className="footer-banner__title">Get 10% off your first order</h2>
          <p className="footer-banner__text">
            We are delighted to offer you an exclusive discount of 10% off on
            your first order.
          </p>
        </div>
        <div className="footer-banner__button">
          <a href="tel:1234567890" className="footer-banner__call-us--link">
            <BsTelephone />
            <span className="footer__call-number">1234567890</span>
          </a>
          <p className="footer-banner__time">8am to 6pm, 7 days a week</p>
        </div>
      </div>
      <div className="footer">
        <div className="footer__top">
          <div className="logo">
            <Link href="/">Store.</Link>
          </div>
        </div>
        <div className="footer__bottom">
          <address className="footer__address">
            <p className="address-title">Head office</p>
            <p>1234 Street Name</p>
            <p>City, ST 12345</p>
            <p>123-456-7890</p>
            <a href="mailto:example@example.email">example@example.email</a>
          </address>
          <div className="footer__join-us">
            <h3 className="footer__join-us--title">Join Us for Good Offers</h3>
            {!newsletterThankYou ? (
              <div className="footer__join-us-thx-wrapper">
                <span className="footer__join-us--text-icon">
                  <BsFillCheckCircleFill />
                </span>
                <p className="footer__join-us--text">
                  Thanks for subscribing to newsletter
                </p>
              </div>
            ) : (
              <form
                className="footer__join-us--form"
                onSubmit={handleNewsletterSubmit}
              >
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Join</button>
              </form>
            )}
          </div>
          <div className="footer__social-media">
            <h3 className="footer__social-media--title">Follow Us</h3>
            <a className="social-media-icon" href="#" rel="noreferrer">
              <Image
                src="/facebook.svg"
                alt="facebook"
                width={30}
                height={30}
              />
            </a>
            <a className="social-media-icon" href="#" rel="noreferrer">
              <Image
                src="/instagram.svg"
                alt="instagram"
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
