import { useEffect } from "react";
import { ArrowLeft, Calendar, Target, TrendingUp, Users, Search, Layers, Palette, Gamepad2, Star } from "lucide-react";
import { Link } from "react-router-dom";
import hasbroPreview from "@/assets/hasbro-preview.png";

const CaseStudyHasbro = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const metrics = [
    { label: "Target Audience", value: "Fans & Collectors", icon: Star },
    { label: "Experience Type", value: "Immersive", icon: Gamepad2 },
    { label: "Engagement Focus", value: "Community", icon: Users },
  ];

  const approach = [
    {
      icon: Target,
      title: "Audience Research",
      points: [
        "Deep dive into collector and fan community behaviors and expectations",
        "Identified key touchpoints driving brand loyalty and purchase decisions",
        "Mapped the collector journey from discovery to exclusive access",
      ],
    },
    {
      icon: Search,
      title: "Competitive Analysis",
      points: [
        "Benchmarked against leading collector-focused platforms",
        "Analyzed fan engagement strategies across entertainment brands",
        "Identified opportunities for differentiation in the collectibles space",
      ],
    },
    {
      icon: Layers,
      title: "Experience Architecture",
      points: [
        "Designed exclusive member tiers and early access programs",
        "Created content strategy for insider news and reveals",
        "Developed community features to foster fan connections",
      ],
    },
    {
      icon: Palette,
      title: "Visual Design",
      points: [
        "Created bold, immersive visual language reflecting brand energy",
        "Designed showcase experiences for exclusive product drops",
        "Built responsive layouts optimized for mobile-first collectors",
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
            src={hasbroPreview} 
            alt="Hasbro PULSE Microsite" 
            className="w-full h-full object-cover object-[50%_20%]"
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
                2019
              </span>
            </div>

            {/* Main headline */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[7rem] font-bold leading-[0.95] mb-8 opacity-0 animate-fade-up stagger-1">
              <span className="text-primary-foreground">Hasbro</span>
              <br />
              <span className="text-outline">PULSE</span>
            </h1>

            <p className="text-primary-foreground/60 text-xl md:text-2xl max-w-2xl leading-relaxed opacity-0 animate-fade-up stagger-2">
              The Ultimate Fan Destination: 
              <span className="text-accent font-medium"> An immersive insider experience for collectors.</span>
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
                Beyond the
                <br />
                <span className="text-outline">toy aisle.</span>
              </h2>
              <div className="space-y-5 text-primary-foreground/60 text-lg leading-relaxed">
                <p>
                  <strong className="text-primary-foreground">Hasbro</strong> needed a dedicated digital destination that would resonate with their most passionate fans and collectors—not just casual shoppers.
                </p>
                <p>
                  The existing digital presence didn't capture the excitement and exclusivity that collectors craved. They needed a platform that felt like an insider club, not just another e-commerce site.
                </p>
              </div>
            </div>

            {/* Solution */}
            <div>
              <p className="text-accent font-medium tracking-wide mb-4 text-sm">
                The Solution
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-8">
                PULSE:
                <br />
                <span className="text-outline">Fan first.</span>
              </h2>
              <div className="space-y-5 text-primary-foreground/60 text-lg leading-relaxed">
                <p>
                  We reimagined the PULSE microsite as the ultimate destination for Hasbro fans and collectors, delivering an immersive experience built around exclusivity and community.
                </p>
                <p>
                  The platform featured <strong className="text-primary-foreground">early access to exclusive products, insider news and reveals, and a premium membership program</strong> that made fans feel like true insiders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10">
              <img 
                src={hasbroPreview} 
                alt="Hasbro PULSE Platform" 
                className="w-full h-auto hover:scale-105 transition-transform duration-700"
              />
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

      {/* Key Features */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-accent font-medium tracking-wide mb-4 text-sm text-center">
              Platform Features
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-16 text-center">
              Built for
              <br />
              <span className="text-outline">superfans.</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-8">
                <h3 className="font-display text-xl font-bold text-primary-foreground mb-4">Premium Membership</h3>
                <p className="text-primary-foreground/60 leading-relaxed">
                  Exclusive PULSE Premium tier with early access windows, free shipping, and member-only product drops that create urgency and loyalty.
                </p>
              </div>
              <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-8">
                <h3 className="font-display text-xl font-bold text-primary-foreground mb-4">Insider Content</h3>
                <p className="text-primary-foreground/60 leading-relaxed">
                  Behind-the-scenes reveals, designer interviews, and first-look content that makes fans feel connected to the brands they love.
                </p>
              </div>
              <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-8">
                <h3 className="font-display text-xl font-bold text-primary-foreground mb-4">Exclusive Products</h3>
                <p className="text-primary-foreground/60 leading-relaxed">
                  Limited-edition collectibles and convention exclusives available only through PULSE, driving collector engagement and sales.
                </p>
              </div>
              <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-8">
                <h3 className="font-display text-xl font-bold text-primary-foreground mb-4">Community Hub</h3>
                <p className="text-primary-foreground/60 leading-relaxed">
                  Fan forums, collection showcases, and social features that transform casual buyers into brand advocates.
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
              Fan-first
              <br />
              <span className="text-outline-accent">success.</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-10 text-center">
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">The Ultimate Fan Destination</h3>
            <p className="text-primary-foreground/60 leading-relaxed text-lg">
              By putting fans first and creating genuine exclusivity, PULSE became <strong className="text-primary-foreground">the definitive destination for Hasbro collectors</strong>—driving both brand loyalty and direct-to-consumer revenue.
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

export default CaseStudyHasbro;