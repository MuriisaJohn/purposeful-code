import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/cwg-logo.png";

const navLinks = ["Home", "About", "Products", "Community", "Blog", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between py-1 px-4 md:px-8">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Coding With God" className="h-24 w-auto transition-transform duration-300 hover:scale-105" />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-cream/80 hover:text-cream font-sans text-sm tracking-wide transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <Button variant="hero" size="sm" className="hidden md:inline-flex">
          Get in Touch
        </Button>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-cream"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-brand-black/95 backdrop-blur-md border-t border-cream/10 animate-fade-in">
          <ul className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-cream/80 hover:text-cream font-sans text-lg tracking-wide transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
            <li>
              <Button variant="hero" size="default">
                Get in Touch
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
