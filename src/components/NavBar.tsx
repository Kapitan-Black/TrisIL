'use client'

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    closeMenu();
    const element = document.getElementById(id);
    if (element) {
      const offsetPosition = element.offsetTop - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 transform-gpu",
        isScrolled
          ? "bg-white/60 shadow-sm blur-effect py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* <div className="absolute top-2 right-5">
          <LanguageSwitcher />
        </div> */}

        <a
          href="#"
          className="text-oceanblue text-xl font-medium relative z-10"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            closeMenu();
          }}
        >
          {/* תריסי אלומיניום */}
          <img src="/trisil.png" alt="" className="h-12 w-32"/>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {[
            { name: "שירותים", id: "services" },
            { name: "אודות", id: "about" },
            { name: "צור קשר", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="px-4 py-2 text-charcoal hover:text-oceanblue-dark transition-colors relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-oceanblue-dark/50 transition-all duration-400 group-hover:w-full"></span>
            </button>
          ))}
        </nav>
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-oceanblue-dark focus:outline-none z-10"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {/* Mobile Navigation Drawer */}
        <div
          className={cn(
            "fixed inset-0 bg-skyblue-light/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out md:hidden",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {[
              { name: "בית", id: "home" },
              { name: "שירותים", id: "services" },
              { name: "אודות", id: "about" },
              { name: "צור קשר", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-xl font-medium text-oceanblue-dark tracking-wide"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
