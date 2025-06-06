
// import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

// const CaseStudies = () => {
//   const studies = [
//     {
//       company: "TechFlow SaaS",
//       industry: "Project Management",
//       challenge: "Low organic visibility and poor lead conversion",
//       solution: "Comprehensive SEO strategy and conversion optimization",
//       results: [
//         "250% increase in organic traffic",
//         "180% improvement in lead quality",
//         "45% reduction in customer acquisition cost"
//       ],
//       testimonial: "AdTech transformed our digital presence. Their technical understanding of our SaaS product was exceptional.",
//       author: "Sarah Chen, CTO"
//     },
//     {
//       company: "DevCraft Solutions",
//       industry: "Custom Software Development",
//       challenge: "Difficulty reaching enterprise clients",
//       solution: "LinkedIn B2B campaigns and thought leadership content",
//       results: [
//         "300% increase in enterprise inquiries",
//         "150% growth in monthly revenue",
//         "50+ new enterprise partnerships"
//       ],
//       testimonial: "The team at AdTech helped us position ourselves as industry leaders. Our enterprise pipeline has never been stronger.",
//       author: "Michael Rodriguez, Founder"
//     },
//     {
//       company: "StartupLab Jaffna",
//       industry: "Tech Incubator",
//       challenge: "Low visibility for startup programs",
//       solution: "Multi-channel content marketing and community building",
//       results: [
//         "400% increase in program applications",
//         "200% growth in social media following",
//         "3x more startup success stories"
//       ],
//       testimonial: "AdTech's local expertise combined with global marketing strategies helped us become the leading tech hub in Northern Sri Lanka.",
//       author: "Priya Sharma, Director"
//     }
//   ];

//   return (
//     <section id="case-studies" className="py-20 bg-white">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             Success Stories That
//             <span className="text-gradient"> Drive Results</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Real results from real tech companies. See how we've helped startups and 
//             software companies achieve remarkable growth.
//           </p>
//         </div>

//         <div className="space-y-12">
//           {studies.map((study, index) => (
//             <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
//               <div className="md:flex">
//                 <div className="md:w-2/3 p-8">
//                   <CardHeader className="px-0 pt-0">
//                     <div className="flex items-center space-x-4 mb-4">
//                       <CardTitle className="text-2xl font-bold text-gray-900">
//                         {study.company}
//                       </CardTitle>
//                       <span className="bg-navy-100 text-navy-700 px-3 py-1 rounded-full text-sm font-medium">
//                         {study.industry}
//                       </span>
//                     </div>
//                   </CardHeader>
                  
//                   <CardContent className="px-0">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                       <div>
//                         <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
//                         <p className="text-gray-600">{study.challenge}</p>
//                       </div>
//                       <div>
//                         <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
//                         <p className="text-gray-600">{study.solution}</p>
//                       </div>
//                     </div>

//                     <div className="mb-6">
//                       <h4 className="font-semibold text-gray-900 mb-3">Results</h4>
//                       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                         {study.results.map((result, resultIndex) => (
//                           <div key={resultIndex} className="bg-green-50 p-4 rounded-lg border border-green-200">
//                             <p className="text-green-800 font-semibold text-center">{result}</p>
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     <blockquote className="border-l-4 border-navy-600 pl-6 italic text-gray-700">
//                       "{study.testimonial}"
//                       <footer className="mt-2 text-sm text-gray-500 not-italic">
//                         — {study.author}
//                       </footer>
//                     </blockquote>
//                   </CardContent>
//                 </div>

//                 <div className="md:w-1/3 bg-gradient-to-br from-navy-500 to-navy-700 p-8 flex items-center justify-center">
//                   <div className="text-center text-white">
//                     <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
//                       <span className="text-2xl font-bold">{index + 1}</span>
//                     </div>
//                     <h3 className="text-xl font-bold mb-2">Case Study</h3>
//                     <p className="text-blue-100">Success Story</p>
//                   </div>
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <button 
//             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
//             className="bg-navy-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-navy-700 transition-colors shadow-lg"
//           >
//             Start Your Success Story
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CaseStudies;
