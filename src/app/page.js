"use client";

import AboutMe from "./AboutMe";
import Services from "./Services";

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <div className="mt-20">
        <AboutMe></AboutMe>
      </div>
      <div className="mt-20">
        <Services></Services>
      </div>
    </div>
  );
};

export default HomePage;
