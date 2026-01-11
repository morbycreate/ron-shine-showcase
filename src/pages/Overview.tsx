import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import thrPreview from "@/assets/thr-preview-new.png";

const Overview = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-12">Overview</h1>

          {/* THR Preview Card */}
          <Link
            to="/texas-health"
            className="group block max-w-2xl"
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={thrPreview}
                  alt="Texas Health Resources Website Redesign"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-primary font-medium uppercase tracking-wider">
                  Digital Experience
                </span>
                <h2 className="text-2xl font-bold mt-2 group-hover:text-primary transition-colors">
                  Texas Health Resources Website Redesign
                </h2>
                <p className="text-muted-foreground mt-2">
                  Redesigned the digital ecosystem for one of the largest faith-based nonprofit health systems in the US.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Overview;
