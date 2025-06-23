import { useTheme } from "@/contexts/ThemeContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";
import { Briefcase, Lightbulb, Rocket, BarChart2 } from "lucide-react";

const steps = [
  {
    title: "Discovery/Consultation",
    description: "We understand your business, goals, and audience.",
    icon: <Lightbulb className="w-8 h-8 text-cyan-400" />,
  },
  {
    title: "Strategy Development",
    description: "We craft a tailored digital marketing plan.",
    icon: <Briefcase className="w-8 h-8 text-cyan-400" />,
  },
  {
    title: "Campaign Launch",
    description: "We execute campaigns across the right channels.",
    icon: <Rocket className="w-8 h-8 text-cyan-400" />,
  },
  {
    title: "Optimization & Reporting",
    description: "We analyze, optimize, and report for growth.",
    icon: <BarChart2 className="w-8 h-8 text-cyan-400" />,
  },
];

const HowItWorks = () => {
  const { resolvedTheme } = useTheme();
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="how-it-works"
      className={`py-20 ${
        resolvedTheme === "dark" ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div
        ref={revealRef}
        className="container mx-auto px-6 scroll-reveal relative"
      >
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-2 text-navy-800 dark:text-white">
            How It Works
          </h2>
          <div className="flex justify-center mb-4">
            <span className="inline-block w-20 h-1 rounded-full bg-cyan-400"></span>
          </div>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              resolvedTheme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Our proven digital marketing process delivers real results.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-6 justify-center items-stretch max-w-5xl mx-auto">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: idx * 0.18 }}
              whileHover={{
                y: -8,
                boxShadow: "0 8px 32px 0 rgba(6,182,212,0.10)",
              }}
              className={`flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center group relative transition-transform duration-300 cursor-pointer`}
            >
              <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-cyan-50 dark:bg-cyan-900 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3
                className={`text-lg font-bold mb-2 ${
                  resolvedTheme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {step.title}
              </h3>
              <p
                className={`text-sm ${
                  resolvedTheme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {step.description}
              </p>
              {/* Animated connector for desktop */}
              {idx < steps.length - 1 && (
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: idx * 0.18 + 0.2 }}
                  className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-8 h-1 bg-gradient-to-r from-cyan-400 to-transparent opacity-60 origin-left"
                />
              )}
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-16">
          <div
            className={`rounded-2xl p-8 shadow-lg max-w-2xl mx-auto ${
              resolvedTheme === "dark" ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h3
              className={`text-2xl font-bold mb-4 ${
                resolvedTheme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Ready to Get Started?
            </h3>
            <p
              className={`mb-6 ${
                resolvedTheme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Join hundreds of businesses that have accelerated their growth
              with our digital marketing expertise.
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-cyan-400 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500 transition-colors shadow"
            >
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
