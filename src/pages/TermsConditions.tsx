import { useTheme } from "@/contexts/ThemeContext";
import { useNavigate } from "react-router-dom";

const TermsConditions = () => {
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
                  d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.83A2 2 0 0 0 19.41 7.4l-4.82-4.82A2 2 0 0 0 12.17 2H6Zm6 1.41L18.59 8H14a2 2 0 0 1-2-2V3.41ZM6 4h6v4a4 4 0 0 0 4 4h4v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4Z"
                />
              </svg>
            </span>
          </div>
          <div className="px-6 pb-10 pt-2">
            <h1 className="text-3xl font-bold mb-2 text-center">
              Terms & Conditions
            </h1>
            <p className="mb-4 text-center text-sm text-gray-400 dark:text-gray-500">
              Last updated: June 2024
            </p>
            <p className="mb-4">
              Welcome to <b>AdTech</b>. By accessing or using our website and
              services, you agree to be bound by these Terms & Conditions.
              Please read them carefully.
            </p>
            <h2 className="text-xl font-semibold mt-8 mb-2">
              Use of Our Services
            </h2>
            <ul className="list-disc ml-6 mb-4">
              <li>You must be at least 18 years old to use our services.</li>
              <li>
                You agree not to misuse our services or help anyone else do so.
              </li>
            </ul>
            <h2 className="text-xl font-semibold mt-8 mb-2">
              Intellectual Property
            </h2>
            <ul className="list-disc ml-6 mb-4">
              <li>
                All content on this site is the property of AdTech or its
                licensors.
              </li>
              <li>
                You may not copy, reproduce, or distribute any content without
                permission.
              </li>
            </ul>
            <h2 className="text-xl font-semibold mt-8 mb-2">
              Limitation of Liability
            </h2>
            <ul className="list-disc ml-6 mb-4">
              <li>
                We are not liable for any damages resulting from your use of our
                website or services.
              </li>
              <li>
                Our services are provided "as is" without warranties of any
                kind.
              </li>
            </ul>
            <h2 className="text-xl font-semibold mt-8 mb-2">
              Changes to Terms
            </h2>
            <p className="mb-4">
              We may update these Terms & Conditions from time to time. Changes
              will be posted on this page with an updated date.
            </p>
            <h2 className="text-xl font-semibold mt-8 mb-2">Contact Us</h2>
            <p>
              If you have any questions about these Terms & Conditions, please
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

export default TermsConditions;
