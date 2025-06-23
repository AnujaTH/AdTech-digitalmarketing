import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useTheme } from "@/contexts/ThemeContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Blog = () => {
  const { resolvedTheme } = useTheme();
  const revealRef = useScrollReveal<HTMLDivElement>();
  const { toast } = useToast();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const blogPosts = [
    {
      title: "10 Essential SEO Strategies for SaaS Startups in 2024",
      excerpt:
        "Discover the latest SEO techniques specifically designed for SaaS companies to increase organic visibility and drive qualified leads.",
      category: "SEO",
      readTime: "8 min read",
      date: "March 15, 2025",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
    },
    {
      title: "Building a Content Marketing Strategy for Tech Startups",
      excerpt:
        "Learn how to create compelling technical content that resonates with developers, CTOs, and enterprise decision-makers.",
      category: "Content Marketing",
      readTime: "12 min read",
      date: "March 10, 2025",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    },
    {
      title: "LinkedIn B2B Marketing: A Complete Guide for Software Companies",
      excerpt:
        "Master LinkedIn marketing to reach enterprise clients and build meaningful connections in the tech industry.",
      category: "Social Media",
      readTime: "15 min read",
      date: "March 5, 2025",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
    },
    {
      title: "The Rise of Tech Startups in Sri Lanka: Market Opportunities",
      excerpt:
        "Explore the growing tech ecosystem in Sri Lanka and the marketing opportunities for local and international startups.",
      category: "Market Insights",
      readTime: "10 min read",
      date: "February 28, 2025",
      image:
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=400&fit=crop",
    },
    {
      title: "Conversion Rate Optimization for B2B SaaS Landing Pages",
      excerpt:
        "Advanced techniques to optimize your SaaS landing pages for maximum conversion rates and user engagement.",
      category: "Conversion Optimization",
      readTime: "14 min read",
      date: "February 20, 2025",
      image:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=400&fit=crop",
    },
    {
      title: "Marketing Automation for Tech Startups: Tools and Strategies",
      excerpt:
        "Implement marketing automation to scale your startup's growth while maintaining personalized customer experiences.",
      category: "Marketing Automation",
      readTime: "11 min read",
      date: "February 15, 2025",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop",
    },
  ];

  // Ensure section and text colors are correct for dark mode
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

  return (
    <section id="blog" className={getSectionClass()}>
      <div ref={revealRef} className="container mx-auto px-6 scroll-reveal">
        <div className="text-center mb-16">
          <h2 className={getTitleClass()}>
            Latest Insights &
            <span className="text-gradient"> Tech Marketing Tips</span>
          </h2>
          <p className={getDescClass()}>
            Stay ahead of the curve with our latest articles on digital
            marketing, tech industry trends, and growth strategies for startups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-navy-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-navy-600 transition-colors leading-tight">
                  {post.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                <a
                  href="https://adtech12.medium.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-navy-600 font-semibold hover:text-navy-700 transition-colors"
                >
                  Read More →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://adtech12.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-navy-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-navy-700 transition-colors shadow-lg inline-block"
          >
            View All Articles
          </a>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-gradient-to-r from-navy-500 to-navy-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Stay Updated with Tech Marketing Insights
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Get the latest marketing strategies, industry insights, and growth
            tips delivered to your inbox weekly.
          </p>

          <form
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              toast({
                title: "Successfully Subscribed!",
                description: "Thank you for subscribing to our newsletter.",
              });
              setNewsletterEmail("");
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-cyan-400 text-navy-900 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Blog;
