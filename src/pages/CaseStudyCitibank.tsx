import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Users, CreditCard, Shield, Globe } from "lucide-react";

import citiLogo from "@/assets/logos/citi.png";

const CaseStudyCitibank = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const metrics = [
    { label: "Consumer Accounts", value: "25M+", icon: Users },
    { label: "Card Portfolios", value: "8", icon: CreditCard },
    { label: "Secure Self-Service", value: "National Scale", icon: Shield },
    { label: "Enterprise Standards", value: "Established", icon: Globe },
  ];

  const whatIBuilt = [
    {
      title: "Major Website Redesign",
      points: [
        "Led the complete redesign of the U.S. Credit Cards website",
        "Introduced early online banking and account management capabilities",
        "Established experience consistency across promotions, products, and account flows",
      ],
    },
    {
      title: "Cross-Portfolio Unification",
      points: [
        "Unified user experience across 8 distinct credit card portfolios",
        "Created scalable design patterns for diverse product offerings",
        "Balanced brand consistency with portfolio-specific requirements",
      ],
    },
    {
      title: "Agency & Stakeholder Leadership",
      points: [
        "Directed external agencies on UX strategy, interaction design, and visual systems",
        "Managed internal clients to align priorities, timelines, and regulatory constraints",
        "Acted as bridge between compliance, technology teams, and business stakeholders",
      ],
    },
  ];

  const deliverables = [
    {
      title: "Secure Digital Self-Service",
      description: "Enabled scalable account management for 25M+ consumer accounts",
    },
    {
      title: "Enterprise UX Standards",
      description: "Laid early groundwork for online banking experience patterns",
    },
    {
      title: "Regulatory Alignment",
      description: "Improved usability and trust in highly regulated financial environment",
    },
    {
      title: "Design-Compliance Leadership",
      description: "Demonstrated leadership at intersection of design, compliance, and technology",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Experience
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-[80vh] relative flex items-center justify-center bg-[#003B70]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
          <div className="max-w-4xl">
            <p className="text-white/60 text-sm uppercase tracking-widest mb-4">
              User Experience Lead / Creative Director
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Citibank
              <br />
              <span className="text-white/80">U.S. Credit Cards</span>
            </h1>
            <p className="text-white/80 text-xl md:text-2xl max-w-2xl">
              Modernizing digital banking for 25M+ customers at national scale
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <metric.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-2xl md:text-3xl font-bold text-foreground">{metric.value}</p>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Mandate */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Mandate
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Modernize Citibank's U.S. Credit Cards digital presence and establish a scalable user experience foundation for online banking at national scale.
            </p>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Challenge
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              In the late 1990s, online banking was still emerging—highly regulated, technically complex, and trust-sensitive. Citibank needed to unify multiple credit card portfolios while introducing secure, self-service account management for 25+ million customers—without compromising usability, security, or brand trust.
            </p>
          </div>
        </div>
      </section>

      {/* My Role */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              My Role as a Leader
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              As User Experience Lead and Creative Director, I owned the end-to-end experience vision for Citibank U.S. Credit Cards online. I acted as the bridge between internal stakeholders, compliance, technology teams, and external agencies—ensuring design decisions aligned with business, risk, and customer needs.
            </p>
          </div>
        </div>
      </section>

      {/* What I Built */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            What I Built / Changed
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whatIBuilt.map((item) => (
              <div key={item.title} className="bg-background p-8 rounded-lg border border-border">
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  {item.title}
                </h3>
                <ul className="space-y-3">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            Impact
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {deliverables.map((item) => (
              <div key={item.title} className="bg-card p-8 rounded-lg border border-border">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
            Want to see more?
          </h2>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            View More Case Studies
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyCitibank;
