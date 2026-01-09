import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";

import sabreCommsEcosystem01 from "@/assets/sabre-comms-ecosystem-01.png";
import sabreCommsEcosystem02 from "@/assets/sabre-comms-ecosystem-02.png";
import sabreCommPlanning from "@/assets/sabre-comm-planning.png";

const CaseStudySabreComms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: sabreCommsEcosystem01,
      title: "Connections Network",
      description: "Points of contact and content generation strategy for internal communications"
    },
    {
      src: sabreCommsEcosystem02,
      title: "Content Network",
      description: "Multi-channel content distribution and audience engagement model"
    },
    {
      src: sabreCommPlanning,
      title: "Communication Planning",
      description: "Sabre-generated content distribution across internal and external channels"
    }
  ];

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-primary">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <Link
            to="/sabre"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Sabre Case Study
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <span className="inline-block px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium mb-6">
            Internal Communications
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Communications Ecosystem
          </h1>
          <p className="text-xl text-white/70 max-w-3xl">
            Strategic framework for Sabre's internal and external communications, 
            designed to create consistent messaging and maximize content reach across all channels.
          </p>
        </div>
      </section>

      {/* Content Strategy Principles */}
      <section className="py-16 px-6 border-b border-white/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            This Is What Great Content Strategy Is Made Of
          </h2>
          <ol className="grid md:grid-cols-2 gap-4">
            {[
              "Start With Purpose (Not Output)",
              "Be Audience-Led, Not Channel-Led",
              "Clarity Beats Clever",
              "Strategy Before Storytelling",
              "Design for Reuse and Scale",
              "Respect the Moment of Use",
              "Consistency Builds Trust",
              "Measure What Matters",
              "Governance Enables Creativity",
              "Great Content Feels Human"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                <span className="flex-shrink-0 w-8 h-8 bg-red-500/20 text-red-400 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
                <span className="text-white/90 text-lg">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8">
            {images.map((image, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-auto"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-white">{image.title}</h3>
                  <p className="text-white/60 mt-1">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={goToPrevious}
            className="absolute left-6 text-white/70 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>
          
          <div className="max-w-[90vw] max-h-[90vh] overflow-auto">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].title}
              className="max-w-full max-h-[85vh] object-contain"
            />
            <div className="text-center mt-4">
              <h3 className="text-xl font-semibold text-white">{images[currentIndex].title}</h3>
              <p className="text-white/60 mt-1">{images[currentIndex].description}</p>
            </div>
          </div>
          
          <button
            onClick={goToNext}
            className="absolute right-6 text-white/70 hover:text-white transition-colors"
          >
            <ChevronRight className="w-12 h-12" />
          </button>
          
          {/* Dots indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudySabreComms;
