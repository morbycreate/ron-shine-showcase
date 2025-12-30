import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const AdditionalCaseStudies = () => {
  const projects = [
    {
      title: "Ashley Stewart Brand Transformation",
      category: "Brand Strategy",
      description:
        "Amplified body-confidence storytelling and elevated product narrative to differentiate from competitors.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      link: null,
    },
    {
      title: "AT&T Enterprise Platform",
      category: "UX Strategy",
      description:
        "Led experience strategy for enterprise-scale platform modernization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      link: null,
    },
    {
      title: "Nike Digital Experience",
      category: "Digital Experience",
      description:
        "Contributed to digital experience initiatives for global athletic brand.",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
      link: null,
    },
    {
      title: "Jacksonville Jaguars",
      category: "Brand Experience",
      description:
        "Developed fan engagement experiences for NFL franchise.",
      image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=800&q=80",
      link: null,
    },
    {
      title: "Firehouse Subs Digital",
      category: "Digital Strategy",
      description:
        "Enhanced digital ordering and customer experience for QSR brand.",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
      link: null,
    },
    {
      title: "AWS Partner Solutions",
      category: "Enterprise UX",
      description:
        "Designed partner-facing solutions for cloud services platform.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      link: null,
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
              More of my work
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              Additional
              <br />
              <span className="text-outline">Case Studies</span>
            </h1>
            <p className="mt-6 text-primary-foreground/60 text-lg max-w-2xl">
              These projects represent additional work across various industries. 
              Full case study details available upon request.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div 
                key={project.title}
                className="group relative overflow-hidden rounded-xl card-hover"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
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
                    
                    <h3 className="font-display font-bold text-primary-foreground mb-2 text-xl md:text-2xl">
                      {project.title}
                    </h3>
                    
                    <p className="text-primary-foreground/60 text-sm md:text-base">
                      {project.description}
                    </p>

                    {/* Request details indicator */}
                    <div className="mt-4 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-medium">Details upon request</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
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