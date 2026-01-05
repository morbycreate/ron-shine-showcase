import { useEffect } from "react";
import { ArrowLeft, Target, Users, Layers, Briefcase, TrendingUp, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import slalomHero from "@/assets/slalom-hero.png";
import americanAirlinesLogo from "@/assets/logos/american-airlines.png";
import attLogo from "@/assets/logos/att.png";
import nikeLogo from "@/assets/logos/nike.png";
import awsLogo from "@/assets/logos/aws.png";
import citiLogo from "@/assets/logos/citi.png";
import polarisLogo from "@/assets/logos/polaris.png";
import mayoClinicLogo from "@/assets/logos/mayo-clinic.png";
import goldmanSachsLogo from "@/assets/logos/goldman-sachs.png";
import purinaLogo from "@/assets/logos/purina.png";
import nasdaqLogo from "@/assets/logos/nasdaq.png";
import marsLogo from "@/assets/logos/mars.png";
import threeMlogo from "@/assets/logos/3m.png";
import ameripriseLogo from "@/assets/logos/ameriprise.png";
import amazonLogo from "@/assets/logos/amazon.png";
import virginVoyagesLogo from "@/assets/logos/virgin-voyages.png";
import spectrumLogo from "@/assets/logos/spectrum.png";
import wellsFargoLogo from "@/assets/logos/wells-fargo.png";
import hertzLogo from "@/assets/logos/hertz.png";
import unitedHealthcareLogo from "@/assets/logos/united-healthcare.png";
import bluecrossBlueshieldLogo from "@/assets/logos/bluecross-blueshield.png";
import humanaLogo from "@/assets/logos/humana.png";

const CaseStudySlalom = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const metrics = [
    { label: "Pipeline Generated", value: "$60M", icon: TrendingUp },
    { label: "Team Growth", value: "2 → 10", icon: Users },
    { label: "Adoption", value: "30+ Offices", icon: Globe },
  ];

  const whatIBuilt = [
    {
      icon: Users,
      title: "Creative & Experience Team",
      points: [
        "Built a new Creative & Experience Services team from the ground up",
        "Scaled the team from 2 to 10 in one year through strategic hiring",
        "Established multidisciplinary teams delivering B2B, B2E, and platform experiences",
      ],
    },
    {
      icon: Layers,
      title: "Delivery Standards",
      points: [
        "Defined hiring models, workflows, and delivery standards",
        "Created shared experience frameworks adopted across 30+ offices",
        "Built repeatable processes for consistent enterprise UX delivery",
      ],
    },
    {
      icon: Briefcase,
      title: "Leadership Alignment",
      points: [
        "Bridged sales, delivery, and client outcomes",
        "Aligned leadership across regions on experience offering",
        "Enabled Slalom's position as a serious experience partner",
      ],
    },
  ];

  const deliverables = [
    {
      icon: Target,
      title: "Enterprise Delivery",
      description: "Consistent UX delivery across regions for Fortune 500 clients in complex, regulated industries.",
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "$60M in pipeline generated through elevated experience capabilities and strategic positioning.",
    },
    {
      icon: Globe,
      title: "Scalable Framework",
      description: "Experience frameworks adopted across 30+ offices, enabling consistent quality at scale.",
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
            <span className="hover-underline text-sm font-medium">Back to Experience</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={slalomHero} 
            alt="Slalom Create" 
            className="w-full h-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/50" />
        </div>

        <div className="relative container mx-auto px-6 pt-32 pb-24">
          <div className="max-w-5xl">
            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 mb-8 opacity-0 animate-fade-up">
              <span className="px-4 py-1.5 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20">
                Leadership
              </span>
              <span className="text-primary-foreground/40 text-sm">Slalom Consulting</span>
            </div>

            {/* Main headline */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[7rem] font-bold leading-[0.95] mb-8 opacity-0 animate-fade-up stagger-1">
              <span className="text-primary-foreground">Building a</span>
              <br />
              <span className="text-outline">scalable experience</span>
              <br />
              <span className="text-accent">capability</span>
            </h1>

            <p className="text-primary-foreground/60 text-xl md:text-2xl max-w-2xl leading-relaxed opacity-0 animate-fade-up stagger-2">
              To win and deliver
              <span className="text-accent font-medium"> enterprise-scale work for Fortune 500 clients.</span>
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
                Build a world-class
                <br />
                <span className="text-outline">experience team.</span>
              </h2>
              <div className="space-y-5 text-primary-foreground/60 text-lg leading-relaxed">
                <p>
                  <strong className="text-primary-foreground">Build a credible, scalable experience capability</strong> that could win and deliver enterprise-scale work for Fortune 500 clients.
                </p>
              </div>
            </div>

            {/* The Challenge */}
            <div>
              <p className="text-accent font-medium tracking-wide mb-4 text-sm">
                The Challenge
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-8">
                Elevate UX
                <br />
                <span className="text-outline">across regions.</span>
              </h2>
              <div className="space-y-5 text-primary-foreground/60 text-lg leading-relaxed">
                <p>
                  Slalom needed to elevate its creative and digital experience offering across regions—while supporting complex, <strong className="text-primary-foreground">regulated clients</strong> and accelerating growth.
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
              Bridging sales,
              <br />
              <span className="text-outline">delivery & outcomes.</span>
            </h2>
            <p className="text-primary-foreground/60 text-xl leading-relaxed">
              I built the team, defined the offering, aligned leadership, and ensured delivery excellence—bridging sales, delivery, and client outcomes.
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
              Foundation for
              <br />
              <span className="text-outline">enterprise growth.</span>
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

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-10 text-center hover:border-accent/30 transition-colors duration-300">
              <p className="text-4xl md:text-5xl font-display font-bold text-gradient mb-3">$60M</p>
              <p className="text-primary-foreground/60">Pipeline generated</p>
            </div>
            <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-10 text-center hover:border-accent/30 transition-colors duration-300">
              <p className="text-4xl md:text-5xl font-display font-bold text-gradient mb-3">2 → 10</p>
              <p className="text-primary-foreground/60">Team scaled in one year</p>
            </div>
            <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-10 text-center hover:border-accent/30 transition-colors duration-300">
              <p className="text-4xl md:text-5xl font-display font-bold text-gradient mb-3">30+</p>
              <p className="text-primary-foreground/60">Offices adopted framework</p>
            </div>
            <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-10 text-center hover:border-accent/30 transition-colors duration-300">
              <p className="text-4xl md:text-5xl font-display font-bold text-gradient mb-3">F500</p>
              <p className="text-primary-foreground/60">Client portfolio elevated</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-10 text-center">
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">Elevated Positioning</h3>
            <p className="text-primary-foreground/60 leading-relaxed text-lg">
              Elevated Slalom's position as a serious experience partner capable of winning and delivering enterprise-scale work for Fortune 500 clients across complex, regulated industries.
            </p>
          </div>
        </div>
      </section>

      {/* Brands Supported Section */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16">
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              Brands
              <br />
              <span className="text-outline">Supported</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            {[
              { name: "American Airlines", logo: americanAirlinesLogo },
              { name: "AT&T", logo: attLogo },
              { name: "Nike", logo: nikeLogo },
              { name: "AWS", logo: awsLogo },
              { name: "Citi", logo: citiLogo },
              { name: "Polaris", logo: polarisLogo },
              { name: "Mayo Clinic", logo: mayoClinicLogo },
              { name: "Goldman Sachs", logo: goldmanSachsLogo },
              { name: "Purina", logo: purinaLogo },
              { name: "Nasdaq", logo: nasdaqLogo },
              { name: "Mars", logo: marsLogo },
              { name: "3M", logo: threeMlogo },
              { name: "Ameriprise", logo: ameripriseLogo },
              { name: "Amazon", logo: amazonLogo },
              { name: "Virgin Voyages", logo: virginVoyagesLogo },
              { name: "Spectrum", logo: spectrumLogo },
              { name: "Wells Fargo", logo: wellsFargoLogo },
              { name: "Hertz", logo: hertzLogo },
              { name: "United Healthcare", logo: unitedHealthcareLogo },
              { name: "BlueCross BlueShield", logo: bluecrossBlueshieldLogo },
              { name: "Humana", logo: humanaLogo },
            ].map((client) => (
              <div key={client.name}>
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="h-40 md:h-48 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default CaseStudySlalom;