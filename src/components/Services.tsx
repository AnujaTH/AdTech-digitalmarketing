
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: "SEO & Technical SEO",
      description: "Optimize your tech products for search engines with advanced technical SEO strategies tailored for software companies.",
      features: ["Technical site audits", "Developer-friendly implementations", "API documentation optimization", "Performance optimization"]
    },
    {
      title: "Content Marketing",
      description: "Create compelling technical content that resonates with developers, CTOs, and tech decision-makers.",
      features: ["Technical blog writing", "Case study development", "Whitepaper creation", "Developer documentation"]
    },
    {
      title: "Social Media Strategy",
      description: "Build your tech brand presence on platforms where developers and tech leaders engage.",
      features: ["LinkedIn B2B campaigns", "Twitter tech community engagement", "GitHub showcase optimization", "Tech forum participation"]
    },
    {
      title: "Paid Advertising",
      description: "Targeted ad campaigns designed to reach tech professionals and potential enterprise clients.",
      features: ["Google Ads for SaaS", "LinkedIn B2B advertising", "Retargeting campaigns", "Conversion optimization"]
    },
    {
      title: "Lead Generation",
      description: "Generate high-quality leads from tech companies, startups, and enterprise clients.",
      features: ["B2B lead funnels", "Tech conference marketing", "Webinar campaigns", "Free trial optimization"]
    },
    {
      title: "Strategy Consulting",
      description: "Comprehensive marketing strategy consulting specifically for tech startups and software companies.",
      features: ["Go-to-market strategy", "Product launch planning", "Market positioning", "Competitive analysis"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Marketing Services Built for
            <span className="text-gradient"> Tech Companies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions designed specifically for the unique needs 
            of tech startups, developers, and software companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-navy-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-navy-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-navy-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-navy-700 transition-colors shadow-lg"
          >
            Get Custom Strategy
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
