import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import orviumhrBanner from "@/assets/orviumhr-banner.png";
import orviumhrConcepts04 from "@/assets/orviumhr-concepts-04.png";
import orviumhrConceptsBanner from "@/assets/orviumhr-concepts-banner.png";
import orviumhrGraphic from "@/assets/orviumhr-graphic.jpg";

const purpleAccent = "rgb(168, 85, 247)";

const CaseStudyOrviumHR = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const challenges = [
    {
      title: "Perception as a Transactional Vendor",
      description: "Despite offering strategic value, clients viewed OrviumHR as a one-and-done recruiting service, making it hard to position their full capabilities."
    },
    {
      title: "Limited Differentiation",
      description: "The recruiting/HR space is saturated. Without a bold, clear point of view, OrviumHR risked blending in with competitors."
    },
    {
      title: "Under-leveraged Thought Leadership",
      description: "Leadership had deep insight into AI and retention, but wasn't being used to educate or influence the market as a voice of authority."
    }
  ];

  const approach = [
    "Established a clear company 'WHY' to shift messaging focus",
    "Reframed positioning from tactical vendor to strategic partner",
    "Developed messaging around business outcomes vs. HR tasks",
    "Created 'AI + Human Touch' narrative to own the conversation",
    "Concepted bold storytelling through movement-based marketing",
    "Built visual identity aligned with long-term value positioning"
  ];

  const deliverables = [
    "Brand Strategy & Positioning",
    "Company Vision, Mission, Values",
    "Messaging Framework",
    "Visual Identity System",
    "Content Strategy",
    "Campaign Concepts"
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
        <div className="absolute inset-0">
          <img 
            src={orviumhrBanner} 
            alt="OrviumHR Brand Concepts" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
        </div>

        <div className="relative container mx-auto px-6 pt-32 pb-24">
          <div className="max-w-5xl">
            <div className="flex flex-wrap items-center gap-4 mb-8 opacity-0 animate-fade-up">
              <span 
                className="px-4 py-1.5 text-xs font-medium rounded-full border"
                style={{ 
                  backgroundColor: `${purpleAccent}15`, 
                  color: purpleAccent,
                  borderColor: `${purpleAccent}30`
                }}
              >
                Brand Strategy
              </span>
              <span className="text-primary-foreground/40 text-sm">OrviumHR</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[7rem] font-bold leading-[0.95] mb-8 opacity-0 animate-fade-up stagger-1">
              <span className="text-primary-foreground">Reframing from</span>
              <br />
              <span className="text-primary-foreground">vendor to</span>
              <br />
              <span style={{ color: purpleAccent }}>strategic partner.</span>
            </h1>
          </div>
        </div>

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
              Great ingredients,
              <br />
              <span className="text-outline">but no meal.</span>
            </h2>
            <div className="space-y-5 text-primary-foreground/70 text-lg leading-relaxed mb-12">
              <p>
                Despite offering comprehensive services like AI-driven hiring, leadership consulting, and succession planning, OrviumHR was primarily recognized for its recruiting capabilities. As their leadership stated: <strong className="text-primary-foreground">"I feel like we have a bunch of great ingredients, but can't get the meal cooked."</strong>
              </p>
              <p>
                The challenge was to shift perception from a transactional recruiting vendor to a strategic HR partner that delivers <strong className="text-primary-foreground">long-term value, insight, and impact at scale</strong>.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {challenges.map((challenge, index) => (
                <div
                  key={challenge.title}
                  className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-6"
                >
                  <div 
                    className="flex items-center justify-center w-8 h-8 rounded-full mb-4 font-display font-bold text-sm"
                    style={{ 
                      backgroundColor: `${purpleAccent}15`, 
                      color: purpleAccent,
                      border: `1px solid ${purpleAccent}30`
                    }}
                  >
                    {index + 1}
                  </div>
                  <h3 className="font-display text-lg font-bold text-primary-foreground mb-2">{challenge.title}</h3>
                  <p className="text-primary-foreground/60 text-sm leading-relaxed">{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Concepts Section */}
      <section className="py-16 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10">
              <img 
                src={orviumhrConcepts04} 
                alt="OrviumHR Campaign Concept - We see the invisible in people" 
                className="w-full h-auto"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10">
              <img 
                src={orviumhrConceptsBanner} 
                alt="OrviumHR Brand Banner" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Approach */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-medium tracking-wide mb-4 text-sm" style={{ color: purpleAccent }}>
                The Approach
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-8">
                Strategic reframing
                <br />
                <span className="text-outline">for lasting impact.</span>
              </h2>
              <div className="space-y-5 text-primary-foreground/70 text-lg leading-relaxed">
                <p>
                  We partnered with OrviumHR to reimagine the company from a transactional recruiting vendor to a strategic HR partner. By establishing a clear company 'WHY', we clarified their messaging and highlighted their full suite of services.
                </p>
                <p>
                  The key insight: <strong className="text-primary-foreground">tactical vendors solve tasks; strategic partners address business outcomes</strong>. We positioned OrviumHR to help solve systemic issues—not just staffing gaps.
                </p>
              </div>

              <div className="mt-12 space-y-4">
                {approach.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div 
                      className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0"
                      style={{ backgroundColor: purpleAccent }}
                    />
                    <p className="text-primary-foreground/80">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="overflow-hidden rounded-2xl border border-primary-foreground/10">
                <img 
                  src={orviumhrGraphic} 
                  alt="OrviumHR Strategic Framework" 
                  className="w-full h-auto"
                />
              </div>

              <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-8">
                <p className="font-medium tracking-wide mb-4 text-sm" style={{ color: purpleAccent }}>
                  Deliverables
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {deliverables.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div 
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: purpleAccent }}
                      />
                      <p className="text-primary-foreground/80 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Messaging */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-medium tracking-wide mb-8 text-sm" style={{ color: purpleAccent }}>
              Key Messaging
            </p>
            <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight">
              "Because when you can see 
              <span style={{ color: purpleAccent }}> the invisible</span>, you create 
              <span className="text-outline"> the extraordinary.</span>"
            </blockquote>
          </div>
        </div>
      </section>

      {/* The Outcome */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <p className="font-medium tracking-wide mb-4 text-sm" style={{ color: purpleAccent }}>
              The Outcome
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-8">
              A stronger brand
              <br />
              <span className="text-outline">built to lead.</span>
            </h2>
            <div className="space-y-5 text-primary-foreground/70 text-lg leading-relaxed">
              <p>
                The result was a stronger OrviumHR brand that stood out in a crowded market and clearly communicated <strong className="text-primary-foreground">long-term value to clients</strong>.
              </p>
              <p>
                By reframing their story and shifting perception from "vendor" to "strategic partner," OrviumHR is now positioned to lead a bold evolution—owning the conversation around <strong className="text-primary-foreground">ethical, effective AI-driven hiring</strong> with real outcomes.
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div 
                className="p-6 rounded-2xl text-center"
                style={{ backgroundColor: `${purpleAccent}15`, border: `1px solid ${purpleAccent}30` }}
              >
                <p className="font-display text-2xl font-bold mb-2" style={{ color: purpleAccent }}>Clear WHY</p>
                <p className="text-primary-foreground/70 text-sm">Established strategic positioning</p>
              </div>
              <div 
                className="p-6 rounded-2xl text-center"
                style={{ backgroundColor: `${purpleAccent}15`, border: `1px solid ${purpleAccent}30` }}
              >
                <p className="font-display text-2xl font-bold mb-2" style={{ color: purpleAccent }}>AI + Human</p>
                <p className="text-primary-foreground/70 text-sm">Owning the narrative</p>
              </div>
              <div 
                className="p-6 rounded-2xl text-center"
                style={{ backgroundColor: `${purpleAccent}15`, border: `1px solid ${purpleAccent}30` }}
              >
                <p className="font-display text-2xl font-bold mb-2" style={{ color: purpleAccent }}>Voice of Authority</p>
                <p className="text-primary-foreground/70 text-sm">Market leadership positioning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-primary-foreground/60 mb-4">Interested in brand strategy?</p>
          <Link 
            to="/#contact"
            className="inline-flex items-center gap-2 font-display text-xl font-bold hover:opacity-80 transition-opacity"
            style={{ color: purpleAccent }}
          >
            Let's connect
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyOrviumHR;
