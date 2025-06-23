import { useTheme } from "@/contexts/ThemeContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const About = () => {
  const { resolvedTheme } = useTheme();
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="about"
      className={`py-20 ${
        resolvedTheme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div ref={revealRef} className="container mx-auto px-6 scroll-reveal">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-8 ${
              resolvedTheme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Empowering Tech Innovation in
            <span className="text-gradient"> Jaffna & Beyond</span>
          </h2>

          <p
            className={`text-xl mb-12 leading-relaxed ${
              resolvedTheme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            At AdTech, we understand the unique challenges faced by tech
            startups, freelance developers, and software companies. Our mission
            is to bridge the gap between innovative technology and market
            success through strategic digital marketing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-navy-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3
                    className={`text-xl font-semibold mb-2 ${
                      resolvedTheme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Tech-First Approach
                  </h3>
                  <p
                    className={
                      resolvedTheme === "dark"
                        ? "text-gray-300"
                        : "text-gray-600"
                    }
                  >
                    We speak your language and understand the technical
                    complexities of your products.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-navy-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3
                    className={`text-xl font-semibold mb-2 ${
                      resolvedTheme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Local Expertise
                  </h3>
                  <p
                    className={
                      resolvedTheme === "dark"
                        ? "text-gray-300"
                        : "text-gray-600"
                    }
                  >
                    Deep understanding of the Sri Lankan tech ecosystem and
                    regional market dynamics.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-navy-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3
                    className={`text-xl font-semibold mb-2 ${
                      resolvedTheme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Growth-Driven
                  </h3>
                  <p
                    className={
                      resolvedTheme === "dark"
                        ? "text-gray-300"
                        : "text-gray-600"
                    }
                  >
                    Every strategy is designed with scalability and sustainable
                    growth in mind.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-navy-500 to-navy-700 rounded-2xl p-8 text-white">
                <h4 className="text-2xl font-bold mb-4">Our Vision</h4>
                <p className="text-blue-100 leading-relaxed">
                  To become the leading digital marketing partner for tech
                  startups across Srilanka, helping innovative companies
                  transform their groundbreaking ideas into market leaders.
                </p>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan-400 rounded-lg opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
