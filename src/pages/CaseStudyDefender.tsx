import { ArrowLeft, Calendar, Target, TrendingUp, Award, Users, Palette, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CaseStudyDefender = () => {
  const metrics = [
    { label: "YoY Sales Growth", value: "23%", icon: TrendingUp },
    { label: "Industry Recognition", value: "L2 Digital Genius", icon: Award },
    { label: "Channel", value: "Omni-channel", icon: Layers },
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Link to="/#work">
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" />
              Back to Work
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-2xl" />
        </div>

        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
                Digital Experience
              </span>
              <span className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <Calendar className="w-4 h-4" />
                Holiday 2014 – Q1 2015
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
              Fossil <span className="text-gradient">Defender</span>
              <br />Collection
            </h1>

            <p className="text-primary-foreground/70 text-xl md:text-2xl max-w-2xl leading-relaxed">
              Reintroducing authenticity to a new generation through a modular product customization platform.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {metrics.map((metric) => (
              <div key={metric.label} className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <metric.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-serif font-bold text-foreground">{metric.value}</p>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                The <span className="text-gradient">Challenge</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Originally developed in the late '90s, <strong className="text-foreground">Fossil's Defender Collection</strong> represented one of the brand's strongest and most memorable men's product lines. Rooted in the pioneering days of aviation, the collection was built around a spirit of exploration and resilience.
                </p>
                <p>
                  Fossil had a popular in-store feature that allowed customers to build their own custom Defender watch by selecting from an array of watch bands and cases. They wanted to take this capability and implement it as a feature on fossil.com and expand the existing Watchbar program with a fresh, flexible platform.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                The <span className="text-gradient">Solution</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Our team led the strategy and end-to-end execution of the Defender Series relaunch, designing and building a <strong className="text-foreground">modular product system</strong> that enabled true customization at scale.
                </p>
                <p>
                  We created the underlying framework that allowed customers to mix and match cases and bands, while ensuring consistency across materials, finishes, and fit. Beyond the physical product, we designed the tools and rules that made customization possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Strategic Approach
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              How We <span className="text-gradient">Delivered</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {approach.map((item, index) => (
              <div
                key={item.title}
                className="bg-card rounded-2xl p-8 border border-border hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">{item.title}</h3>
                <ul className="space-y-3">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Experience */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              More Than a Watch—<span className="text-gradient">An Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Customers became creators—mixing, matching, and designing their own Fossil watches with just a few taps. Every combination told a personal story of style and resilience.
            </p>
          </div>

          <div className="bg-card rounded-2xl border border-border p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">Digital Customization Platform</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    Component logic and configuration pathways
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    Personalization and engraving options
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    Future product expansion support
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">Omni-Channel Integration</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    Connected digital content with in-store displays
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    Social media integration for sharing
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    Cohesive brand experience across touchpoints
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 md:py-24 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Results & Impact
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-8">
              Record-Breaking <span className="text-gradient">Success</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10">
                <p className="text-5xl md:text-6xl font-serif font-bold text-gradient mb-2">23%</p>
                <p className="text-primary-foreground/70">Year-over-Year e-commerce sales growth for Holiday 2014 and Q1 2015</p>
              </div>
              <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10">
                <p className="text-2xl md:text-3xl font-serif font-bold text-gradient mb-2">"Digital Genius"</p>
                <p className="text-primary-foreground/70">Fossil named by L2 (2014-15), which benchmarks the digital competence of brands</p>
              </div>
            </div>

            <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10">
              <h3 className="font-serif text-xl font-bold text-primary-foreground mb-4">Legacy & Expansion</h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                The project's success led to the global <strong className="text-primary-foreground">"Design A Watch"</strong> feature on Fossil.com, expanding customization capabilities to include bezels, top rings, and more—a flexible, scalable platform that continues to evolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Work CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 text-center">
          <Link to="/#work">
            <Button variant="outline" size="lg" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              View More Case Studies
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDefender;
