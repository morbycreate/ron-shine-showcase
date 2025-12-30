const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-primary border-t border-primary-foreground/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left side */}
          <div>
            <p className="font-display text-2xl font-bold text-primary-foreground mb-2">
              Ron<span className="text-accent">.</span>
            </p>
            <p className="text-primary-foreground/40 text-sm">
              © {currentYear}, Ron Brissette. Made with passion.
              <br />
              <span className="text-accent">Passion powered by pizza.</span>
            </p>
          </div>

          {/* Right side - Contact info */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div>
              <p className="text-primary-foreground/40 text-xs uppercase tracking-wider mb-2">
                Location
              </p>
              <p className="text-primary-foreground text-sm">
                Dallas, TX
              </p>
            </div>
            <div>
              <p className="text-primary-foreground/40 text-xs uppercase tracking-wider mb-2">
                Email
              </p>
              <a
                href="mailto:ronbrissette@gmail.com"
                className="text-primary-foreground text-sm hover:text-accent transition-colors duration-300"
              >
                ronbrissette@gmail.com
              </a>
            </div>
            <div>
              <p className="text-primary-foreground/40 text-xs uppercase tracking-wider mb-2">
                Social
              </p>
              <a
                href="https://linkedin.com/in/ronbrissette"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground text-sm hover:text-accent transition-colors duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
