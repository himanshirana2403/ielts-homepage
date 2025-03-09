import React from "react";
import "./Contact.css";
import "aos/dist/aos.css";
import AOS from "aos";

const ContactUs = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="contact-section">
      <div className="row g-0">
        {/* Left Section */}
        <div className="col-md-6 left-section" data-aos="fade-right">
          <div className="content">
            <h2>Let's Build the Future of <br /> <strong>IT & SaaS Together</strong></h2>
            <p>
              Looking for scalable IT solutions? Need a customized SaaS platform? Our experts are here to help you transform your business.
            </p>
            <p className="call-us"><strong>📞 Call us at:</strong> +91 98765 43210</p>

            <h4>Why Choose Intelion?</h4>
            <ul className="benefits-list">
              <li>✅ Tailored SaaS Solutions</li>
              <li>✅ Scalable IT Infrastructure</li>
              <li>✅ Expert IT Consulting</li>
              <li>✅ AI & Cloud Integration</li>
              <li>✅ Secure & Reliable Services</li>
              <li>✅ End-to-End Support</li>
            </ul>

            <h4>How We Work?</h4>
            <div className="steps">
              <p><strong>1.</strong> Free consultation to understand your needs</p>
              <p><strong>2.</strong> Strategy session to craft a tailored IT solution</p>
              <p><strong>3.</strong> Execution and ongoing support</p>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="col-md-6 d-flex align-items-center justify-content-center" data-aos="fade-left">
          <div className="contact-form">
            <h3>📅 Get a Free IT Consultation</h3>
            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input type="text" className="form-control" placeholder="First Name" required />
                </div>
                <div className="col-md-6 mb-3">
                  <input type="text" className="form-control" placeholder="Last Name" required />
                </div>
              </div>
              <input type="text" className="form-control mb-3" placeholder="Company / Organization" required />
              <input type="email" className="form-control mb-3" placeholder="Company Email" required />
              <input type="tel" className="form-control mb-3" placeholder="Phone Number" required />
              <select className="form-select mb-3" required>
                <option selected disabled>How Can We Assist You?</option>
                <option>SaaS Development</option>
                <option>IT Consulting</option>
                <option>Cloud & AI Solutions</option>
                <option>Cybersecurity Services</option>
                <option>Other</option>
              </select>
              <textarea className="form-control mb-3" rows="4" placeholder="Tell us about your project..." required></textarea>
              <button type="submit" className="btn-submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
