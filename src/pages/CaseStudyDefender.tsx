import { useEffect } from "react";
import { ArrowLeft, ArrowRight, Calendar, Target, TrendingUp, Award, Palette, Layers, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import defenderHero from "@/assets/defender-hero.png";

const CaseStudyDefender = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const metrics = [
    { label: "YoY Sales Growth", value: "23%", icon: TrendingUp },
    { label: "Industry Recognition", value: "Digital Genius", icon: Award },
    { label: "Experience", value: "Omni-channel", icon: Layers },
  ];

  const approach = [
    {
      icon: Target,
      title: "Define Strategy & Focus",
      points: [
        "Defined primary campaign goal focused on conversion and product launch",
        "Segmented audience by behavior—loyalists, deal seekers, first-timers",
        "Aligned with key retail periods and seasonal needs",
      ],
    },
    {
      icon: Palette,
      title: "Lead with Storytelling",
      points: [
        "Defined a clear narrative unifying the entire project team",
        "Rooted the story in the Defender's heritage—'Never Give Up' spirit",
        "Drew inspiration from early aviation design and field-watch details",
      ],
    },
    {
      icon: Layers,
      title: "Modular Product System",
      points: [
        "Designed framework for mixing and matching cases and bands",
        "Defined component logic, configuration pathways, and guardrails",
        "Created scalable platform balancing design integrity with manufacturing realities",
      ],
    },
    {
      icon: Users,
      title: "Connection & Loyalty",
      points: [
        "Empowered customers to design and share their own configurations",
        "Featured real people and influencers reflecting the 'those who go first' ethos",
        "Exclusive drops and collector rewards for loyal fans",
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
            src={defenderHero} 
            alt="Fossil Defender Collection" 
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
                Digital Experience
              </span>
              <span className="flex items-center gap-2 text-sm text-primary-foreground/50">
                <Calendar className="w-4 h-4" />
                Holiday 2014 – Q1 2015
              </span>
            </div>

            {/* Main headline - Matt Boston style */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[7rem] font-bold leading-[0.95] mb-8 opacity-0 animate-fade-up stagger-1">
              <span className="text-primary-foreground">Fossil</span>
              <br />
              <span className="text-outline">Defender</span>
              <br />
              <span className="text-accent">Collection</span>
            </h1>

            <p className="text-primary-foreground/60 text-xl md:text-2xl max-w-2xl leading-relaxed opacity-0 animate-fade-up stagger-2">
              Reintroducing authenticity to a new generation through a 
              <span className="text-accent font-medium"> modular product customization platform.</span>
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
                Bringing a
                <br />
                <span className="text-outline">legacy online.</span>
              </h2>
              <div className="space-y-5 text-primary-foreground/60 text-lg leading-relaxed">
                <p>
                  Originally developed in the late '90s, <strong className="text-primary-foreground">Fossil's Defender Collection</strong> represented one of the brand's strongest and most memorable men's product lines.
                </p>
                <p>
                  Fossil had a popular in-store feature that allowed customers to build their own custom Defender watch. They wanted to take this capability online and expand the existing Watchbar program with a fresh, flexible platform.
                </p>
              </div>
            </div>

            {/* Solution */}
            <div>
              <p className="text-accent font-medium tracking-wide mb-4 text-sm">
                The Solution
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-8">
                Modular
                <br />
                <span className="text-outline">at scale.</span>
              </h2>
              <div className="space-y-5 text-primary-foreground/60 text-lg leading-relaxed">
                <p>
                  Our team led the strategy and end-to-end execution of the Defender Series relaunch, designing and building a <strong className="text-primary-foreground">modular product system</strong> that enabled true customization at scale.
                </p>
                <p>
                  We created the underlying framework that allowed customers to mix and match cases and bands, while ensuring consistency across materials, finishes, and fit.
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
            {approach.map((item, index) => (
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

      {/* Experience Section */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-accent font-medium tracking-wide mb-4 text-sm">
              The Experience
            </p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
              More than a watch—
              <br />
              <span className="text-outline">a statement.</span>
            </h2>
            <p className="text-primary-foreground/60 text-xl leading-relaxed max-w-2xl mx-auto">
              Customers became creators—mixing, matching, and designing their own Fossil watches with just a few taps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-5 h-5 text-accent" />
                <h3 className="font-display text-xl font-bold text-primary-foreground">Digital Customization Platform</h3>
              </div>
              <ul className="space-y-3 text-primary-foreground/60">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  Component logic and configuration pathways
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  Personalization and engraving options
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  Future product expansion support
                </li>
              </ul>
            </div>
            <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Layers className="w-5 h-5 text-accent" />
                <h3 className="font-display text-xl font-bold text-primary-foreground">Omni-Channel Integration</h3>
              </div>
              <ul className="space-y-3 text-primary-foreground/60">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  Connected digital content with in-store displays
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  Social media integration for sharing
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  Cohesive brand experience across touchpoints
                </li>
              </ul>
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
              Record-breaking
              <br />
              <span className="text-outline-accent">success.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-10 text-center hover:border-accent/30 transition-colors duration-300">
              <p className="text-6xl md:text-7xl font-display font-bold text-gradient mb-3">23%</p>
              <p className="text-primary-foreground/60">Year-over-Year e-commerce sales growth for Holiday 2014 and Q1 2015</p>
            </div>
            <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-10 text-center hover:border-accent/30 transition-colors duration-300">
              <p className="text-3xl md:text-4xl font-display font-bold text-gradient mb-3">"Digital Genius"</p>
              <p className="text-primary-foreground/60">Fossil named by L2 (2014-15), which benchmarks the digital competence of brands</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-10 text-center">
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">Legacy & Expansion</h3>
            <p className="text-primary-foreground/60 leading-relaxed text-lg">
              The project's success led to the global <strong className="text-primary-foreground">"Design A Watch"</strong> feature on Fossil.com, expanding customization capabilities to include bezels, top rings, and more—a flexible, scalable platform that continues to evolve.
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

export default CaseStudyDefender;