
const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Strategy & Discovery",
      description: "We dive deep into your tech product, target audience, and business goals to create a custom marketing strategy.",
      details: [
        "Technical product analysis",
        "Market research & competitor analysis",
        "Target audience identification",
        "Custom strategy development"
      ]
    },
    {
      number: "02",
      title: "Execution & Implementation",
      description: "Our expert team implements your marketing strategy across all relevant channels with precision and technical expertise.",
      details: [
        "Content creation & optimization",
        "Campaign setup & launch",
        "Technical SEO implementation",
        "Performance tracking setup"
      ]
    },
    {
      number: "03",
      title: "Growth & Optimization",
      description: "We continuously monitor, analyze, and optimize your campaigns to ensure maximum ROI and sustainable growth.",
      details: [
        "Real-time performance monitoring",
        "Data-driven optimizations",
        "Regular strategy refinements",
        "Scalable growth implementation"
      ]
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How We Drive
            <span className="text-gradient"> Tech Growth</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 3-step process ensures your tech startup gets the marketing 
            strategy and execution needed for sustainable growth.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center mb-16 last:mb-0">
              {/* Step Number */}
              <div className="flex-shrink-0 mb-8 lg:mb-0">
                <div className="w-32 h-32 bg-gradient-to-br from-navy-500 to-navy-700 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-xl">
                  {step.number}
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block flex-1 h-px bg-gradient-to-r from-navy-300 to-transparent mx-8"></div>
              )}

              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'lg:ml-12' : 'lg:mr-12 lg:order-first'}`}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">{step.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-navy-600 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Connector */}
              {index < steps.length - 1 && (
                <div className="lg:hidden w-px h-16 bg-gradient-to-b from-navy-300 to-transparent my-8"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6">
              Join hundreds of tech startups that have transformed their growth with our proven methodology.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-navy-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-navy-700 transition-colors shadow-lg"
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
