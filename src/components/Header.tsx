import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Experience", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    
    // If not on home page, navigate there first
    if (location.pathname !== "/") {
      navigate("/" + href);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-primary/95 backdrop-blur-xl py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-display text-2xl font-bold tracking-tight text-primary-foreground hover:text-accent transition-colors duration-300"
          >
            Ron Brissette
          </a>

          {/* Desktop Navigation - Minimal */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="relative text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 hover-underline"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Hamburger Menu Button */}
          <button
            className="text-primary-foreground p-2 hover:text-accent transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Full Screen Mobile/Desktop Menu Overlay */}
        <div
          className={`fixed inset-0 z-40 transition-all duration-500 ${
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          style={{ top: "0", backgroundColor: "hsl(220 15% 8%)" }}
        >
          <div className="container mx-auto px-6 py-6">
            <div className="flex items-center justify-between mb-20">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setIsMobileMenuOpen(false);
                }}
                className="font-display text-2xl font-bold tracking-tight text-primary-foreground"
              >
                Ron Brissette
              </a>
              <button
                className="text-primary-foreground p-2 hover:text-accent transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-left font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground hover:text-accent transition-colors duration-300 opacity-0 ${
                    isMobileMenuOpen ? "animate-fade-up" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="absolute bottom-12 left-6 right-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 text-primary-foreground/50 text-sm">
                <a
                  href="mailto:hello@ronbrissette.com"
                  className="hover:text-accent transition-colors duration-300"
                >
                  hello@ronbrissette.com
                </a>
                <div className="flex gap-6">
                  <a
                    href="https://linkedin.com/in/ronbrissette"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors duration-300"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
