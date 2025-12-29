import { Lightbulb, Users, Target, Sparkles } from "lucide-react";

const About = () => {
  const philosophyItems = [
    {
      icon: Lightbulb,
      title: "Clarity First",
      description: "I untangle complex ideas and build strategy, messaging, and brand activation without the fluff.",
    },
    {
      icon: Users,
      title: "Team Builder",
      description: "Setting each person up to win. Building team constitutions that drive exceptional outcomes.",
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "Using data and analytics to fuel confidence and creative breakthroughs that move the needle.",
    },
    {
      icon: Sparkles,
      title: "RONisms",
      description: "Known for unique metaphors and analogies that provide clarity and connection within teams.",
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
                Therapy for
                <br />
                <span className="text-gradient">Business</span>
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm Ron Brissette, founder of <strong className="text-foreground">Morby Create</strong> and 
                a senior creative leader with nearly two decades of experience transforming how 
                organizations think, communicate, and connect.
              </p>
              <p>
                From leading American Airlines' global rebrand to scaling creative teams at 
                Slalom, I've made it my mission to help teams align around purpose and 
                deliver impactful results. I believe the best work happens when strategy 
                meets storytelling—and when everyone on the team knows exactly why they're there.
              </p>
              <p>
                My approach? <strong className="text-foreground">Less fluff, more impact.</strong> I 
                specialize in brand strategy, digital experience, and creative direction that 
                cuts through noise and drives real business outcomes.
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
