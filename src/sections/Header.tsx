"use client";

import { useState, useEffect, useRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null); // Ref for debouncing
  const isClicking = useRef(false); // Ref to manage click state

  useEffect(() => {
    const handleScroll = () => {
      if (isClicking.current) return; // Ignore scroll updates during click

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current); // Clear previous timeout

      scrollTimeout.current = setTimeout(() => {
        const sections = document.querySelectorAll("section");
        const scrollPosition = window.scrollY + window.innerHeight / 3;

        let currentSection = "home"; // Default to home

        sections.forEach((section) => {
          const sectionId = section.getAttribute("id");
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            sectionId &&
            scrollPosition >= sectionTop - 100 && // Adjust top tolerance
            scrollPosition < sectionTop + sectionHeight - 100 // Adjust bottom tolerance
          ) {
            currentSection = sectionId;
          }
        });

        setActiveSection(currentSection); // Update the active section
      }, 100); // Debounce scroll updates (adjust time as needed)
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current); // Cleanup timeout
    };
  }, []);

  const handleClick = (section: string) => {
    isClicking.current = true; // Lock scroll updates during click
    setActiveSection(section);

    // Scroll smoothly to the section
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });

    // Unlock scroll updates after a short delay
    setTimeout(() => {
      isClicking.current = false;
    }, 1000);
  };

  const isActive = (section: string) => activeSection === section;

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <AnchorLink
          offset={50}
          href="#home"
          onClick={() => handleClick("home")}
          className={`nav-item ${
            isActive("home")
              ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              : ""
          }`}
        >
          Home
        </AnchorLink>
        <AnchorLink
          offset={50}
          href="#projects"
          onClick={() => handleClick("projects")}
          className={`nav-item ${
            isActive("projects")
              ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              : ""
          }`}
        >
          Projects
        </AnchorLink>
        <AnchorLink
          offset={50}
          href="#about"
          onClick={() => handleClick("about")}
          className={`nav-item ${
            isActive("about")
              ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              : ""
          }`}
        >
          About
        </AnchorLink>
        <AnchorLink
          offset={50}
          href="#contact"
          onClick={() => handleClick("contact")}
          className={`nav-item ${
            isActive("contact")
              ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              : ""
          }`}
        >
          Contact
        </AnchorLink>
      </nav>
    </div>
  );
};
