import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// Placeholder imports - replace with actual images
import slalomHero from "@/assets/slalom-hero.png";
import slalomMolecular from "@/assets/slalom-molecular.png";
import streamlinePyramid from "@/assets/streamline-pyramid.png";
import streamlineBc from "@/assets/streamline-bc.png";
import streamlineCards from "@/assets/streamline-cards.png";
import streamlineDisplay from "@/assets/streamline-display.png";
import streamlineLogo from "@/assets/streamline-logo.png";
import slalomAshley from "@/assets/slalom-ashley.png";
import slalomAshleyDevices from "@/assets/slalom-ashley-devices.png";
import slalomAshleyBrand from "@/assets/slalom-ashley-brand.png";
import slalomNewco from "@/assets/slalom-newco.png";
import ashleyHero from "@/assets/ashley-hero.png";
import ashleyBagMockup from "@/assets/ashley-bag-mockup.png";
import newcoFlexibility from "@/assets/newco-flexibility.png";
import newcoVideo from "@/assets/newco-video.png";
import newcoPpt from "@/assets/newco-ppt.png";
import newcoBanner from "@/assets/newco-banner.png";

const purpleAccent = "rgb(168, 85, 247)";

interface MiniCaseStudyProps {
  title: string;
  tagline: string;
  description: string[];
  whatWeDid: string[];
  image: string;
  imageAlt: string;
  additionalImages?: { src: string; alt: string }[];
  reverse?: boolean;
}

