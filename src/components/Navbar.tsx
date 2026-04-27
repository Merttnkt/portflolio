"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        // scroll state
        setIsScrolled(scrollY > 50);

        // active section
        const scrollPosition = scrollY + window.innerHeight / 2;

        for (let i = navLinks.length - 1; i >= 0; i--) {
          const id = navLinks[i].href.substring(1);
          const el = document.getElementById(id);

          if (el && el.offsetTop <= scrollPosition) {
            setActiveSection(id);
            break;
          }
        }

        ticking = false;
      });

      ticking = true;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
  ? "py-3 md:border-b md:border-border/50 md:bg-secondary/70 md:backdrop-blur-sm"
  : "py-5 md:border-b md:border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* DESKTOP */}
        <ul className="hidden md:flex items-center gap-8 mx-auto">
          {navLinks.map((link) => {
            const id = link.href.substring(1);
            const isActive = activeSection === id;

            return (
              <li key={link.name} className="group">
                <a
                  href={link.href}
                  className={`py-2 text-sm transition-colors ${
  isActive
    ? "text-primary font-semibold"
    : "text-muted hover:text-primary"
}`}
                >
                  {link.name}

                  
                </a>
              </li>
            );
          })}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 ml-auto"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
  className={`block w-6 h-0.5 bg-foreground rounded-full transition-all duration-300 origin-center ${
    isMobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
  }`}
/>
<span
  className={`block w-6 h-0.5 bg-foreground rounded-full transition-all duration-300 ${
    isMobileMenuOpen ? "opacity-0 scale-x-0" : ""
  }`}
/>
<span
  className={`block w-6 h-0.5 bg-foreground rounded-full transition-all duration-300 origin-center ${
    isMobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
  }`}
/>
        </button>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden mx-4 mt-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col p-3">
          {navLinks.map((link) => {
            const id = link.href.substring(1);
            const isActive = activeSection === id;

            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-3 text-sm transition-colors ${
                    isActive
                      ? "text-primary font-medium pl-2 border-l-2 border-primary"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

    </nav>
  );
}