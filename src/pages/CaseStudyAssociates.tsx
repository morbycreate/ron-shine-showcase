import { useEffect } from "react";
import { ArrowLeft, Target, Users, CreditCard, Handshake, Globe, Briefcase, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import citiLogo from "@/assets/logos/citi.png";
import associatesHero from "@/assets/associates-hero.jpeg";

const CaseStudyAssociates = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const metrics = [
    { label: "Cardmembers Served", value: "30M", icon: Users },
    { label: "Credit Card Brands", value: "25+", icon: CreditCard },
    { label: "Strategic Partners", value: "25+", icon: Handshake },
  ];

  const whatIBuilt = [
    {
      icon: Target,
      title: "Corporate & Product Redesign",
      points: [
        "Led major redesign of The Associates corporate website",
        "Designed and launched individual marketing sites for 25+ credit card products",
        "Defined information architecture and experience strategy for the ecosystem",
      ],
    },
    {
      icon: Users,
      title: "Enterprise Online Banking",
      points: [
        "Introduced online banking and account management at scale for 30M customers",
        "Created flexible experience model supporting multiple brands and partners",
        "Managed brand integrity across The Associates and partner brands",
      ],
    },
    {
      icon: Handshake,
      title: "Partner & Agency Coordination",
      points: [
        "Collaborated with 25+ strategic partners (Shell, Texaco, Verizon, and more)",
        "Managed cross-promotional digital experiences with partner brands",
        "Established delivery coordination across internal teams and external agencies",
      ],
    },
  ];

  const deliverables = [
    {
      icon: TrendingUp,
      title: "Scalable Digital Acquisition",
      description: "Enabled acquisition and servicing across 30 million cardmembers.",
    },
    {
      icon: Target,
      title: "Competitive Positioning",
      description: "Improved customer satisfaction in a crowded financial market.",
    },
    {
      icon: Globe,
      title: "Multi-Brand Experience",
      description: "Created flexible framework supporting multiple brands and partners.",
    },
  ];

  const partners = ["Shell", "Texaco", "Verizon"];

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
            src={associatesHero} 
            alt="The Associates" 
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
              <span className="text-primary-foreground/40 text-sm">The Associates (Acquired by Citibank)</span>
            </div>

            {/* Main headline */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[7rem] font-bold leading-[0.95] mb-8 opacity-0 animate-fade-up stagger-1">
              <span className="text-primary-foreground">Unified digital</span>
              <br />
              <span className="text-outline">experience for</span>
              <br />
              <span className="text-accent">30M customers</span>
            </h1>

            <p className="text-primary-foreground/60 text-xl md:text-2xl max-w-2xl leading-relaxed opacity-0 animate-fade-up stagger-2">
              Across
              <span className="text-accent font-medium"> 25+ credit card brands</span>
              <span className="text-primary-foreground/60"> and strategic partners.</span>
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
                Unify & scale
                <br />
                <span className="text-outline">digital experience.</span>
              </h2>
              <div className="space-y-5 text-primary-foreground/60 text-lg leading-relaxed">
                <p>
                  <strong className="text-primary-foreground">Create a unified, scalable digital experience</strong> to support customer acquisition, account management, and brand trust across one of the largest consumer credit portfolios in the U.S.
                </p>
              </div>
            </div>

            {/* The Challenge */}
            <div>
              <p className="text-accent font-medium tracking-wide mb-4 text-sm">
                The Challenge
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-8">
                Fragmented
                <br />
                <span className="text-outline">brand portfolio.</span>
              </h2>
              <div className="space-y-5 text-primary-foreground/60 text-lg leading-relaxed">
                <p>
                  The Associates operated <strong className="text-primary-foreground">25+ national credit card brands and co-brands</strong>, serving 30 million customers—each with distinct marketing needs, partner requirements, and regulatory constraints.
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
              End-to-end
              <br />
              <span className="text-outline">experience ownership.</span>
            </h2>
            <p className="text-primary-foreground/60 text-xl leading-relaxed">
              As User Experience Lead and Creative Director, I owned the end-to-end digital experience for The Associates. I led experience strategy, design direction, and execution—aligning internal marketing, technology, and compliance teams while managing multiple external agencies and strategic partners.
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
              Scalable credit
              <br />
              <span className="text-outline">card ecosystem.</span>
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

      {/* Strategic Partners */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-12">
            <p className="text-accent font-medium tracking-wide mb-4 text-sm">
              Strategic Partners
            </p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-8">
              Cross-promotional
              <br />
              <span className="text-outline">partnerships.</span>
            </h2>
            <p className="text-primary-foreground/60 text-lg">
              Collaborated with 25+ strategic partners on cross-promotional digital experiences.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {partners.map((partner) => (
              <span key={partner} className="px-6 py-3 bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-full text-primary-foreground font-medium hover:border-accent/30 transition-colors duration-300">
                {partner}
              </span>
            ))}
            <span className="px-6 py-3 bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-full text-primary-foreground/50">
              + 22 more partners
            </span>
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

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-10 text-center hover:border-accent/30 transition-colors duration-300">
              <p className="text-4xl md:text-5xl font-display font-bold text-gradient mb-3">30M</p>
              <p className="text-primary-foreground/60">Cardmembers served</p>
            </div>
            <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-10 text-center hover:border-accent/30 transition-colors duration-300">
              <p className="text-4xl md:text-5xl font-display font-bold text-gradient mb-3">25+</p>
              <p className="text-primary-foreground/60">Credit card brands</p>
            </div>
            <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-10 text-center hover:border-accent/30 transition-colors duration-300">
              <p className="text-4xl md:text-5xl font-display font-bold text-gradient mb-3">25+</p>
              <p className="text-primary-foreground/60">Strategic partners</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-10 text-center">
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">Regulated Trust</h3>
            <p className="text-primary-foreground/60 leading-relaxed text-lg">
              Strengthened trust, usability, and consistency across a highly regulated environment—creating a foundation that supported The Associates' acquisition by Citibank.
            </p>
          </div>
        </div>
      </section>

      {/* Client Logo */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="flex justify-center">
            <img 
              src={citiLogo} 
              alt="Citibank (acquired The Associates)" 
              className="h-32 md:h-40 w-auto object-contain"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default CaseStudyAssociates;
