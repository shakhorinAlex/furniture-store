import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
const Contact = () => {
  return (
    <div className="contact">
      <section className="contact__hero"></section>
      <section className="contact__details">
        <div className="container">
          <h1 className="contact__details--title">Contact Us</h1>
          <p className="contact__details--description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
            nulla a ut diam et, sapien dis
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
          <h1 className="contact__form--title">Send Us a Message</h1>
          <p className="contact__form--description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <form className="contact__form--form">
            <div className="contact__form--form-group">
              <label htmlFor="Email">Email</label>
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
      </section>
    </div>
  );
};

export default Contact;
