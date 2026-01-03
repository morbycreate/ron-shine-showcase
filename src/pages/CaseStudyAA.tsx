import { useEffect } from "react";
import { ArrowLeft, Calendar, Target, Monitor, Smartphone, Users, Globe, Palette, Layers, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import aaHero from "@/assets/aa-hero.png";
import aaGateSign from "@/assets/aa-gate-sign.png";
import aaLaptop from "@/assets/aa-laptop.png";
import aaKiosk from "@/assets/aa-kiosk.png";
import aaBoarding from "@/assets/aa-boarding.png";
import aaMobile1 from "@/assets/aa-mobile-1.jpg";
import aaMobile2 from "@/assets/aa-mobile-2.jpg";
import aaGuiKits from "@/assets/aa-gui-kits.jpg";
import aaWeb from "@/assets/aa-web.jpg";
import aaEmail from "@/assets/aa-email.jpg";
import aaSocial from "@/assets/aa-social.jpg";
import aaKiosks from "@/assets/aa-kiosks.jpg";
import aaMobileApp from "@/assets/aa-mobile-app.jpg";
import aaGateDisplays from "@/assets/aa-gate-displays.jpg";
import aaTerminal from "@/assets/aa-terminal.webp";

const CaseStudyAA = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const metrics = [
    { label: "Kiosks Launched", value: "5,000+", icon: Monitor },
    { label: "Development Teams", value: "8", icon: Users },
    { label: "Launch Timeline", value: "1 Day", icon: Zap },
  ];

  const approach = [
    {
      icon: Target,
      title: "New Visual Direction",
      points: [
        "Established comprehensive visual guidelines for all digital platforms",
        "Created cohesive design language across web, mobile, and physical touchpoints",
        "Ensured brand consistency from aa.com to airport displays",
      ],
    },
    {
      icon: Palette,
      title: "New UX Patterns",
      points: [
        "Redesigned user flows for booking, check-in, and travel management",
        "Developed intuitive interfaces for self-service kiosks",
        "Standardized interaction patterns across iOS and Android apps",
      ],
    },
    {
      icon: Layers,
      title: "New Content Standards",
      points: [
        "Defined voice and tone guidelines for all customer communications",
        "Created templates for 20+ marketing emails",
        "Established social media content frameworks",
      ],
    },
    {
      icon: Globe,
      title: "Fully Redesigned Interfaces",
      points: [
        "Transformed aa.com with the new brand identity",
        "Rebuilt mobile apps for iOS and Android",
        "Redesigned system-wide gate displays and boarding screens",
      ],
    },
  ];

  const platforms = [
    "American's corporate website - aa.com",
    "5,000 network-wide self-service kiosks",
    "Mobile apps, both iOS and Android",
    "System-wide gate displays",
    "Over 20 marketing emails",
    "All social media touch points",
    "Corporate Intranet",
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
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={aaHero} 
            alt="American Airlines 777" 
            className="w-full h-full object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-primary/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/30" />
        </div>


        <div className="relative container mx-auto px-6 pt-32 pb-24">
          <div className="max-w-5xl">
            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 mb-8 opacity-0 animate-fade-up">
              <span className="px-4 py-1.5 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20">
                Digital Transformation
              </span>
              <span className="flex items-center gap-2 text-sm text-primary-foreground/50">
                <Calendar className="w-4 h-4" />
                2007 – 2013
              </span>
            </div>

            {/* Main headline - Matt Boston style */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[7rem] font-bold leading-[0.95] mb-8 opacity-0 animate-fade-up stagger-1">
              <span className="text-primary-foreground">A digital</span>
              <br />
              <span className="text-outline">transformation,</span>
              <br />
              <span className="text-accent">in one day.</span>
            </h1>

            <p className="text-primary-foreground/60 text-xl md:text-2xl max-w-2xl leading-relaxed opacity-0 animate-fade-up stagger-2">
              American understood digital would play a major role in the launch of their new brand—reaching
              <span className="text-accent font-medium"> millions of customers daily.</span>
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
                Leading digital
                <br />
                <span className="text-outline">across all platforms.</span>
              </h2>
              <div className="space-y-5 text-primary-foreground/60 text-lg leading-relaxed">
                <p>
                  I oversaw the creative development for all customer-facing digital experiences—<strong className="text-primary-foreground">aa.com, mobile web, mobile apps, and airport infrastructure.</strong>
                </p>
                <p>
                  American's digital touchpoints reach millions of customers a day, and American wanted to ensure the new brand was reflected in every part of the digital customer journey.
                </p>
              </div>
            </div>

            {/* Solution */}
            <div>
              <p className="text-accent font-medium tracking-wide mb-4 text-sm">
                The Solution
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-8">
                Eight teams,
                <br />
                <span className="text-outline">one vision.</span>
              </h2>
              <div className="space-y-5 text-primary-foreground/60 text-lg leading-relaxed">
                <p>
                  I led <strong className="text-primary-foreground">eight development teams</strong> to implement the new identity across American's entire digital ecosystem.
                </p>
                <p>
                  All culminating in the unprecedented launch of the brand—<strong className="text-accent">rolled out globally in a single day.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery - 3 column grid */}
      <section className="py-24 md:py-32 bg-primary">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <p className="text-accent font-medium tracking-wide mb-4 text-sm">
              The Experience
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Across every
              <br />
              <span className="text-outline">touchpoint.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={aaGateSign} alt="American Airlines Gate Sign" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={aaKiosk} alt="American Airlines Self-Service Kiosk" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={aaLaptop} alt="AA.com on Laptop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={aaGuiKits} alt="Digital GUI Kits" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={aaWeb} alt="AA.com Website" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={aaEmail} alt="Email Marketing" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={aaSocial} alt="Social Media" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={aaKiosks} alt="Kiosk Interfaces" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={aaMobileApp} alt="Mobile App iOS7" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={aaGateDisplays} alt="Gate Displays" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={aaTerminal} alt="Airport Terminal" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Digital Platforms */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-accent font-medium tracking-wide mb-4 text-sm">
              Digital Platforms
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-8">
              Every touchpoint,
              <br />
              <span className="text-outline">reimagined.</span>
            </h2>
            <ul className="space-y-4">
              {platforms.map((platform, index) => (
                <li key={index} className="flex items-start gap-4 text-primary-foreground/60 text-lg">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  {platform}
                </li>
              ))}
            </ul>
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
              Launched globally
              <br />
              <span className="text-outline-accent">in a single day.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-10 text-center hover:border-accent/30 transition-colors duration-300">
              <p className="text-5xl md:text-6xl font-display font-bold text-gradient mb-3">5,000+</p>
              <p className="text-primary-foreground/60">Self-service kiosks launched network-wide</p>
            </div>
            <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-10 text-center hover:border-accent/30 transition-colors duration-300">
              <p className="text-5xl md:text-6xl font-display font-bold text-gradient mb-3">8</p>
              <p className="text-primary-foreground/60">Development teams coordinated for launch</p>
            </div>
            <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-10 text-center hover:border-accent/30 transition-colors duration-300">
              <p className="text-5xl md:text-6xl font-display font-bold text-gradient mb-3">1 Day</p>
              <p className="text-primary-foreground/60">Global rollout across all digital platforms</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-10 text-center">
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">Unprecedented Coordination</h3>
            <p className="text-primary-foreground/60 leading-relaxed text-lg">
              The digital launch was an unprecedented feat of coordination—transforming aa.com, all mobile apps, 5,000+ airport kiosks, system-wide gate displays, 20+ marketing emails, and all social channels simultaneously, ensuring millions of customers experienced the new American Airlines brand on day one.
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

export default CaseStudyAA;
