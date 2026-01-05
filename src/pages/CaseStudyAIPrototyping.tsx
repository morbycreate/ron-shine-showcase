import { useEffect } from "react";
import { ArrowLeft, Zap, Clock, Target, TrendingUp, Bot, Workflow, Lightbulb, Rocket, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import aiPrototypingHero from "@/assets/ai-prototyping-hero.png";

const CaseStudyAIPrototyping = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const metrics = [
    { label: "UX Teams", value: "Transformed", icon: Zap },
    { label: "Exploration", value: "Accelerated", icon: Clock },
    { label: "Impact", value: "Amplified", icon: Target },
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
  ];

  const benefits = [
    { icon: Clock, title: "Speed", description: "Concepts become clickable in hours, not weeks" },
    { icon: Target, title: "Strategy", description: "More time for insight, creativity, and collaboration" },
    { icon: TrendingUp, title: "Engagement", description: "Personalized experiences that drive retention" },
    { icon: Rocket, title: "Execution", description: "Production-quality assets without traditional overhead" },
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
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img 
            src={aiPrototypingHero} 
            alt="AI Prototyping" 
            className="w-full h-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        </div>

        <div className="relative container mx-auto px-6 pt-32 pb-24">
          <div className="max-w-5xl">
            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 mb-8 opacity-0 animate-fade-up">
              <span className="px-4 py-1.5 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20">
                Point of View
              </span>
            </div>

            {/* Main headline */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[7rem] font-bold leading-[0.95] mb-8 opacity-0 animate-fade-up stagger-1">
              <span className="text-primary-foreground">AI as a</span>
              <br />
              <span className="text-outline">Force Multiplier</span>
            </h1>

            <p className="text-primary-foreground/60 text-xl md:text-2xl max-w-2xl leading-relaxed opacity-0 animate-fade-up stagger-2">
              The real value isn't that AI replaces designers—it removes the repetitive work so teams can spend more time on
              <span className="text-accent font-medium"> strategy, storytelling, and solving harder problems.</span>
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

      {/* AI Transformation Section */}
      <section className="py-24 md:py-32 bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16">
            <p className="text-accent font-medium tracking-wide mb-4 text-sm">
              The Reality
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-8">
              AI is already
              <br />
              <span className="text-outline">transforming teams.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Creative Tools */}
            <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-8 hover:border-accent/30 transition-colors duration-300">
              <h3 className="font-display text-2xl font-bold text-primary-foreground mb-6">Creative Acceleration</h3>
              <div className="space-y-5 text-primary-foreground/60 text-lg leading-relaxed">
                <p>
                  Tools like <strong className="text-primary-foreground">Figma and Adobe Firefly</strong> are speeding up exploration—turning sketches into wireframes or mockups in seconds and generating design variations instantly.
                </p>
                <p>
                  <strong className="text-primary-foreground">Airbnb</strong> uses AI to turn product requirements into working prototypes within hours, completely changing how fast teams can test ideas.
                </p>
              </div>
            </div>

            {/* UX Personalization */}
            <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-8 hover:border-accent/30 transition-colors duration-300">
              <h3 className="font-display text-2xl font-bold text-primary-foreground mb-6">UX Personalization</h3>
              <div className="space-y-5 text-primary-foreground/60 text-lg leading-relaxed">
                <p>
                  Companies like <strong className="text-primary-foreground">Spotify and Netflix</strong> use AI to personalize every surface—artwork, playlists, recommendations—based on real behavior.
                </p>
                <p>
                  This dramatically improves <strong className="text-primary-foreground">engagement and retention</strong>. And Adobe's AI helps teams produce production-quality imagery, storyboards, and campaign assets without traditional shoots.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Role Section */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-accent font-medium tracking-wide mb-4 text-sm">
              My Role as a Leader
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-8">
              Speeding execution,
              <br />
              <span className="text-outline">investing in creativity.</span>
            </h2>
            <div className="space-y-6 text-primary-foreground/60 text-xl leading-relaxed">
              <p>
                My role as a leader is to help teams use AI as a <strong className="text-accent">force multiplier</strong>: speeding up the execution so we can invest more energy in the creativity, insight, and collaboration that actually move the business forward.
              </p>
              <p className="text-primary-foreground text-2xl font-display">
                AI doesn't replace designers—it removes the repetitive work so teams can spend more time on strategy, storytelling, and solving harder problems.
              </p>
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
              This POV in Action
            </p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              Rapid
              <br />
              <span className="text-outline">prototyping.</span>
            </h2>
            <p className="text-primary-foreground/60 text-lg mt-6 max-w-2xl">
              These prototypes demonstrate how AI accelerates the journey from ambiguity to testable experience—concepts built in hours, not weeks.
            </p>
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
