import americanAirlinesLogo from "@/assets/logos/american-airlines.svg";
import attLogo from "@/assets/logos/att.png";
import jaguarsLogo from "@/assets/logos/jaguars.png";
import sabreLogo from "@/assets/logos/sabre.png";
import firehouseSubsLogo from "@/assets/logos/firehouse-subs.png";
import nikeLogo from "@/assets/logos/nike.png";
import awsLogo from "@/assets/logos/aws.png";
import fossilLogo from "@/assets/logos/fossil.png";

const About = () => {
  const accomplishments = [
    "Drove 23% YoY ecommerce growth through full-funnel UX and PDP optimization at Fossil",
    "Led Ashley Stewart brand transformation, amplifying body-confidence storytelling, elevating product narrative — to differentiate from competitors and build recognition with new customers",
    "Led American Airlines' enterprise rebrand, contributing to +11.4 YouGov Buzz, the strongest gain in the airline sector",
    "Built Slalom's Global Creative Services capability from zero, generating $60M in new pipeline in six months",
    "Scaled creative and experience teams 2 → 10 and 3 → 30+ while maintaining craft, speed, and accountability",
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
        <div className="max-w-4xl mb-16">
          <p className="text-accent font-medium tracking-wide mb-4 text-sm">
            Career Highlights
          </p>
          
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
            Driving Results
            <br />
            <span className="text-outline">That Matter</span>
          </h2>
        </div>

        {/* Accomplishments list */}
        <div className="max-w-4xl mb-20">
          <ul className="space-y-6">
            {accomplishments.map((item, index) => (
              <li 
                key={index}
                className="flex gap-4 items-start group"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent font-display font-bold text-sm group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  {index + 1}
                </span>
                <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed pt-0.5">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Clients section */}
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
