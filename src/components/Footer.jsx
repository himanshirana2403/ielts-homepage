import React, { useEffect } from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaBehance } from "react-icons/fa";

import "aos/dist/aos.css";
import AOS from "aos";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const solutions = [
    "Cloud & DevOps Solutions",
    "Enterprise SaaS Development",
    "Custom Software Engineering",
    "Cybersecurity & Compliance",
    "AI & Data Analytics",
    "Managed IT Services",
    "Digital Transformation",
    "E-commerce Solutions",
  ];

  const companyLinks = [
    "About Us",
    "Our Expertise",
    "Team & Culture",
    "Careers",
    "Client Testimonials",
    "Awards & Recognition",
    "Blog",
    "Case Studies",
    "Support",
  ];

  const footerLinks = [
    "Terms of Service",
    "Privacy Policy",
    "Refund & Cancellation",
    "Security Policy",
    "Blog",
    "Case Studies",
    "Contact Us",
  ];

  const socialIcons = [
    { icon: <FaLinkedin />, link: "#" },
    { icon: <FaGithub />, link: "#" },
    { icon: <FaTwitter />, link: "#" },
    { icon: <FaFacebook />, link: "#" },
    { icon: <FaBehance />, link: "#" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Solutions Section */}
          <div className="col-md-4 footer-section">
            <h5>Our Solutions</h5>
            <ul>
              {solutions.map((item, index) => (
                <li key={index}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div data-aos="fade-left" className="col-md-4 footer-section">
            <h5>Company</h5>
            <ul>
              {companyLinks.map((item, index) => (
                <li key={index}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Branding & CTA */}
          <div className="col-md-4 text-center">
            <div className="brand-container">
              <h2>Intelion</h2>
              <p>Your Trusted SaaS & IT Partner</p>
            </div>
            <button className="btn-consultation">Request a Free Consultation</button>
          </div>
        </div>

        {/* Subscription Input */}
        <div className="subscription-container">
          <input type="text" placeholder="Stay updated with the latest trends" className="subscription-input" />
        </div>

        {/* Contact & Review Section */}
        <div data-aos="fade-right" className="row contact-section">
          <div className="col-md-6 text-center text-md-start">
            <h6>Rated 5.0/5 by Industry Experts</h6>
            <p className="rating">⭐⭐⭐⭐⭐</p>
            <p>Gartner | Clutch | 500+ Clients</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p>HQ: 7th Avenue, Tech Park, Bengaluru, India</p>
            <p>Phone: +91 98765 43210</p>
            <p>
              Email: <a href="mailto:contact@intelion.com">contact@intelion.com</a>
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div data-aos="fade-up" className="footer-bottom">
          <p>© 2025 Intelion | All Rights Reserved</p>
          <nav>
            {footerLinks.map((item, index) => (
              <a key={index} href="#">
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Social Media Icons */}
        <div className="social-icons">
          {socialIcons.map((item, index) => (
            <a key={index} href={item.link}>
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
