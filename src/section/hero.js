"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

const heroTexts = [
  "Premium Vehicles",
  "Luxury Redefined",
  "Unmatched Performance",
  "Elite Automotive Experience"
];

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    let currentIndex = 0;
    const text = heroTexts[currentTextIndex];
    setDisplayText(""); // Reset display text when changing phrases
    
    // Typing effect
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex]);
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
        
        // Start deleting after a delay
        setTimeout(() => {
          setIsTyping(true);
          const deletingInterval = setInterval(() => {
            if (currentIndex > 0) {
              setDisplayText(prev => prev.slice(0, -1));
              currentIndex--;
            } else {
              setIsTyping(false);
              clearInterval(deletingInterval);
              setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
            }
          }, 50); // Deleting speed
        }, 2000); // Delay before deleting
      }
    }, 100); // Typing speed

    return () => clearInterval(typingInterval);
  }, [currentTextIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      // This is now handled within the typing effect
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          ref={videoRef}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32 text-white">
        <div className="max-w-5xl space-y-4 md:space-y-6 lg:space-y-8">
          <h1 className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl font-bold leading-none tracking-tight">
            <span className="block mb-1 sm:mb-2 md:mb-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">
              ZayVehicles Presents
            </span>
            <span className="text-amber-400 relative inline-block min-h-[1.2em]">
              {displayText}
              <span className={`absolute inset-y-0 right-0 w-0.5 bg-amber-400 ${isTyping ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}></span>
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-3xl opacity-90 leading-snug">
            Discover the pinnacle of automotive excellence with our curated collection of luxury vehicles.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
            <Link href='/shop'>
            <button className="flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-xl bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-all duration-300 group">
              Explore Collection
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            </Link>

            <button className="flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-xl bg-transparent border-2 border-white hover:bg-white/10 font-medium rounded-lg transition-all duration-300">
              Book a Test Drive
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white mt-2 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}