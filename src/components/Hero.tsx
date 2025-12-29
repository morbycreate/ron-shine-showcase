import { ArrowDown, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Video/Image Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-transparent to-primary/90" />
      </div>

      {/* Floating ambient elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] animate-float stagger-2" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Eyebrow with glassmorphism */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary-foreground/5 backdrop-blur-md border border-primary-foreground/10 mb-8 opacity-0 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-primary-foreground/80 text-sm font-medium tracking-wide">
              Senior Product & Experience Design Leader
            </span>
          </div>

          {/* Main headline - cinematic typography */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[6rem] xl:text-[7rem] font-bold text-primary-foreground leading-[0.95] mb-8 opacity-0 animate-fade-up stagger-1">
            Transforming
            <br />
            <span className="text-gradient italic">Complex Ideas</span>
            <br />
            Into Reality
          </h1>

          {/* Subheadline */}
          <p className="text-primary-foreground/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-up stagger-2">
            15+ years leading UX organizations across Fortune 500 companies.
            Building teams, shipping products, and driving measurable business outcomes.
          </p>

          {/* CTA Buttons with glass effect */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up stagger-3">
            <Button
              variant="gold"
              size="xl"
              className="group gap-3"
              onClick={() => {
                const element = document.querySelector("#work");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Play className="w-4 h-4 fill-current" />
              Explore My Work
            </Button>
            <Button
              variant="ghost"
              size="xl"
              className="text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10"
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Stats row - glassmorphism cards */}
        <div className="max-w-4xl mx-auto mt-24 opacity-0 animate-fade-up stagger-4">
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {[
              { value: "18+", label: "Years Experience" },
              { value: "$60M", label: "Pipeline Generated" },
              { value: "30+", label: "Team Members Led" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="group relative p-6 md:p-8 rounded-2xl bg-primary-foreground/5 backdrop-blur-md border border-primary-foreground/10 hover:border-accent/30 transition-all duration-500 hover:bg-primary-foreground/10"
              >
                <p className="text-3xl md:text-5xl font-serif font-bold text-gradient mb-2">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/50 text-xs md:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/40 hover:text-accent transition-colors group"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
