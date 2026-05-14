import React from 'react'
import './Footer.css'

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa'

import { Send } from 'lucide-react'

import { footerData } from '../../constants/footerData'
import { Assets } from '../../assets/Assets'

const Footer = () => {

  return (
    <footer className="footer">

      <div className="container">

        {/* TOP SECTION */}
        <div className="footer-top">

          <div className="row gy-5">

            {/* LEFT SIDE */}
            <div className="col-lg-4">

              {/* LOGO */}
              <div className="footer-logo-wrapper">

                <h2 className="footer-logo">
                  <img src={Assets.Kytes_Logo}/>
                </h2>

              </div>

              {/* DESCRIPTION */}
              <p className="footer-description">
                Kytes Community helps developers,
                innovators, creators, and professionals
                connect, collaborate, and grow together.
              </p>

              {/* SOCIAL ICONS */}
              <div className="footer-socials">

                <a href="/" className="social-icon">
                  <FaFacebookF />
                </a>

                <a href="/" className="social-icon">
                  <FaTwitter />
                </a>

                <a href="/" className="social-icon">
                  <FaInstagram />
                </a>

                <a href="/" className="social-icon">
                  <FaLinkedinIn />
                </a>

              </div>

              {/* NEWSLETTER */}
              <div className="newsletter-section">

                <h4 className="newsletter-title">
                  Stay updated with latest community insights
                </h4>

                <div className="newsletter-box">

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="newsletter-input"
                  />

                  <button className="newsletter-btn">
                    <Send size={18} />
                  </button>

                </div>

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-8">

              <div className="row">

                {/* COMMUNITY */}
                <div className="col-md-3 col-6 mb-4">

                  <h4 className="footer-heading">
                    Community
                  </h4>

                  <ul className="footer-links">

                    {footerData.community.map((item) => (
                      <li key={item.title}>
                        <a href={item.link}>
                          {item.title}
                        </a>
                      </li>
                    ))}

                  </ul>

                </div>

                {/* RESOURCES */}
                <div className="col-md-3 col-6 mb-4">

                  <h4 className="footer-heading">
                    Resources
                  </h4>

                  <ul className="footer-links">

                    {footerData.resources.map((item) => (
                      <li key={item.title}>
                        <a href={item.link}>
                          {item.title}
                        </a>
                      </li>
                    ))}

                  </ul>

                </div>

                {/* COMPANY */}
                <div className="col-md-3 col-6 mb-4">

                  <h4 className="footer-heading">
                    Company
                  </h4>

                  <ul className="footer-links">

                    {footerData.company.map((item) => (
                      <li key={item.title}>
                        <a href={item.link}>
                          {item.title}
                        </a>
                      </li>
                    ))}

                  </ul>

                </div>

                {/* LEGAL */}
                <div className="col-md-3 col-6 mb-4">

                  <h4 className="footer-heading">
                    Legal
                  </h4>

                  <ul className="footer-links">

                    {footerData.legal.map((item) => (
                      <li key={item.title}>
                        <a href={item.link}>
                          {item.title}
                        </a>
                      </li>
                    ))}

                  </ul>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">

          <div className="footer-bottom-wrapper">

            <p>
              © 2026 Kytes Community. All Rights Reserved.
            </p>

            <div className="footer-bottom-links">

              <a href="/">
                Privacy
              </a>

              <a href="/">
                Terms
              </a>

              <a href="/">
                Cookies
              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer