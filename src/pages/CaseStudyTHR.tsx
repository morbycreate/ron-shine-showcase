import { ArrowLeft, Calendar, Target, TrendingUp, Users, Search, Layers, Palette, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import thrPreview from "@/assets/thr-preview.jpg";
import thrCompetitive from "@/assets/thr-competitive.png";
import thrSiteStructure from "@/assets/thr-site-structure.png";
import thrBaby from "@/assets/thr-baby.png";
import thrQuickGuide from "@/assets/thr-quick-guide.jpg";

const CaseStudyTHR = () => {
  const metrics = [
    { label: "Health System Size", value: "Top 10", icon: TrendingUp },
    { label: "Network Locations", value: "350+", icon: MapPin },
    { label: "Team Approach", value: "Collaborative", icon: Users },
  ];

  const approach = [
    {
      icon: Target,
      title: "Current State & Discovery",
      points: [
        "Defined business and patient experience goals to improve engagement and streamline access to care",
        "Conducted stakeholder alignment workshops with Marketing, IT, Clinical, and Patient Experience teams",
        "Audited analytics, SEO performance, site structure, and content quality",
      ],
    },
    {
      icon: Search,
      title: "Market & Competitive Analysis",
      points: [
        "Benchmarked THR's digital presence against peer healthcare systems",
        "Analyzed leading consumer experiences for best practices",
        "Identified core user groups: patients, providers, caregivers, job seekers, donors",
      ],
    },
    {
      icon: Layers,
      title: "Experience Strategy",
      points: [
        "Defined future-state vision for the THR digital ecosystem",
        "Mapped key user journeys: find a doctor, schedule an appointment, explore services",
        "Developed content strategy balancing empathy, clarity, and credibility",
      ],
    },
    {
      icon: Palette,
      title: "Visual Design & IA",
      points: [
        "Created modern design system aligned with brand identity",
        "Simplified navigation and developed new sitemaps",
        "Featured human-centered imagery reflecting diverse patient community",
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
            src={thrPreview} 
            alt="Texas Health Resources Website" 
            className="w-full h-full object-cover object-[50%_30%]"
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
                2018
              </span>
            </div>

            {/* Main headline */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[7rem] font-bold leading-[0.95] mb-8 opacity-0 animate-fade-up stagger-1">
              <span className="text-primary-foreground">Texas Health</span>
              <br />
              <span className="text-outline">Resources</span>
            </h1>

            <p className="text-primary-foreground/60 text-xl md:text-2xl max-w-2xl leading-relaxed opacity-0 animate-fade-up stagger-2">
              Redesigning Health: A 
              <span className="text-accent font-medium"> digital experience that cares.</span>
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
                One digital
                <br />
                <span className="text-outline">front door.</span>
              </h2>
              <div className="space-y-5 text-primary-foreground/60 text-lg leading-relaxed">
                <p>
                  <strong className="text-primary-foreground">Texas Health Resources</strong> is operating in an increasingly competitive and complex marketplace and needed to create a more customer-centric experience for its customer-facing website.
                </p>
                <p>
                  To deliver on that vision, THR looked to create a simplified and consistent experience via one digital front door to the Texas Health brand, as well as its network of locations, services, and healthcare professionals.
                </p>
              </div>
            </div>

            {/* Solution */}
            <div>
              <p className="text-accent font-medium tracking-wide mb-4 text-sm">
                The Solution
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-8">
                Patient-centered
                <br />
                <span className="text-outline">transformation.</span>
              </h2>
              <div className="space-y-5 text-primary-foreground/60 text-lg leading-relaxed">
                <p>
                  We conducted a comprehensive current-state assessment—evaluating content, engagement, and the overall digital experience, along with a full market and competitive analysis.
                </p>
                <p>
                  This collaboration led to the <strong className="text-primary-foreground">redesign and reorganization of the TexasHealth.org website</strong>, creating a more intuitive, engaging, and patient-centered experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery - Competitive Analysis */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10">
              <img 
                src={thrCompetitive} 
                alt="Competitive Analysis Summary" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10">
              <img 
                src={thrSiteStructure} 
                alt="Site Structure Planning" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10">
              <img 
                src={thrPreview} 
                alt="Texas Health Website Preview" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
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

      {/* Visual Design Gallery */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10">
              <img 
                src={thrBaby} 
                alt="Texas Health Patient Experience" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10">
              <img 
                src={thrQuickGuide} 
                alt="Texas Health Quick Guide" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10">
              <img 
                src={thrCompetitive} 
                alt="Texas Health Competitive Analysis" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
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
              Unified digital
              <br />
              <span className="text-outline-accent">experience.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-8 text-center hover:border-accent/30 transition-colors duration-300">
              <p className="text-4xl md:text-5xl font-display font-bold text-gradient mb-3">350+</p>
              <p className="text-primary-foreground/60">Locations unified under one digital front door</p>
            </div>
            <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-8 text-center hover:border-accent/30 transition-colors duration-300">
              <p className="text-4xl md:text-5xl font-display font-bold text-gradient mb-3">Improved</p>
              <p className="text-primary-foreground/60">User journey for finding doctors and scheduling</p>
            </div>
            <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-8 text-center hover:border-accent/30 transition-colors duration-300">
              <p className="text-4xl md:text-5xl font-display font-bold text-gradient mb-3">Modern</p>
              <p className="text-primary-foreground/60">Design system aligned with brand identity</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-10 text-center">
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">Patient-First Digital Transformation</h3>
            <p className="text-primary-foreground/60 leading-relaxed text-lg">
              By partnering closely with the THR team, we delivered a <strong className="text-primary-foreground">customer-centric digital experience</strong> that drives brand KPIs: increased conversion, content engagement, customer satisfaction, and myTHR.com participation.
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

export default CaseStudyTHR;
