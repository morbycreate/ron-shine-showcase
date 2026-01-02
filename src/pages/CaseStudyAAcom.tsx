import { useEffect } from "react";
import { ArrowLeft, Calendar, Target, TrendingUp, Users, Layers, Palette, Zap, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import aacomHeroPlane from "@/assets/aacom-hero-plane.jpg";
import aacomHome from "@/assets/aacom-home.png";
import aacomInterior from "@/assets/aacom-interior.png";
import aacomAdmiralsClub from "@/assets/aacom-admirals-club.png";
import aacomBookFlights from "@/assets/aacom-book-flights.png";
import aacomMyAccount from "@/assets/aacom-my-account.png";
import aacomInteriorV5 from "@/assets/aacom-interior-v5.png";

const CaseStudyAAcom = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const metrics = [
    { label: "Daily Revenue", value: "$40M+", icon: TrendingUp },
    { label: "First Redesign Since", value: "2000", icon: Calendar },
    { label: "Platform Result", value: "Scalable", icon: Zap },
  ];

  const approach = [
    {
      icon: Users,
      title: "Experience Reimagined",
      points: [
        "First meaningful redesign of aa.com in more than a decade",
        "Modern, clean, and intuitive interface aligned with the brand",
        "Brought clarity to the customer experience and visual language",
      ],
    },
    {
      icon: Layers,
      title: "Architectural Shift",
      points: [
        "Complete front-end rebuild decoupling UI from backend systems",
        "Platform finally capable of responsive, mobile-forward evolution",
        "Established foundation for agile experimentation and iteration",
      ],
    },
    {
      icon: Palette,
      title: "Design Leadership",
      points: [
        "Led the charge to overhaul aa.com from two angles: experience and foundation",
        "Built UX team that became a lasting capability inside the organization",
        "Powered years of continued innovation beyond the initial launch",
      ],
    },
    {
      icon: Globe,
      title: "Performance Gains",
      points: [
        "Faster iteration cycles for the business",
        "Cleaner performance across all devices",
        "Scalable platform ready for future enhancements",
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
            src={aacomHeroPlane} 
            alt="American Airlines 737" 
            className="w-full h-full object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/75 to-primary/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-primary/30" />
        </div>

        <div className="relative container mx-auto px-6 pt-32 pb-24">
          <div className="max-w-5xl">
            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 mb-8 opacity-0 animate-fade-up">
              <span className="px-4 py-1.5 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20">
                Website Redesign
              </span>
              <span className="flex items-center gap-2 text-sm text-primary-foreground/50">
                <Calendar className="w-4 h-4" />
                2013
              </span>
            </div>

            {/* Main headline */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[7rem] font-bold leading-[0.95] mb-8 opacity-0 animate-fade-up stagger-1">
              <span className="text-primary-foreground">aa.com</span>
              <br />
              <span className="text-outline">Redesign</span>
            </h1>

            <p className="text-primary-foreground/60 text-xl md:text-2xl max-w-2xl leading-relaxed opacity-0 animate-fade-up stagger-2">
              Modernizing the Digital Experience: 
              <span className="text-accent font-medium"> aa.com went from static to scalable.</span>
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
                Outdated &
                <br />
                <span className="text-outline">constrained.</span>
              </h2>
              <div className="space-y-5 text-primary-foreground/60 text-lg leading-relaxed">
                <p>
                  American Airlines' primary digital channel, <strong className="text-primary-foreground">aa.com</strong>, generated over <strong className="text-primary-foreground">$40 million per day</strong> in revenue but had not undergone a major update since its launch in 2000.
                </p>
                <p>
                  The platform was visually outdated, technically constrained with front-end code tightly coupled to back-end systems, and falling behind customer expectations for modern e-commerce and travel UX.
                </p>
              </div>
            </div>

            {/* Solution */}
            <div>
              <p className="text-accent font-medium tracking-wide mb-4 text-sm">
                The Solution
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-8">
                Static to
                <br />
                <span className="text-outline">scalable.</span>
              </h2>
              <div className="space-y-5 text-primary-foreground/60 text-lg leading-relaxed">
                <p>
                  The business needed more than a cosmetic refresh—it needed a foundational redesign that would support future growth and modernization.
                </p>
                <p>
                  Ron led the charge to overhaul aa.com from two angles: <strong className="text-primary-foreground">the experience</strong> and <strong className="text-primary-foreground">the foundation beneath it</strong>—transforming a stale, outdated site into a living, evolving platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 aspect-[4/3]">
              <img 
                src={aacomHome} 
                alt="aa.com Homepage Redesign" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 aspect-[4/3]">
              <img 
                src={aacomInterior} 
                alt="aa.com Admirals Club Page" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 aspect-[4/3]">
              <img 
                src={aacomAdmiralsClub} 
                alt="aa.com Admirals Club Dining Experience" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 aspect-[4/3]">
              <img 
                src={aacomBookFlights} 
                alt="aa.com Choose Flights" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 aspect-[4/3]">
              <img 
                src={aacomMyAccount} 
                alt="aa.com My Account" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 aspect-[4/3]">
              <img 
                src={aacomInteriorV5} 
                alt="aa.com Interior Page" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl font-medium text-primary-foreground leading-relaxed mb-8">
              "Site navigation has been greatly improved. Key tasks, like flight booking, account log-in, and flight check-in, now appear in the same navigation menu... The result is a home page that looks more like a travel retailer than 'just' an airline Web site."
            </blockquote>
            <cite className="text-primary-foreground/60 text-lg not-italic">
              — <strong className="text-primary-foreground">Henry Harteveldt</strong>, Forrester Research
            </cite>
          </div>
        </div>
      </section>

      {/* Strategic Approach */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16">
            <p className="text-accent font-medium tracking-wide mb-4 text-sm">
              The Work
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
              The Impact
            </p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              Digital future
              <br />
              <span className="text-outline-accent">transformed.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-8 text-center hover:border-accent/30 transition-colors duration-300">
              <p className="text-4xl md:text-5xl font-display font-bold text-gradient mb-3">Modern</p>
              <p className="text-primary-foreground/60">Cleaner, modern site aligned with the brand customers trusted</p>
            </div>
            <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-8 text-center hover:border-accent/30 transition-colors duration-300">
              <p className="text-4xl md:text-5xl font-display font-bold text-gradient mb-3">Faster</p>
              <p className="text-primary-foreground/60">Ability to update and improve the site at real speed</p>
            </div>
            <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-8 text-center hover:border-accent/30 transition-colors duration-300">
              <p className="text-4xl md:text-5xl font-display font-bold text-gradient mb-3">Scalable</p>
              <p className="text-primary-foreground/60">Foundation for future enhancements and rapid iteration</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-10 text-center">
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">Lasting Impact</h3>
            <p className="text-primary-foreground/60 leading-relaxed text-lg">
              What started as a stale, outdated site became a living, evolving platform—one designed around customers, guided by strategy, and built to support one of the world's largest airlines. <strong className="text-primary-foreground">The UX team Ron built became a lasting capability inside the organization</strong>, powering years of continued innovation.
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

export default CaseStudyAAcom;