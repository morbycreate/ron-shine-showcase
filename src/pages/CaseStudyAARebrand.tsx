import { useEffect } from "react";
import { ArrowLeft, Award, TrendingUp, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import aaHero from "@/assets/aa-hero.png";
import aaWebsites from "@/assets/aa-websites.png";
import aaMobile1 from "@/assets/aa-mobile-1.jpg";
import aaMobile2 from "@/assets/aa-mobile-2.jpg";
import aaKiosk from "@/assets/aa-kiosk.png";
import aaGateSign from "@/assets/aa-gate-sign.png";
import aaEnvironments from "@/assets/aa-environments.jpg";
import aaGuiKits from "@/assets/aa-gui-kits.jpg";
import aaLogo from "@/assets/logos/american-airlines.png";
import aaFlightSymbol from "@/assets/aa-flight-symbol.png";
import aaFood from "@/assets/aa-food.png";
import aaKiosksRebrand from "@/assets/aa-kiosks-rebrand.jpg";
import aaLogoNew from "@/assets/aa-logo.png";
import aaPlanePainted from "@/assets/aa-plane-painted.png";
import aaPriorityCheckin from "@/assets/aa-priority-checkin.png";
import aaVisionSlide from "@/assets/aa-vision-slide.png";
import aaVisualIdOverview from "@/assets/aa-visual-id-overview.png";

// Custom purple accent for this page
const purpleAccent = "rgb(168, 85, 247)";

const CaseStudyAARebrand = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const approachItems = [
    {
      title: "Led the visual identity transformation",
      description: "Partnered with Futurebrand to lead creative direction across livery, advertising, airport environments, and all digital touchpoints—creating a unified visual language for the world's largest airline.",
    },
    {
      title: "Drove enterprise-wide alignment",
      description: "Presented the new brand vision to C-suite executives, global employees, union partners, and alliance stakeholders—building trust and buy-in across a complex, highly regulated organization.",
    },
    {
      title: "Orchestrated digital transformation",
      description: "Oversaw creative direction for aa.com, mobile apps, airport kiosks, and gate displays—culminating in a single-day global rollout that touched every customer-facing digital experience.",
    },
    {
      title: "Scaled across thousands of touchpoints",
      description: "Implemented brand standards across 5,000+ network-wide kiosks, hundreds of airport environments, fleet livery, crew uniforms, and countless print and digital materials.",
    },
  ];

  const impactMetrics = [
    {
      icon: TrendingUp,
      value: "+11.4",
      label: "YouGov Brand Buzz",
      description: "Strongest gain in the airline category",
    },
    {
      icon: Award,
      value: "Clio Award",
      label: "Brand Identity",
      description: "Industry recognition for excellence",
    },
    {
      icon: Globe,
      value: "5,000+",
      label: "Kiosks Updated",
      description: "Network-wide digital transformation",
    },
  ];

  const outcomes = [
    "First major brand refresh in 40+ years, unifying a fragmented visual identity",
    "Single-day global rollout across all customer touchpoints",
    "Fast Company Innovation by Design finalist",
    "Adoption across fleet livery, airports, digital, and crew uniforms worldwide",
  ];

  return (
    <div className="min-h-screen bg-primary">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-md border-b border-primary-foreground/10">
        <div className="container mx-auto px-6 py-4">
          <Link 
            to="/overview#experience"
            className="group inline-flex items-center gap-3 text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform duration-300" />
            <span className="text-sm font-medium">Back to Overview</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={aaHero} 
            alt="American Airlines aircraft with new livery" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
        </div>

        <div className="relative container mx-auto px-6 pt-32 pb-24">
          <div className="max-w-5xl">
            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 mb-8 opacity-0 animate-fade-up">
              <span 
                className="px-4 py-1.5 text-xs font-medium rounded-full border"
                style={{ 
                  backgroundColor: `${purpleAccent}15`, 
                  color: purpleAccent,
                  borderColor: `${purpleAccent}30`
                }}
              >
                Brand & Digital
              </span>
              <span className="text-primary-foreground/40 text-sm">American Airlines</span>
            </div>

            {/* Main headline */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[7rem] font-bold leading-[0.95] mb-8 opacity-0 animate-fade-up stagger-1">
              <span className="text-primary-foreground">Rebranding the</span>
              <br />
              <span className="text-primary-foreground">world's largest</span>
              <br />
              <span style={{ color: purpleAccent }}>airline.</span>
            </h1>
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

      {/* The Challenge */}
      <section className="py-24 md:py-32 bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <p className="font-medium tracking-wide mb-4 text-sm" style={{ color: purpleAccent }}>
              The Challenge
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-8">
              A 40-year-old identity
              <br />
              <span className="text-outline">ready for reinvention.</span>
            </h2>
            <div className="space-y-5 text-primary-foreground/70 text-lg leading-relaxed">
              <p>
                American Airlines hadn't updated its brand in over 40 years. The challenge went far beyond a logo refresh—it required <strong className="text-primary-foreground">reimagining every facet of the customer journey</strong> for the world's largest airline.
              </p>
              <p>
                This meant overhauling the brand globally across <strong className="text-primary-foreground">fleet livery, airport environments, digital experiences, crew uniforms, and thousands of touchpoints</strong>—all while coordinating with leadership, unions, alliance partners, and executing a simultaneous global launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Approach */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16">
            <p className="font-medium tracking-wide mb-4 text-sm" style={{ color: purpleAccent }}>
              The Approach
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              From vision to
              <br />
              <span className="text-outline">global execution.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            {approachItems.map((item, index) => (
              <div
                key={item.title}
                className="group bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-8 hover:border-primary-foreground/20 transition-all duration-300"
              >
                <div 
                  className="flex items-center justify-center w-10 h-10 rounded-full mb-6 font-display font-bold text-sm"
                  style={{ 
                    backgroundColor: `${purpleAccent}15`, 
                    color: purpleAccent,
                    border: `1px solid ${purpleAccent}30`
                  }}
                >
                  {index + 1}
                </div>
                <h3 className="font-display text-xl font-bold text-primary-foreground mb-4">{item.title}</h3>
                <p className="text-primary-foreground/60 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery - Digital */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16">
            <p className="font-medium tracking-wide mb-4 text-sm" style={{ color: purpleAccent }}>
              Digital Transformation
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Every screen.
              <br />
              <span className="text-outline">One experience.</span>
            </h2>
          </div>

          {/* Full width websites */}
          <div className="mb-8 overflow-hidden rounded-2xl border border-primary-foreground/10">
            <img
              src={aaWebsites}
              alt="American Airlines website redesign"
              className="w-full h-auto"
            />
          </div>

          {/* 2-column mobile */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10">
              <img
                src={aaMobile1}
                alt="AA mobile app - booking"
                className="w-full h-auto"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10">
              <img
                src={aaMobile2}
                alt="AA mobile app - flight status"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Kiosk and gate */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10">
              <img
                src={aaKiosk}
                alt="Airport check-in kiosk"
                className="w-full h-auto"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10">
              <img
                src={aaGateSign}
                alt="Gate display signage"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery - Brand System */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16">
            <p className="font-medium tracking-wide mb-4 text-sm" style={{ color: purpleAccent }}>
              Brand System
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Airport to aircraft.
              <br />
              <span className="text-outline">Unified identity.</span>
            </h2>
          </div>

          {/* 3-column grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 bg-white">
              <img
                src={aaFlightSymbol}
                alt="American Airlines flight symbol"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 bg-white">
              <img
                src={aaLogoNew}
                alt="American Airlines logo"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10">
              <img
                src={aaVisionSlide}
                alt="Brand vision statement"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10">
              <img
                src={aaVisualIdOverview}
                alt="Visual identity system overview"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10">
              <img
                src={aaPlanePainted}
                alt="Aircraft livery painting"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10">
              <img
                src={aaFood}
                alt="Branded food packaging"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10">
              <img
                src={aaKiosksRebrand}
                alt="Check-in kiosks"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10">
              <img
                src={aaPriorityCheckin}
                alt="Priority check-in environment"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10">
              <img
                src={aaEnvironments}
                alt="Airport environment design"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16">
            <p className="font-medium tracking-wide mb-4 text-sm" style={{ color: purpleAccent }}>
              The Impact
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Measurable
              <br />
              <span className="text-outline">results.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mb-12">
            {impactMetrics.map((metric) => (
              <div 
                key={metric.label}
                className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-8 text-center hover:border-primary-foreground/20 transition-colors duration-300"
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 mx-auto"
                  style={{ 
                    backgroundColor: `${purpleAccent}15`,
                    border: `1px solid ${purpleAccent}30`
                  }}
                >
                  <metric.icon className="w-6 h-6" style={{ color: purpleAccent }} />
                </div>
                <p className="font-display text-3xl font-bold text-primary-foreground mb-1">{metric.value}</p>
                <p className="font-medium text-primary-foreground/80 mb-2">{metric.label}</p>
                <p className="text-sm text-primary-foreground/50">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Outcome */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10 relative overflow-hidden">
        {/* Background glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl pointer-events-none"
          style={{ backgroundColor: `${purpleAccent}08` }}
        />

        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="font-medium tracking-wide mb-4 text-sm" style={{ color: purpleAccent }}>
              The Outcome
            </p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              A new era for
              <br />
              <span className="text-outline">American Airlines.</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {outcomes.map((outcome, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-4 bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-xl p-6"
                >
                  <span 
                    className="flex-shrink-0 w-2 h-2 rounded-full mt-2.5"
                    style={{ backgroundColor: purpleAccent }}
                  />
                  <p className="text-primary-foreground/80 text-lg">{outcome}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Client Logo */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="flex justify-center">
            <img 
              src={aaLogo} 
              alt="American Airlines" 
              className="h-24 md:h-32 w-auto object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyAARebrand;
