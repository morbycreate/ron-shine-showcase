import { Mail, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Glassmorphism card */}
          <div className="p-8 md:p-16 rounded-3xl bg-primary-foreground/5 backdrop-blur-md border border-primary-foreground/10 text-center">
            {/* Section header */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-sm font-medium">Available for opportunities</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Let's Build
              <br />
              <span className="text-gradient">Something Great</span>
            </h2>
            <p className="text-primary-foreground/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Looking for experience design leadership, platform modernization, or UX strategy?
              I'd love to hear about your challenges and explore how we can work together.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="gold"
                size="xl"
                className="group gap-3 rounded-full"
                onClick={() => window.open("mailto:hello@ronbrissette.com")}
              >
                <Mail className="w-5 h-5" />
                Send an Email
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="ghost"
                size="xl"
                className="gap-3 rounded-full text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/5 border border-primary-foreground/10"
                onClick={() => window.open("https://linkedin.com/in/ronbrissette", "_blank")}
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
