import { ArrowLeft, Calendar, Target, TrendingUp, Award, Plane, Users, Globe, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import aaHero from "@/assets/aa-hero.png";

const CaseStudyAA = () => {
  const metrics = [
    { label: "Fleet Redesigned", value: "900+", icon: Plane },
    { label: "Global Rollout", value: "50+ Countries", icon: Globe },
    { label: "UX Team Growth", value: "3→30", icon: Users },
  ];

  const approach = [
    {
      icon: Target,
      title: "Define the Vision",
      points: [
        "Partnered with Futurebrand to establish a new brand identity",
        "Aligned stakeholders across marketing, operations, and executive leadership",
        "Set clear goals for modernization while honoring heritage",
      ],
    },
    {
      icon: Palette,
      title: "Redesign the Identity",
      points: [
        "Developed new aircraft livery featuring the iconic tail design",
        "Created comprehensive brand guidelines for global consistency",
        "Designed new typography, color palette, and visual language",
      ],
    },
    {
      icon: Users,
      title: "Build the UX Team",
      points: [
        "Pioneered and scaled the first UX team from 3 to 30 members",
        "Established UX processes and design standards across the organization",
        "Created a culture of user-centered design thinking",
      ],
    },
    {
      icon: Globe,
      title: "Execute Globally",
      points: [
        "Coordinated rollout across 900+ aircraft worldwide",
        "Managed brand implementation across all customer touchpoints",
        "Ensured consistency from airports to digital experiences",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-primary">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-md border-b border-primary-foreground/10">
        <div className="container mx-auto px-6 py-4">
          <Link 
            to="/#work"
            className="group inline-flex items-center gap-3 text-primary-foreground/60 hover:text-accent transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform duration-300" />
            <span className="hover-underline text-sm font-medium">Back to Work</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={aaHero} 
            alt="American Airlines 777" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/50" />
        </div>

        {/* Decorative grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="relative container mx-auto px-6 pt-32 pb-24">
          <div className="max-w-5xl">
            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 mb-8 opacity-0 animate-fade-up">
              <span className="px-4 py-1.5 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20">
                Creative Direction
              </span>
              <span className="flex items-center gap-2 text-sm text-primary-foreground/50">
                <Calendar className="w-4 h-4" />
                2007 – 2013
              </span>
            </div>

            {/* Main headline - Matt Boston style */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[7rem] font-bold leading-[0.95] mb-8 opacity-0 animate-fade-up stagger-1">
              <span className="text-primary-foreground">American</span>
              <br />
              <span className="text-outline">Airlines</span>
              <br />
              <span className="text-accent">Rebrand</span>
            </h1>

            <p className="text-primary-foreground/60 text-xl md:text-2xl max-w-2xl leading-relaxed opacity-0 animate-fade-up stagger-2">
              Leading the massive global rebrand including aircraft livery in partnership with
              <span className="text-accent font-medium"> Futurebrand.</span>
            </p>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-6 opacity-0 animate-fade-up stagger-4">
          <div className="flex items-center gap-4 text-primary-foreground/40">
            <span className="text-xs uppercase tracking-[0.2em]">Scroll to explore</span>
            <div className="w-12 h-[1px] bg-current" />
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="py-12 border-y border-primary-foreground/10 bg-primary">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {metrics.map((metric) => (
              <div key={metric.label} className="flex items-center gap-5 group">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <metric.icon className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">{metric.value}</p>
                  <p className="text-sm text-primary-foreground/50">{metric.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-24 md:py-32 bg-primary">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Challenge */}
            <div>
              <p className="text-accent font-medium tracking-wide mb-4 text-sm">
                The Challenge
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-8">
                Reinventing an
                <br />
                <span className="text-outline">American icon.</span>
              </h2>
              <div className="space-y-5 text-primary-foreground/60 text-lg leading-relaxed">
                <p>
                  After decades with the same identity, <strong className="text-primary-foreground">American Airlines</strong> needed a complete brand transformation that would signal a new era while honoring its storied heritage.
                </p>
                <p>
                  The challenge was immense: redesign one of the world's most recognized airline brands across 900+ aircraft, hundreds of airport locations, and every customer touchpoint—all while maintaining operational continuity.
                </p>
              </div>
            </div>

            {/* Solution */}
            <div>
              <p className="text-accent font-medium tracking-wide mb-4 text-sm">
                The Solution
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-8">
                Bold vision,
                <br />
                <span className="text-outline">global execution.</span>
              </h2>
              <div className="space-y-5 text-primary-foreground/60 text-lg leading-relaxed">
                <p>
                  In partnership with <strong className="text-primary-foreground">Futurebrand</strong>, we led the complete brand transformation—from the iconic new tail design to comprehensive brand guidelines.
                </p>
                <p>
                  Simultaneously, I pioneered and scaled the first UX team from just 3 members to 30, establishing user-centered design practices that transformed how the airline approached digital experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Approach */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16">
            <p className="text-accent font-medium tracking-wide mb-4 text-sm">
              Strategic Approach
            </p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              How we
              <br />
              <span className="text-outline">delivered.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {approach.map((item) => (
              <div
                key={item.title}
                className="group bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-8 hover:border-accent/30 hover:bg-primary-foreground/[0.05] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary-foreground mb-5">{item.title}</h3>
                <ul className="space-y-3">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-primary-foreground/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-accent font-medium tracking-wide mb-4 text-sm">
              Results & Impact
            </p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              A new era
              <br />
              <span className="text-outline-accent">takes flight.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-10 text-center hover:border-accent/30 transition-colors duration-300">
              <p className="text-5xl md:text-6xl font-display font-bold text-gradient mb-3">900+</p>
              <p className="text-primary-foreground/60">Aircraft redesigned with the new livery worldwide</p>
            </div>
            <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-10 text-center hover:border-accent/30 transition-colors duration-300">
              <p className="text-5xl md:text-6xl font-display font-bold text-gradient mb-3">10x</p>
              <p className="text-primary-foreground/60">UX team growth from 3 to 30 members</p>
            </div>
            <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-10 text-center hover:border-accent/30 transition-colors duration-300">
              <p className="text-5xl md:text-6xl font-display font-bold text-gradient mb-3">50+</p>
              <p className="text-primary-foreground/60">Countries with consistent brand presence</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-10 text-center">
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">Legacy & Impact</h3>
            <p className="text-primary-foreground/60 leading-relaxed text-lg">
              The rebrand marked a pivotal moment in American Airlines' history—a bold statement of innovation and renewed commitment to customers. The UX team I built became the foundation for the airline's digital transformation, influencing experiences across web, mobile, and in-airport touchpoints.
            </p>
          </div>
        </div>
      </section>

      {/* Back to Work CTA */}
      <section className="py-16 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 text-center">
          <Link 
            to="/#work"
            className="group inline-flex items-center gap-3 text-primary-foreground font-medium text-lg hover:text-accent transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform duration-300" />
            <span className="hover-underline">View More Case Studies</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyAA;
