import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import firehouseLogo from "@/assets/firehouse-original-logo.png";
import firehouseSauceCans from "@/assets/firehouse-sauce-cans.png";
import firehouseSign from "@/assets/firehouse-sign.png";
import firehouseSauces from "@/assets/firehouse-sauces.jpg";
import firehouseInterior from "@/assets/firehouse-interior.jpg";

const purpleAccent = "rgb(168, 85, 247)";

const CaseStudyFirehouseSubs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const deliverables = [
    "Original corporate logo design",
    "Secondary brand marks",
    "Brand aesthetic & visual direction",
    "Environmental design guidance",
    "Product packaging concepts"
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
            src={firehouseInterior} 
            alt="Firehouse Subs Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
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
                Brand Identity
              </span>
              <span className="text-primary-foreground/40 text-sm">Firehouse Subs • Est. 1994</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[7rem] font-bold leading-[0.95] mb-8 opacity-0 animate-fade-up stagger-1">
              <span className="text-primary-foreground">Creating the</span>
              <br />
              <span className="text-primary-foreground">original brand</span>
              <br />
              <span style={{ color: purpleAccent }}>identity.</span>
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

      {/* The Story */}
      <section className="py-24 md:py-32 bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <p className="font-medium tracking-wide mb-4 text-sm" style={{ color: purpleAccent }}>
              The Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-8">
              Founded by firemen,
              <br />
              <span className="text-outline">built with heart.</span>
            </h2>
            <div className="space-y-5 text-primary-foreground/70 text-lg leading-relaxed">
              <p>
                In 1994, brothers Chris and Robin Sorensen—both former firefighters—had a vision to create a sandwich shop that captured the <strong className="text-primary-foreground">camaraderie, authenticity, and spirit of the firehouse</strong>.
              </p>
              <p>
                I partnered with the Sorensen brothers to design the original Firehouse Subs logo and establish the brand's visual identity. The goal was to create something that felt <strong className="text-primary-foreground">nostalgic, genuine, and rooted in old-school values</strong>—a return to basics in an era of over-designed fast food brands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Original Logo */}
      <section className="py-16 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mx-auto bg-white rounded-2xl p-12">
            <img 
              src={firehouseLogo} 
              alt="Original Firehouse Subs Logo" 
              className="w-full h-auto"
            />
          </div>
          <p className="text-center text-primary-foreground/50 text-sm mt-6">
            The original Firehouse Subs logo, designed in 1994
          </p>
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
                Old-school spirit,
                <br />
                <span className="text-outline">timeless design.</span>
              </h2>
              <div className="space-y-5 text-primary-foreground/70 text-lg leading-relaxed">
                <p>
                  The brand needed to feel authentic—not manufactured. We drew inspiration from <strong className="text-primary-foreground">vintage fire department insignias</strong>, classic Americana, and the no-frills honesty of neighborhood institutions.
                </p>
                <p>
                  The logo features a firefighter in a peaked cap, rendered in a vintage woodcut style that evokes <strong className="text-primary-foreground">heritage, trust, and craftsmanship</strong>. It's the kind of mark that feels like it's been around forever.
                </p>
              </div>

              <div className="mt-12 bg-primary-foreground/[0.03] border border-primary-foreground/10 rounded-2xl p-8">
                <p className="font-medium tracking-wide mb-4 text-sm" style={{ color: purpleAccent }}>
                  Deliverables
                </p>
                <div className="space-y-3">
                  {deliverables.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div 
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: purpleAccent }}
                      />
                      <p className="text-primary-foreground/80">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="overflow-hidden rounded-2xl border border-primary-foreground/10">
                <img 
                  src={firehouseSign} 
                  alt="Firehouse Subs Signage" 
                  className="w-full h-auto"
                />
              </div>
              <div className="overflow-hidden rounded-2xl border border-primary-foreground/10">
                <img 
                  src={firehouseSauceCans} 
                  alt="Firehouse Subs Hot Sauce Cans" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Gallery */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16">
            <p className="font-medium tracking-wide mb-4 text-sm" style={{ color: purpleAccent }}>
              Brand in Action
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              From logo to
              <br />
              <span className="text-outline">brand experience.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10">
              <img 
                src={firehouseSauces} 
                alt="Firehouse Subs Hot Sauce Collection" 
                className="w-full h-auto"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10">
              <img 
                src={firehouseInterior} 
                alt="Firehouse Subs Restaurant Interior" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Legacy */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <p className="font-medium tracking-wide mb-4 text-sm" style={{ color: purpleAccent }}>
              The Legacy
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-8">
              A mark that
              <br />
              <span className="text-outline">stands the test of time.</span>
            </h2>
            <div className="space-y-5 text-primary-foreground/70 text-lg leading-relaxed">
              <p>
                While the brand has evolved over the years, the original logo I designed in 1994 <strong className="text-primary-foreground">remains in use today as a secondary mark</strong>—appearing on entrance doors across many of the 1,200+ Firehouse Subs locations nationwide.
              </p>
              <p>
                The original artwork is also <strong className="text-primary-foreground">archived as a piece of company history</strong> at their corporate headquarters—a testament to the enduring power of authentic, purpose-driven design.
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div 
                className="p-6 rounded-2xl text-center"
                style={{ backgroundColor: `${purpleAccent}15`, border: `1px solid ${purpleAccent}30` }}
              >
                <p className="font-display text-3xl font-bold mb-2" style={{ color: purpleAccent }}>1,200+</p>
                <p className="text-primary-foreground/70 text-sm">Locations nationwide</p>
              </div>
              <div 
                className="p-6 rounded-2xl text-center"
                style={{ backgroundColor: `${purpleAccent}15`, border: `1px solid ${purpleAccent}30` }}
              >
                <p className="font-display text-3xl font-bold mb-2" style={{ color: purpleAccent }}>30+ Years</p>
                <p className="text-primary-foreground/70 text-sm">Logo still in use</p>
              </div>
              <div 
                className="p-6 rounded-2xl text-center"
                style={{ backgroundColor: `${purpleAccent}15`, border: `1px solid ${purpleAccent}30` }}
              >
                <p className="font-display text-3xl font-bold mb-2" style={{ color: purpleAccent }}>Est. 1994</p>
                <p className="text-primary-foreground/70 text-sm">Original brand identity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-primary-foreground/60 mb-4">Interested in brand identity?</p>
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

export default CaseStudyFirehouseSubs;
