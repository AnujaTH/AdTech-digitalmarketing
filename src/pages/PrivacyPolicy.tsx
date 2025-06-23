import { useTheme } from "@/contexts/ThemeContext";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const { resolvedTheme } = useTheme();
  const navigate = useNavigate();
  return (
    <section
      className={`py-16 min-h-screen flex items-center justify-center ${
        resolvedTheme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-white text-gray-900"
      }`}
    >
      <div className="w-full max-w-3xl px-2 sm:px-4">
        <button
          onClick={() => navigate("/")}
          className="mb-4 flex items-center gap-2 text-cyan-600 hover:text-cyan-800 font-semibold px-4 py-2 rounded-lg bg-cyan-50 dark:bg-gray-700 dark:text-cyan-300 dark:hover:text-white transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </button>
        <div
          className={`relative rounded-2xl shadow-xl overflow-hidden animate-fade-in ${
            resolvedTheme === "dark" ? "bg-gray-800" : "bg-white"
          }`}
          style={{ transition: "background 0.3s" }}
        >
          {/* Gradient Accent Bar */}
          <div className="h-2 w-full bg-gradient-to-r from-cyan-400 to-blue-600" />
          {/* Icon */}
          <div className="flex justify-center mt-6 mb-2">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                <path
                  fill="#fff"
                  d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm-3 5a3 3 0 1 1 6 0v3H9V7Zm10 5v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1Z"
                />
              </svg>
            </span>
          </div>
          <div className="px-6 pb-10 pt-2">
            <h1 className="text-3xl font-bold mb-2 text-center">
              Privacy Policy
            </h1>
            <p className="mb-4 text-center text-sm text-gray-400 dark:text-gray-500">
              Last updated: June 2024
            </p>
            <p className="mb-4">
              At <b>AdTech</b>, we are committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website and use our
              services.
            </p>
            <h2 className="text-xl font-semibold mt-8 mb-2">
              Information We Collect
            </h2>
            <ul className="list-disc ml-6 mb-4">
              <li>
                Personal information you provide (such as name, email, phone,
                CV, etc.)
              </li>
              <li>Usage data (pages visited, time spent, etc.)</li>
              <li>Cookies and tracking technologies</li>
            </ul>
            <h2 className="text-xl font-semibold mt-8 mb-2">
              How We Use Your Information
            </h2>
            <ul className="list-disc ml-6 mb-4">
              <li>To provide and improve our services</li>
              <li>
                To communicate with you about your inquiries or applications
              </li>
              <li>To analyze website usage and improve user experience</li>
              <li>To comply with legal obligations</li>
            </ul>
            <h2 className="text-xl font-semibold mt-8 mb-2">
              How We Share Your Information
            </h2>
            <ul className="list-disc ml-6 mb-4">
              <li>We do not sell your personal information.</li>
              <li>
                We may share information with trusted service providers who
                assist us in operating our website and business.
              </li>
              <li>We may disclose information if required by law.</li>
            </ul>
            <h2 className="text-xl font-semibold mt-8 mb-2">Your Rights</h2>
            <ul className="list-disc ml-6 mb-4">
              <li>
                You may request access, correction, or deletion of your personal
                data.
              </li>
              <li>You may opt out of marketing communications at any time.</li>
            </ul>
            <h2 className="text-xl font-semibold mt-8 mb-2">Cookies</h2>
            <p className="mb-4">
              We use cookies to enhance your experience. You can control cookies
              through your browser settings. For more details, see our Cookie
              Policy.
            </p>
            <h2 className="text-xl font-semibold mt-8 mb-2">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <a
                href="mailto:hello@adtech.lk"
                className="underline text-cyan-600"
              >
                hello@adtech.lk
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <style>
        {`.animate-fade-in{animation:fadeIn .7s cubic-bezier(.4,0,.2,1)}`}
        {`@keyframes fadeIn{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}`}
      </style>
    </section>
  );
};

export default PrivacyPolicy;
