import { useEffect } from "react";
import { ArrowLeft, Calendar, Target, TrendingUp, Users, Search, Layers, Palette, ShoppingCart, Watch } from "lucide-react";
import { Link } from "react-router-dom";
import fossilPreview from "@/assets/fossil-site-preview.png";
import fossilHp from "@/assets/fossil-hp.png";
import fossil2upDesktop from "@/assets/fossil-2up-desktop.png";
import fossilMobile3up from "@/assets/fossil-mobile-3up.png";
import designAWatch from "@/assets/design-a-watch.png";
import fossilAd from "@/assets/fossil-ad.jpg";
import fossilPdp from "@/assets/fossil-pdp.jpg";
import fossilSocial from "@/assets/fossil-social.jpg";
import fossilDigitalDesign from "@/assets/fossil-digital-design.jpg";

const CaseStudyFossil = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const metrics = [
    { label: "E-commerce Growth", value: "+23%", icon: TrendingUp },
    { label: "Industry Recognition", value: "L2 Digital Genius", icon: Target },
    { label: "Brand Portfolio", value: "Multi-brand", icon: Watch },
  ];

  const approach = [
    {
      icon: Users,
      title: "Team Transformation",
      points: [
        "Rebuilt and upskilled the digital design team to support modern commerce",
        "Established design leadership and creative direction across all digital channels",
        "Created cross-functional collaboration between design, development, and marketing",
      ],
    },
    {
      icon: Layers,
      title: "Platform Modernization",
      points: [
        "Redesigned and replatformed both mobile app and website",
        "Created responsive, mobile-first commerce experience",
        "Unified brand experience across Fossil's diverse portfolio",
      ],
    },
    {
      icon: Palette,
      title: "Digital Vision",
      points: [
        "Developed cross-brand digital vision and design system",
        "Created unified seasonal campaigns across all channels",
        "Established visual guidelines for storytelling and personalization",
      ],
    },
    {
      icon: ShoppingCart,
      title: "Commerce Innovation",
      points: [
        "Launched 'Design A Watch' product customization feature",
        "Built global configuration flows with component logic and engraving",
        "Enabled personalized shopping experiences across markets",
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
            src={fossilPreview} 
            alt="Fossil.com Website Redesign" 
            className="w-full h-full object-cover object-[50%_20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/50" />
        </div>


        <div className="relative container mx-auto px-6 pt-32 pb-24">
          <div className="max-w-5xl">
            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 mb-8 opacity-0 animate-fade-up">
              <span className="px-4 py-1.5 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20">
                E-commerce Redesign
              </span>
              <span className="flex items-center gap-2 text-sm text-primary-foreground/50">
                <Calendar className="w-4 h-4" />
                2014-2015
              </span>
            </div>

            {/* Main headline */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[7rem] font-bold leading-[0.95] mb-8 opacity-0 animate-fade-up stagger-1">
              <span className="text-primary-foreground">Fossil.com</span>
              <br />
              <span className="text-outline">Redesign</span>
            </h1>

            <p className="text-primary-foreground/60 text-xl md:text-2xl max-w-2xl leading-relaxed opacity-0 animate-fade-up stagger-2">
              A Timely Update: 
              <span className="text-accent font-medium"> Modernizing digital commerce for a heritage brand.</span>
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
                Heritage meets
                <br />
                <span className="text-outline">digital.</span>
              </h2>
              <div className="space-y-5 text-primary-foreground/60 text-lg leading-relaxed">
                <p>
                  <strong className="text-primary-foreground">Fossil</strong> needed to modernize its outdated, fragmented digital presence to support storytelling, personalization, and commerce growth.
                </p>
                <p>
                  With a diverse brand portfolio including Tory Burch, Michael Kors, Kate Spade, and Armani, the challenge was creating a unified yet flexible digital experience that could scale across all brands.
                </p>
              </div>
            </div>

            {/* Solution */}
            <div>
              <p className="text-accent font-medium tracking-wide mb-4 text-sm">
                The Solution
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-8">
                Complete digital
                <br />
                <span className="text-outline">transformation.</span>
              </h2>
              <div className="space-y-5 text-primary-foreground/60 text-lg leading-relaxed">
                <p>
                  We rebuilt the digital design team and established creative leadership across all channels, creating a foundation for modern commerce.
                </p>
                <p>
                  The result was a <strong className="text-primary-foreground">complete redesign and replatforming</strong> of both the mobile app and website, delivering a responsive, modern commerce experience.
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
                src={fossilPreview} 
                alt="Fossil.com Homepage Redesign" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 aspect-[4/3]">
              <img 
                src={fossil2upDesktop} 
                alt="Fossil Desktop Experience" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 aspect-[4/3]">
              <img 
                src={fossilAd} 
                alt="Fossil Watch Advertisement" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 aspect-[4/3]">
              <img 
                src={fossilPdp} 
                alt="Fossil Product Detail Page" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 aspect-[4/3]">
              <img 
                src={fossilHp} 
                alt="Fossil Homepage on Multiple Devices" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 aspect-[4/3]">
              <img 
                src={fossilMobile3up} 
                alt="Fossil Mobile Experience" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 aspect-[4/3]">
              <img 
                src={fossilSocial} 
                alt="Fossil Social Media Campaign" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 aspect-[4/3]">
              <img 
                src={fossilDigitalDesign} 
                alt="Fossil Digital Design Sitemap" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
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
              Record-breaking
              <br />
              <span className="text-outline-accent">performance.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-8 text-center hover:border-accent/30 transition-colors duration-300">
              <p className="text-4xl md:text-5xl font-display font-bold text-gradient mb-3">+23%</p>
              <p className="text-primary-foreground/60">E-commerce sales growth Y/Y for Holiday 2014/Q1 2015</p>
            </div>
            <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-8 text-center hover:border-accent/30 transition-colors duration-300">
              <p className="text-4xl md:text-5xl font-display font-bold text-gradient mb-3">L2</p>
              <p className="text-primary-foreground/60">Named a "Digital Genius" by L2 research</p>
            </div>
            <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-8 text-center hover:border-accent/30 transition-colors duration-300">
              <p className="text-4xl md:text-5xl font-display font-bold text-gradient mb-3">Global</p>
              <p className="text-primary-foreground/60">Product customization rolled out worldwide</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-10 text-center">
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">Digital Commerce Leadership</h3>
            <p className="text-primary-foreground/60 leading-relaxed text-lg">
              By transforming the team and modernizing the platform, we delivered <strong className="text-primary-foreground">record e-commerce performance</strong> while earning industry recognition as a digital leader in the accessories space.
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

export default CaseStudyFossil;