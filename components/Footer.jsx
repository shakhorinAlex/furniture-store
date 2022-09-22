import React from 'react'
import Link from 'next/link'
import { BsTelephone, GrFormNext } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="footer-banner">
        <div className="footer-banner__content">
          <h2 className="footer-banner__title">Get 10% off your first order</h2>
          <p className="footer-banner__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt gravida.</p>
        </div>
        <div className="footer-banner__button">
          <a href="tel:1234567890" className="footer-banner__call-us--link">
          <BsTelephone />
          <span className='footer__call-number'>1234567890</span>
          </a>
          <p className='footer-banner__time'>8am to 6pm, 7 days a week</p>
        </div>
      </div>
      <div className='footer'>
        <div className="footer__top">
          <div className="logo">
            <Link href="/">S.</Link>
          </div>
        </div>
        <div className="footer__bottom">
        <address className='footer__address'>
          <p className='address-title'>Head office</p>
          <p>1234 Street Name</p>
          <p>City, ST 12345</p>
          <p>123-456-7890</p>
          <a href="mailto:example@example.email">
            example@example.email
          </a>
        </address>
        <div className="footer__join-us">
          <h3 className="footer__join-us--title">Join Us for Good Offers</h3>
          <form className="footer__join-us--form">
            <input type="email" placeholder='Enter your email' />
          <button type='submit'>
            Join
          </button>
          </form>
        </div>
        <div className="footer__social-media">
          <h3 className="footer__social-media--title">Follow Us</h3>
          <a className='social-media-icon' href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img src="/facebook.svg" alt="facebook" />
          </a>
          <a className='social-media-icon' href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src="/instagram.svg" alt="instagram" />
          </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer