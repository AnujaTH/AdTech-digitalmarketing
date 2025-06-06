
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
const plans = [
  {
    name: "Starter",
    price: "Rs. 24,900",
    period: "/month",
    description: "Perfect for early-stage startups and freelance developers in Sri Lanka",
    features: [
      "Basic SEO optimization",
      "Social media management (2 platforms)",
      "Monthly content creation (4 posts)",
      "Basic analytics & reporting",
      "Email support",
      "1 strategy consultation/month"
    ],
    highlighted: false,
    cta: "Start Growing"
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
      "Bi-weekly strategy consultations"
    ],
    highlighted: true,
    cta: "Scale Your Business"
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
      "Dedicated account manager"
    ],
    highlighted: false,
    cta: "Accelerate Growth"
  }
];


  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transparent Pricing for
            <span className="text-gradient"> Every Stage</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your tech startup's growth stage. 
            No hidden fees, no long-term contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-xl transition-all duration-300 border-0 shadow-lg ${
                plan.highlighted 
                  ? 'bg-gradient-to-br from-navy-500 to-navy-700 text-white scale-105 lg:scale-110' 
                  : 'bg-white hover:-translate-y-2'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-cyan-400 text-navy-900 px-6 py-2 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-6">
                <CardTitle className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-navy-600'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full flex-shrink-0 mt-2 ${
                        plan.highlighted ? 'bg-cyan-400' : 'bg-navy-600'
                      }`}></div>
                      <span className={`${plan.highlighted ? 'text-blue-100' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full py-4 text-lg font-semibold rounded-lg transition-all duration-200 ${
                    plan.highlighted 
                      ? 'bg-white text-navy-600 hover:bg-blue-50' 
                      : 'bg-navy-600 text-white hover:bg-navy-700'
                  }`}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-600 mb-6">
              We also offer custom packages for enterprise clients, agencies, and unique requirements. 
              Let's discuss what works best for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                className="border-2 border-navy-600 text-navy-600 hover:bg-navy-600 hover:text-white px-6 py-3"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Request Custom Quote
              </Button>
              <Button 
                className="bg-navy-600 text-white hover:bg-navy-700 px-6 py-3"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
