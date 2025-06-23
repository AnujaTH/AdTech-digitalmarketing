import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useNavigate } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

// const Pricing = () => {
//   const plans = [
//     {
//       name: "Starter",
//       price: "$999",
//       period: "/month",
//       description: "Perfect for early-stage startups and freelance developers",
//       features: [
//         "Basic SEO optimization",
//         "Social media management (2 platforms)",
//         "Monthly content creation (4 posts)",
//         "Basic analytics & reporting",
//         "Email support",
//         "1 strategy consultation/month"
//       ],
//       highlighted: false,
//       cta: "Start Growing"
//     },
//     {
//       name: "Growth",
//       price: "$2,499",
//       period: "/month",
//       description: "Ideal for scaling startups and growing software companies",
//       features: [
//         "Advanced SEO & technical SEO",
//         "Multi-platform social media (4 platforms)",
//         "Content marketing (8 posts + 1 blog)",
//         "Paid advertising management",
//         "Lead generation campaigns",
//         "Advanced analytics & reporting",
//         "Priority support",
//         "Bi-weekly strategy consultations"
//       ],
//       highlighted: true,
//       cta: "Scale Your Business"
//     },
//     {
//       name: "Scale",
//       price: "$4,999",
//       period: "/month",
//       description: "Comprehensive solution for established tech companies",
//       features: [
//         "Enterprise SEO & optimization",
//         "Full-spectrum social media management",
//         "Comprehensive content strategy",
//         "Multi-channel paid advertising",
//         "Advanced lead generation & nurturing",
//         "Marketing automation setup",
//         "Custom integrations",
//         "24/7 priority support",
//         "Weekly strategy consultations",
//         "Dedicated account manager"
//       ],
//       highlighted: false,
//       cta: "Accelerate Growth"
//     }
//   ];
const Pricing = () => {
  const { resolvedTheme } = useTheme();
  const revealRef = useScrollReveal<HTMLDivElement>();
  const plans = [
    {
      name: "Starter",
      price: "Rs. 24,900",
      period: "/month",
      description:
        "Perfect for early-stage startups and freelance developers in Sri Lanka",
      features: [
        "Basic SEO optimization",
        "Social media management (2 platforms)",
        "Monthly content creation (4 posts)",
        "Basic analytics & reporting",
        "Email support",
        "1 strategy consultation/month",
      ],
      highlighted: false,
      cta: "Start Growing",
    },
    {
      name: "Growth",
      price: "Rs. 54,900",
      period: "/month",
      description: "Ideal for scaling startups and growing software companies",
      features: [
        "Advanced SEO & technical SEO",
        "Multi-platform social media (4 platforms)",
        "Content marketing (8 posts + 1 blog)",
        "Paid advertising management",
        "Lead generation campaigns",
        "Advanced analytics & reporting",
        "Priority support",
        "Bi-weekly strategy consultations",
      ],
      highlighted: true,
      cta: "Scale Your Business",
    },
    {
      name: "Scale",
      price: "Rs. 79,900",
      period: "/month",
      description: "Comprehensive solution for established tech companies",
      features: [
        "Enterprise SEO & optimization",
        "Full-spectrum social media management",
        "Comprehensive content strategy",
        "Multi-channel paid advertising",
        "Advanced lead generation & nurturing",
        "Marketing automation setup",
        "Custom integrations",
        "24/7 priority support",
        "Weekly strategy consultations",
        "Dedicated account manager",
      ],
      highlighted: false,
      cta: "Accelerate Growth",
    },
  ];

  const getSectionClass = () =>
    `py-20 ${resolvedTheme === "dark" ? "bg-gray-900" : "bg-white"}`;
  const getTitleClass = () =>
    `text-4xl md:text-5xl font-bold mb-6 ${
      resolvedTheme === "dark" ? "text-white" : "text-gray-900"
    }`;
  const getDescClass = () =>
    `text-xl max-w-3xl mx-auto ${
      resolvedTheme === "dark" ? "text-gray-300" : "text-gray-600"
    }`;
  const getCardClass = (highlighted: boolean) =>
    `relative hover:shadow-xl transition-all duration-300 border-0 shadow-lg ${
      highlighted
        ? resolvedTheme === "dark"
          ? "bg-gradient-to-br from-navy-800 to-navy-900 text-white scale-105 lg:scale-110"
          : "bg-gradient-to-br from-navy-500 to-navy-700 text-white scale-105 lg:scale-110"
        : resolvedTheme === "dark"
        ? "bg-gray-800 hover:-translate-y-2"
        : "bg-white hover:-translate-y-2"
    }`;
  const getCardTitleClass = (highlighted: boolean) =>
    `text-2xl font-bold mb-2 ${
      highlighted
        ? "text-white"
        : resolvedTheme === "dark"
        ? "text-white"
        : "text-gray-900"
    }`;
  const getPriceClass = (highlighted: boolean) =>
    `text-5xl font-bold ${highlighted ? "text-white" : "text-navy-600"}`;
  const getPeriodClass = (highlighted: boolean) =>
    `text-lg ${
      highlighted
        ? "text-blue-100"
        : resolvedTheme === "dark"
        ? "text-gray-300"
        : "text-gray-600"
    }`;
  const getDescTextClass = (highlighted: boolean) =>
    `${
      highlighted
        ? "text-blue-100"
        : resolvedTheme === "dark"
        ? "text-gray-300"
        : "text-gray-600"
    }`;
  const getFeatureDotClass = (highlighted: boolean) =>
    `w-2 h-2 rounded-full flex-shrink-0 mt-2 ${
      highlighted ? "bg-cyan-400" : "bg-navy-600"
    }`;
  const getFeatureTextClass = (highlighted: boolean) =>
    `${
      highlighted
        ? "text-blue-100"
        : resolvedTheme === "dark"
        ? "text-gray-300"
        : "text-gray-700"
    }`;
  const getButtonClass = (highlighted: boolean) =>
    `w-full py-4 text-lg font-semibold rounded-lg transition-all duration-200 ${
      highlighted
        ? "bg-white text-navy-600 hover:bg-blue-50"
        : "bg-navy-600 text-white hover:bg-navy-700"
    }`;
  const getBottomCardClass = () =>
    `bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto ${
      resolvedTheme === "dark" ? "bg-gray-800 text-white" : ""
    }`;
  const getBottomTitleClass = () =>
    `text-2xl font-bold mb-4 ${
      resolvedTheme === "dark" ? "text-white" : "text-gray-900"
    }`;
  const getBottomDescClass = () =>
    `mb-6 ${resolvedTheme === "dark" ? "text-gray-300" : "text-gray-600"}`;

  const navigate = useNavigate();

  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div
        ref={revealRef}
        className="container mx-auto px-6 scroll-reveal relative"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-navy-800 dark:text-white">
            Transparent Pricing for Every Stage
          </h2>
          <div className="flex justify-center mb-4">
            <span className="inline-block w-20 h-1 rounded-full bg-navy-600 dark:bg-cyan-400"></span>
          </div>
          <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Choose the perfect plan for your tech startup's growth stage. No
            hidden fees, no long-term contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: plan.highlighted ? 1.08 : 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.18 }}
              whileHover={{
                y: -10,
                boxShadow: plan.highlighted
                  ? "0 8px 32px 0 rgba(6,182,212,0.18)"
                  : "0 4px 16px 0 rgba(30,58,138,0.10)",
              }}
              className={
                `p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm flex flex-col justify-between relative transition-all duration-300 cursor-pointer` +
                (plan.highlighted
                  ? " ring-2 ring-navy-600 dark:ring-cyan-400 z-10"
                  : "")
              }
              style={{ minHeight: 260, maxWidth: 260, margin: "0 auto" }}
            >
              {/* Most Popular Bar */}
              {plan.highlighted && (
                <div className="absolute -top-3 left-0 right-0 flex justify-center">
                  <span className="bg-navy-600 dark:bg-cyan-400 text-white dark:text-navy-900 px-2 py-0.5 rounded-b text-[10px] font-semibold shadow border border-gray-200 dark:border-gray-700 animate-pulse">
                    MOST POPULAR
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-2">
                <CardTitle
                  className={`text-base font-bold mb-0.5 ${
                    plan.highlighted
                      ? "text-navy-600 dark:text-cyan-400"
                      : "text-gray-900 dark:text-white"
                  }`}
                >
                  {plan.name}
                </CardTitle>
                <div className="mb-1 flex items-end justify-center gap-0.5">
                  <span
                    className={`text-xl font-bold ${
                      plan.highlighted
                        ? "text-navy-600 dark:text-cyan-400"
                        : "text-navy-800 dark:text-white"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-xs ${
                      plan.highlighted
                        ? "text-navy-400 dark:text-cyan-200"
                        : "text-gray-500 dark:text-gray-300"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  className={`text-xs ${
                    plan.highlighted
                      ? "text-navy-400 dark:text-cyan-200"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {plan.description}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 mb-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-1 border-b border-gray-100 dark:border-gray-700 pb-0.5 last:border-0"
                    >
                      <CheckCircle2
                        className={`w-3 h-3 ${
                          plan.highlighted
                            ? "text-navy-600 dark:text-cyan-400"
                            : "text-gray-400 dark:text-gray-500"
                        }`}
                      />
                      <span
                        className={`text-xs ${
                          plan.highlighted
                            ? "text-navy-800 dark:text-cyan-100"
                            : "text-gray-700 dark:text-gray-200"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <motion.div whileHover={{ scale: 1.06 }}>
                  <Button
                    className={`w-full py-1.5 text-xs font-semibold rounded transition-all duration-200 shadow-sm ${
                      plan.highlighted
                        ? "bg-navy-600 dark:bg-cyan-400 text-white dark:text-navy-900 hover:bg-navy-700 dark:hover:bg-cyan-300"
                        : "bg-gray-200 dark:bg-gray-700 text-navy-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
                    }`}
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    {plan.cta}
                  </Button>
                </motion.div>
              </CardContent>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 max-w-4xl mx-auto shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-navy-800 dark:text-cyan-400">
              Need a Custom Plan?
            </h3>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              We offer tailored solutions for unique needs. Contact us for a
              personalized quote and strategy.
            </p>
            <Button
              className="bg-navy-600 dark:bg-cyan-400 text-white dark:text-navy-900 px-8 py-4 rounded-lg font-semibold hover:bg-navy-700 dark:hover:bg-cyan-300 transition-colors shadow"
              onClick={() => navigate("/contact")}
            >
              Request Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
