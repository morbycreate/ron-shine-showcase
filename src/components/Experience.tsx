import { Building2, Calendar, ArrowUpRight } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Morby Create",
      role: "Founder",
      period: "2025 – Present",
      description:
        "Providing 'therapy for business' by untangling complex ideas and building strategy, messaging, and brand activation that drives results.",
      highlights: ["Brand Strategy", "Creative Direction", "Business Consulting"],
    },
    {
      company: "Slalom",
      role: "Director, Global Creative Services",
      period: "2018 – 2025",
      description:
        "Built a creative team from 2 to 10 members, driving $60M in new pipeline opportunities in just six months. Also established the first-ever experience design team for the Fort Worth office.",
      highlights: ["$60M Pipeline", "Team Building", "Experience Design"],
    },
    {
      company: "Sabre Corporation",
      role: "Director, Brand and Creative",
      period: "2016 – 2018",
      description:
        "Led a global brand identity refresh and developed a comprehensive global content strategy for this travel technology leader.",
      highlights: ["Global Rebrand", "Content Strategy", "Brand Identity"],
    },
    {
      company: "Fossil Group",
      role: "Sr. Director, Digital Experience Design",
      period: "2013 – 2016",
      description:
        "Led a digital transformation resulting in a 23% YoY eCommerce sales spike during Holiday 2014. Unified product, creative, and tech teams around shared vision.",
      highlights: ["23% Sales Growth", "Digital Transformation", "eCommerce"],
    },
    {
      company: "American Airlines",
      role: "Brand Manager & Director, UX",
      period: "2007 – 2013",
      description:
        "Led the massive global rebrand including aircraft livery in partnership with Futurebrand. Pioneered and scaled the first UX team from 3 to 30 members.",
      highlights: ["Global Rebrand", "UX Leadership", "30-Person Team"],
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Career Journey
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Building <span className="text-gradient">Impact</span>
            <br />
            Across Industries
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={exp.company} className="relative group">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-border group-hover:bg-accent/30 transition-colors" />
              )}

              {/* Experience card */}
              <div className="flex gap-8 pb-12">
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-card border-2 border-border 
                    flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 
                    transition-all duration-300">
                    <Building2 className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-card rounded-2xl p-6 md:p-8 border border-border 
                  group-hover:border-accent/30 group-hover:shadow-elevated transition-all duration-500">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                        {exp.company}
                      </h3>
                      <p className="text-muted-foreground font-medium">{exp.role}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
