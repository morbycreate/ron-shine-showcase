import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-float stagger-3" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Eyebrow */}
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-6 opacity-0 animate-fade-up">
            Creative Director & Brand Strategist
          </p>

          {/* Main headline */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-tight mb-8 opacity-0 animate-fade-up stagger-1">
            Bringing{" "}
            <span className="text-gradient italic">Order</span>
            <br />
            to Chaos
          </h1>

          {/* Subheadline */}
          <p className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-up stagger-2">
            I help organizations untangle complexity, align teams around purpose,
            and build brands that inspire action. From Fortune 500 to ambitious startups,
            I transform vision into impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up stagger-3">
            <Button
              variant="hero"
              size="xl"
              onClick={() => {
                const element = document.querySelector("#work");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View My Work
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get In Touch
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-primary-foreground/10 opacity-0 animate-fade-up stagger-4">
            <div>
              <p className="text-4xl md:text-5xl font-serif font-bold text-gradient">18+</p>
              <p className="text-primary-foreground/60 text-sm mt-2">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-serif font-bold text-gradient">$60M</p>
              <p className="text-primary-foreground/60 text-sm mt-2">Pipeline Generated</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-serif font-bold text-gradient">30+</p>
              <p className="text-primary-foreground/60 text-sm mt-2">Team Members Led</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary-foreground/50 hover:text-accent transition-colors animate-bounce"
        >
          <ArrowDown size={28} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