const MiniCaseStudy = ({ title, tagline, description, whatWeDid, image, imageAlt, additionalImages, reverse }: MiniCaseStudyProps) => (
  <section className="py-20 border-b border-white/10">
    <div className="container mx-auto px-6 lg:px-12">
      <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        {/* Content */}
        <div className={`space-y-8 ${reverse ? 'lg:order-2' : ''}`}>
          <div>
            <h2 
              className="text-4xl md:text-5xl font-display font-bold mb-4"
              style={{ color: purpleAccent }}
            >
              {title}
            </h2>
            <p className="text-xl md:text-2xl text-white/80 italic">
              {tagline}
            </p>
          </div>
          
          <div className="space-y-4">
            {description.map((para, index) => (
              <p key={index} className="text-white/70 text-lg leading-relaxed">
                {para}
              </p>
            ))}
          </div>
          
          <div>
            <h3 className="text-xl font-display font-semibold text-white mb-4">
              What We Did
            </h3>
            <ul className="space-y-2">
              {whatWeDid.map((item, index) => (
                <li key={index} className="text-white/70 flex items-start gap-3">
                  <span style={{ color: purpleAccent }} className="mt-1.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Images */}
        <div className={`${reverse ? 'lg:order-1' : ''}`}>
          <div className="flex flex-col gap-6">
            <div className="rounded-lg overflow-hidden border border-white/10 bg-white/5">
              <img 
                src={image} 
                alt={imageAlt}
                className="w-full h-auto object-cover"
              />
            </div>
            {additionalImages?.map((img, index) => (
              <div key={index} className="rounded-lg overflow-hidden border border-white/10 bg-white/5">
                <img 
                  src={img.src} 
                  alt={img.alt}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CaseStudySlalomCreative = () => {
  const caseStudies: MiniCaseStudyProps[] = [
    {
      title: "Streamline Scientific",
      tagline: "Striving for simplicity in a complex world",
      description: [
        "We partnered with Molecular Designs to help them redefine their value to the market and rebrand the company as a result of M&A activity.",
        "We developed a new company vision, mission, values, brand name, and identity. With this complete set of tools that accurately describe the soul of the company, they are uniquely positioned to achieve and communicate their long-term value to the market – simplifying access to molecular diagnostics."
      ],
      whatWeDid: [
        "Brand Strategy - UVP, positioning statement",
        "New corporate Vision, Mission, Values",
        "Brand architecture",
        "Messaging framework",
        "New parent and sub-brand names and logos",
        "Design system including: color palette, imagery palette, typography, iconography, graphic motif",
        "Styleguide",
        "Tone and voice guidelines"
      ],
      image: slalomMolecular,
      imageAlt: "Streamline Scientific brand identity",
      additionalImages: [
        { src: streamlineLogo, alt: "Streamline Scientific logo" },
        { src: streamlinePyramid, alt: "Streamline Scientific brand strategy pyramid" },
        { src: streamlineBc, alt: "Streamline Scientific business cards" },
        { src: streamlineCards, alt: "Streamline Scientific marketing collateral" },
        { src: streamlineDisplay, alt: "Streamline Scientific trade show display" }
      ]
    },
    {
      title: "Ashley Stewart",
      tagline: "Create a place where women of every color, shape and size are celebrated",
      description: [
        "Throughout its company history, Ashley Stewart has been dedicated to empowering plus-size women to feel strong, beautiful, and ready to take on the world. They sought to amplify the unapologetic realness that defines the Ashley Stewart customer with a bold and sophisticated approach.",
        "Ashley Stewart needed to elevate and fine-tune its brand approach to differentiate from competitors, build recognition with new customers, and strengthen its position as a leader in the fashion industry—all with the goal of positioning the company for acquisition.",
        "We partnered with Ashley Stewart to elevate their iconic brand and reinforce their mission of empowering plus-size women to feel strong, beautiful, and unapologetically confident."
      ],
      whatWeDid: [
        "Brand strategy and positioning",
        "Refreshed logo and visual identity",
        "Color palette and typography system",
        "Web experience design",
        "Modern brand system for future vision",
        "Partnership with brand leadership and fashion creative director"
      ],
      image: slalomAshleyDevices,
      imageAlt: "Ashley Stewart website across devices",
      additionalImages: [
        { src: slalomAshleyBrand, alt: "Ashley Stewart brand collateral" },
        { src: ashleyHero, alt: "Ashley Stewart campaign models" },
        { src: ashleyBagMockup, alt: "Ashley Stewart tag and bag mockup" }
      ],
      reverse: true
    },
    {
      title: "NewCo",
      tagline: "Taking a human-centered approach to a hybrid-first experience",
      description: [
        "NewCo is a global software leader that creates tools empowering people to design, engineer, and build the world around them. From architecture and manufacturing to media and entertainment, NewCo's platforms connect ideas to execution.",
        "NewCo wanted to maintain the momentum it had built around its human-centered approach to a hybrid-first experience grounded in employee voices and culture.",
        "We partnered with the Flex Forward team to build a clear, cohesive brand strategy and identity aligned with NewCo's vision. The result was a unified, engaging brand platform designed to drive awareness, alignment, and sustained engagement across the organization."
      ],
      whatWeDid: [
        "Brand promise, value proposition, and positioning",
        "Persona-based messaging framework",
        "Full 2023 marketing and launch plan",
        "Visual identity within brand system",
        "Campaign assets—logos, templates, digital updates",
        "SharePoint and Slack brand integration",
        "Gathering campaign for meaningful activities and events"
      ],
      image: slalomNewco,
      imageAlt: "NewCo Flex Forward campaign",
      additionalImages: [
        { src: newcoFlexibility, alt: "NewCo Flex Forward flexibility poster" },
        { src: newcoVideo, alt: "NewCo Flex Forward video mockup" },
        { src: newcoPpt, alt: "NewCo PowerPoint presentation cover" },
        { src: newcoBanner, alt: "NewCo Flex Forward banner" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 lg:px-12 py-4">
          <Link 
            to="/overview#experience" 
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Experience</span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[80vh] relative flex items-center pt-20">
        <div className="absolute inset-0">
          <img 
            src={slalomHero} 
            alt="Slalom Consulting"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/50" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <p 
              className="text-sm uppercase tracking-[0.2em] mb-6 font-medium"
              style={{ color: purpleAccent }}
            >
              Slalom Consulting
            </p>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-[0.9]">
              <span className="text-white">Director,</span>
              <br />
              <span 
                className="font-display"
                style={{ 
                  WebkitTextStroke: `2px ${purpleAccent}`,
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Global Creative
              </span>
              <br />
              <span style={{ color: purpleAccent }}>& Digital Services</span>
            </h1>
            
            <p className="text-xl text-white/70 max-w-2xl mt-8">
              Building and scaling creative capabilities across a global consulting organization
            </p>
          </div>
        </div>
      </section>

      {/* Role Overview */}
      <section className="py-20 border-b border-white/10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 
              className="text-3xl md:text-4xl font-display font-bold mb-8"
              style={{ color: purpleAccent }}
            >
              Leadership Overview
            </h2>
            
            <ul className="space-y-4">
              {[
                "Built and led Global Creative Services, defining creative vision, operating model, and governance across regions",
                "Served as enterprise brand steward, ensuring consistency and quality across high-visibility initiatives",
                "Directed creative across brand storytelling, executive communications, campaigns, and digital platforms",
                "Led and scaled multidisciplinary creative teams; managed agencies and external partners",
                "Partnered with Marketing, Communications, and Executive Leadership to translate business priorities into creative execution"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4 text-white/80 text-lg">
                  <span 
                    className="w-2 h-2 rounded-full mt-2.5 flex-shrink-0"
                    style={{ backgroundColor: purpleAccent }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <div className="py-12">
        <div className="container mx-auto px-6 lg:px-12 mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            Featured <span style={{ color: purpleAccent }}>Projects</span>
          </h2>
        </div>
        
        {caseStudies.map((study, index) => (
          <MiniCaseStudy key={index} {...study} />
        ))}
      </div>

      {/* Footer Navigation */}
      <section className="py-16 border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <Link 
            to="/overview#experience"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border transition-all hover:scale-105"
            style={{ 
              borderColor: purpleAccent,
              color: purpleAccent
            }}
          >
            <ArrowLeft size={20} />
            Back to Experience
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudySlalomCreative;
