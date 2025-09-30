import React from "react";
import { Container, Grid, Typography, Avatar, Card, CardContent } from "@mui/material";
import "./Testimonials.css";
import "aos/dist/aos.css"; // AOS for animations
import AOS from "aos";

// Replace with actual images of students or use placeholders
import student1 from "../assets/women.png";
import student2 from "../assets/women.png";
import student3 from "../assets/women.png";

const Testimonials = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const reviews = [
    {
      name: "Aarav Sharma",
      text: "IELTS Pro helped me achieve my target band in just 3 months! Highly recommend their speaking practice sessions.",
      avatar: student1,
    },
    {
      name: "Sara Khan",
      text: "The mock tests and AI band scoring gave me great insights into my preparation. Excellent trainers and support.",
      avatar: student2,
    },
    {
      name: "Rohit Verma",
      text: "Personalized study plans made all the difference. I feel confident and well-prepared for my IELTS exam.",
      avatar: student3,
    },
  ];

  return (
    <div id="testimonials" className="testimonials-section">
      <Container>
        <Typography variant="h3" className="section-title" data-aos="fade-down">
          Student Testimonials
        </Typography>
        <Typography className="tagline" data-aos="fade-up">
          "Hear what our students have to say about their IELTS journey with us."
        </Typography>

        <Grid container spacing={4} justifyContent="center" className="reviews-grid">
          {reviews.map((review, index) => (
            <Grid item xs={12} md={4} key={index} data-aos="fade-up">
              <Card className="review-card">
                <CardContent>
                  <Avatar
                    alt={review.name}
                    src={review.avatar}
                    sx={{ width: 60, height: 60, margin: "0 auto 10px" }}
                  />
                  <Typography variant="h6" className="student-name">
                    {review.name}
                  </Typography>
                  <Typography className="review-text">{review.text}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Testimonials;
