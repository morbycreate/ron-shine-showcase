import { useEffect } from "react";
import { ArrowLeft, Target, Users, Layers, Palette, BookOpen, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import aaUxTeam from "@/assets/aa-ux-team.png";
import aaGuiKits from "@/assets/aa-gui-kits.jpg";
import aaMobile1 from "@/assets/aa-mobile-1.jpg";
import aaMobile2 from "@/assets/aa-mobile-2.jpg";
import aaWeb from "@/assets/aa-web.jpg";
import aaKiosks from "@/assets/aa-kiosks.jpg";
import aaMobileApp from "@/assets/aa-mobile-app.jpg";
import aaEnvironments from "@/assets/aa-environments.jpg";
import aaWebsites from "@/assets/aa-websites.png";

const CaseStudyAAUX = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const metrics = [
    { label: "Team Growth", value: "3 → 30", icon: Users },
    { label: "Practice Built", value: "From Scratch", icon: Layers },
    { label: "Approach", value: "Enterprise Scale", icon: Workflow },
  ];

  const whatIBuilt = [
    {
      icon: Users,
      title: "The First UX Team",
      points: [
        "Scaled from 3 to 30 members, including information architects, visual designers, interaction designers, UX developers, and content strategists",
        "Defined the team structure, hiring profile, and cross-functional engagement model",
        "Established career paths and competency frameworks for sustained growth",
      ],
    },
    {
      icon: Workflow,
      title: "Scalable UX Practice",
      points: [
        "Introduced strategy briefs, journey frameworks, wireframes, and interactive prototypes",
        "Created cross-functional operating rhythms with Marketing, IT, and business teams",
        "Built design review and governance processes for quality and consistency",
      ],
    },
    {
      icon: Palette,
      title: "Digital Design Standards",
      points: [
        "Created unified foundations including modular interaction patterns and style guides",
        "Developed global UX principles for web, mobile, kiosk, and airport experiences",
        "Established iOS design standards aligned with Apple HIG and brand identity",
      ],
    },
  ];

  const deliverables = [
    {
      icon: Target,
      title: "AA.com Redesign",
      description: "The first major redesign in seven years, covering revenue/award booking, check-in, and loyalty features.",
    },
    {
      icon: Layers,
      title: "Omnichannel Alignment",
      description: "Synchronized web and iOS surfaces for a cohesive customer journey across all touchpoints.",
    },
    {
      icon: BookOpen,
      title: "Organizational Alignment",
      description: "Partnered across departments to ensure the digital story matched operational reality.",
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
            src={aaUxTeam} 
            alt="American Airlines UX Team" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/50" />
        </div>

        <div className="relative container mx-auto px-6 pt-32 pb-24">
          <div className="max-w-5xl">
            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 mb-8 opacity-0 animate-fade-up">
              <span className="px-4 py-1.5 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20">
                Experience Design
              </span>
            </div>

            {/* Main headline */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[7rem] font-bold leading-[0.95] mb-8 opacity-0 animate-fade-up stagger-1">
              <span className="text-primary-foreground">Building AA's</span>
              <br />
              <span className="text-outline">First UX</span>
              <br />
              <span className="text-accent">Organization</span>
            </h1>

            <p className="text-primary-foreground/60 text-xl md:text-2xl max-w-2xl leading-relaxed opacity-0 animate-fade-up stagger-2">
              Transforming American Airlines' digital presence by establishing 
              <span className="text-accent font-medium"> its first formal UX discipline.</span>
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

      {/* The Mandate */}
      <section className="py-24 md:py-32 bg-primary">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Challenge */}
            <div>
              <p className="text-accent font-medium tracking-wide mb-4 text-sm">
                The Mandate
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-8">
                Build UX from
                <br />
                <span className="text-outline">the ground up.</span>
              </h2>
              <div className="space-y-5 text-primary-foreground/60 text-lg leading-relaxed">
                <p>
                  <strong className="text-primary-foreground">No formal UX discipline.</strong> No design standards. A seven-year-old digital interface. American Airlines needed a complete transformation of how they approached customer experience.
                </p>
                <p>
                  I was brought in to build the UX function from scratch and modernize core digital experiences across web, mobile, and airport touchpoints.
                </p>
              </div>
            </div>

            {/* Context */}
            <div>
              <p className="text-accent font-medium tracking-wide mb-4 text-sm">
                The Context
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-8">
                Fragmented
                <br />
                <span className="text-outline">workflows.</span>
              </h2>
              <div className="space-y-5 text-primary-foreground/60 text-lg leading-relaxed">
                <p>
                  Marketing, IT, and business teams operated in silos with no cohesive approach to customer experience design.
                </p>
                <p>
                  The digital presence had grown organically over seven years without a unified vision, resulting in <strong className="text-primary-foreground">inconsistent experiences</strong> and missed opportunities to serve customers effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Built */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16">
            <p className="text-accent font-medium tracking-wide mb-4 text-sm">
              What I Built
            </p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              Foundation for
              <br />
              <span className="text-outline">enterprise UX.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
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
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 aspect-[4/3]">
              <img 
                src={aaGuiKits} 
                alt="Digital GUI Kits and Design System" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 aspect-[4/3]">
              <img 
                src={aaWeb} 
                alt="AA.com Website Redesign" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 aspect-[4/3]">
              <img 
                src={aaWebsites} 
                alt="American Airlines Website Screens" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 aspect-[4/3]">
              <img 
                src={aaMobile1} 
                alt="iOS Mobile App Design" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 aspect-[4/3]">
              <img 
                src={aaMobile2} 
                alt="Mobile App Experience" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 aspect-[4/3]">
              <img 
                src={aaMobileApp} 
                alt="AA Mobile App iOS7" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 aspect-[4/3]">
              <img 
                src={aaKiosks} 
                alt="Kiosk Interface Design" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 aspect-[4/3] md:col-span-2">
              <img 
                src={aaEnvironments} 
                alt="Airport Environment Experiences" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results & Deliverables */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-accent font-medium tracking-wide mb-4 text-sm">
              Results & Deliverables
            </p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              Enterprise-scale
              <br />
              <span className="text-outline-accent">transformation.</span>
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
              <p className="text-5xl md:text-6xl font-display font-bold text-gradient mb-3">3 → 30</p>
              <p className="text-primary-foreground/60">Team members scaled through strategic hiring</p>
            </div>
            <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-10 text-center hover:border-accent/30 transition-colors duration-300">
              <p className="text-5xl md:text-6xl font-display font-bold text-gradient mb-3">7 Years</p>
              <p className="text-primary-foreground/60">First major redesign since original launch</p>
            </div>
            <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-10 text-center hover:border-accent/30 transition-colors duration-300">
              <p className="text-5xl md:text-6xl font-display font-bold text-gradient mb-3">Global</p>
              <p className="text-primary-foreground/60">Unified standards across all digital channels</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-10 text-center">
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">A Lasting Foundation</h3>
            <p className="text-primary-foreground/60 leading-relaxed text-lg">
              The UX organization, design systems, and operating models established during this engagement became the foundation for American Airlines' continued digital evolution—including the brand's first major rebrand in 40+ years.
            </p>
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

export default CaseStudyAAUX;