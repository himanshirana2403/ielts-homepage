import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Navigation from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import WhyChooseUs from "./components/WhyChooseUs";
import Solutions from "./components/Solutions";
import Contact from "./components/Contact";

AOS.init();

const App = () => {
  return (
    <Router>
      <>
        <Navigation />
        <Hero />
        <WhyChooseUs />
        <Solutions />
        <About />
        <Contact />
        <Footer />
      </>
    </Router>
  );
};

export default App;
