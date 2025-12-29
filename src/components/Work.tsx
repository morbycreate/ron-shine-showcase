import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Work = () => {
  const projects = [
    {
      title: "American Airlines Global Rebrand",
      category: "Brand Identity",
      description:
        "Led the massive global rebrand including aircraft livery in partnership with Futurebrand. A transformative identity refresh for one of the world's largest airlines.",
      impact: "Global Impact",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
      link: null,
    },
    {
      title: "Fossil Defender Collection",
      category: "Digital Experience",
      description:
        "Reintroduced the iconic Defender watch collection to a new generation. Created an omni-channel campaign that drove record eCommerce sales with 23% YoY growth.",
      impact: "23% Sales Growth",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      link: "/defender",
    },
    {
      title: "Slalom Creative Services",
      category: "Team Building",
      description:
        "Built a creative team from 2 to 10 members, establishing processes and culture that generated $60M in new pipeline opportunities in just six months.",
      impact: "$60M Pipeline",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
      link: null,
    },
  ];

  return (
    <section id="work" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Selected Work
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Case <span className="text-gradient">Studies</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-lg">
            A selection of projects that showcase strategic thinking, creative execution,
            and measurable business impact.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const CardContent = (
              <>
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-accent uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                      {project.impact}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-foreground mb-3 
                    group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Hover arrow */}
                  {project.link && (
                    <div className="mt-4 flex items-center gap-2 text-accent opacity-0 
                      group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-medium">View Details</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </>
            );

            return project.link ? (
              <Link
                key={project.title}
                to={project.link}
                className="group relative bg-card rounded-2xl overflow-hidden border border-border 
                  hover:border-accent/50 transition-all duration-500 hover:shadow-elevated cursor-pointer"
              >
                {CardContent}
              </Link>
            ) : (
              <div
                key={project.title}
                className="group relative bg-card rounded-2xl overflow-hidden border border-border 
                  hover:border-accent/50 transition-all duration-500 hover:shadow-elevated"
              >
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
