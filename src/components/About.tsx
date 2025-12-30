import americanAirlinesLogo from "@/assets/logos/american-airlines.svg";
import attLogo from "@/assets/logos/att.png";
import jaguarsLogo from "@/assets/logos/jaguars.png";
import sabreLogo from "@/assets/logos/sabre.png";
import firehouseSubsLogo from "@/assets/logos/firehouse-subs.png";
import nikeLogo from "@/assets/logos/nike.png";
import awsLogo from "@/assets/logos/aws.png";
import fossilLogo from "@/assets/logos/fossil.png";

const About = () => {
  const stats = [
    { value: "18+", label: "Years Of Experience" },
    { value: "50+", label: "Projects Delivered" },
    { value: "$60M", label: "Pipeline Generated" },
  ];

  const clientLogos = [
    { name: "American Airlines", logo: americanAirlinesLogo },
    { name: "AT&T", logo: attLogo },
    { name: "Jacksonville Jaguars", logo: jaguarsLogo },
    { name: "Sabre", logo: sabreLogo },
    { name: "Firehouse Subs", logo: firehouseSubsLogo },
    { name: "Nike", logo: nikeLogo },
    { name: "AWS", logo: awsLogo },
    { name: "Fossil", logo: fossilLogo },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, hsl(var(--accent)) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="relative container mx-auto px-6">
        {/* Section intro */}
        <div className="max-w-4xl mb-20">
          <p className="text-accent font-medium tracking-wide mb-4 text-sm">
            About Me
          </p>
          
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-8">
            I'm always seeking genuine,
            <br />
            <span className="text-outline">authentic connections.</span>
          </h2>

          <p className="text-primary-foreground/60 text-lg md:text-xl leading-relaxed max-w-2xl">
            With my team, with brands, and with your business. My career spans 
            financial services, travel, enterprise platforms, and consumer products—from 
            leading <span className="text-primary-foreground">American Airlines' global rebrand</span> to driving 
            <span className="text-accent"> $60M in new pipeline opportunities</span> at Slalom.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="border-l-2 border-accent pl-6">
              <p className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-primary-foreground/50 text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Clients section - Matt Boston's "Big-Name Logos" style */}
        <div className="pt-12 border-t border-primary-foreground/10">
          <p className="text-accent font-medium tracking-wide mb-8 text-sm">
            Big-Name Logos Make Me Look Good
          </p>
          
          <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-8">
            Some friends that have
            <br />
            <span className="text-outline-thin">leveraged my talents</span>
          </h3>

          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            {clientLogos.map((client) => (
              <div
                key={client.name}
                className="opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
