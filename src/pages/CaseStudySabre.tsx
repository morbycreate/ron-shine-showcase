import { useEffect } from "react";
import { ArrowLeft, Target, Users, Layers, Briefcase, TrendingUp, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import sabreLogo from "@/assets/logos/sabre.png";
import sabreHero from "@/assets/sabre-hero.png";
import sabreHome1 from "@/assets/sabre-home-1.jpeg";
import sabreHome2 from "@/assets/sabre-home-2.jpg";
import sabreWorkspace from "@/assets/sabre-workspace.png";
import sabreInsights from "@/assets/sabre-insights.png";
import sabreBrandPortal from "@/assets/sabre-brand-portal.png";
import sabreTypography from "@/assets/sabre-typography.png";
import sabreImagery from "@/assets/sabre-imagery.png";
import sabreWriting from "@/assets/sabre-writing.png";

const CaseStudySabre = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const metrics = [
    { label: "Business Units", value: "3 Global", icon: Globe },
    { label: "Role", value: "Director", icon: Briefcase },
    { label: "Focus", value: "Enterprise", icon: Target },
  ];

  const whatIBuilt = [
    {
      icon: Target,
      title: "Enterprise Experience Strategy",
      points: [
        "Developed unified experience strategy across platforms and communications",
        "Aligned digital storytelling with enterprise technology positioning",
        "Created cohesive B2B messaging for global audiences",
      ],
    },
    {
      icon: Layers,
      title: "Digital Standards & Tools",
      points: [
        "Built digital standards and governance frameworks",
        "Created tools and playbooks for consistent execution",
        "Established scalable processes for global teams",
      ],
    },
    {
      icon: Users,
      title: "Global Team Alignment",
      points: [
        "Aligned executives, product teams, and agency partners",
        "Unified three business units around shared experience vision",
        "Built cross-functional collaboration models",
      ],
    },
  ];

  const deliverables = [
    {
      icon: Target,
      title: "Enterprise Positioning",
      description: "Clearer enterprise positioning that communicated Sabre's evolution to a modern technology platform.",
    },
    {
      icon: Layers,
      title: "Scalable Experiences",
      description: "Consistent, scalable digital experiences across all business units and global markets.",
    },
    {
      icon: TrendingUp,
      title: "Executive Alignment",
      description: "Stronger executive alignment around experience strategy enabling faster decision-making.",
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
            <span className="hover-underline text-sm font-medium">Back to Experience</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={sabreHero} 
            alt="Sabre network visualization" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
        </div>

        <div className="relative container mx-auto px-6 pt-32 pb-24">
          <div className="max-w-5xl">
            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 mb-8 opacity-0 animate-fade-up">
              <span className="px-4 py-1.5 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20">
                Leadership
              </span>
              <span className="text-primary-foreground/40 text-sm">Sabre Corporation</span>
            </div>

            {/* Main headline */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[7rem] font-bold leading-[0.95] mb-8 opacity-0 animate-fade-up stagger-1">
              <span className="text-primary-foreground">Leading Enterprise</span>
              <br />
              <span className="text-outline">Transformation Through</span>
              <br />
              <span className="text-accent">Vision and Alignment</span>
            </h1>

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

      {/* The Mandate & Challenge */}
      <section className="py-24 md:py-32 bg-primary">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* The Mandate */}
            <div>
              <p className="text-accent font-medium tracking-wide mb-4 text-sm">
                The Mandate
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-8">
                Evolve the
                <br />
                <span className="text-outline">enterprise brand.</span>
              </h2>
              <div className="space-y-5 text-primary-foreground/60 text-lg leading-relaxed">
                <p>
                  <strong className="text-primary-foreground">Help Sabre evolve from a legacy travel company</strong> into a modern enterprise technology platform with a unified digital presence.
                </p>
              </div>
            </div>

            {/* The Challenge */}
            <div>
              <p className="text-accent font-medium tracking-wide mb-4 text-sm">
                The Challenge
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-8">
                Unify fragmented
                <br />
                <span className="text-outline">experiences.</span>
              </h2>
              <div className="space-y-5 text-primary-foreground/60 text-lg leading-relaxed">
                <p>
                  Three global business units, <strong className="text-primary-foreground">fragmented experiences</strong>, and inconsistent digital storytelling—internally and externally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Role */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16">
            <p className="text-accent font-medium tracking-wide mb-4 text-sm">
              My Role as a Leader
            </p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-8">
              Aligning vision
              <br />
              <span className="text-outline">across the enterprise.</span>
            </h2>
            <p className="text-primary-foreground/60 text-xl leading-relaxed">
              I aligned executives, product teams, and agencies around a shared experience vision while modernizing how Sabre communicated and delivered digitally.
            </p>
          </div>
        </div>
      </section>

      {/* What I Built */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16">
            <p className="text-accent font-medium tracking-wide mb-4 text-sm">
              What I Built / Changed
            </p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              Foundation for
              <br />
              <span className="text-outline">modern enterprise.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {whatIBuilt.map((item) => (
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

      {/* Impact */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-accent font-medium tracking-wide mb-4 text-sm">
              Impact
            </p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              Measurable
              <br />
              <span className="text-outline-accent">results.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {deliverables.map((item) => (
              <div 
                key={item.title}
                className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-8 text-center hover:border-accent/30 transition-colors duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 mx-auto">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">{item.title}</h3>
                <p className="text-primary-foreground/60">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-10 text-center">
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">Enterprise Transformation</h3>
            <p className="text-primary-foreground/60 leading-relaxed text-lg">
              Transformed Sabre's digital presence from fragmented business unit experiences into a cohesive enterprise technology brand, enabling clearer market positioning and accelerated go-to-market execution.
            </p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16">
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              Work
              <br />
              <span className="text-outline">Samples</span>
            </h2>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
            {[
              { src: sabreHome1, alt: "Sabre Corporate Website" },
              { src: sabreBrandPortal, alt: "Sabre Brand Portal" },
              { src: sabreHome2, alt: "Sabre Website Redesign" },
              { src: sabreTypography, alt: "Sabre Typography Guidelines" },
              { src: sabreWorkspace, alt: "Sabre Red Workspace" },
              { src: sabreImagery, alt: "Sabre Imagery Guidelines" },
              { src: sabreInsights, alt: "Sabre Insights Blog" },
              { src: sabreWriting, alt: "Sabre Writing Guidelines" },
            ].map((image) => (
              <div
                key={image.alt}
                className="group overflow-hidden rounded-xl bg-primary-foreground/[0.03] border border-primary-foreground/10 hover:border-accent/30 transition-all duration-300 break-inside-avoid"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logo */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="flex justify-center">
            <img 
              src={sabreLogo} 
              alt="Sabre Corporation" 
              className="h-32 md:h-40 w-auto object-contain"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default CaseStudySabre;