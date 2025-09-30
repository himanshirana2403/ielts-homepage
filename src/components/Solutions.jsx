import React from "react";
import "./Solutions.css";
import "aos/dist/aos.css"; // Import AOS for animations
import AOS from "aos";

const Solutions = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    { name: "🗣️ Speaking Practice", desc: "Interactive speaking sessions with instant feedback to improve fluency." },
    { name: "📝 Mock Tests", desc: "Simulate real IELTS exams to track your progress and timing." },
    { name: "🤖 AI Band Score", desc: "Get accurate predicted band scores using AI-powered assessments." },
    { name: "📚 Personalized Study Plans", desc: "Tailored study plans to focus on your weak areas and improve overall score." },
    { name: "🎧 Listening & Reading Exercises", desc: "Practice exercises designed to enhance comprehension and accuracy." }
  ];

  return (
    <div className="solutions-section" id="features">
      <h1 className="section-title" data-aos="fade-down">Our Features</h1>
      <p className="tagline" data-aos="fade-up">
        "Comprehensive IELTS preparation with expert guidance and innovative tools."
      </p>

      <div className="grid">
        {services.map((service, index) => (
          <div key={index} className="card" data-aos="zoom-in">
            <h3>{service.name}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
