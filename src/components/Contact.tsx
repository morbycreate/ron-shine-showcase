import { Mail, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute bottom-0 left-0 w-full h-1/2"
          style={{
            backgroundImage: `radial-gradient(ellipse at 50% 100%, hsl(var(--accent)) 0%, transparent 60%)`,
          }}
        />
      </div>

      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl">
          {/* Section header */}
          <p className="text-accent font-medium tracking-wide mb-4 text-sm">
            Get In Touch
          </p>
          
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-8">
            See what others
            <br />
            <span className="text-outline">think of me.</span>
          </h2>

          <p className="text-primary-foreground/60 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl">
            Looking for experience design leadership, platform modernization, or UX strategy?
            I'd love to hear about your challenges and explore how we can work together.
          </p>

          {/* Contact CTA - Large email link */}
          <a
            href="mailto:hello@ronbrissette.com"
            className="group inline-flex items-center gap-4 mb-16"
          >
            <span className="flex items-center justify-center w-16 h-16 rounded-full bg-accent text-accent-foreground group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-6 h-6" />
            </span>
            <div>
              <p className="text-primary-foreground/50 text-sm mb-1">Email me at</p>
              <p className="font-display text-2xl md:text-3xl font-bold text-primary-foreground group-hover:text-accent transition-colors duration-300 flex items-center gap-2">
                hello@ronbrissette.com
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </p>
            </div>
          </a>

          {/* Testimonial teaser - Matt Boston style */}
          <div className="p-8 md:p-12 bg-card/50 backdrop-blur-sm rounded-2xl border border-primary-foreground/10">
            <blockquote className="text-primary-foreground/80 text-lg md:text-xl italic leading-relaxed mb-6">
              "Ron brings a rare combination of strategic thinking and creative execution. 
              His ability to translate complex challenges into elegant solutions is exceptional."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                BC
              </div>
              <div>
                <p className="text-primary-foreground font-medium">Ben Citron</p>
                <p className="text-primary-foreground/50 text-sm">Creative Director, VaynerMedia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
