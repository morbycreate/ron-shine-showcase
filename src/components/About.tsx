import { Lightbulb, Users, Target, Sparkles } from "lucide-react";

const About = () => {
  const philosophyItems = [
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

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8">
            <div>
              <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
                About Me
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Strategic
                <br />
                <span className="text-gradient">Leadership</span>
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm Ron Brissette, a <strong className="text-foreground">Senior Product & Experience Design Leader</strong> with 
                15+ years building and scaling UX organizations in complex, regulated environments.
              </p>
              <p>
                My career spans financial services, travel, enterprise platforms, and consumer products—from 
                leading American Airlines' global rebrand and pioneering their first UX team, to driving 
                $60M in new pipeline opportunities at Slalom. I specialize in platform modernization, 
                enterprise design systems, and end-to-end product experiences.
              </p>
              <p>
                My approach? <strong className="text-foreground">Clarity through complexity.</strong> I 
                align executives, product, engineering, and delivery teams around clear experience 
                strategy—turning ambiguity into shipped outcomes and measurable business impact.
              </p>
            </div>
          </div>

          {/* Right column - Philosophy grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {philosophyItems.map((item, index) => (
              <div
                key={item.title}
                className={`group p-6 rounded-2xl bg-card border border-border hover:border-accent/50 
                  hover:shadow-elevated transition-all duration-500 cursor-default
                  ${index % 2 === 1 ? "sm:translate-y-8" : ""}`}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 
                  group-hover:bg-gold-gradient group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-6 h-6 text-accent group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
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
