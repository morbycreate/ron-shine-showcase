import { Link } from "react-router-dom";
import { ArrowLeft, ChevronDown } from "lucide-react";
import thrPreview from "@/assets/thr-preview-new.png";
import sabreAssetsCollage from "@/assets/sabre-assets-collage.png";

// Custom purple accent for this page
const purpleAccent = "rgb(168, 85, 247)"; // Modern violet-500

const Overview = () => {
  const accomplishments = [
    "Built Slalom's Global Creative & Digital Services capability from inception, generating $60M in new pipeline within six months",
    "Led American Airlines' enterprise rebrand and brand system evolution, contributing to +11.4 YouGov Buzz, the strongest gain in the airline category",
    "Drove 23% YoY e-commerce growth at Fossil through improved product storytelling, PDP optimization, and retail-aligned experience design",
    "Scaled creative and experience teams from 2 → 10 and 3 → 30+, supporting enterprise and global consulting environments",
    "Established enterprise-wide brand standards, governance models, and design systems adopted across regions and business units",
  ];

  const scrollToExperience = () => {
    const element = document.querySelector("#experience");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-primary" style={{ "--page-accent": purpleAccent } as React.CSSProperties}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-md border-b border-border/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-primary overflow-hidden pt-16">
        {/* Background gradient */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 70% 30%, ${purpleAccent} 0%, transparent 50%)`,
            }}
          />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto lg:mx-0">
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-12 opacity-0 animate-fade-up">
              <div className="w-12 h-px" style={{ backgroundColor: purpleAccent }} />
              <p className="text-xs uppercase tracking-[0.25em] font-medium" style={{ color: purpleAccent }}>
                15+ Years in UX Leadership
              </p>
            </div>

            {/* Main headline */}
            <h1 className="font-display leading-[0.95] mb-10 opacity-0 animate-fade-up stagger-1">
              <span className="block text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-primary-foreground">
                Chief Creative
              </span>
              <span className="block text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-outline">
                & Brand Leader.
              </span>
              <span className="block text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold">
                <span style={{ color: purpleAccent }}>Design</span>{" "}
                <span className="text-outline">leader.</span>
              </span>
              <span className="block text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold">
                <span className="text-primary-foreground">Culture</span>{" "}
                <span className="text-outline" style={{ WebkitTextStrokeColor: purpleAccent }}>Builder.</span>
              </span>
            </h1>

            {/* Tagline */}
            <div className="max-w-lg opacity-0 animate-fade-up stagger-2">
              <p className="text-primary-foreground/50 text-base md:text-lg leading-relaxed font-light">
                I lead from vision to execution—scaling teams, systems, and delivery to create real, measurable impact.
              </p>
            </div>

            {/* CTA area */}
            <div className="mt-16 flex items-center gap-8 opacity-0 animate-fade-up stagger-3">
              <button
                onClick={scrollToExperience}
                className="group flex items-center gap-3 text-primary-foreground transition-colors duration-500"
                style={{ "--hover-color": purpleAccent } as React.CSSProperties}
              >
                <span className="text-sm font-medium tracking-wide">View Work</span>
                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
              </button>
              <div className="w-px h-6 bg-primary-foreground/20" />
              <Link
                to="/#contact"
                className="text-sm text-primary-foreground/40 hover:text-primary-foreground transition-colors duration-300"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>

        {/* Subtle corner accent */}
        <div className="absolute bottom-8 right-8 flex items-center gap-3 text-primary-foreground/20 text-xs tracking-widest opacity-0 animate-fade-up stagger-4">
          <span>01</span>
          <div className="w-8 h-px bg-current" />
          <span>01</span>
        </div>
      </section>

      {/* Proven Business Impact Section */}
      <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 30% 50%, ${purpleAccent} 0%, transparent 50%)`,
            }}
          />
        </div>

        <div className="relative container mx-auto px-6">
          {/* Section intro */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              Proven Business <span className="text-outline">Impact</span>
            </h2>
          </div>

          {/* Accomplishments list */}
          <div className="max-w-4xl">
            <ul className="space-y-6">
              {accomplishments.map((item, index) => (
                <li 
                  key={index}
                  className="flex gap-4 items-start group"
                >
                  <span 
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-sm transition-all duration-300"
                    style={{ 
                      backgroundColor: `${purpleAccent}15`, 
                      borderColor: `${purpleAccent}50`, 
                      borderWidth: '1px',
                      color: purpleAccent 
                    }}>
                    {index + 1}
                  </span>
                  <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed pt-0.5">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* My Experience Section */}
      <section id="experience" className="py-24 md:py-32 bg-primary relative overflow-hidden">
        <div className="relative container mx-auto px-6">
          {/* Section header */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              My <span className="text-outline">Experience</span>
            </h2>
          </div>

          {/* Case Study Preview Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            {/* Sabre Brand Preview Card */}
            <Link
              to="/sabre-brand"
              className="group block"
            >
              <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={sabreAssetsCollage}
                    alt="Sabre Brand Transformation"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm font-medium uppercase tracking-wider" style={{ color: purpleAccent }}>
                    Brand & Creative
                  </span>
                  <h3 className="text-2xl font-bold mt-2 text-primary-foreground transition-colors group-hover:opacity-80">
                    Sharpening a Sabre's Edge
                  </h3>
                  <p className="text-primary-foreground/60 mt-2">
                    Modernized a 30-year-old global brand to reflect the company's transformation from legacy systems to reimagining travel.
                  </p>
                </div>
              </div>
            </Link>

            {/* THR Preview Card */}
            <Link
              to="/texas-health"
              className="group block"
            >
              <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={thrPreview}
                    alt="Texas Health Resources Website Redesign"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm font-medium uppercase tracking-wider" style={{ color: purpleAccent }}>
                    Digital Experience
                  </span>
                  <h3 className="text-2xl font-bold mt-2 text-primary-foreground transition-colors group-hover:opacity-80">
                    Texas Health Resources Website Redesign
                  </h3>
                  <p className="text-primary-foreground/60 mt-2">
                    Redesigned the digital ecosystem for one of the largest faith-based nonprofit health systems in the US.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;
