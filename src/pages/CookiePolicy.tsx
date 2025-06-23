import { useTheme } from "@/contexts/ThemeContext";
import { useNavigate } from "react-router-dom";

const CookiePolicy = () => {
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
                  d="M12 2a10 10 0 1 0 10 10c0-.55-.45-1-1-1a2 2 0 0 1-2-2c0-.55-.45-1-1-1a2 2 0 0 1-2-2c0-.55-.45-1-1-1a2 2 0 0 1-2-2c0-.55-.45-1-1-1Z"
                />
                <circle cx="8.5" cy="13.5" r="1.5" fill="#fff" />
                <circle cx="15.5" cy="15.5" r="1" fill="#fff" />
                <circle cx="12" cy="10" r="1" fill="#fff" />
              </svg>
            </span>
          </div>
          <div className="px-6 pb-10 pt-2">
            <h1 className="text-3xl font-bold mb-2 text-center">
              Cookie Policy
            </h1>
            <p className="mb-4 text-center text-sm text-gray-400 dark:text-gray-500">
              Last updated: June 2024
            </p>
            <p className="mb-4">
              This Cookie Policy explains how <b>AdTech</b> uses cookies and
              similar technologies to recognize you when you visit our website.
              It explains what these technologies are and why we use them, as
              well as your rights to control our use of them.
            </p>
            <h2 className="text-xl font-semibold mt-8 mb-2">
              What Are Cookies?
            </h2>
            <p className="mb-4">
              Cookies are small data files placed on your device when you visit
              a website. They are widely used to make websites work, or work
              more efficiently, as well as to provide reporting information.
            </p>
            <h2 className="text-xl font-semibold mt-8 mb-2">
              How We Use Cookies
            </h2>
            <ul className="list-disc ml-6 mb-4">
              <li>To remember your preferences and settings</li>
              <li>To analyze site traffic and usage</li>
              <li>To improve user experience</li>
            </ul>
            <h2 className="text-xl font-semibold mt-8 mb-2">Your Choices</h2>
            <p className="mb-4">
              You can control or delete cookies through your browser settings.
              Please note that disabling cookies may affect the functionality of
              our website.
            </p>
            <h2 className="text-xl font-semibold mt-8 mb-2">Contact Us</h2>
            <p>
              If you have any questions about our Cookie Policy, please contact
              us at{" "}
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

export default CookiePolicy;
