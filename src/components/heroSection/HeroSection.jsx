import React from "react";
import heropic from "../../assets/images/heropic.jpg";

const HeroSection = () => {
  return (
    <div
      className="lg:w-full h-64 lg:h-96 bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${heropic})` }}
    >
      {/* Content here if needed */}
    </div>
  );
};

export default HeroSection;