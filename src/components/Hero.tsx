import { ArrowRight, Mail } from "lucide-react";
import heroPortrait from "@/assets/hero-fridge.png";

const Hero = () => {
  const scrollToWork = () => {
    const element = document.querySelector("#work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-primary overflow-hidden">
      {/* Background Image - Right Side */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-1/2">
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${heroPortrait})`,
            backgroundPosition: '100% 30%',
          }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-primary/30" />
      </div>

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Content */}
      <div className="relative container mx-auto px-6 py-32 lg:py-40">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <p className="text-accent font-medium tracking-wide mb-8 opacity-0 animate-fade-up text-sm md:text-base">
            15+ Years Building & Scaling UX Organizations
          </p>

          {/* Main headline - Matt Boston style with mixed solid/outline text */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold leading-[0.95] mb-8 opacity-0 animate-fade-up stagger-1">
            <span className="text-primary-foreground">Experience</span>
            <br />
            <span className="text-outline">strategist.</span>
            <br />
            <span className="text-primary-foreground">Platform</span>
            <br />
            <span className="text-outline">modernizer.</span>
            <br />
            <span className="text-accent">Design</span>
            <br />
            <span className="text-outline-accent">leader.</span>
          </h1>

          {/* Tagline - Professional approach */}
          <p className="text-primary-foreground/60 text-lg md:text-xl max-w-xl mb-12 leading-relaxed opacity-0 animate-fade-up stagger-2">
            Turning ambiguity into shipped outcomes across financial services, travel, and enterprise platforms.
            <span className="text-accent font-medium"> Aligning teams. Driving adoption. Delivering measurable impact.</span>
          </p>

          {/* CTA - Email link style like Matt Boston */}
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up stagger-3">
            <a
              href="mailto:hello@ronbrissette.com"
              className="group inline-flex items-center gap-3 text-primary-foreground font-medium text-lg hover:text-accent transition-colors duration-300"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-5 h-5" />
              </span>
              <span className="hover-underline">Let's Hang Out</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </div>

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
