import { ArrowDown } from "lucide-react";
import React, { useEffect, useState } from "react";


export const HeroSection = () => {
    const [isScrolled, setIsScrolled] = React.useState(false);
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    
        useEffect(() => {
            const handleScroll = () => {
                setIsScrolled(window.scrollY > 10);
            };
    
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-start px-4 pt-32"
    >
      {/* Intro text */}
      <div className="container mx-auto text-left z-10 max-w-4xl">
        <h1 className="mb-8">
          <span className="tracking-tight font-bold text-primary text-4xl md:text-5xl">
            Domestic violence affects millions of women and families worldwide,
            often going unreported or unseen.
          </span>
          <span className="opacity-0 animate-fade-in-delay-1 block mt-4 text-foreground text-lg md:text-xl leading-relaxed">
            Through data analysis and machine learning, we can uncover patterns,
            highlight risk factors, and empower prevention efforts. This project
            aims to raise awareness and demonstrate how technology can be used
            to promote safety and understanding.
          </span>
        </h1>
      </div>

      {/* Statistics row */}
      <div className="container mx-auto mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <div className="opacity-0 animate-fade-in-delay-2">
          <h2 className="text-primary text-7xl md:text-8xl font-bold">24%</h2>
          <p className="text-foreground text-lg md:text-xl mt-2">
            of women experience severe physical violence by an intimate partner.
          </p>
        </div>

        <div className="opacity-0 animate-fade-in-delay-3">
          <h2 className="text-primary text-7xl md:text-8xl font-bold">1 in 4</h2>
          <p className="text-foreground text-lg md:text-xl mt-2">
            women will experience domestic violence in their lifetime.
          </p>
        </div>

        <div className="opacity-0 animate-fade-in-delay-4">
          <h2 className="text-primary text-7xl md:text-8xl font-bold">60%</h2>
          <p className="text-foreground text-lg md:text-xl mt-2">
            of cases go unreported, leaving survivors without the support they need.
          </p>
        </div>
      </div>

        {/* Scroll Arrow */}
      <div
      className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce transition-opacity duration-700
      ${
        isScrolled ? "opacity-0" : "opacity-100"
      }`}
    >
        <ArrowDown className="mb-2 w-5 h-5 text-primary" />
      </div>
    </section>
  );
};
