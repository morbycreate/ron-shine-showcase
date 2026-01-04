import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import aaUxTeam from "@/assets/aa-ux-team.png";
import aaPreview from "@/assets/aa-preview.png";
import fossilLeadershipPreview from "@/assets/fossil-leadership-preview.jpg";
import aiPrototypingHero from "@/assets/ai-prototyping-hero.png";
import slalomPreview from "@/assets/slalom-preview.png";
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
      title: "Building AA's First UX Organization",
      category: "Experience Design",
      description:
        "Scaled UX team from 3 to 30+, establishing design systems, governance, and operating models for enterprise delivery.",
      image: aaUxTeam,
      link: "/aa-ux-organization",
      size: "small",
    },
    {
      title: "Fossil Group Digital Transformation",
      category: "Leadership",
      description:
        "Led full digital replatform driving 23% YoY e-commerce lift and L2 'Digital Genius' recognition.",
      image: fossilLeadershipPreview,
      link: "/fossil-leadership",
      size: "small",
    },
    {
      title: "Slalom Global Creative & Digital Services",
      category: "Leadership",
      description:
        "Built a scalable experience capability driving $60M in pipeline and scaling the team from 2 to 10 in one year.",
      image: slalomPreview,
      link: "/slalom",
      size: "small",
    },
    {
      title: "AI as a Force Multiplier",
      category: "Point of View",
      description:
        "AI doesn't replace designers—it removes the repetitive work so teams can invest in strategy, storytelling, and solving harder problems.",
      image: aiPrototypingHero,
      link: "/ai-prototyping",
      size: "large",
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

  return (
    <section id="work" className="py-24 md:py-32 bg-primary relative">
      <div className="container mx-auto px-6">
        {/* Section header - Matt Boston style */}
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
            My
            <br />
            <span className="text-outline">Experience</span>
          </h2>
        </div>

        {/* Projects grid - Masonry style */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const isLarge = project.size === "large";
            
            const CardContent = (
              <div className={`group relative overflow-hidden rounded-xl card-hover ${isLarge ? "md:col-span-2" : ""}`}>
                {/* Image Background */}
                <div className={`relative overflow-hidden ${isLarge ? "aspect-[4/3] md:aspect-[21/9]" : "aspect-[4/3]"}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  {/* Content overlay */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    {/* Category badge */}
                    <span className="inline-block w-fit px-3 py-1 text-xs font-medium text-primary-foreground bg-primary-foreground/10 backdrop-blur-sm rounded-full mb-4">
                      {project.category}
                    </span>
                    
                    <h3 className={`font-display font-bold text-primary-foreground mb-2 ${isLarge ? "text-2xl md:text-4xl" : "text-xl md:text-2xl"}`}>
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
            className="inline-flex items-center gap-2 text-accent font-bold hover:text-accent/80 transition-colors duration-300 text-lg"
          >
            <span className="hover-underline">View Additional Case Studies</span>
          </Link>
        </div>

        {/* Clients section */}
        <div className="mt-20 pt-12 border-t border-primary-foreground/10">
          <p className="text-accent font-medium tracking-wide mb-8 text-sm">
            The brands that trusted me to do the work.
          </p>

          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            {clientLogos.map((client) => (
              <div
                key={client.name}
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
