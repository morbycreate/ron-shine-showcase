import { useEffect } from "react";
import { ArrowLeft, Zap, Clock, Target, TrendingUp, Bot, Workflow, Lightbulb, Rocket, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudyAIPrototyping = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const metrics = [
    { label: "Speed", value: "Hours", icon: Clock },
    { label: "From Concept", value: "To Prototype", icon: Zap },
    { label: "Confidence", value: "Before Code", icon: Target },
  ];

  const toolkit = [
    {
      icon: Bot,
      title: "ChatGPT",
      description: "Framing problems, shaping narratives, pressure-testing concepts",
    },
    {
      icon: Rocket,
      title: "Lovable",
      description: '"Vibe coding" interactive prototypes from natural language',
    },
    {
      icon: Workflow,
      title: "n8n",
      description: "Connecting tools, automating logic, and extending prototypes into systems",
    },
  ];

  const prototypes = [
    {
      title: "NewInvestor",
      subtitle: "Confidence-Driven Finance UX",
      url: "https://newinvestor.lovable.app/",
      description: "A concept experience exploring how AI-guided insights can help users make smarter investment decisions with clarity and confidence.",
      points: [
        "Rapid concept-to-prototype flow",
        "Interactive dashboards and guidance",
        "Used to validate experience direction early",
      ],
    },
    {
      title: "McAfee Cyber Home",
      subtitle: "Security Made Human",
      url: "https://mcafeecyberhome.lovable.app/",
      description: "A speculative home cybersecurity experience focused on clarity, trust, and usability.",
      points: [
        "Simplifies complex security concepts",
        "Explores information hierarchy and interaction models",
        "Built to test UX direction before engineering investment",
      ],
    },
    {
      title: "Archelon Advisor Portal",
      subtitle: "Working Dashboard Concept",
      url: "https://archelon.lovable.app/",
      description: "A working Advisor Portal concept built entirely in Lovable by 'vibe coding' the experience from prompt to clickable app. Rather than a static mockup, it showcases how an advisor dashboard could behave—with navigable sections, key client insights, and functional screens.",
      points: [
        "From idea to interactive prototype in hours",
        "Navigable sections and functional screens",
        "Aligns expectations early without traditional UI code",
      ],
    },
  ];

  const benefits = [
    { icon: Clock, title: "Speed", description: "Concepts become clickable in hours" },
    { icon: Target, title: "Clarity", description: "Stakeholders react to real experiences, not slides" },
    { icon: TrendingUp, title: "Confidence", description: "Decisions are grounded in interaction, not assumption" },
    { icon: Rocket, title: "Momentum", description: "Teams move forward instead of stalling" },
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
        {/* Background gradient with animated elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/10">
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative container mx-auto px-6 pt-32 pb-24">
          <div className="max-w-5xl">
            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 mb-8 opacity-0 animate-fade-up">
              <span className="px-4 py-1.5 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20">
                AI-Powered Design
              </span>
              <span className="flex items-center gap-2 text-sm text-primary-foreground/50">
                <Zap className="w-4 h-4" />
                Ongoing Practice
              </span>
            </div>

            {/* Main headline */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[7rem] font-bold leading-[0.95] mb-8 opacity-0 animate-fade-up stagger-1">
              <span className="text-primary-foreground">AI-Powered</span>
              <br />
              <span className="text-outline">Prototyping</span>
            </h1>

            <p className="text-primary-foreground/60 text-xl md:text-2xl max-w-2xl leading-relaxed opacity-0 animate-fade-up stagger-2">
              Turning ambiguity into working experiences—
              <span className="text-accent font-medium"> fast.</span>
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
            {metrics.map((metric, index) => (
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

      {/* Challenge Section */}
      <section className="py-24 md:py-32 bg-primary">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Challenge */}
            <div>
              <p className="text-accent font-medium tracking-wide mb-4 text-sm">
                The Challenge
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-8">
                Clarity
                <br />
                <span className="text-outline">lags behind.</span>
              </h2>
              <div className="space-y-5 text-primary-foreground/60 text-lg leading-relaxed">
                <p>
                  Teams move fast—but clarity often lags. Ideas get stuck in decks. Alignment takes too long. Momentum fades before anything real exists.
                </p>
                <p className="text-primary-foreground font-medium">
                  The problem: How do you explore ideas, validate direction, and build confidence before committing engineering time?
                </p>
              </div>
            </div>

            {/* Approach */}
            <div>
              <p className="text-accent font-medium tracking-wide mb-4 text-sm">
                The Approach
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-8">
                AI as
                <br />
                <span className="text-outline">accelerator.</span>
              </h2>
              <div className="space-y-5 text-primary-foreground/60 text-lg leading-relaxed">
                <p>
                  I use AI as a creative accelerator—not a shortcut.
                </p>
                <p>
                  By combining strategic thinking, AI-assisted prototyping, and automation, I turn early ideas into <strong className="text-primary-foreground">tangible, testable experiences in days instead of weeks.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toolkit Section */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16">
            <p className="text-accent font-medium tracking-wide mb-4 text-sm">
              My Toolkit
            </p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              The
              <br />
              <span className="text-outline">stack.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {toolkit.map((tool, index) => (
              <div
                key={tool.title}
                className="group bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-8 hover:border-accent/30 hover:bg-primary-foreground/[0.05] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <tool.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary-foreground mb-3">{tool.title}</h3>
                <p className="text-primary-foreground/60 leading-relaxed">{tool.description}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-primary-foreground/50 text-lg mt-12 max-w-2xl mx-auto">
            This lets teams move from <span className="text-accent">discussion</span> → <span className="text-accent">direction</span> → <span className="text-accent">demonstration</span>—fast.
          </p>
        </div>
      </section>

      {/* Selected Prototypes */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16">
            <p className="text-accent font-medium tracking-wide mb-4 text-sm">
              Selected Work
            </p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              Prototype
              <br />
              <span className="text-outline">gallery.</span>
            </h2>
          </div>

          <div className="space-y-8">
            {prototypes.map((prototype, index) => (
              <div
                key={prototype.title}
                className="group bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-8 md:p-10 hover:border-accent/30 hover:bg-primary-foreground/[0.05] transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">{prototype.title}</h3>
                      <span className="text-accent text-sm font-medium">— {prototype.subtitle}</span>
                    </div>
                    <p className="text-primary-foreground/60 leading-relaxed mb-6 max-w-2xl">
                      {prototype.description}
                    </p>
                    <ul className="space-y-2">
                      {prototype.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-primary-foreground/60">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={prototype.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 text-accent font-medium rounded-full border border-accent/20 hover:bg-accent hover:text-primary transition-all duration-300 shrink-0"
                  >
                    View Prototype
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-accent font-medium tracking-wide mb-4 text-sm">
              Why This Works
            </p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              The
              <br />
              <span className="text-outline-accent">impact.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="group bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-6 text-center hover:border-accent/30 hover:bg-primary-foreground/[0.05] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 mx-auto group-hover:bg-accent/20 transition-colors duration-300">
                  <benefit.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">{benefit.title}</h3>
                <p className="text-primary-foreground/60 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <p className="text-primary-foreground/80 text-xl md:text-2xl font-display italic">
              "AI doesn't replace creative thinking—it amplifies it."
            </p>
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-accent font-medium tracking-wide mb-4 text-sm">
              The Outcome
            </p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-8">
              Ambiguity
              <br />
              <span className="text-outline">to action.</span>
            </h2>
            <p className="text-primary-foreground/60 text-xl leading-relaxed max-w-2xl mx-auto">
              A repeatable way to turn ambiguity into action—bridging strategy, design, and execution through real, testable experiences.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-3">
                Want to see more?
              </h3>
              <p className="text-primary-foreground/60">
                Explore other projects from my portfolio.
              </p>
            </div>
            <Link 
              to="/case-studies"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-primary font-semibold rounded-full hover:bg-accent/90 transition-colors duration-300"
            >
              View All Case Studies
              <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-primary-foreground/10 bg-primary">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-primary-foreground/40 text-sm">
              © 2024 Ron Brissette. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/in/ronbrissette/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 hover:text-accent transition-colors duration-300 text-sm">
                LinkedIn
              </a>
              <a href="mailto:ron@morbycreate.com" className="text-primary-foreground/40 hover:text-accent transition-colors duration-300 text-sm">
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CaseStudyAIPrototyping;
