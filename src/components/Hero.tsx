import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { resolvedTheme } = useTheme();
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const getBackgroundClass = () => {
    if (resolvedTheme === "dark") {
      return "bg-gradient-to-br from-black via-blue-950 to-black";
    }
    return "bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-50";
  };

  const getTextColor = () => {
    if (resolvedTheme === "dark") {
      return "text-white";
    }
    return "text-gray-900";
  };

  const getHeaderClass = () => {
    if (resolvedTheme === "dark") {
      return "bg-white/5 backdrop-blur-sm border-b border-white/10";
    }
    return "bg-white/80 backdrop-blur-sm border-b border-gray-200/50";
  };

  return (
    <section
      className={`min-h-screen flex items-center justify-center relative ${getBackgroundClass()} ${getTextColor()} overflow-hidden`}
    >
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-white dark:bg-gray-900 bg-opacity-95 flex flex-col">
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 dark:border-gray-800">
            <span className="font-extrabold tracking-widest uppercase text-lg text-gray-900 dark:text-white">
              ADTECH
            </span>
            <button
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>
          <nav className="flex flex-col gap-2 px-6 py-8 text-lg font-semibold">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="py-3 px-2 rounded hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/services"
              onClick={() => setMenuOpen(false)}
              className="py-3 px-2 rounded hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors"
            >
              Services
            </Link>
            <Link
              to="/blog"
              onClick={() => setMenuOpen(false)}
              className="py-3 px-2 rounded hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="py-3 px-2 rounded hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/careers"
              onClick={() => setMenuOpen(false)}
              className="py-3 px-2 rounded hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors"
            >
              Careers
            </Link>
          </nav>
        </div>
      )}
      {/* Animated Floating Background Shapes */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
        width="100%"
        height="100%"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="200" cy="200" r="80" fill="#06b6d4" fillOpacity="0.12">
          <animate
            attributeName="cy"
            values="200;300;200"
            dur="6s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="1240" cy="600" r="100" fill="#3b82f6" fillOpacity="0.10">
          <animate
            attributeName="cy"
            values="600;500;600"
            dur="7s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="800" cy="100" r="60" fill="#a5b4fc" fillOpacity="0.10">
          <animate
            attributeName="cx"
            values="800;900;800"
            dur="5s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>

      {/* Header */}
      <header
        className={`absolute top-0 left-0 w-full px-4 sm:px-6 md:px-8 py-3 md:py-4 flex justify-between items-center z-30 ${getHeaderClass()}`}
      >
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Hamburger menu for mobile */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
          {/* Logo mark */}
          <img
            src="/favicon.jpg"
            alt="AdTech Logo"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 dark:border-gray-800 flex-shrink-0"
          />
          {/* Company name - responsive text sizing */}
          <span
            className="font-extrabold tracking-widest uppercase text-gray-900 dark:text-white text-lg sm:text-xl md:text-2xl lg:text-3xl"
            style={{ letterSpacing: "0.1em" }}
          >
            ADTECH
          </span>
        </div>

        {/* Company Nav - hidden on mobile */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {[
            { to: "/", label: "Home" },
            { to: "/services", label: "Services" },
            { to: "/blog", label: "Blog" },
            { to: "/contact", label: "Contact" },
            { to: "/careers", label: "Careers" },
          ].map((item, idx) => (
            <Link
              key={idx}
              to={item.to}
              className={`$${
                resolvedTheme === "dark"
                  ? "text-gray-300 hover:text-cyan-400"
                  : "text-gray-600 hover:text-blue-600"
              } transition-colors capitalize`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right side buttons */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <ThemeToggle />
          {/* SVG Animation - hidden on mobile */}
          <span className="hidden md:inline-flex items-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 animate-pulse"
            >
              <circle
                cx="16"
                cy="16"
                r="15"
                stroke="#06b6d4"
                strokeWidth="2"
                fill="#e0f2fe"
              />
              <rect x="13" y="8" width="6" height="10" rx="3" fill="#06b6d4" />
              <rect x="15" y="20" width="2" height="2" rx="1" fill="#06b6d4" />
            </svg>
          </span>
          {/* Responsive button text */}
          <Button
            className={`bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-bold px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-xl shadow-lg hover:from-blue-600 hover:to-cyan-400 transition-all text-xs sm:text-sm md:text-base lg:text-lg animate-bounce whitespace-nowrap`}
            onClick={() => window.open("https://calendly.com/", "_blank")}
          >
            {isMobile ? "Free Call" : "Book Free Strategy Call"}
          </Button>
        </div>
      </header>

      {/* Hero Content + Animation */}
      <div className="container mx-auto px-4 sm:px-6 flex flex-col-reverse md:flex-row items-center justify-between relative z-10 pt-20 md:pt-0">
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight tracking-tight"
            style={{ lineHeight: 1.1 }}
          >
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-fuchsia-500 bg-clip-text text-transparent animate-gradient-x">
              Empower Your Tech Startup
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed ${
              resolvedTheme === "dark" ? "text-blue-100" : "text-gray-700"
            }`}
          >
            <span className="inline-block animate-fade-in">
              AdTech fuels the growth of innovative startups in Jaffna and
              beyond through{" "}
              <span className="font-semibold text-cyan-500">
                cutting-edge digital marketing
              </span>{" "}
              solutions.
            </span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start items-center mb-10 sm:mb-12 md:mb-14"
          >
            <Button
              size="lg"
              className={`$${
                resolvedTheme === "dark"
                  ? "bg-white text-gray-900 hover:bg-blue-100"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              } px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-xl shadow-xl transition-all duration-200 w-full sm:w-auto`}
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Let's Grow Together
            </Button>
            <Button
              variant="outline"
              size="lg"
              className={`$${
                resolvedTheme === "dark"
                  ? "bg-gray-900 text-cyan-300 border-cyan-700 hover:bg-cyan-950 hover:text-white hover:border-cyan-400"
                  : "bg-white text-gray-900 border-gray-300 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-400"
              } px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-xl shadow-xl transition-all duration-200 border-2 animate-fade-in w-full sm:w-auto`}
              onClick={() =>
                document
                  .getElementById("how-it-works")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              See How It Works
            </Button>
          </motion.div>
        </div>
        {/* Right: SVG Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full md:w-1/2 flex justify-center mb-8 sm:mb-10 md:mb-0"
        >
          <svg
            width="340"
            height="340"
            viewBox="0 0 340 340"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-64 h-64 sm:w-80 sm:h-80 md:max-w-md"
          >
            <circle
              cx="170"
              cy="170"
              r="160"
              fill="#06b6d4"
              fillOpacity="0.08"
            />
            <circle
              cx="170"
              cy="170"
              r="120"
              fill="#3b82f6"
              fillOpacity="0.10"
            />
            <g>
              <rect
                x="110"
                y="110"
                width="120"
                height="120"
                rx="32"
                fill="#fff"
                className="dark:fill-gray-900"
              />
              <rect
                x="130"
                y="130"
                width="80"
                height="80"
                rx="16"
                fill="#06b6d4"
                fillOpacity="0.15"
              />
              <rect
                x="150"
                y="150"
                width="40"
                height="40"
                rx="8"
                fill="#06b6d4"
              />
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 170 170"
                to="360 170 170"
                dur="10s"
                repeatCount="indefinite"
              />
            </g>
            <circle cx="170" cy="60" r="8" fill="#06b6d4">
              <animate
                attributeName="cy"
                values="60;80;60"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="60" cy="170" r="6" fill="#3b82f6">
              <animate
                attributeName="cx"
                values="60;80;60"
                dur="2.2s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="280" cy="170" r="6" fill="#a5b4fc">
              <animate
                attributeName="cx"
                values="280;260;280"
                dur="2.2s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </motion.div>
      </div>

      {/* Animated SVG Wave at the bottom */}
      <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-32 md:h-40"
        >
          <defs>
            <linearGradient id="waveGradientLight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.12" />
            </linearGradient>
            <linearGradient id="waveGradientDark" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#1e293b" stopOpacity="0.18" />
            </linearGradient>
          </defs>
          <path>
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="M0,40 C360,120 1080,0 1440,80 L1440,120 L0,120 Z;
                      M0,80 C480,0 960,160 1440,40 L1440,120 L0,120 Z;
                      M0,40 C360,120 1080,0 1440,80 L1440,120 L0,120 Z"
            />
          </path>
          <path
            d="M0,40 C360,120 1080,0 1440,80 L1440,120 L0,120 Z"
            fill={
              resolvedTheme === "dark"
                ? "url(#waveGradientDark)"
                : "url(#waveGradientLight)"
            }
          />
        </svg>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20"
      >
        <button
          onClick={scrollToAbout}
          className={`$${
            resolvedTheme === "dark"
              ? "text-white hover:text-cyan-400"
              : "text-gray-600 hover:text-blue-600"
          } transition-colors duration-200`}
        >
          <ChevronDown size={36} className="drop-shadow-lg" />
        </button>
      </motion.div>
      <style>{`
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease-in-out infinite;
        }
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-fade-in { animation: fadeIn 1.2s cubic-bezier(.4,0,.2,1); }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: none; } }
      `}</style>
    </section>
  );
};

export default Hero;
