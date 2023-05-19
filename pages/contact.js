import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import Image from "next/image";
import { useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Link from "next/link";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("Form submitted successfully!", {
      position: "top-center",
      autoClose: 3000, // Duration in milliseconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setShowThankYou(true);
  };

  return (
    <div className="contact">
      <section className="contact__hero">
        <Image
          src="/images/contactBc.webp"
          layout="fill"
          objectFit="cover"
          objectPosition={"bottom"}
        />
      </section>
      <section className="contact__details">
        <div className="container">
          <h1 className="contact__details--title">Contact Us</h1>
          <p className="contact__details--description">
            We value your feedback and are here to assist you with any inquiries
            or concerns you may have.
          </p>
          <ul className="contact__details--list">
            <li className="contact__details--list-item">
              <p className="contact__details--icon">
                <AiOutlinePhone />
              </p>
              <div className="contact__details--list-item_text">
                <h3 className="contact__details--list-item-title">Phone</h3>
                <a
                  className="contact__details--list-item-link"
                  href="tel:+1234567890"
                >
                  +1234567890
                </a>
              </div>
            </li>
            <li className="contact__details--list-item">
              <p className="contact__details--icon">
                <AiOutlineMail />
              </p>
              <div className="contact__details--list-item_text">
                <h3 className="contact__details--list-item-title">Email</h3>
                <p>
                  <a href="mailto:example@email.com">example@email.com</a>
                </p>
              </div>
            </li>
            <li className="contact__details--list-item">
              <p className="contact__details--icon">
                <GoLocation />
              </p>
              <div className="contact__details--list-item_text">
                <h3 className="contact__details--list-item-title">Address</h3>
                <a href="#">123 Street, City, State, 12345</a>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="contact__form">
        <div className="container">
          {!showThankYou ? (
            <div className="contact__form--wrapper">
              <h1 className="contact__form--title">Send Us a Message</h1>
              <p className="contact__form--description">
                Have a question or need assistance? We are here to help!
              </p>
              <form className="contact__form--form" onSubmit={handleSubmit}>
                <div className="contact__form--form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                  />
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                  />
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Enter your message"
                  ></textarea>
                  <button type="submit" className="btn">
                    Send message
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="success">
              <p className="success-icon">
                <BsFillCheckCircleFill />
              </p>
              <h2>Thank you for your message!</h2>
              <p className="description">
                If you have any questions write to us at:
                <a
                  className="email"
                  href="mailto:aleksander.szachorin@gmail.com"
                >
                  aleksander.szachorin@gmail.com
                </a>
              </p>
              <Link href="/products">
                <button type="button" className="btn">
                  Continue Shopping
                </button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;
