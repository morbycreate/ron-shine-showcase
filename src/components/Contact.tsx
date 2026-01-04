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
          
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-8">
            See what others
            <br />
            <span className="text-outline">think of me.</span>
          </h2>

          {/* Testimonials - Blue background cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="p-6 md:p-8 bg-accent rounded-2xl">
              <blockquote className="text-accent-foreground/90 text-base md:text-lg italic leading-relaxed mb-6">
                "His ability to listen deeply, synthesize ideas, and articulate a vision with clarity and creativity is unmatched."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-foreground/20 flex items-center justify-center text-accent-foreground font-bold text-sm">
                  GT
                </div>
                <p className="text-accent-foreground font-medium">Gabrielle T.</p>
              </div>
            </div>

            <div className="p-6 md:p-8 bg-accent rounded-2xl">
              <blockquote className="text-accent-foreground/90 text-base md:text-lg italic leading-relaxed mb-6">
                "Ron doesn't just direct teams, he inspires them. His ability to seamlessly blend strategic vision with creative execution is unmatched, and he has an incredible knack for turning complex challenges into elegant, impactful solutions."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-foreground/20 flex items-center justify-center text-accent-foreground font-bold text-sm">
                  GL
                </div>
                <p className="text-accent-foreground font-medium">Greg L.</p>
              </div>
            </div>

            <div className="p-6 md:p-8 bg-accent rounded-2xl">
              <blockquote className="text-accent-foreground/90 text-base md:text-lg italic leading-relaxed mb-6">
                "His ability to take a complex, multi-layered topic, distill it to its core essence, and craft a concept that resonates—from C-suite executives to end users—is truly unmatched."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-foreground/20 flex items-center justify-center text-accent-foreground font-bold text-sm">
                  MH
                </div>
                <p className="text-accent-foreground font-medium">Mary H.</p>
              </div>
            </div>

            <div className="p-6 md:p-8 bg-accent rounded-2xl">
              <blockquote className="text-accent-foreground/90 text-base md:text-lg italic leading-relaxed mb-6">
                "Ron doesn't just lead—he empowers. His mantra, 'I want to set each of you up to win,' wasn't just words; it was the foundation of a team that thrived."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-foreground/20 flex items-center justify-center text-accent-foreground font-bold text-sm">
                  PS
                </div>
                <p className="text-accent-foreground font-medium">Pete S.</p>
              </div>
            </div>
          </div>

          {/* Contact info below testimonials */}
          <p className="text-primary-foreground/60 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
            Looking for experience design leadership, platform modernization, or UX strategy?
            I'd love to hear about your challenges and explore how we can work together.
          </p>

          {/* Contact CTA - Large email link */}
          <a
            href="mailto:ronbrissette@gmail.com"
            className="group inline-flex items-center gap-4"
          >
            <span className="flex items-center justify-center w-16 h-16 rounded-full bg-accent text-accent-foreground group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-6 h-6" />
            </span>
            <div>
              <p className="text-primary-foreground/50 text-sm mb-1">Email me at</p>
              <p className="font-display text-2xl md:text-3xl font-bold text-primary-foreground group-hover:text-accent transition-colors duration-300 flex items-center gap-2">
                ronbrissette@gmail.com
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
