import { useEffect } from "react";
import { ArrowLeft, Target, Users, Layers, Briefcase, TrendingUp, Globe, Shield, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import goldmanSachsLogo from "@/assets/logos/goldman-sachs.png";
import wellsFargoLogo from "@/assets/logos/wells-fargo.png";
import ameripriseLogo from "@/assets/logos/ameriprise.png";

const CaseStudyFinancialServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const metrics = [
    { label: "Financial Institutions", value: "3", icon: Briefcase },
    { label: "Role", value: "Director", icon: Users },
    { label: "Focus", value: "Enterprise", icon: Globe },
  ];

  const clientLogos = [
    { name: "Goldman Sachs", logo: goldmanSachsLogo },
    { name: "Wells Fargo", logo: wellsFargoLogo },
    { name: "Ameriprise", logo: ameripriseLogo },
  ];

  const deliverables = [
    {
      icon: Target,
      title: "Platform-Level Product Strategy",
      client: "Goldman Sachs — New Investment Product",
      points: [
        "Led experience strategy supporting development of a new investment product",
        "Defined customer value, decision journeys, and trust moments",
        "Designed experience systems balancing sophistication with usability",
        "Helped leadership validate product direction before build",
      ],
      result: "A clear, confidence-building product experience vision aligned to business goals and platform realities.",
    },
    {
      icon: Users,
      title: "End-to-End Customer Experience",
      client: "Ameriprise — Future Customer Experience",
      points: [
        "Mapped entire customer lifecycle: digital self-service, call center, advisor engagement",
        "Identified breakdowns in continuity, context, and trust",
        "Designed future-state journeys connecting systems, people, and moments",
      ],
      result: "A unified experience model aligning digital tools, service operations, and advisors around the customer.",
    },
    {
      icon: Brain,
      title: "AI as Responsible Experience Enabler",
      client: "Ameriprise — AI-Enhanced Concepts",
      points: [
        "Designed concepts showing how AI supports—not replaces—human expertise",
        "Improved context handoffs between channels",
        "Prepared agents and advisors with better insight",
      ],
      result: "A realistic, trust-first vision for AI adoption aligned with financial services risk and ethics.",
    },
    {
      icon: Globe,
      title: "Future-State Experience Vision",
      client: "Wells Fargo — Banking of the Future",
      points: [
        "Led future banking concepts across digital platforms, physical touchpoints, service interactions",
        "Reframed banking as a relationship-based platform, not transactions",
        "Helped leadership visualize experience evolution over time",
      ],
      result: "A shared long-term experience direction to guide platform and service modernization.",
    },
  ];

  const impacts = [
    { icon: Target, text: "Enabled executives to make informed, lower-risk product decisions" },
    { icon: Users, text: "Created alignment across product, technology, operations, and risk teams" },
    { icon: TrendingUp, text: "Reduced waste by validating experience strategy before large investments" },
    { icon: Brain, text: "Positioned AI as a value-driven capability, not a novelty" },
    { icon: Shield, text: "Delivered experience visions credible enough to guide real delivery" },
  ];

  return (
    <div className="min-h-screen bg-primary">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-md border-b border-primary-foreground/10">
        <div className="container mx-auto px-6 py-4">
          <Link 
            to="/case-studies"
            className="group inline-flex items-center gap-3 text-primary-foreground/60 hover:text-accent transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform duration-300" />
            <span className="hover-underline text-sm font-medium">Back to Case Studies</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
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
              <span className="text-primary-foreground/40 text-sm">Slalom Consulting</span>
            </div>

            {/* Main headline */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[7rem] font-bold leading-[0.95] mb-8 opacity-0 animate-fade-up stagger-1">
              <span className="text-primary-foreground">Director,</span>
              <br />
              <span className="text-outline">Experience Design</span>
              <br />
              <span className="text-accent">Financial Services</span>
            </h1>

            <p className="text-primary-foreground/60 text-xl md:text-2xl max-w-2xl leading-relaxed opacity-0 animate-fade-up stagger-2">
              Enterprise product & experience strategy for
              <span className="text-accent font-medium"> Goldman Sachs, Wells Fargo, and Ameriprise.</span>
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
                De-risk the
                <br />
                <span className="text-outline">future of banking.</span>
              </h2>
              <div className="space-y-5 text-primary-foreground/60 text-lg leading-relaxed">
                <p>
                  <strong className="text-primary-foreground">Help large, regulated financial institutions define and de-risk the future of banking and investing</strong>—before committing to large-scale product and technology investments.
                </p>
                <p>Each engagement required platform-level thinking, customer-centered strategy, executive confidence, and innovation within regulatory and trust constraints.</p>
              </div>
            </div>

            {/* The Challenge */}
            <div>
              <p className="text-accent font-medium tracking-wide mb-4 text-sm">
                The Challenge
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-8">
                Experience
                <br />
                <span className="text-outline">direction at scale.</span>
              </h2>
              <div className="space-y-5 text-primary-foreground/60 text-lg leading-relaxed">
                <p>
                  Fragmented customer experiences, <strong className="text-primary-foreground">legacy platforms limiting speed</strong>, rapidly evolving expectations, and emerging technologies outpacing organizational readiness.
                </p>
                <p>These organizations didn't need features or screens. They needed <strong className="text-primary-foreground">clear, end-to-end experience direction</strong> that could guide product, technology, and operations together.</p>
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
              Experience strategy
              <br />
              <span className="text-outline">& product partner.</span>
            </h2>
            <p className="text-primary-foreground/60 text-xl leading-relaxed mb-8">
              I served as experience strategy lead and product thinking partner to executives, product leaders, and delivery teams.
            </p>
            <ul className="space-y-4 text-primary-foreground/60 text-lg">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                Frame the right customer and business problems
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                Translate ambiguity into platform-level experience strategy
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                Align product, technology, operations, and risk stakeholders
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                Validate direction early to reduce downstream risk
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                Ensure concepts were credible, scalable, and executable
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What We Delivered */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16">
            <p className="text-accent font-medium tracking-wide mb-4 text-sm">
              What We Delivered
            </p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              By competency
              <br />
              <span className="text-outline">area.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {deliverables.map((item) => (
              <div
                key={item.title}
                className="group bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-8 hover:border-accent/30 hover:bg-primary-foreground/[0.05] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">{item.title}</h3>
                <p className="text-accent text-sm mb-5">{item.client}</p>
                <ul className="space-y-3 mb-6">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-primary-foreground/60 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-primary-foreground/10">
                  <p className="text-sm">
                    <span className="text-accent font-medium">Result: </span>
                    <span className="text-primary-foreground/60">{item.result}</span>
                  </p>
                </div>
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
              <span className="text-outline-accent">outcomes.</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 mb-12">
            {impacts.map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-5 bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-6 hover:border-accent/30 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <p className="text-primary-foreground text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16">
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              Clients
              <br />
              <span className="text-outline">Served</span>
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
            {clientLogos.map((client) => (
              <div key={client.name}>
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="h-24 md:h-32 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Case Study CTA */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-accent font-medium tracking-wide mb-4 text-sm">
            Continue Exploring
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-8">
            View More
            <br />
            <span className="text-outline">Case Studies</span>
          </h2>
          <Link 
            to="/case-studies"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-full font-medium hover:bg-accent/90 transition-colors duration-300"
          >
            See All Work
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyFinancialServices;
