import { useEffect } from "react";
import { ArrowLeft, Target, Users, Layers, Smartphone, TrendingUp, Palette, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import fossilLogo from "@/assets/logos/fossil.png";
import toryBurchLogo from "@/assets/logos/tory-burch.png";
import nikeLogo from "@/assets/logos/nike.png";
import fossil2upDesktop from "@/assets/fossil-2up-desktop.png";
import fossilWatchbuilderTablet from "@/assets/fossil-watchbuilder-tablet.png";
import fossilWatchbuilderMobile from "@/assets/fossil-watchbuilder-mobile.png";
import fossilDefenderTablets from "@/assets/fossil-defender-tablets.png";
import fossilHpDevices from "@/assets/fossil-hp-devices.png";
import fossilMobile3up from "@/assets/fossil-mobile-3up.png";
import fossilHeroWatch from "@/assets/fossil-hero-watch.jpg";

const CaseStudyFossilLeadership = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const metrics = [
    { label: "E-commerce Growth", value: "23%", icon: TrendingUp },
    { label: "Recognition", value: "Digital Genius", icon: Target },
    { label: "Scope", value: "Full Replatform", icon: Layers },
  ];

  const whatIBuilt = [
    {
      icon: Layers,
      title: "Full Digital Replatform",
      points: [
        "Complete web and mobile platform modernization",
        "Unified experience architecture across all digital touchpoints",
        "Scalable infrastructure supporting future growth initiatives",
      ],
    },
    {
      icon: Palette,
      title: "Modular Personalization",
      points: [
        "Design-A-Watch customization capabilities",
        "Dynamic product configuration experiences",
        "Scalable customization architecture for future product lines",
      ],
    },
    {
      icon: Users,
      title: "Stronger Digital UX Team",
      points: [
        "Built a faster, more capable digital UX team",
        "Aligned marketing, retail, product, and IT around customer journey",
        "Established cross-functional collaboration models",
      ],
    },
    {
      icon: Zap,
      title: "End-to-End Funnel Alignment",
      points: [
        "Campaign to conversion optimization",
        "Full-funnel UX strategy and execution",
        "Measurable performance improvements at every stage",
      ],
    },
  ];

  const deliverables = [
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      description: "23% YoY e-commerce lift through strategic UX improvements and platform optimization.",
    },
    {
      icon: Target,
      title: "Industry Recognition",
      description: "Achieved L2 'Digital Genius' status, recognized as a leader in digital retail experience.",
    },
    {
      icon: Layers,
      title: "Scalable Architecture",
      description: "Built customization infrastructure enabling future product personalization at scale.",
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
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img 
            src={fossilHeroWatch} 
            alt="Fossil watch detail" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
        </div>

        <div className="relative container mx-auto px-6 pt-32 pb-24">
          <div className="max-w-5xl">
            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 mb-8 opacity-0 animate-fade-up">
              <span className="px-4 py-1.5 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20">
                Leadership
              </span>
              <span className="text-primary-foreground/40 text-sm">Fossil Group</span>
            </div>

            {/* Main headline */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[7rem] font-bold leading-[0.95] mb-8 opacity-0 animate-fade-up stagger-1">
              <span className="text-primary-foreground">Replatforming</span>
              <br />
              <span className="text-outline">Fossil's digital</span>
              <br />
              <span className="text-accent">ecosystem</span>
            </h1>

            <p className="text-primary-foreground/60 text-xl md:text-2xl max-w-2xl leading-relaxed opacity-0 animate-fade-up stagger-2">
              For
              <span className="text-accent font-medium"> scale, speed, and personalization.</span>
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
                Modernize &
                <br />
                <span className="text-outline">unlock growth.</span>
              </h2>
              <div className="space-y-5 text-primary-foreground/60 text-lg leading-relaxed">
                <p>
                  <strong className="text-primary-foreground">Modernize Fossil's digital ecosystem</strong> and unlock growth through experience-led transformation.
                </p>
              </div>
            </div>

            {/* The Challenge */}
            <div>
              <p className="text-accent font-medium tracking-wide mb-4 text-sm">
                The Challenge
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-8">
                Legacy systems,
                <br />
                <span className="text-outline">fragmented teams.</span>
              </h2>
              <div className="space-y-5 text-primary-foreground/60 text-lg leading-relaxed">
                <p>
                  Legacy platforms, disconnected teams, and limited personalization capabilities in a <strong className="text-primary-foreground">highly competitive retail market.</strong>
                </p>
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
              Setting vision,
              <br />
              <span className="text-outline">driving alignment.</span>
            </h2>
            <p className="text-primary-foreground/60 text-xl leading-relaxed">
              I led the transformation—setting experience vision, rebuilding the platform, and aligning marketing, retail, product, and IT around the full customer journey.
            </p>
          </div>
        </div>
      </section>

      {/* What I Built */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16">
            <p className="text-accent font-medium tracking-wide mb-4 text-sm">
              What I Built / Changed
            </p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              Complete digital
              <br />
              <span className="text-outline">transformation.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {whatIBuilt.map((item) => (
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

      {/* Image Gallery */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16">
            <p className="text-accent font-medium tracking-wide mb-4 text-sm">
              Work Samples
            </p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              The Digital
              <br />
              <span className="text-outline">Experience.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { src: fossil2upDesktop, alt: "Fossil website desktop and laptop mockups" },
              { src: fossilWatchbuilderTablet, alt: "Fossil Design-A-Watch tablet experience" },
              { src: fossilWatchbuilderMobile, alt: "Fossil Design-A-Watch mobile experience" },
              { src: fossilDefenderTablets, alt: "Fossil Defender tablet screens" },
              { src: fossilHpDevices, alt: "Fossil homepage on laptop and mobile" },
              { src: fossilMobile3up, alt: "Fossil mobile app screens" },
            ].map((image, index) => (
              <div 
                key={index}
                className="group overflow-hidden rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-accent/30 transition-colors duration-300"
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-auto object-contain"
                />
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
              <span className="text-outline-accent">results.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {deliverables.map((item) => (
              <div 
                key={item.title}
                className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-8 text-center hover:border-accent/30 transition-colors duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 mx-auto">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">{item.title}</h3>
                <p className="text-primary-foreground/60">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-10 text-center hover:border-accent/30 transition-colors duration-300">
              <p className="text-5xl md:text-6xl font-display font-bold text-gradient mb-3">23%</p>
              <p className="text-primary-foreground/60">YoY e-commerce lift</p>
            </div>
            <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-10 text-center hover:border-accent/30 transition-colors duration-300">
              <p className="text-4xl md:text-5xl font-display font-bold text-gradient mb-3">L2 Genius</p>
              <p className="text-primary-foreground/60">Industry recognition</p>
            </div>
            <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-10 text-center hover:border-accent/30 transition-colors duration-300">
              <p className="text-4xl md:text-5xl font-display font-bold text-gradient mb-3">Full Stack</p>
              <p className="text-primary-foreground/60">Web + mobile replatform</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-10 text-center mb-6">
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">Design A Watch</h3>
            <p className="text-primary-foreground/60 leading-relaxed text-lg">
              By collaborating with product owners, merchandisers, watch designers, and developers, we created a solution that took personalization even further — the new Design A Watch experience allowed customers to customize every detail, from bezel to strap.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-10 text-center">
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">Scalable Foundation</h3>
            <p className="text-primary-foreground/60 leading-relaxed text-lg">
              Built customization architecture enabling future product personalization at scale, positioning Fossil for continued digital growth and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <p className="text-accent font-medium tracking-wide mb-8 text-sm">
            Brands in the Fossil portfolio.
          </p>

          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            {[
              { name: "Fossil", logo: fossilLogo },
              { name: "Tory Burch", logo: toryBurchLogo },
              { name: "Nike", logo: nikeLogo },
            ].map((client) => (
              <div key={client.name}>
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="h-20 md:h-24 w-auto object-contain"
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

export default CaseStudyFossilLeadership;