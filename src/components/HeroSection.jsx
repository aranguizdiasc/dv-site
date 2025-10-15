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
          <span className="font-bold text-primary text-4xl md:text-5xl">
            Domestic violence against women remains one of the most widespread yet underreported
            human rights violations globally
          </span>
          <span className="opacity-0 animate-fade-in-delay-1 block mt-4 text-foreground text-lg md:text-xl leading-relaxed">
            Across many regions, especially in rural and developing areas, social stigma, lack of resources, 
            and fear prevent countless survivors from seeking help. Violence against women is preventable — by identifying
            early signs of risk and connecting survivors to proper care and support,
            together we can help break the cycle of abuse.  
            By using machine learning to analyze patterns within social, economic, and demographic factors, 
            we can begin to understand and identify risk conditions for domestic violence earlier, supporting awareness and prevention.
          </span>
        </h1>
      </div>

      {/* Statistics row */}
      <div className="container mx-auto mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <div className="opacity-0 animate-fade-in-delay-2">
          <h2 className="text-primary text-7xl md:text-8xl font-bold">24%</h2>
          <p className="text-foreground text-lg md:text-xl mt-2">
            of women experience severe physical violence by an intimate partner
          </p>
        </div>

        <div className="opacity-0 animate-fade-in-delay-3">
          <h2 className="text-primary text-7xl md:text-8xl font-bold">5 million</h2>
          <p className="text-foreground text-lg md:text-xl mt-2">
            acts of domestic violence occur annually to women aged 18 years and older
          </p>
        </div>

        <div className="opacity-0 animate-fade-in-delay-4">
          <h2 className="text-primary text-7xl md:text-8xl font-bold">44%</h2>
          <p className="text-foreground text-lg md:text-xl mt-2">
            (or more) of cases go unreported, leaving survivors without the support they need
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
