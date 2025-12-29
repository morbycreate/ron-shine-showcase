import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-6">
      <div className="container mx-auto px-6">
        <div
          className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${
            isScrolled
              ? "bg-primary/80 backdrop-blur-xl border border-primary-foreground/10 shadow-2xl"
              : "bg-primary-foreground/5 backdrop-blur-md border border-primary-foreground/10"
          }`}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-serif text-xl font-bold tracking-tight text-primary-foreground hover:text-accent transition-colors"
          >
            Ron<span className="text-accent">.</span>
          </a>

          {/* Desktop Navigation - Pill Style */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/5 rounded-full transition-all duration-300"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="gold"
              size="sm"
              className="rounded-full"
              onClick={() => scrollToSection("#contact")}
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground p-2 hover:bg-primary-foreground/10 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 p-6 rounded-2xl bg-primary/95 backdrop-blur-xl border border-primary-foreground/10 animate-fade-in">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-lg font-medium text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/5 rounded-xl px-4 py-3 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="gold"
                className="w-full mt-4 rounded-full"
                onClick={() => scrollToSection("#contact")}
              >
                Let's Talk
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
