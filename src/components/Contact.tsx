import { useState, ReactNode } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useTheme } from "@/contexts/ThemeContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ContactProps {
  header?: ReactNode;
}

const Contact = ({ header }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const { toast } = useToast();
  const { resolvedTheme } = useTheme();
  const revealRef = useScrollReveal<HTMLDivElement>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description:
        "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getSectionClass = () =>
    `py-20 ${resolvedTheme === "dark" ? "bg-gray-900" : "bg-gray-50"}`;
  const getTitleClass = () =>
    `text-4xl md:text-5xl font-bold mb-6 ${
      resolvedTheme === "dark" ? "text-white" : "text-gray-900"
    }`;
  const getDescClass = () =>
    `text-xl max-w-3xl mx-auto ${
      resolvedTheme === "dark" ? "text-gray-300" : "text-gray-600"
    }`;
  const getCardClass = () =>
    `shadow-xl border-0 ${
      resolvedTheme === "dark" ? "bg-gray-800 text-white" : "bg-white"
    }`;
  const getCardTitleClass = () =>
    `text-2xl font-bold ${
      resolvedTheme === "dark" ? "text-white" : "text-gray-900"
    }`;
  const getLabelClass = () =>
    `block text-sm font-medium mb-2 ${
      resolvedTheme === "dark" ? "text-gray-300" : "text-gray-700"
    }`;
  const getWhyCardClass = () =>
    `shadow-xl border-0 ${
      resolvedTheme === "dark" ? "bg-gray-800 text-white" : "bg-white"
    }`;
  const getWhyTitleClass = () =>
    `text-2xl font-bold mb-4 ${
      resolvedTheme === "dark" ? "text-white" : "text-gray-900"
    }`;
  const getWhyTextClass = () =>
    `${resolvedTheme === "dark" ? "text-gray-300" : "text-gray-700"}`;

  return (
    <section id="contact" className={getSectionClass()}>
      <div ref={revealRef} className="container mx-auto px-6 scroll-reveal">
        {header && <div>{header}</div>}
        <div className="text-center mb-16">
          <h2 className={getTitleClass()}>
            Ready to Transform Your
            <span className="text-gradient"> Tech Business?</span>
          </h2>
          <p className={getDescClass()}>
            Get in touch with our team of digital marketing experts. Let's
            discuss how we can accelerate your startup's growth.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className={getCardClass()}>
            <CardHeader>
              <CardTitle className={getCardTitleClass()}>
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className={getLabelClass()}>
                      Name *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={getLabelClass()}>
                      Email *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className={getLabelClass()}>
                    Company
                  </label>
                  <Input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className={getLabelClass()}>
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full"
                    placeholder="Tell us about your project and how we can help..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-navy-600 text-white hover:bg-navy-700 py-3 text-lg font-semibold"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <Card className="shadow-xl border-0 bg-gradient-to-br from-navy-500 to-navy-700 text-white">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                      Phone
                    </h4>
                    <p className="text-blue-100 text-sm sm:text-base">
                      <a
                        href="tel:+94766584872"
                        className="hover:text-white transition-colors"
                      >
                        +94 
                      </a>
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                      Email
                    </h4>
                    <p className="text-blue-100 text-sm sm:text-base">
                      <a
                        href="mailto:hello@adtech.lk"
                        className="hover:text-white transition-colors"
                      >
                        hello@adtech.lk
                      </a>
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                      Office
                    </h4>
                    <p className="text-blue-100 text-sm sm:text-base">
                      Jaffna, Northern Province
                      <br />
                      Sri Lanka 40000
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                      Business Hours
                    </h4>
                    <p className="text-blue-100 text-sm sm:text-base">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className={getWhyCardClass()}>
              <CardContent className="p-6 sm:p-8">
                <h3 className={getWhyTitleClass()}>Why Choose AdTech?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-navy-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span
                      className={`${getWhyTextClass()} text-sm sm:text-base`}
                    >
                      Free initial consultation and strategy assessment
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-navy-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span
                      className={`${getWhyTextClass()} text-sm sm:text-base`}
                    >
                      Specialized expertise in tech industry marketing
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-navy-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span
                      className={`${getWhyTextClass()} text-sm sm:text-base`}
                    >
                      Local presence with global marketing strategies
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
