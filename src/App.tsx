import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CaseStudyDefender from "./pages/CaseStudyDefender";
import CaseStudyAA from "./pages/CaseStudyAA";
import CaseStudyTHR from "./pages/CaseStudyTHR";
import CaseStudyFossil from "./pages/CaseStudyFossil";
import CaseStudyHasbro from "./pages/CaseStudyHasbro";
import CaseStudyHudson from "./pages/CaseStudyHudson";
import CaseStudyAAcom from "./pages/CaseStudyAAcom";
import AdditionalCaseStudies from "./pages/AdditionalCaseStudies";

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
          <Route path="/texas-health" element={<CaseStudyTHR />} />
          <Route path="/fossil" element={<CaseStudyFossil />} />
          <Route path="/hasbro" element={<CaseStudyHasbro />} />
          <Route path="/hudson-energy" element={<CaseStudyHudson />} />
          <Route path="/aacom-redesign" element={<CaseStudyAAcom />} />
          <Route path="/case-studies" element={<AdditionalCaseStudies />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
