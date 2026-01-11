import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import sabreHero from "@/assets/sabre-hero.png";
import sabreAssetsCollage from "@/assets/sabre-assets-collage.png";
import sabreWebsiteMockup from "@/assets/sabre-website-mockup.png";
import sabrePosterMock from "@/assets/sabre-poster-mock.png";
import sabreAd from "@/assets/sabre-ad.png";
import sabreSignage from "@/assets/sabre-signage.png";
import sabreRedImage from "@/assets/sabre-red-image.png";
import sabreLogo from "@/assets/logos/sabre.png";

// Custom purple accent for this page
const purpleAccent = "rgb(168, 85, 247)";

const CaseStudySabreBrand = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const approachItems = [
    {
      title: "Led a global brand refresh",
      description: "Aligned executives, internal teams, and external agencies around a bold, cohesive brand vision—ensuring the company's identity matched its leadership position in the travel-software market.",
    },
    {
      title: "Delivered enterprise-wide creative support",
      description: "Supported three major business units serving airlines, hoteliers, agencies, and global partners. Managed everything from integrated marketing campaigns and event identities to internal storytelling and executive comms.",
    },
    {
      title: "Overhauled creative operations",
      description: "Streamlined intake, prioritization, and workflows—bringing clarity to what was previously chaotic. Introduced crystal-clear communication rhythms and project-tracking practices that boosted client satisfaction within six months.",
    },
    {
      title: "Built a culture of brand excellence",
      description: "Launched company-wide training and playbooks that elevated brand consistency and quality. Guided creative, marketing, and comms teams to produce global work with precision, speed, and impact.",
    },
  ];

  const outcomes = [
    "A unified brand vision adopted across the enterprise",
    "Faster, more predictable creative delivery with stronger cross-team alignment",
    "Measurably higher satisfaction from business stakeholders",
    "A creative team operating with confidence, clarity, and a shared sense of purpose",
  ];

  return (
    <div className="min-h-screen bg-primary">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-md border-b border-primary-foreground/10">
        <div className="container mx-auto px-6 py-4">
          <Link 
            to="/overview#experience"
            className="group inline-flex items-center gap-3 text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300"
            style={{ "--hover-color": purpleAccent } as React.CSSProperties}
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
            src={sabreHero} 
            alt="Sabre network visualization" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/60" />
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
                Brand & Creative
              </span>
              <span className="text-primary-foreground/40 text-sm">Sabre Corporation</span>
            </div>

            {/* Main headline */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[7rem] font-bold leading-[0.95] mb-8 opacity-0 animate-fade-up stagger-1">
              <span className="text-primary-foreground">Sharpening a</span>
              <br />
              <span style={{ color: purpleAccent }}>sabre's edge</span>
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
              Modernizing a 30-year-old
              <br />
              <span className="text-outline">global brand.</span>
            </h2>
            <div className="space-y-5 text-primary-foreground/70 text-lg leading-relaxed">
              <p>
                Sabre Corporation, one of the world's largest travel global distribution systems in the world, realized they needed to <strong className="text-primary-foreground">modernize their 30-year-old global brand</strong> to better reflect the company's transformation from a legacy travel system to a new vision of a company looking to be a transformational company capable of reimagining the business of travel.
              </p>
              <p>
                To modernize its brand, Sabre needed to <strong className="text-primary-foreground">unify fragmented creative efforts</strong> across three business units, and bring order to an overwhelming volume of marketing, communications, and campaign requests. Internal teams, agency partners, and global stakeholders were misaligned, slowing execution and diluting brand impact.
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
              Strategic brand
              <br />
              <span className="text-outline">transformation.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            {approachItems.map((item, index) => (
              <div
                key={item.title}
                className="group bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-8 hover:border-primary-foreground/20 transition-all duration-300"
                style={{ 
                  "--hover-border": `${purpleAccent}40`
                } as React.CSSProperties}
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

      {/* Image Gallery - Brand Assets */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          {/* Full width collage */}
          <div className="mb-8 overflow-hidden rounded-2xl border border-primary-foreground/10">
            <img
              src={sabreAssetsCollage}
              alt="Sabre brand assets collage"
              className="w-full h-auto"
            />
          </div>

          {/* 2-column grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10">
              <img
                src={sabreWebsiteMockup}
                alt="Sabre website design"
                className="w-full h-auto"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10">
              <img
                src={sabrePosterMock}
                alt="SabreNext poster mockup"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* 3-column grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10">
              <img
                src={sabreAd}
                alt="Sabre advertisement"
                className="w-full h-auto"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10">
              <img
                src={sabreSignage}
                alt="Sabre signage"
                className="w-full h-auto"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10">
              <img
                src={sabreRedImage}
                alt="Sabre Red platform"
                className="w-full h-auto"
              />
            </div>
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
              Unified brand.
              <br />
              <span className="text-outline">Elevated team.</span>
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
              src={sabreLogo} 
              alt="Sabre Corporation" 
              className="h-32 md:h-40 w-auto object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudySabreBrand;
