import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToWork = () => {
    const element = document.querySelector("#work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-primary overflow-hidden">
      {/* Background Video - Full bleed */}
      <div className="absolute inset-0 overflow-hidden">
        <div style={{ padding: '56.25% 0 0 0', position: 'relative', height: '100%', minHeight: '100%' }}>
          <iframe
            src="https://player.vimeo.com/video/1151072387?badge=0&autopause=0&player_id=0&app_id=58479&loop=1&background=1&autoplay=1&muted=1"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '180%', height: '180%', border: 'none' }}
            title="Banner_Hero_New"
          />
        </div>
        {/* Refined gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
      </div>

      {/* Content - Centered elegant layout */}
      <div className="relative container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto lg:mx-0">
          {/* Refined eyebrow with elegant line */}
          <div className="flex items-center gap-4 mb-12 opacity-0 animate-fade-up">
            <div className="w-12 h-px bg-accent" />
            <p className="text-accent/90 text-xs uppercase tracking-[0.25em] font-medium">
              15+ Years in UX Leadership
            </p>
          </div>

          {/* Main headline - Refined typography with better rhythm */}
          <h1 className="font-display leading-[1] mb-10 opacity-0 animate-fade-up stagger-1">
            <span className="block text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-primary-foreground/90 mb-2">
              Experience
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-primary-foreground">
              Strategist
            </span>
            <span className="block text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-primary-foreground/60 mt-2">
              & Design Leader
            </span>
            <span className="block text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-primary-foreground/40 mt-2">
              Culture Builder
            </span>
          </h1>

          {/* Tagline - More refined with better measure */}
          <div className="max-w-lg opacity-0 animate-fade-up stagger-2">
            <p className="text-primary-foreground/50 text-base md:text-lg leading-relaxed font-light">
              Helping teams cut through the noise, make smarter decisions, and deliver work that makes users say "finally."
            </p>
          </div>

          {/* Elegant CTA area */}
          <div className="mt-16 flex items-center gap-8 opacity-0 animate-fade-up stagger-3">
            <button
              onClick={scrollToWork}
              className="group flex items-center gap-3 text-primary-foreground hover:text-accent transition-colors duration-500"
            >
              <span className="text-sm font-medium tracking-wide">View Work</span>
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
            <div className="w-px h-6 bg-primary-foreground/20" />
            <a
              href="#contact"
              className="text-sm text-primary-foreground/40 hover:text-primary-foreground transition-colors duration-300"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>

      {/* Minimal scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up stagger-4">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary-foreground/30 to-transparent" />
      </div>

      {/* Subtle corner accent */}
      <div className="absolute bottom-8 right-8 flex items-center gap-3 text-primary-foreground/20 text-xs tracking-widest opacity-0 animate-fade-up stagger-4">
        <span>01</span>
        <div className="w-8 h-px bg-current" />
        <span>01</span>
      </div>
    </section>
  );
};

export default Hero;
