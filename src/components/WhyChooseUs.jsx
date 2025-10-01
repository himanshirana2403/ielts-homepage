import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBookOpen, FaChalkboardTeacher, FaLaptopCode, FaHeadset } from "react-icons/fa";
import "./WhyChooseUs.css";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const features = [
    { icon: <FaChalkboardTeacher />, title: "Expert Trainers", text: "Learn from certified IELTS trainers with years of experience." },
    { icon: <FaBookOpen />, title: "Comprehensive Curriculum", text: "Structured lessons covering Speaking, Writing, Reading, and Listening." },
    { icon: <FaLaptopCode />, title: "Mock Tests & AI Scoring", text: "Practice real exam scenarios and get AI-assisted band score feedback." },
    { icon: <FaHeadset />, title: "Personalized Support", text: "One-on-one guidance to focus on your weak areas and improve scores." },
  ];

  return (
    <Container fluid className="why-choose-us text-center">
      {/* Ratings & Reviews */}
      <Row data-aos="fade-right" className="mb-5">
        <Col>
          <h2 className="section-title">Trusted by Students Worldwide</h2>
          <div className="rating">⭐⭐⭐⭐⭐</div>
          <p className="review-count">500+ Successful Students</p>
        </Col>
      </Row>

      {/* Institute Stats */}
      <Row data-aos="fade-left" className="key-metrics mb-5">
        {[
          { title: "10+", text: "Years of Experience" },
          { title: "95%", text: "Students Achieving Target Band" },
          { title: "500+", text: "Students Trained" },
          { title: "24/7", text: "Guidance & Support" },
        ].map((metric, index) => (
          <Col key={index} md={3} className="metric-box">
            <h3>{metric.title}</h3>
            <p>{metric.text}</p>
          </Col>
        ))}
      </Row>

      {/* What We Offer */}
      <Row data-aos="fade-up" className="mb-5">
        <Col>
          <h2 className="section-title">Our Features</h2>
          <h3 className="tagline">Comprehensive IELTS Training to Boost Your Band Score</h3>
        </Col>
      </Row>

      {/* Features */}
      <Row data-aos="fade-down" className="features g-4">
        {features.map((feature, index) => (
          <Col key={index} md={3}>
            <Card className="feature-card shadow-sm">
              <Card.Body>
                <div className="icon-container">{feature.icon}</div>
                <Card.Title>{feature.title}</Card.Title>
                <Card.Text className="pp">{feature.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WhyChooseUs;
