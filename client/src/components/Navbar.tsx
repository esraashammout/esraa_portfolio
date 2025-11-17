import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 font-bold text-xl text-blue-600 hover:text-blue-700 transition-colors">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                ES
              </div>
              <span className="hidden sm:inline">Esraa</span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Get In Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <div className="flex flex-col gap-3 pt-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left px-2 py-2"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-blue-600 hover:bg-blue-700 text-white w-full"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
