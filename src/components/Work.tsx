import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import defenderPreview from "@/assets/defender-preview.png";
import aaPreview from "@/assets/aa-preview.png";
import fossilSitePreview from "@/assets/fossil-site-preview.png";
import americanAirlinesLogo from "@/assets/logos/american-airlines.png";
import attLogo from "@/assets/logos/att.png";
import jaguarsLogo from "@/assets/logos/jaguars-full.png";
import sabreLogo from "@/assets/logos/sabre.png";
import firehouseSubsLogo from "@/assets/logos/firehouse-subs.png";
import nikeLogo from "@/assets/logos/nike.png";
import awsLogo from "@/assets/logos/aws.png";
import fossilLogo from "@/assets/logos/fossil.png";
import toryBurchLogo from "@/assets/logos/tory-burch.png";
import wtaLogo from "@/assets/logos/wta.png";
import pgaTourLogo from "@/assets/logos/pga-tour.png";
import citiLogo from "@/assets/logos/citi.png";

const Work = () => {
  const projects = [
    {
      title: "American Airlines Digital Transformation",
      category: "Digital Experience",
      description:
        "Led eight development teams to transform AA's entire digital ecosystem—launched globally in a single day.",
      image: aaPreview,
      link: "/american-airlines",
      size: "large",
    },
    {
      title: "Fossil Defender Collection",
      category: "Digital Experience",
      description:
        "Reintroduced the iconic Defender watch with 23% YoY eCommerce growth.",
      image: defenderPreview,
      link: "/defender",
      size: "small",
    },
    {
      title: "Fossil.com Redesign",
      category: "Digital Experience",
      description:
        "Modernized Fossil's digital presence with 23% YoY e-commerce growth and 'Digital Genius' recognition.",
      image: fossilSitePreview,
      link: "/fossil",
      size: "small",
    },
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
    { name: "Tory Burch", logo: toryBurchLogo },
    { name: "WTA", logo: wtaLogo },
    { name: "PGA Tour", logo: pgaTourLogo },
    { name: "Citi", logo: citiLogo },
  ];

  const filters = [
    "All",
    "Creative Direction",
    "Branding",
    "Digital",
    "Strategy",
  ];

  return (
    <section id="work" className="py-24 md:py-32 bg-primary relative">
      <div className="container mx-auto px-6">
        {/* Section header - Matt Boston style */}
        <div className="mb-16">
          <p className="text-accent font-medium tracking-wide mb-4 text-sm">
            I know why you're here. Let's get to the point.
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
            My Portfolio of
            <br />
            <span className="text-outline">Creative Work</span>
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map((filter, index) => (
            <button
              key={filter}
              className={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-300 ${
                index === 0
                  ? "bg-accent text-accent-foreground border-accent"
                  : "text-primary-foreground/60 border-primary-foreground/20 hover:border-accent hover:text-accent"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects grid - Masonry style */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const isLarge = project.size === "large";
            
            const CardContent = (
              <div className={`group relative overflow-hidden rounded-xl card-hover ${isLarge ? "md:col-span-2" : ""}`}>
                {/* Image */}
                <div className={`relative overflow-hidden ${isLarge ? "aspect-[21/9]" : "aspect-[4/3]"}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Content overlay */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    {/* Category badge */}
                    <span className="inline-block w-fit px-3 py-1 text-xs font-medium text-primary-foreground bg-primary-foreground/10 backdrop-blur-sm rounded-full mb-4">
                      {project.category}
                    </span>
                    
                    <h3 className={`font-display font-bold text-primary-foreground mb-2 ${isLarge ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"}`}>
                      {project.title}
                    </h3>
                    
                    <p className="text-primary-foreground/60 text-sm md:text-base max-w-xl">
                      {project.description}
                    </p>

                    {/* Arrow indicator */}
                    {project.link && (
                      <div className="mt-4 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-sm font-medium">View Project</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );

            return project.link ? (
              <Link
                key={project.title}
                to={project.link}
                className={isLarge ? "md:col-span-2" : ""}
              >
                {CardContent}
              </Link>
            ) : (
              <div key={project.title} className={isLarge ? "md:col-span-2" : ""}>
                {CardContent}
              </div>
            );
          })}
        </div>

        {/* Additional Case Studies Link */}
        <div className="mt-12 text-center">
          <Link 
            to="/case-studies"
            className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-accent transition-colors duration-300 text-lg"
          >
            <span className="hover-underline">View Additional Case Studies</span>
          </Link>
        </div>

        {/* Clients section */}
        <div className="mt-20 pt-12 border-t border-primary-foreground/10">
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
                  className="h-20 md:h-24 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
