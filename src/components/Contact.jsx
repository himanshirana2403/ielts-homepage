import React from "react";
import "./Contact.css";
import "aos/dist/aos.css";
import AOS from "aos";

const ContactUs = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="contact-section" id="contact">
      <div className="row g-0">
        {/* Left Section */}
        <div className="col-md-6 left-section" data-aos="fade-right">
          <div className="content">
            <h2>Ready to Achieve Your <br /> <strong>Dream IELTS Score?</strong></h2>
            <p>
              Join IELTS Pro today and get expert guidance, personalized learning plans, mock tests, and AI-assisted band scoring to excel in IELTS.
            </p>
            <p className="call-us"><strong>📞 Contact us at:</strong> +91 98765 43210</p>

            <h4>Why Choose IELTS Pro?</h4>
            <ul className="benefits-list">
              <li>✅ Personalized Study Plans</li>
              <li>✅ Speaking Practice with Feedback</li>
              <li>✅ Mock Tests for Real Exam Experience</li>
              <li>✅ AI-Powered Band Score Predictions</li>
              <li>✅ Experienced IELTS Trainers</li>
              <li>✅ Flexible Learning Schedule</li>
            </ul>

            <h4>How We Help You?</h4>
            <div className="steps">
              <p><strong>1.</strong> Assess your current level</p>
              <p><strong>2.</strong> Create a tailored IELTS learning plan</p>
              <p><strong>3.</strong> Practice, track progress, and improve band score</p>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="col-md-6 d-flex align-items-center justify-content-center" data-aos="fade-left">
          <div className="contact-form">
            <h3>📅 Book Your Free IELTS Consultation</h3>
            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input type="text" className="form-control" placeholder="First Name" required />
                </div>
                <div className="col-md-6 mb-3">
                  <input type="text" className="form-control" placeholder="Last Name" required />
                </div>
              </div>
              <input type="email" className="form-control mb-3" placeholder="Email Address" required />
              <input type="tel" className="form-control mb-3" placeholder="Phone Number" required />
              <select className="form-select mb-3" required>
                <option selected disabled>What Do You Need Help With?</option>
                <option>Speaking Practice</option>
                <option>Mock Tests</option>
                <option>AI Band Score</option>
                <option>Study Plan Guidance</option>
                <option>Other</option>
              </select>
              <textarea className="form-control mb-3" rows="4" placeholder="Tell us about your goals..." required></textarea>
              <button type="submit" className="btn-submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
