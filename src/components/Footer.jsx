import React, { useEffect } from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

import "aos/dist/aos.css";
import AOS from "aos";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const courses = [
    "Speaking Practice",
    "Writing Skills",
    "Reading Techniques",
    "Listening Exercises",
    "Mock Tests",
    "AI Band Score Feedback",
    "Personalized Study Plans",
  ];

  const instituteLinks = [
    "About Us",
    "Our Trainers",
    "Success Stories",
    "Courses",
    "FAQs",
    "Blog",
    "Contact",
  ];

  const footerLinks = [
    "Terms of Service",
    "Privacy Policy",
    "Refund Policy",
    "Disclaimer",
    "Contact Us",
  ];

  const socialIcons = [
    { icon: <FaLinkedin />, link: "#" },
    { icon: <FaGithub />, link: "#" },
    { icon: <FaTwitter />, link: "#" },
    { icon: <FaFacebook />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Courses Section */}
          <div className="col-md-4 footer-section">
            <h5>Our Courses</h5>
            <ul>
              {courses.map((item, index) => (
                <li key={index}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Institute Section */}
          <div data-aos="fade-left" className="col-md-4 footer-section">
            <h5>Institute</h5>
            <ul>
              {instituteLinks.map((item, index) => (
                <li key={index}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Branding & CTA */}
          <div className="col-md-4 text-center">
            <div className="brand-container">
              <h2>IELTS Pro</h2>
              <p>Your Pathway to IELTS Success</p>
            </div>
            <button className="btn-consultation">Book a Free Consultation</button>
          </div>
        </div>

        {/* Subscription Input */}
        <div className="subscription-container">
          <input type="text" placeholder="Stay updated with IELTS tips & news" className="subscription-input" />
        </div>

        {/* Contact & Review Section */}
        <div data-aos="fade-right" className="row contact-section">
          <div className="col-md-6 text-center text-md-start">
            <h6>Rated 5.0/5 by Students</h6>
            <p className="rating">⭐⭐⭐⭐⭐</p>
            <p>500+ Successful Students</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p>Address: 123 Learning Street, Delhi, India</p>
            <p>Phone: +91 98765 43210</p>
            <p>
              Email: <a href="mailto:info@ieltspro.com">info@ieltspro.com</a>
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div data-aos="fade-up" className="footer-bottom">
          <p>© 2025 IELTS Pro | All Rights Reserved</p>
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
