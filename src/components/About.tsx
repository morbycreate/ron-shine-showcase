import { Lightbulb, Users, Target, Sparkles, ArrowRight } from "lucide-react";

const About = () => {
  const capabilities = [
    {
      icon: Lightbulb,
      title: "Experience Strategy",
      description: "Turning ambiguity into clear, actionable product strategy that aligns stakeholders and drives adoption.",
    },
    {
      icon: Users,
      title: "Team Builder",
      description: "Building and scaling UX organizations from the ground up—growing teams from 3 to 30+ members.",
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "Delivering measurable business impact through platform modernization and enterprise design systems.",
    },
    {
      icon: Sparkles,
      title: "Cross-Functional Leader",
      description: "Aligning executives, product, engineering, and delivery teams around shared experience vision.",
    },
  ];

  const industries = [
    "Financial Services",
    "Travel & Aviation",
    "Enterprise Platforms",
    "Consumer Products",
    "eCommerce",
    "Technology",
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative container mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/5 border border-primary-foreground/10 mb-6">
            <span className="text-accent text-sm font-medium">About</span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-8">
            Strategic leadership for
            <br />
            <span className="text-gradient">complex challenges</span>
          </h2>

          <p className="text-primary-foreground/60 text-lg md:text-xl leading-relaxed max-w-2xl">
            I'm Ron Brissette, a Senior Product & Experience Design Leader with 
            15+ years building and scaling UX organizations in complex, regulated environments.
          </p>
        </div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column - Bio */}
          <div className="space-y-8">
            <div className="space-y-6 text-primary-foreground/70 text-lg leading-relaxed">
              <p>
                My career spans financial services, travel, enterprise platforms, and consumer products—from 
                leading <span className="text-primary-foreground font-medium">American Airlines' global rebrand</span> and pioneering their first UX team, to driving 
                <span className="text-accent font-medium"> $60M in new pipeline opportunities</span> at Slalom.
              </p>
              <p>
                I specialize in platform modernization, enterprise design systems, and end-to-end product experiences.
                My approach? <span className="text-primary-foreground font-medium">Clarity through complexity.</span>
              </p>
            </div>

            {/* Industry tags */}
            <div className="pt-6 border-t border-primary-foreground/10">
              <p className="text-primary-foreground/40 text-sm uppercase tracking-widest mb-4">
                Industries
              </p>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <span
                    key={industry}
                    className="px-4 py-2 text-sm text-primary-foreground/70 bg-primary-foreground/5 border border-primary-foreground/10 rounded-full hover:border-accent/30 hover:text-primary-foreground transition-all duration-300"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Capabilities grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {capabilities.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 
                  hover:border-accent/30 hover:bg-primary-foreground/10 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 
                  group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-5 h-5 text-accent group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-primary-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-primary-foreground/50 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
