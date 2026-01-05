import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ArticleAITrust = () => {
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
            July 27, 2024
          </p>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8">
            <span className="text-foreground">AI Is Transforming the World—</span>
            <br />
            <span className="text-accent">But Trust Still Moves People</span>
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
              AI is doing incredible things.
              <br />
              It's reshaping how we work, learn, create, and connect. From automating complex tasks to generating ideas at lightning speed, the impact is undeniable—and growing.
            </p>

            <p className="text-xl text-foreground/80 leading-relaxed mb-8">
              But as exciting as this new era is, it's also uncertain.
              <br />
              New tools emerge every day. The pace of change is dizzying. And with so much shifting under our feet, it's easy to feel like we need to constantly keep up, optimize, and adapt.
            </p>

            <p className="text-2xl md:text-3xl font-display text-accent font-semibold my-12">
              And yet, in all that motion, one thing remains constant:
            </p>

            <div className="border-l-4 border-accent pl-6 my-12">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed">
                People don't move forward because of technology alone. They move forward because they <span className="text-accent font-semibold">trust</span>.
              </p>
            </div>

            <p className="text-xl text-foreground/80 leading-relaxed mb-8">
              When things feel unclear, people look to what—and who—they believe in.
            </p>

            <div className="space-y-4 text-lg text-foreground/80 mb-12">
              <p>
                <span className="text-foreground font-medium">Shared understanding.</span> Human connection. A sense that someone sees them, hears them, and is grounded in something real.
              </p>
            </div>

            <div className="bg-card/50 border border-border/50 rounded-lg p-8 my-12">
              <p className="text-xl text-foreground leading-relaxed">
                That's what makes us feel <span className="text-accent font-semibold">safe enough to try</span>.
                <br />
                <span className="text-foreground/80">Seen enough to care.</span>
                <br />
                <span className="text-foreground/80">Connected enough to stay.</span>
              </p>
            </div>

            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-16 mb-8">
              The Balance
            </h2>

            <p className="text-xl text-foreground/80 leading-relaxed mb-8">
              So yes, embrace AI. Leverage it. Learn it.
              <br />
              <span className="text-foreground font-medium">But don't lose sight of the human side.</span>
            </p>

            <div className="border-l-4 border-accent pl-6 mt-12">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed">
                Because in the end, it's not just intelligence that moves us—it's <span className="text-accent font-semibold">trust, clarity, and connection</span>.
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

export default ArticleAITrust;
