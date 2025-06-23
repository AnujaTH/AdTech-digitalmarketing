import { useTheme } from "@/contexts/ThemeContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  {
    href: "https://facebook.com/",
    label: "Facebook",
    icon: <span className="text-lg">f</span>,
  },
  {
    href: "https://linkedin.com/",
    label: "LinkedIn",
    icon: <span className="text-lg">in</span>,
  },
  {
    href: "https://twitter.com/",
    label: "Twitter",
    icon: <span className="text-lg">tw</span>,
  },
  {
    href: "https://instagram.com/",
    label: "Instagram",
    icon: <span className="text-lg">ig</span>,
  },
];

const Footer = () => {
  const { resolvedTheme } = useTheme();
  const { toast } = useToast();
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const getFooterClass = () => {
    if (resolvedTheme === "dark") {
      return "bg-gray-900 text-white";
    }
    return "bg-gray-100 text-gray-900";
  };

  const getTextColor = () => {
    if (resolvedTheme === "dark") {
      return "text-gray-300";
    }
    return "text-gray-600";
  };

  const getBorderColor = () => {
    if (resolvedTheme === "dark") {
      return "border-gray-700";
    }
    return "border-gray-300";
  };

  const getSocialBg = () => {
    if (resolvedTheme === "dark") {
      return "bg-gray-700";
    }
    return "bg-gray-300";
  };

  return (
    <footer className={`${getFooterClass()} py-16`}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">AdTech</h3>
            <p className={`${getTextColor()} mb-6 leading-relaxed`}>
              Empowering tech startups and software companies with cutting-edge
              digital marketing strategies that drive real growth and
              sustainable success.
            </p>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={`${getTextColor()} hover:text-cyan-400 transition-colors`}
                >
                  <div
                    className={`w-8 h-8 ${getSocialBg()} rounded-full flex items-center justify-center hover:bg-cyan-400 transition-colors`}
                  >
                    {link.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className={`${getTextColor()} hover:text-cyan-400 transition-colors`}
                >
                  SEO & Technical SEO
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className={`${getTextColor()} hover:text-cyan-400 transition-colors`}
                >
                  Content Marketing
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className={`${getTextColor()} hover:text-cyan-400 transition-colors`}
                >
                  Social Media Strategy
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className={`${getTextColor()} hover:text-cyan-400 transition-colors`}
                >
                  Paid Advertising
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className={`${getTextColor()} hover:text-cyan-400 transition-colors`}
                >
                  Lead Generation
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className={`${getTextColor()} hover:text-cyan-400 transition-colors`}
                >
                  Strategy Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className={`${getTextColor()} hover:text-cyan-400 transition-colors`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className={`${getTextColor()} hover:text-cyan-400 transition-colors`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className={`${getTextColor()} hover:text-cyan-400 transition-colors`}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`${getTextColor()} hover:text-cyan-400 transition-colors`}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className={`${getTextColor()} hover:text-cyan-400 transition-colors`}
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div>
                <p className={getTextColor()}>
                  Jaffna, Northern Province
                  <br />
                  Sri Lanka 40000
                </p>
              </div>
              <div>
                <p className={getTextColor()}>
                  Phone: +94 766584872
                  <br />
                  Email: hello@adtech.lk
                </p>
              </div>
              <div>
                <p className={getTextColor()}>
                  Mon-Fri: 9:00 AM - 6:00 PM
                  <br />
                  Sat: 10:00 AM - 4:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="max-w-xl mx-auto mb-10">
          <form
            className="flex flex-col sm:flex-row items-center gap-4 bg-white/10 p-6 rounded-lg shadow-md"
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
              required
              placeholder="Your email address"
              className="flex-1 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-6 py-2 rounded font-semibold shadow hover:from-blue-600 hover:to-cyan-400 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t ${getBorderColor()} pt-8`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className={`${getTextColor()} mb-4 md:mb-0`}>
              <p>&copy; 2025 AdTech. All rights reserved.</p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
              <Link
                to="/privacy-policy"
                className={`${getTextColor()} hover:text-cyan-400 transition-colors text-sm`}
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className={`${getTextColor()} hover:text-cyan-400 transition-colors text-sm`}
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className={`${getTextColor()} hover:text-cyan-400 transition-colors text-sm`}
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
