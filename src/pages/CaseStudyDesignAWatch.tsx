import { useEffect } from "react";
import { ArrowLeft, Calendar, Target, TrendingUp, Award, Globe, Layers, Users, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import designAWatchHero from "@/assets/design-a-watch.png";
import designAWatchTablet from "@/assets/design-a-watch-tablet.png";
import designAWatchDesktop from "@/assets/design-a-watch-desktop.png";
import designAWatchMobile from "@/assets/design-a-watch-mobile.png";
import designAWatchConcept1 from "@/assets/design-a-watch-concept1.jpg";
import designAWatchConcept2 from "@/assets/design-a-watch-concept2.jpg";
import designAWatchConcept3 from "@/assets/design-a-watch-concept3.jpg";
import designAWatchConcept4 from "@/assets/design-a-watch-concept4.jpg";

const CaseStudyDesignAWatch = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const metrics = [
    { label: "Global Rollout", value: "Fossil.com", icon: Globe },
    { label: "Platform", value: "Scalable", icon: Layers },
    { label: "Experience", value: "Personalized", icon: Award },
  ];

  const approach = [
    {
      icon: Target,
      title: "Scale What Worked",
      points: [
        "Leveraged proven component logic from Defender project",
        "Expanded customization to include bezels, faces, top rings, cases, and straps",
        "Created a flexible framework for future product lines",
      ],
    },
    {
      icon: Palette,
      title: "Deep Customization",
      points: [
        "Enabled customers to design truly unique timepieces",
        "Built intuitive configuration flows with clear guardrails",
        "Balanced design freedom with manufacturing constraints",
      ],
    },
    {
      icon: Globe,
      title: "Global Platform",
      points: [
        "Deployed across Fossil.com international markets",
        "Optimized for diverse regional preferences",
        "Ensured consistent experience across all touchpoints",
      ],
    },
    {
      icon: Users,
      title: "Customer Connection",
      points: [
        "Transformed customization into personal storytelling",
        "Empowered customers to express individual style",
        "Created emotional connection through design ownership",
      ],
    },
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
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={designAWatchHero} 
            alt="Design A Watch customization platform" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/50" />
        </div>

        <div className="relative container mx-auto px-6 pt-32 pb-24">
          <div className="max-w-5xl">
            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 mb-8 opacity-0 animate-fade-up">
              <span className="px-4 py-1.5 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20">
                Digital Experience
              </span>
              <span className="flex items-center gap-2 text-sm text-primary-foreground/50">
                <Calendar className="w-4 h-4" />
                2015 – 2016
              </span>
            </div>

            {/* Main headline */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[7rem] font-bold leading-[0.95] mb-8 opacity-0 animate-fade-up stagger-1">
              <span className="text-primary-foreground">Design</span>
              <br />
              <span className="text-outline">A Watch</span>
            </h1>

            <p className="text-primary-foreground/60 text-xl md:text-2xl max-w-2xl leading-relaxed opacity-0 animate-fade-up stagger-2">
              Expanding the Defender's modular customization platform to a 
              <span className="text-accent font-medium"> global "Design A Watch" feature on Fossil.com.</span>
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
            {metrics.map((metric, index) => (
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
                Scaling
                <br />
                <span className="text-outline">customization.</span>
              </h2>
              <div className="space-y-5 text-primary-foreground/60 text-lg leading-relaxed">
                <p>
                  Following the success of the Defender Build-A-Watch platform, Fossil wanted to expand the modular customization capability across their entire watch portfolio.
                </p>
                <p>
                  The challenge was to scale the technology and experience globally while enabling even deeper customization options—bezels, faces, top rings, cases, and straps.
                </p>
              </div>
            </div>

            {/* Solution */}
            <div>
              <p className="text-accent font-medium tracking-wide mb-4 text-sm">
                The Solution
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-8">
                Global
                <br />
                <span className="text-outline">platform.</span>
              </h2>
              <div className="space-y-5 text-primary-foreground/60 text-lg leading-relaxed">
                <p>
                  We leveraged the existing component logic and configuration flows from the Defender project to create a <strong className="text-primary-foreground">flexible, scalable platform</strong> for the entire Fossil.com experience.
                </p>
                <p>
                  The experience transformed customization into connection—empowering customers to tell their story through design.
                </p>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="mt-16 rounded-2xl overflow-hidden border border-primary-foreground/10">
            <img 
              src={designAWatchTablet} 
              alt="Design A Watch tablet experience" 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* 2-Column Image Gallery */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-primary-foreground/10">
              <img 
                src={designAWatchDesktop} 
                alt="Design A Watch desktop customizer" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-primary-foreground/10">
              <img 
                src={designAWatchMobile} 
                alt="Design A Watch mobile layouts" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* 4-Column Concept Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            <div className="aspect-[3/5] rounded-2xl overflow-hidden border border-primary-foreground/10">
              <img 
                src={designAWatchConcept1} 
                alt="Design A Watch dial customization" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="aspect-[3/5] rounded-2xl overflow-hidden border border-primary-foreground/10">
              <img 
                src={designAWatchConcept3} 
                alt="Design A Watch engraving feature" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="aspect-[3/5] rounded-2xl overflow-hidden border border-primary-foreground/10">
              <img 
                src={designAWatchConcept2} 
                alt="Design A Watch case selection" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="aspect-[3/5] rounded-2xl overflow-hidden border border-primary-foreground/10">
              <img 
                src={designAWatchConcept4} 
                alt="Design A Watch strap options" 
                className="w-full h-full object-cover object-top"
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
            {approach.map((item, index) => (
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
              Platform
              <br />
              <span className="text-outline-accent">evolution.</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-10 text-center">
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">Scalable Success</h3>
            <p className="text-primary-foreground/60 leading-relaxed text-lg">
              Design A Watch became a cornerstone feature on Fossil.com, expanding the customization capabilities pioneered by the Defender project. The flexible, scalable platform continues to evolve—enabling new product lines, deeper personalization options, and stronger customer connections worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-3">
                Want to see more?
              </h3>
              <p className="text-primary-foreground/60">
                Explore other projects from my portfolio.
              </p>
            </div>
            <Link 
              to="/case-studies"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-primary font-semibold rounded-full hover:bg-accent/90 transition-colors duration-300"
            >
              View All Case Studies
              <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-primary-foreground/10 bg-primary">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-primary-foreground/40 text-sm">
              © 2024 Ron Brissette. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/in/ronbrissette/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 hover:text-accent transition-colors duration-300 text-sm">
                LinkedIn
              </a>
              <a href="mailto:ron@morbycreate.com" className="text-primary-foreground/40 hover:text-accent transition-colors duration-300 text-sm">
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CaseStudyDesignAWatch;
