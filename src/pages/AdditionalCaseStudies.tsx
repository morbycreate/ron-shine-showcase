import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import aaUxTeam from "@/assets/aa-ux-team.png";
import designAWatch from "@/assets/design-a-watch.png";
import aacomLaptop from "@/assets/aacom-laptop.png";
import aaPreview from "@/assets/aa-preview.png";
import defenderPreview from "@/assets/defender-preview.png";
import fossilSitePreview from "@/assets/fossil-site-preview.png";
import thrPreview from "@/assets/thr-preview-new.png";
import hasbroPreview from "@/assets/hasbro-preview-new.webp";
import hudsonEnergyPreview from "@/assets/hudson-warehouse.jpeg";
import aiPrototypingHero from "@/assets/ai-prototyping-hero.png";
import fossilLeadershipPreview from "@/assets/fossil-leadership-preview.jpg";
import sabreHero from "@/assets/sabre-hero.png";

const AdditionalCaseStudies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const projects = [
    {
      title: "American Airlines Digital Transformation",
      category: "Digital Experience",
      description:
        "Led eight development teams to transform AA's entire digital ecosystem—launched globally in a single day.",
      image: aaPreview,
      link: "/american-airlines",
    },
    {
      title: "AI-Powered Prototyping",
      category: "AI-Powered Design",
      description:
        "Turning ambiguity into working experiences—fast. Using AI as a creative accelerator to build testable prototypes in hours.",
      image: aiPrototypingHero,
      link: "/ai-prototyping",
    },
    {
      title: "Fossil Defender Collection",
      category: "Digital Experience",
      description:
        "Reintroduced the iconic Defender watch with 23% YoY eCommerce growth.",
      image: defenderPreview,
      link: "/defender",
    },
    {
      title: "Fossil.com Redesign",
      category: "Digital Experience",
      description:
        "Modernized Fossil's digital presence with 23% YoY e-commerce growth and 'Digital Genius' recognition.",
      image: fossilSitePreview,
      link: "/fossil",
    },
    {
      title: "Fossil Group Digital Transformation",
      category: "Leadership",
      description:
        "Led full digital replatform driving 23% YoY e-commerce lift and L2 'Digital Genius' recognition.",
      image: fossilLeadershipPreview,
      link: "/fossil-leadership",
    },
    {
      title: "Hasbro PULSE Microsite",
      category: "Digital Experience",
      description:
        "Reimagined Hasbro's PULSE microsite to target fans and collectors with an immersive, insider experience.",
      image: hasbroPreview,
      link: "/hasbro",
    },
    {
      title: "Hudson Energy EdgePower",
      category: "Product Strategy",
      description:
        "Delivered customer strategy, validated product vision, and development-ready design assets for EdgePower's building energy management platform.",
      image: hudsonEnergyPreview,
      link: "/hudson-energy",
    },
    {
      title: "Texas Health Resources Website Redesign",
      category: "Digital Experience",
      description:
        "Redesigned the digital ecosystem for one of the largest faith-based nonprofit health systems in the US.",
      image: thrPreview,
      link: "/texas-health",
      imagePosition: "object-top",
    },
    {
      title: "Building American Airlines' First UX Organization",
      category: "Experience Design",
      description:
        "Scaled UX team from 3 to 30+, establishing design systems, governance, and operating models for enterprise delivery.",
      image: aaUxTeam,
      link: "/aa-ux-organization",
    },
    {
      title: "Slalom Global Creative & Digital Services",
      category: "Leadership",
      description:
        "Built a scalable experience capability driving $60M in pipeline and scaling the team from 2 to 10 in one year.",
      image: aaUxTeam,
      link: "/slalom",
    },
    {
      title: "Sabre Corporation Brand Transformation",
      category: "Leadership",
      description:
        "Helped Sabre evolve from a legacy travel company into a modern enterprise technology platform.",
      image: sabreHero,
      link: "/sabre",
    },
    {
      title: "Design-A-Watch App",
      category: "Experience Design",
      description:
        "Created an interactive customization tool allowing customers to personalize their Fossil watch, driving engagement and sales.",
      image: designAWatch,
      link: "/design-a-watch",
    },
    {
      title: "aa.com Redesign",
      category: "Experience Design",
      description:
        "Led the enterprise redesign of AA.com, supporting American Airlines' first major rebrand in 40+ years.",
      image: aacomLaptop,
      link: "/aacom-redesign",
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

      {/* Main Content */}
      <section className="pt-32 pb-24 md:pb-32 bg-primary">
        <div className="container mx-auto px-6">
          {/* Section header */}
          <div className="mb-16">
            <p className="text-accent font-medium tracking-wide mb-4 text-sm">
              My work
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              Case
              <br />
              <span className="text-outline">Studies</span>
            </h1>
            <p className="mt-6 text-primary-foreground/60 text-lg max-w-2xl">
              A collection of my work across digital transformation, experience design, and branding. 
              Additional case study details available upon request.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => {
              const CardContent = (
                <div className="group relative overflow-hidden rounded-xl card-hover">
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ${project.imagePosition || ''}`}
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/40 opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Content overlay */}
                    <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                      {/* Category badge */}
                      <span className="inline-block w-fit px-3 py-1 text-xs font-medium text-primary-foreground bg-primary-foreground/10 backdrop-blur-sm rounded-full mb-4">
                        {project.category}
                      </span>
                      
                      <h3 className="font-display font-bold text-primary-foreground mb-2 text-xl md:text-2xl">
                        {project.title}
                      </h3>
                      
                      <p className="text-primary-foreground/60 text-sm md:text-base">
                        {project.description}
                      </p>

                      {/* Action indicator */}
                      <div className="mt-4 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-sm font-medium">
                          {project.link ? "View Project" : "Details upon request"}
                        </span>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              );

              return project.link ? (
                <Link key={project.title} to={project.link}>
                  {CardContent}
                </Link>
              ) : (
                <div key={project.title}>
                  {CardContent}
                </div>
              );
            })}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <p className="text-primary-foreground/60 text-lg mb-4">
              Interested in learning more about any of these projects?
            </p>
            <Link 
              to="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-full font-medium hover:bg-accent/90 transition-colors duration-300"
            >
              Get in Touch
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdditionalCaseStudies;