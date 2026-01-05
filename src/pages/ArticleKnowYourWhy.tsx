import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ArticleKnowYourWhy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Article Header */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>

          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
            July 28, 2024
          </p>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8">
            <span className="text-foreground">Know Your Why—</span>
            <br />
            <span className="text-accent">Because That's What People Really Buy</span>
          </h1>

          <p className="text-muted-foreground text-lg">
            Written by <span className="text-foreground font-medium">Ron Brissette</span>
          </p>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-8">
              It's easy to talk about what you do.
              <br />
              You sell a product. You offer a service. You solve a problem.
            </p>

            <p className="text-xl text-foreground/80 leading-relaxed mb-8">
              But if that's all you're talking about, you're missing the deeper story—the one that actually connects with people.
            </p>

            <p className="text-2xl md:text-3xl font-display text-accent font-semibold my-12">
              Because the truth is: people don't buy what you do. They buy why you do it.
            </p>

            <div className="space-y-6 text-foreground/80 text-lg leading-relaxed mb-12">
              <p>
                A financial planner isn't just offering investment advice—they're offering <span className="text-foreground font-medium">peace of mind</span>.
              </p>
              <p>
                An airline isn't just selling a seat—they're helping someone <span className="text-foreground font-medium">chase a dream, get home, or start a new chapter</span>.
              </p>
              <p>
                A good mechanic? They're not just fixing brakes—they're <span className="text-foreground font-medium">keeping families safe on the road</span>.
              </p>
            </div>

            <div className="border-l-4 border-accent pl-6 my-12">
              <p className="text-xl text-foreground/90 leading-relaxed">
                The <span className="text-accent font-semibold">why</span> is the part that matters.
                <br />
                It's what people remember.
                <br />
                It's what makes you worth choosing.
                <br />
                And it's what gives your team something bigger to rally around.
              </p>
            </div>

            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-16 mb-8">
              So ask yourself:
            </h2>

            <ul className="space-y-4 text-lg text-foreground/80 mb-12">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>Why does your business really exist?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>What are you giving your customers that goes beyond the surface?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>What do your employees believe they're part of?</span>
              </li>
            </ul>

            <p className="text-xl text-foreground/80 leading-relaxed mb-8">
              When you know your why—and when you understand the why that matters to others—you stop just selling.
              <br />
              <span className="text-foreground font-medium">You start connecting.</span>
            </p>

            <p className="text-xl text-foreground/80 leading-relaxed mb-8">
              You become more than a service.
              <br />
              <span className="text-accent font-medium">You become meaningful.</span>
            </p>

            <div className="bg-card/50 border border-border/50 rounded-lg p-8 mt-16">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed">
                And in a noisy world?
                <br />
                <span className="text-accent font-semibold">That's what people listen to.</span>
                <br />
                That's what they trust.
                <br />
                That's what they follow.
              </p>
            </div>
          </article>

          {/* Back Link */}
          <div className="mt-16 pt-8 border-t border-border/50">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ArticleKnowYourWhy;
