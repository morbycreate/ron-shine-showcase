import { useEffect } from "react";
import { ArrowLeft, Target, Users, CreditCard, Shield, Globe, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import citiLogo from "@/assets/logos/citi.png";
import citiHero from "@/assets/citi-hero.jpeg";

const CaseStudyCitibank = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const metrics = [
    { label: "Consumer Accounts", value: "25M+", icon: Users },
    { label: "Card Portfolios", value: "8", icon: CreditCard },
    { label: "Role", value: "UX Lead", icon: Briefcase },
  ];

  const whatIBuilt = [
    {
      icon: Target,
      title: "Major Website Redesign",
      points: [
        "Led the complete redesign of the U.S. Credit Cards website",
        "Introduced early online banking and account management capabilities across 8 card portfolios",
        "Established experience consistency across promotions, products, and account flows",
      ],
    },
    {
      icon: Users,
      title: "Agency & Stakeholder Leadership",
      points: [
        "Directed external agencies on UX strategy, interaction design, and visual systems",
        "Managed internal clients to align priorities, timelines, and regulatory constraints",
        "Acted as bridge between compliance, technology teams, and business stakeholders",
      ],
    },
    {
      icon: Shield,
      title: "Secure Self-Service",
      points: [
        "Enabled secure, scalable digital self-service for 25M+ consumer accounts",
        "Laid early groundwork for enterprise online banking UX standards",
        "Improved usability and trust in a highly regulated financial environment",
      ],
    },
  ];

  const deliverables = [
    {
      icon: Users,
      title: "Scalable Self-Service",
      description: "Enabled secure, scalable digital self-service for 25M+ consumer accounts.",
    },
    {
      icon: Globe,
      title: "Enterprise UX Standards",
      description: "Laid early groundwork for enterprise online banking experience patterns.",
    },
    {
      icon: Shield,
      title: "Regulatory Trust",
      description: "Improved usability and trust in a highly regulated financial environment.",
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
            src={citiHero} 
            alt="Citibank" 
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
              <span className="text-primary-foreground/40 text-sm">Citibank</span>
            </div>

            {/* Main headline */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[7rem] font-bold leading-[0.95] mb-8 opacity-0 animate-fade-up stagger-1">
              <span className="text-primary-foreground">Enabled secure,</span>
              <br />
              <span className="text-outline">scalable digital</span>
              <br />
              <span className="text-accent">self-service</span>
            </h1>

            <p className="text-primary-foreground/60 text-xl md:text-2xl max-w-2xl leading-relaxed opacity-0 animate-fade-up stagger-2">
              For
              <span className="text-accent font-medium"> 25M+ consumer accounts</span>
              <span className="text-primary-foreground/60"> at national scale.</span>
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
                Modernize digital
                <br />
                <span className="text-outline">at national scale.</span>
              </h2>
              <div className="space-y-5 text-primary-foreground/60 text-lg leading-relaxed">
                <p>
                  <strong className="text-primary-foreground">Modernize Citibank's U.S. Credit Cards digital presence</strong> and establish a scalable user experience foundation for online banking at national scale.
                </p>
              </div>
            </div>

            {/* The Challenge */}
            <div>
              <p className="text-accent font-medium tracking-wide mb-4 text-sm">
                The Challenge
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-8">
                Trust-sensitive
                <br />
                <span className="text-outline">complexity.</span>
              </h2>
              <div className="space-y-5 text-primary-foreground/60 text-lg leading-relaxed">
                <p>
                  In the late 1990s, online banking was still emerging—<strong className="text-primary-foreground">highly regulated, technically complex, and trust-sensitive.</strong> Citibank needed to unify multiple credit card portfolios while introducing secure self-service for 25+ million customers.
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
              Bridging business,
              <br />
              <span className="text-outline">risk & customer needs.</span>
            </h2>
            <p className="text-primary-foreground/60 text-xl leading-relaxed">
              As User Experience Lead and Creative Director, I owned the end-to-end experience vision for Citibank U.S. Credit Cards online. I acted as the bridge between internal stakeholders, compliance, technology teams, and external agencies—ensuring design decisions aligned with business, risk, and customer needs.
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
              <span className="text-outline">digital banking.</span>
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
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">Design-Compliance Leadership</h3>
            <p className="text-primary-foreground/60 leading-relaxed text-lg">
              Demonstrated leadership at the intersection of design, compliance, and technology—proving that usability and security could coexist in early digital banking.
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
              alt="Citibank" 
              className="h-32 md:h-40 w-auto object-contain"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default CaseStudyCitibank;
