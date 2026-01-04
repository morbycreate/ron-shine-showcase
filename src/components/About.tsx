const About = () => {
  const accomplishments = [
    "Led the enterprise redesign of AA.com, supporting American Airlines' first major rebrand in 40+ years and contributing to an +11.4 lift in YouGov Brand Buzz.",
    "Drove $60M in pipeline by building and leading experience capabilities for Fortune 500 clients across industries (Slalom).",
    "Delivered a 23% YoY e-commerce lift through full-funnel UX and platform optimization, contributing to industry recognition as a digital leader (Fossil).",
    "Built and scaled UX organizations (3 → 30; 2 → 10), establishing design systems, governance, and operating models that enabled enterprise delivery at scale (American Airlines, Slalom).",
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, hsl(var(--accent)) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="relative container mx-auto px-6">
        {/* Section intro */}
        <div className="max-w-4xl mb-16">
          <p className="text-accent font-medium tracking-wide mb-4 text-sm">
            A VP-Level Operator
          </p>
          
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground leading-tight">
            I scale teams, systems, and outcomes. I'm not a hands-off creative—I'm an operator who delivers measurable impact.
          </h2>
        </div>

        {/* Accomplishments list */}
        <div className="max-w-4xl">
          <ul className="space-y-6">
            {accomplishments.map((item, index) => (
              <li 
                key={index}
                className="flex gap-4 items-start group"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent font-display font-bold text-sm group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  {index + 1}
                </span>
                <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed pt-0.5">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
