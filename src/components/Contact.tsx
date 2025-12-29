import { Mail, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-hero-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-60 h-60 bg-accent/10 rounded-full blur-2xl" />
      </div>

      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section header */}
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Let's Connect
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Ready to Bring
            <br />
            <span className="text-gradient">Order to Your Chaos?</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Whether you're looking for brand strategy, creative direction, or team leadership,
            I'd love to hear about your challenges and explore how we can work together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              variant="hero"
              size="xl"
              className="group"
              onClick={() => window.open("mailto:hello@ronbrissette.com")}
            >
              <Mail className="w-5 h-5" />
              Send an Email
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => window.open("https://linkedin.com/in/ronbrissette", "_blank")}
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </Button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-12">
            <div className="flex-1 h-px bg-primary-foreground/10" />
            <span className="text-primary-foreground/40 text-sm">or explore</span>
            <div className="flex-1 h-px bg-primary-foreground/10" />
          </div>

          {/* Morby Create CTA */}
          <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-primary-foreground/10">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Morby Create
            </h3>
            <p className="text-primary-foreground/70 max-w-lg mx-auto mb-6">
              My creative consultancy focused on brand strategy, messaging, and activation.
              Therapy for your business—minus the couch.
            </p>
            <Button
              variant="gold"
              size="lg"
              onClick={() => window.open("https://morbycreate.com", "_blank")}
            >
              Visit Morby Create
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
