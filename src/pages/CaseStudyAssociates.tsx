import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Users, CreditCard, Building, Handshake } from "lucide-react";

const CaseStudyAssociates = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const metrics = [
    { label: "Cardmembers Served", value: "30M", icon: Users },
    { label: "Credit Card Brands", value: "25+", icon: CreditCard },
    { label: "Strategic Partners", value: "25+", icon: Handshake },
    { label: "Unified Platform", value: "National Scale", icon: Building },
  ];

  const whatIBuilt = [
    {
      title: "Corporate & Product Redesign",
      points: [
        "Led major redesign of The Associates corporate website",
        "Designed and launched individual marketing sites for 25+ credit card products",
        "Defined information architecture and experience strategy for the credit card ecosystem",
      ],
    },
    {
      title: "Enterprise Online Banking",
      points: [
        "Introduced online banking and account management at scale for 30M customers",
        "Created flexible experience model supporting multiple brands and partners",
        "Managed brand integrity across The Associates and partner brands",
      ],
    },
    {
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
      title: "Scalable Digital Acquisition",
      description: "Enabled acquisition and servicing across 30 million cardmembers",
    },
    {
      title: "Improved Competitive Positioning",
      description: "Increased customer satisfaction in a crowded financial market",
    },
    {
      title: "Multi-Brand Experience Model",
      description: "Created flexible framework supporting multiple brands and partners",
    },
    {
      title: "Regulated Trust & Consistency",
      description: "Strengthened trust, usability, and consistency in regulated environment",
    },
  ];

  const partners = ["Shell", "Texaco", "Verizon"];

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
      <section className="min-h-[80vh] relative flex items-center justify-center bg-gradient-to-br from-[#1a365d] via-[#2c5282] to-[#1a365d]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
          <div className="max-w-4xl">
            <p className="text-white/60 text-sm uppercase tracking-widest mb-4">
              User Experience Lead / Creative Director
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              The Associates
              <br />
              <span className="text-white/80">Consumer Credit Portfolio</span>
            </h1>
            <p className="text-white/60 text-sm mb-4">
              Acquired by Citibank
            </p>
            <p className="text-white/80 text-xl md:text-2xl max-w-2xl">
              Unified digital experience for 30M customers across 25+ credit card brands
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
              Create a unified, scalable digital experience to support customer acquisition, account management, and brand trust across one of the largest consumer credit portfolios in the U.S.
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
              The Associates operated 25+ national credit card brands and co-brands, serving 30 million customers—each with distinct marketing needs, partner requirements, and regulatory constraints. Digital experiences were fragmented, and the business needed a centralized, customer-first platform that could scale without sacrificing brand integrity or usability.
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
              As User Experience Lead and Creative Director, I owned the end-to-end digital experience for The Associates. I led experience strategy, design direction, and execution—aligning internal marketing, technology, and compliance teams while managing multiple external agencies and strategic partners.
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

      {/* Strategic Partners */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Strategic Partners
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
            Collaborated with 25+ strategic partners on cross-promotional digital experiences, including:
          </p>
          <div className="flex flex-wrap gap-4">
            {partners.map((partner) => (
              <span key={partner} className="px-6 py-3 bg-card border border-border rounded-full text-foreground font-medium">
                {partner}
              </span>
            ))}
            <span className="px-6 py-3 bg-card border border-border rounded-full text-muted-foreground">
              + 22 more partners
            </span>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            Impact
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {deliverables.map((item) => (
              <div key={item.title} className="bg-background p-8 rounded-lg border border-border">
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
      <section className="py-20 bg-background border-t border-border">
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

export default CaseStudyAssociates;
