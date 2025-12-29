const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-primary border-t border-primary-foreground/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-serif text-xl font-bold text-primary-foreground">
              Ron<span className="text-gradient">.</span>
            </span>
            <span className="text-primary-foreground/40 text-sm">
              © {currentYear} Ron Brissette
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com/in/ronbrissette"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="mailto:hello@ronbrissette.com"
              className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
            >
              Email
            </a>
            <a
              href="https://morbycreate.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
            >
              Morby Create
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
