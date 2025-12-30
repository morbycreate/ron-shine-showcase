import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import defenderPreview from "@/assets/defender-preview.png";
import aaPreview from "@/assets/aa-preview.png";

const Work = () => {
  const projects = [
    {
      title: "American Airlines Global Rebrand",
      category: "Creative Direction",
      description:
        "Led the massive global rebrand including aircraft livery in partnership with Futurebrand.",
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
      title: "Slalom Creative Services",
      category: "Team Building",
      description:
        "Built a creative team generating $60M in new pipeline opportunities.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
      link: null,
      size: "small",
    },
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
      </div>
    </section>
  );
};

export default Work;
