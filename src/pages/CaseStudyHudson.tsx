import { useEffect } from "react";
import { ArrowLeft, Calendar, Target, TrendingUp, Users, Layers, Palette, Zap, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import hudsonHero from "@/assets/hudson-warehouse.jpeg";
import hudsonDevices from "@/assets/hudson-devices.png";

const CaseStudyHudson = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const metrics = [
    { label: "Annual Revenue", value: "$3B+", icon: TrendingUp },
    { label: "Platform Focus", value: "EdgePower", icon: Zap },
    { label: "Deliverable", value: "Ready-to-Build", icon: Building2 },
  ];

  const approach = [
    {
      icon: Users,
      title: "Customer & Journey Validation",
      points: [
        "Connected the end-to-end customer journey with future EdgePower capabilities",
        "Ensured the experience aligned with real user needs and business opportunities",
        "Mapped pain points and opportunities across the customer lifecycle",
      ],
    },
    {
      icon: Target,
      title: "Vision & Strategy Workshops",
      points: [
        "Defined product vision, audience segments, and business goals",
        "Identified must-have features through stakeholder alignment",
        "Focused on validating direction, not jumping to solutions",
      ],
    },
    {
      icon: Layers,
      title: "Experience Architecture",
      points: [
        "Produced broad low-fidelity flows to explore content and structure",
        "Defined application logic and user interaction patterns",
        "Created information architecture for complex energy data",
      ],
    },
    {
      icon: Palette,
      title: "Visual Design & Prototype",
      points: [
        "Delivered high-fidelity design for key screens demonstrating the refreshed experience",
        "Built a coded pattern library for development consistency",
        "Created an interactive prototype of core screens to accelerate development",
      ],
    },
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
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={hudsonHero} 
            alt="Hudson Energy EdgePower Platform" 
            className="w-full h-full object-cover object-center scale-[1.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/50" />
        </div>

        <div className="relative container mx-auto px-6 pt-32 pb-24">
          <div className="max-w-5xl">
            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 mb-8 opacity-0 animate-fade-up">
              <span className="px-4 py-1.5 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20">
                Product Strategy
              </span>
              <span className="flex items-center gap-2 text-sm text-primary-foreground/50">
                <Calendar className="w-4 h-4" />
                2023
              </span>
            </div>

            {/* Main headline */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[7rem] font-bold leading-[0.95] mb-8 opacity-0 animate-fade-up stagger-1">
              <span className="text-primary-foreground">Hudson</span>
              <br />
              <span className="text-outline">Energy</span>
            </h1>

            <p className="text-primary-foreground/60 text-xl md:text-2xl max-w-2xl leading-relaxed opacity-0 animate-fade-up stagger-2">
              Reimagining the EdgePower Experience: 
              <span className="text-accent font-medium"> Transforming building energy management software.</span>
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
                Redefining
                <br />
                <span className="text-outline">EdgePower.</span>
              </h2>
              <div className="space-y-5 text-primary-foreground/60 text-lg leading-relaxed">
                <p>
                  <strong className="text-primary-foreground">Hudson Energy</strong> was redefining the go-to-market strategy for EdgePower and needed a partner who could bring the customer back to the center.
                </p>
                <p>
                  EdgePower provides building energy management software, including site control software, web-based user interface, and an enterprise web application. They required not just concepts, but a customer strategy, a validated product vision, and development-ready design assets.
                </p>
              </div>
            </div>

            {/* Solution */}
            <div>
              <p className="text-accent font-medium tracking-wide mb-4 text-sm">
                The Solution
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-8">
                Full platform
                <br />
                <span className="text-outline">transformation.</span>
              </h2>
              <div className="space-y-5 text-primary-foreground/60 text-lg leading-relaxed">
                <p>
                  We partnered with Hudson Energy to lay the foundation for a full transformation of EdgePower—clarifying the value proposition, shaping a future-state experience, and setting the design direction for a rebuilt application.
                </p>
                <p>
                  The engagement delivered <strong className="text-primary-foreground">a validated product vision, unified customer strategy, and a ready-to-build experience foundation</strong>—giving Hudson Energy a clear, confident path forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Device Mockup */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <img 
              src={hudsonDevices} 
              alt="EdgePower across devices" 
              className="w-full h-auto scale-[1.2]"
            />
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


      {/* Key Deliverables */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-accent font-medium tracking-wide mb-4 text-sm text-center">
              Key Deliverables
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-16 text-center">
              Ready to
              <br />
              <span className="text-outline">build.</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-8">
                <h3 className="font-display text-xl font-bold text-primary-foreground mb-4">Product Vision</h3>
                <p className="text-primary-foreground/60 leading-relaxed">
                  A validated product vision document defining the future state of EdgePower, aligned with customer needs and business objectives.
                </p>
              </div>
              <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-8">
                <h3 className="font-display text-xl font-bold text-primary-foreground mb-4">Customer Strategy</h3>
                <p className="text-primary-foreground/60 leading-relaxed">
                  A unified customer strategy connecting audience segments, journey touchpoints, and feature priorities for market entry.
                </p>
              </div>
              <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-8">
                <h3 className="font-display text-xl font-bold text-primary-foreground mb-4">Design System</h3>
                <p className="text-primary-foreground/60 leading-relaxed">
                  A coded pattern library ensuring visual and functional consistency across the rebuilt application.
                </p>
              </div>
              <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-8">
                <h3 className="font-display text-xl font-bold text-primary-foreground mb-4">Interactive Prototype</h3>
                <p className="text-primary-foreground/60 leading-relaxed">
                  A working prototype of core screens to accelerate development and stakeholder alignment.
                </p>
              </div>
            </div>
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
              Clear path
              <br />
              <span className="text-outline-accent">forward.</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-10 text-center">
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">Experience Foundation Delivered</h3>
            <p className="text-primary-foreground/60 leading-relaxed text-lg">
              A validated product vision, unified customer strategy, and a ready-to-build experience foundation—giving Hudson Energy <strong className="text-primary-foreground">a clear, confident path to redesigning EdgePower</strong> and bringing new value to market.
            </p>
          </div>
        </div>
      </section>

      {/* Back to Work CTA */}
      <section className="py-16 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 text-center">
          <Link 
            to="/case-studies"
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

export default CaseStudyHudson;
