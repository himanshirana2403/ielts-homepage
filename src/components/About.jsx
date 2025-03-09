import React from "react";
import { Container, Grid, Typography, Button } from "@mui/material";
import aboutImage from "../assets/about-image.jpg"; // Replace with your actual image
import "./About.css";
import "aos/dist/aos.css"; // AOS for animations
import AOS from "aos";

const About = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="about" className="about-section">
      <Container>
        <Typography variant="h3" className="section-title" data-aos="fade-down">
          About Intelion
        </Typography>
        <Typography className="tagline" data-aos="fade-up">
          "Empowering businesses with cutting-edge technology solutions."
        </Typography>

        <Grid container spacing={4} alignItems="center">
          {/* Left Side - Image */}
          <Grid item xs={12} md={6} data-aos="fade-right">
            <div className="image-container">
              <img src={aboutImage} alt="About Intelion" className="about-image" />
            </div>
          </Grid>

          {/* Right Side - Text */}
          <Grid item xs={12} md={6} data-aos="fade-left">
            <Typography className="about-description">
              Intelion is a leading SaaS and IT solutions provider, specializing in 
              cloud computing, cybersecurity, and digital transformation for businesses worldwide.
            </Typography>

            {/* Feature Highlights */}
            <div className="key-metrics">
              <div className="metric-box">
                <h3>🚀 Innovation</h3>
                <p>We leverage cutting-edge technology.</p>
              </div>
              <div className="metric-box">
                <h3>🔒 Security</h3>
                <p>Advanced cybersecurity solutions.</p>
              </div>
              <div className="metric-box">
                <h3>📈 Growth</h3>
                <p>Helping businesses scale efficiently.</p>
              </div>
            </div>

            <Button variant="contained" className="learn-more-btn">
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
