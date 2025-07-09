import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageBasedRouter from "@/components/LanguageBasedRouter";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import CookiePolicy from "./pages/CookiePolicy";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import BlogPage from "./pages/BlogPage";
import CareersPage from "./pages/CareersPage";
import LanguageDemo from "./pages/LanguageDemo";
import Chatbot from "@/components/Chatbot";
// import AuthPage from './AuthPage';

// Import i18n configuration
import "./i18n";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <LanguageBasedRouter>
              <Chatbot />
              <Routes>
                {/* English Routes */}
                <Route path="/" element={<Index />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsConditions />} />
                                <Route path="/cookies" element={<CookiePolicy />} />
                <Route path="/language-demo" element={<LanguageDemo />} />
                
                {/* Sinhala Routes */}
                <Route path="/si" element={<Index />} />
                <Route path="/si/contact" element={<ContactPage />} />
                <Route path="/si/services" element={<ServicesPage />} />
                <Route path="/si/blog" element={<BlogPage />} />
                <Route path="/si/careers" element={<CareersPage />} />
                <Route path="/si/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/si/terms" element={<TermsConditions />} />
                <Route path="/si/cookies" element={<CookiePolicy />} />
                <Route path="/si/language-demo" element={<LanguageDemo />} />
                
                {/* Tamil Routes */}
                <Route path="/ta" element={<Index />} />
                <Route path="/ta/contact" element={<ContactPage />} />
                <Route path="/ta/services" element={<ServicesPage />} />
                <Route path="/ta/blog" element={<BlogPage />} />
                <Route path="/ta/careers" element={<CareersPage />} />
                <Route path="/ta/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/ta/terms" element={<TermsConditions />} />
                <Route path="/ta/cookies" element={<CookiePolicy />} />
                <Route path="/ta/language-demo" element={<LanguageDemo />} />

                {/* <Route path="/auth" element={<AuthPage />} /> */}
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </LanguageBasedRouter>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
