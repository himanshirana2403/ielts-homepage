import React from "react";
import "./Solutions.css";
import "aos/dist/aos.css"; // Import AOS for animations
import AOS from "aos";

const Solutions = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    { name: "🚀 SaaS Solutions", desc: "Custom-built SaaS applications to streamline business operations." },
    { name: "📊 Data Analytics", desc: "Transform raw data into actionable insights using AI & ML." },
    { name: "🔒 Enterprise Security", desc: "Comprehensive cybersecurity to safeguard digital assets." },
    { name: "☁️ Cloud Computing", desc: "Seamless cloud solutions for scalability and efficiency." },
    { name: "🛠 IT Consulting", desc: "Strategic IT solutions to enhance business productivity." }
  ];

  return (
    <div className="solutions-section">
      <h1 className="section-title" data-aos="fade-down">Our Solutions</h1>
      <p className="tagline" data-aos="fade-up">
        "Empowering businesses with cutting-edge SaaS & IT solutions."
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
