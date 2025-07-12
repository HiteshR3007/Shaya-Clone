import React from "react";
import "./HeroSection.css";
import heroBanner from "../assets/shaya-hero.png";

const HeroSection = () => {
  return (
    <section className="hero">
      <img
        src={heroBanner}
        alt="Fashion Jewelry Banner"
        className="hero-banner"
      />
    </section>
  );
};

export default HeroSection;
