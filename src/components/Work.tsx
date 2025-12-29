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
    <section id="work" className="py-24 md:py-32 bg-primary/50 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-accent/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative container mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/5 border border-primary-foreground/10 mb-6">
              <span className="text-accent text-sm font-medium">Selected Work</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Case <span className="text-gradient">Studies</span>
            </h2>
          </div>
          <p className="text-primary-foreground/60 max-w-md text-lg">
            A selection of projects that showcase strategic thinking, creative execution,
            and measurable business impact.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const CardContent = (
              <>
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
                  
                  {/* Floating category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium text-primary-foreground bg-primary/80 backdrop-blur-md border border-primary-foreground/10 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-serif text-xl font-bold text-primary-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-primary-foreground/50 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-primary-foreground/10">
                    <span className="text-xs font-medium text-accent">
                      {project.impact}
                    </span>
                    {project.link && (
                      <div className="flex items-center gap-2 text-primary-foreground/50 group-hover:text-accent transition-colors">
                        <span className="text-xs font-medium">View Details</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </div>
                    )}
                  </div>
                </div>
              </>
            );

            return project.link ? (
              <Link
                key={project.title}
                to={project.link}
                className="group relative bg-primary-foreground/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary-foreground/10 
                  hover:border-accent/30 transition-all duration-500 hover:bg-primary-foreground/10"
              >
                {CardContent}
              </Link>
            ) : (
              <div
                key={project.title}
                className="group relative bg-primary-foreground/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary-foreground/10 
                  hover:border-accent/30 transition-all duration-500 hover:bg-primary-foreground/10"
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
