import { ArrowRight, Mail } from "lucide-react";

const Hero = () => {
  const scrollToWork = () => {
    const element = document.querySelector("#work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center bg-primary overflow-hidden">
      {/* Background Video - Right Side */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[83%] overflow-hidden">
        <div style={{ padding: '33.14% 0 0 0', position: 'relative', height: '100%', minHeight: '100%' }}>
          <iframe
            src="https://player.vimeo.com/video/1151068330?badge=0&autopause=0&player_id=0&app_id=58479&loop=1&background=1&autoplay=1&muted=1"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            referrerPolicy="strict-origin-when-cross-origin"
            style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', minHeight: '100vh', border: 'none' }}
            title="hero_banner test"
          />
        </div>
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
      </div>


      {/* Content */}
      <div className="relative container mx-auto px-6 py-32 lg:py-40">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <p className="text-accent font-medium tracking-wide mb-8 opacity-0 animate-fade-up text-sm md:text-base">
            15+ Years Building & Leading UX Organizations
          </p>

          {/* Main headline - Matt Boston style with mixed solid/outline text */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold leading-[0.95] mb-8 opacity-0 animate-fade-up stagger-1">
            <span className="text-primary-foreground">Experience</span>
            <br />
            <span className="text-outline">strategist.</span>
            <br />
            <span className="text-accent">Design </span>
            <span className="text-outline-accent">leader.</span>
            <br />
            <span className="text-primary-foreground">Culture </span>
            <span className="text-outline">Builder.</span>
          </h1>

          {/* Tagline - Professional approach */}
          <p className="text-primary-foreground/60 text-lg md:text-xl max-w-xl mb-12 leading-relaxed opacity-0 animate-fade-up stagger-2">
            Still rocking the same confidence from that school photo—only now I help teams cut through the noise, make smarter decisions, align stakeholders, and deliver work that makes users say, "finally."
          </p>


          {/* Scroll hint */}
          <div className="mt-20 opacity-0 animate-fade-up stagger-4">
            <button
              onClick={scrollToWork}
              className="group flex items-center gap-4 text-primary-foreground/40 hover:text-accent transition-colors duration-300"
            >
              <span className="text-xs uppercase tracking-[0.2em]">Scroll to explore</span>
              <div className="w-12 h-[1px] bg-current group-hover:w-20 transition-all duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Slide counter - like Matt Boston */}
      <div className="absolute bottom-8 right-8 text-primary-foreground/30 font-display text-sm">
        1 / 1
      </div>
    </section>
  );
};

export default Hero;
