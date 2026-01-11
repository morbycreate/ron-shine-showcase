import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CaseStudyDefender from "./pages/CaseStudyDefender";
import CaseStudyAA from "./pages/CaseStudyAA";
import CaseStudyAARebrand from "./pages/CaseStudyAARebrand";
import CaseStudyTHR from "./pages/CaseStudyTHR";
import CaseStudyFossil from "./pages/CaseStudyFossil";
import CaseStudyHasbro from "./pages/CaseStudyHasbro";
import CaseStudyHudson from "./pages/CaseStudyHudson";
import CaseStudyAAcom from "./pages/CaseStudyAAcom";
import CaseStudyDesignAWatch from "./pages/CaseStudyDesignAWatch";
import CaseStudyAIPrototyping from "./pages/CaseStudyAIPrototyping";
import CaseStudyAAUX from "./pages/CaseStudyAAUX";
import CaseStudySlalom from "./pages/CaseStudySlalom";
import CaseStudyFossilLeadership from "./pages/CaseStudyFossilLeadership";
import CaseStudySabre from "./pages/CaseStudySabre";
import CaseStudySabreComms from "./pages/CaseStudySabreComms";
import CaseStudySabreBrand from "./pages/CaseStudySabreBrand";
import CaseStudyCitibank from "./pages/CaseStudyCitibank";
import CaseStudyAssociates from "./pages/CaseStudyAssociates";
import CaseStudyFinancialServices from "./pages/CaseStudyFinancialServices";
import AdditionalCaseStudies from "./pages/AdditionalCaseStudies";
import ArticleKnowYourWhy from "./pages/ArticleKnowYourWhy";
import ArticleAITrust from "./pages/ArticleAITrust";
import Overview from "./pages/Overview";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/defender" element={<CaseStudyDefender />} />
          <Route path="/american-airlines" element={<CaseStudyAA />} />
          <Route path="/aa-rebrand" element={<CaseStudyAARebrand />} />
          <Route path="/texas-health" element={<CaseStudyTHR />} />
          <Route path="/fossil" element={<CaseStudyFossil />} />
          <Route path="/hasbro" element={<CaseStudyHasbro />} />
          <Route path="/hudson-energy" element={<CaseStudyHudson />} />
          <Route path="/aacom-redesign" element={<CaseStudyAAcom />} />
          <Route path="/design-a-watch" element={<CaseStudyDesignAWatch />} />
          <Route path="/ai-prototyping" element={<CaseStudyAIPrototyping />} />
          <Route path="/aa-ux-organization" element={<CaseStudyAAUX />} />
          <Route path="/slalom" element={<CaseStudySlalom />} />
          <Route path="/fossil-leadership" element={<CaseStudyFossilLeadership />} />
          <Route path="/sabre" element={<CaseStudySabre />} />
          <Route path="/sabre-communications" element={<CaseStudySabreComms />} />
          <Route path="/sabre-brand" element={<CaseStudySabreBrand />} />
          <Route path="/citibank" element={<CaseStudyCitibank />} />
          <Route path="/the-associates" element={<CaseStudyAssociates />} />
          <Route path="/financial-services" element={<CaseStudyFinancialServices />} />
          <Route path="/case-studies" element={<AdditionalCaseStudies />} />
          <Route path="/articles/know-your-why" element={<ArticleKnowYourWhy />} />
          <Route path="/articles/ai-trust" element={<ArticleAITrust />} />
          <Route path="/overview" element={<Overview />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
