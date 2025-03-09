import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCloud, FaShieldAlt, FaSyncAlt, FaHeadset } from "react-icons/fa";
import "./WhyChooseUs.css";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const features = [
    { icon: <FaCloud />, title: "Cloud Solutions", text: "Seamless, scalable, and secure cloud services tailored to your needs." },
    { icon: <FaShieldAlt />, title: "Enterprise Security", text: "Advanced cybersecurity solutions to safeguard your business operations." },
    { icon: <FaSyncAlt />, title: "AI & Automation", text: "Optimize workflows with AI-powered automation and smart analytics." },
    { icon: <FaHeadset />, title: "Dedicated Support", text: "24/7 expert assistance to ensure seamless IT management." },
  ];

  return (
    <Container fluid className="why-choose-us text-center">
      {/* Ratings & Reviews */}
      <Row data-aos="fade-right" className="mb-5">
        <Col>
          <h2 className="section-title">Trusted by Businesses Worldwide</h2>
          <div className="rating">⭐⭐⭐⭐⭐</div>
          <p className="review-count">5K+ Satisfied Clients</p>
        </Col>
      </Row>

      {/* Company Stats */}
      <Row data-aos="fade-left" className="key-metrics mb-5">
        {[
          { title: "10+", text: "Years of Innovation" },
          { title: "99%", text: "Uptime & Reliability" },
          { title: "600+", text: "Projects Successfully Delivered" },
          { title: "24/7", text: "Customer Support" },
        ].map((metric, index) => (
          <Col key={index} md={3} className="metric-box">
            <h3>{metric.title}</h3>
            <p>{metric.text}</p>
          </Col>
        ))}
      </Row>

      {/* What We Do */}
      <Row data-aos="fade-up" className="mb-5">
        <Col>
          <h2 className="section-title">What We Offer</h2>
          <h3 className="tagline">Empowering Businesses with Cutting-Edge SaaS & IT Solutions</h3>
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
                <Card.Text>{feature.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WhyChooseUs;
