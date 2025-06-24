import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useTheme } from "@/contexts/ThemeContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const strategySchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type StrategyForm = z.infer<typeof strategySchema>;

const Services = () => {
  const { resolvedTheme } = useTheme();
  const revealRef = useScrollReveal<HTMLDivElement>();
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<StrategyForm>({
    resolver: zodResolver(strategySchema),
  });
  const onSubmit = (data: StrategyForm) => {
    setSubmitted(true);
    setTimeout(() => {
      setModalOpen(false);
      setSubmitted(false);
      form.reset();
    }, 2000);
  };

  const services = [
    {
      title: "SEO & Technical SEO",
      description:
        "Optimize your tech products for search engines with advanced technical SEO strategies tailored for software companies.",
      features: [
        "Technical site audits",
        "Developer-friendly implementations",
        "API documentation optimization",
        "Performance optimization",
      ],
    },
    {
      title: "Content Marketing",
      description:
        "Create compelling technical content that resonates with developers, CTOs, and tech decision-makers.",
      features: [
        "Technical blog writing",
        "Case study development",
        "Whitepaper creation",
        "Developer documentation",
      ],
    },
    {
      title: "Social Media Strategy",
      description:
        "Build your tech brand presence on platforms where developers and tech leaders engage.",
      features: [
        "LinkedIn B2B campaigns",
        "Twitter tech community engagement",
        "GitHub showcase optimization",
        "Tech forum participation",
      ],
    },
    {
      title: "Paid Advertising",
      description:
        "Targeted ad campaigns designed to reach tech professionals and potential enterprise clients.",
      features: [
        "Google Ads for SaaS",
        "LinkedIn B2B advertising",
        "Retargeting campaigns",
        "Conversion optimization",
      ],
    },
    {
      title: "Lead Generation",
      description:
        "Generate high-quality leads from tech companies, startups, and enterprise clients.",
      features: [
        "B2B lead funnels",
        "Tech conference marketing",
        "Webinar campaigns",
        "Free trial optimization",
      ],
    },
    {
      title: "Strategy Consulting",
      description:
        "Comprehensive marketing strategy consulting specifically for tech startups and software companies.",
      features: [
        "Go-to-market strategy",
        "Product launch planning",
        "Market positioning",
        "Competitive analysis",
      ],
    },
  ];

  const getSectionClass = () => {
    if (resolvedTheme === "dark") {
      return "py-20 bg-gray-900";
    }
    return "py-20 bg-gray-50";
  };

  const getTitleClass = () => {
    if (resolvedTheme === "dark") {
      return "text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6";
    }
    return "text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6";
  };

  const getDescriptionClass = () => {
    if (resolvedTheme === "dark") {
      return "text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto";
    }
    return "text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto";
  };

  const getCardClass = () => {
    if (resolvedTheme === "dark") {
      return "group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-gray-800 border-gray-700";
    }
    return "group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2";
  };

  const getCardTitleClass = () => {
    if (resolvedTheme === "dark") {
      return "text-lg sm:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors";
    }
    return "text-lg sm:text-xl font-bold text-gray-900 group-hover:text-navy-600 transition-colors";
  };

  const getCardContentClass = () => {
    if (resolvedTheme === "dark") {
      return "text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base";
    }
    return "text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base";
  };

  const getFeatureTextClass = () => {
    if (resolvedTheme === "dark") {
      return "text-gray-300 text-xs sm:text-sm";
    }
    return "text-gray-700 text-xs sm:text-sm";
  };

  return (
    <section id="services" className={getSectionClass()}>
      <div
        ref={revealRef}
        className="container mx-auto px-4 sm:px-6 scroll-reveal"
      >
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={getTitleClass()}>
            Marketing Services Built for
            <span className="text-gradient"> Tech Companies</span>
          </h2>
          <p className={getDescriptionClass()}>
            Comprehensive digital marketing solutions designed specifically for
            the unique needs of tech startups, developers, and software
            companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card key={index} className={getCardClass()}>
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className={getCardTitleClass()}>
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className={getCardContentClass()}>{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-navy-600 rounded-full flex-shrink-0"></div>
                      <span className={getFeatureTextClass()}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <button
            onClick={() => setModalOpen(true)}
            className="bg-navy-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-navy-700 transition-colors shadow-lg text-sm sm:text-base"
          >
            Get Custom Strategy
          </button>
          <Dialog open={modalOpen} onOpenChange={setModalOpen}>
            <DialogContent className="max-w-[95vw] sm:max-w-md">
              {submitted ? (
                <div className="text-center py-8 sm:py-12">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎉</div>
                  <div className="text-lg sm:text-xl font-bold mb-2 text-cyan-600">
                    Thank you!
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    We'll contact you soon with a custom strategy.
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4 sm:space-y-5"
                >
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-center text-navy-800 dark:text-cyan-400">
                    Request a Custom Strategy
                  </h3>
                  <div>
                    <input
                      type="text"
                      placeholder="Name*"
                      {...form.register("name")}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm sm:text-base"
                    />
                    {form.formState.errors.name && (
                      <span className="text-red-500 text-xs">
                        {form.formState.errors.name.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email*"
                      {...form.register("email")}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm sm:text-base"
                    />
                    {form.formState.errors.email && (
                      <span className="text-red-500 text-xs">
                        {form.formState.errors.email.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Company (optional)"
                      {...form.register("company")}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Message* (Describe your goals or challenges)"
                      {...form.register("message")}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 min-h-[80px] sm:min-h-[90px] text-sm sm:text-base"
                    />
                    {form.formState.errors.message && (
                      <span className="text-red-500 text-xs">
                        {form.formState.errors.message.message}
                      </span>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-cyan-400 text-white py-2 sm:py-3 rounded-lg font-semibold hover:bg-cyan-500 transition-colors shadow text-sm sm:text-base"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </form>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default Services;

<style>{`.animate-fade-in{animation:fadeIn .7s cubic-bezier(.4,0,.2,1)}@keyframes fadeIn{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}`}</style>;
