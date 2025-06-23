import { useTheme } from "@/contexts/ThemeContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";

const jobOpenings = [
  {
    title: "Marketing Executive",
    salary: "Rs. 50,000 - 80,000/month",
    mode: "On-site",
    description:
      "Drive marketing campaigns and manage client relationships. 1+ years experience preferred.",
  },
  {
    title: "Social Media Manager",
    salary: "Rs. 60,000 - 90,000/month",
    mode: "Hybrid",
    description:
      "Plan and execute social media strategies across platforms. Creative mindset required.",
  },
  {
    title: "Content Creator / Copywriter / Content Strategist",
    salary: "Rs. 50,000 - 85,000/month",
    mode: "Remote",
    description:
      "Write, edit, and strategize content for digital campaigns. Excellent English required.",
  },
  {
    title: "SEO Specialist",
    salary: "Rs. 70,000 - 100,000/month",
    mode: "Remote",
    description:
      "Optimize websites for search engines. Experience with SEO tools a plus.",
  },
  {
    title: "PPC / Paid Ads Specialist",
    salary: "Rs. 75,000 - 110,000/month",
    mode: "Remote",
    description:
      "Manage Google, Facebook, and LinkedIn ad campaigns. Analytical skills required.",
  },
  {
    title: "Graphic Designer / UI Designer",
    salary: "Rs. 60,000 - 100,000/month",
    mode: "Hybrid",
    description:
      "Design graphics and UI for web and social. Portfolio required.",
  },
  {
    title: "Email Marketing Specialist",
    salary: "Rs. 55,000 - 90,000/month",
    mode: "Remote",
    description:
      "Create and manage email campaigns. Experience with Mailchimp or similar tools.",
  },
  {
    title: "Marketing Analyst / Data Analyst",
    salary: "Rs. 80,000 - 120,000/month",
    mode: "On-site",
    description:
      "Analyze marketing data and generate reports. Strong Excel/analytics skills required.",
  },
];

const Careers = () => {
  const { resolvedTheme } = useTheme();
  const revealRef = useScrollReveal<HTMLDivElement>();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<
    null | (typeof jobOpenings)[0]
  >(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    cv: null as File | null,
  });
  const [submitted, setSubmitted] = useState(false);

  const openModal = (job?: (typeof jobOpenings)[0]) => {
    setSelectedJob(
      job ?? {
        title: "General Application",
        salary: "",
        mode: "",
        description: "",
      }
    );
    setModalOpen(true);
    setForm({ name: "", email: "", phone: "", message: "", cv: null });
    setSubmitted(false);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedJob(null);
    setSubmitted(false);
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as any;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend
  };

  return (
    <section
      id="careers"
      className={`py-10 ${
        resolvedTheme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div ref={revealRef} className="container mx-auto px-4 scroll-reveal">
        <div className="text-center mb-6">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-2 ${
              resolvedTheme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Join Us
          </h2>
          <p
            className={`text-base mb-4 ${
              resolvedTheme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            We're always looking for passionate, creative, and driven people to
            join our team. Explore our current openings and help us shape the
            future of digital marketing for tech companies!
          </p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          {jobOpenings.map((job, idx) => (
            <li
              key={idx}
              className={`rounded px-4 py-3 flex flex-col shadow-sm text-sm transition-transform duration-200 hover:scale-105 hover:shadow-lg border border-transparent hover:border-cyan-400 ${
                resolvedTheme === "dark"
                  ? "bg-gray-800 text-white"
                  : "bg-gray-100 text-gray-900"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-base flex items-center gap-2">
                  {/* Job type icon */}
                  {job.title.includes("Marketing") && (
                    <span className="text-lg">📢</span>
                  )}
                  {job.title.includes("Social Media") && (
                    <span className="text-lg">💬</span>
                  )}
                  {job.title.includes("Content") && (
                    <span className="text-lg">✍️</span>
                  )}
                  {job.title.includes("SEO") && (
                    <span className="text-lg">🔍</span>
                  )}
                  {job.title.includes("PPC") && (
                    <span className="text-lg">💸</span>
                  )}
                  {job.title.includes("Graphic") && (
                    <span className="text-lg">🎨</span>
                  )}
                  {job.title.includes("Email") && (
                    <span className="text-lg">📧</span>
                  )}
                  {job.title.includes("Analyst") && (
                    <span className="text-lg">📊</span>
                  )}
                  {job.title}
                </span>
                <button
                  onClick={() => openModal(job)}
                  className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-3 py-1 rounded font-semibold shadow hover:from-blue-600 hover:to-cyan-400 transition-all text-xs"
                >
                  Apply
                </button>
              </div>
              <div className="flex flex-wrap gap-2 mb-1 text-xs">
                <span className="inline-block bg-cyan-100 text-cyan-800 px-2 py-0.5 rounded dark:bg-cyan-900 dark:text-cyan-100 font-semibold">
                  {job.salary}
                </span>
                <span
                  className={`inline-block px-2 py-0.5 rounded font-semibold ${
                    job.mode === "Remote"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                      : job.mode === "On-site"
                      ? "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100"
                      : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                  }`}
                >
                  {job.mode}
                </span>
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-300">
                {job.description}
              </div>
            </li>
          ))}
        </ul>
        {/* Interview Process Section */}
        <div className="max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <span className="inline-block w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full mr-2"></span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Our Interview Process
            </span>
          </h3>
          {/* Stepper */}
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 px-2 md:px-8">
            {/* Progress line */}
            <div
              className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 opacity-40 z-0"
              style={{ transform: "translateY(-50%)" }}
            ></div>
            {/* Steps */}
            {[
              {
                icon: "📄",
                title: "Application Review",
                desc: "We review your application and CV to assess your fit for the role.",
              },
              {
                icon: "📞",
                title: "Intro Call",
                desc: "A short call to get to know you and discuss your background.",
              },
              {
                icon: "📝",
                title: "Task/Assignment",
                desc: "Complete a role-relevant task or assignment (if applicable).",
              },
              {
                icon: "🤝",
                title: "Final Interview",
                desc: "Meet the team and discuss your experience, skills, and fit.",
              },
              {
                icon: "🎉",
                title: "Offer",
                desc: "Receive your offer and next steps to join our team!",
              },
            ].map((step, i, arr) => (
              <div
                key={i}
                className="relative z-10 flex flex-col items-center group w-full md:w-auto"
              >
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-full shadow-lg mb-2 border-4 border-white dark:border-gray-900 bg-gradient-to-br from-cyan-400 to-blue-600 text-white text-3xl group-hover:scale-110 transition-transform duration-300`}
                >
                  {step.icon}
                </div>
                <span className="font-semibold text-center mb-1 text-base md:text-sm">
                  {step.title}
                </span>
                <span className="text-xs text-center text-gray-500 dark:text-gray-300">
                  {step.desc}
                </span>
                {/* Progress dot for mobile */}
                {i < arr.length - 1 && (
                  <div className="block md:hidden w-1 h-8 bg-gradient-to-b from-cyan-400 to-blue-600 opacity-40 my-2 rounded-full"></div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* End Interview Process Section */}
        <div className="text-center">
          <p
            className={`text-sm ${
              resolvedTheme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Don't see your role?{" "}
            <button
              type="button"
              onClick={() => openModal()}
              className="underline text-cyan-600 hover:text-blue-600 transition-colors"
            >
              Send us your CV anyway!
            </button>
          </p>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-2">
          <div
            className={`w-full max-w-md mx-auto rounded-lg shadow-lg p-4 sm:p-6 relative ${
              resolvedTheme === "dark"
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-900"
            }`}
            style={{ maxHeight: "95vh", overflowY: "auto" }}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-2xl text-gray-400 hover:text-cyan-500"
            >
              ×
            </button>
            <h3 className="text-xl font-bold mb-2">
              Apply for {selectedJob.title}
            </h3>
            {selectedJob.salary && selectedJob.mode && (
              <p className="mb-4 text-xs text-gray-500 dark:text-gray-400">
                {selectedJob.salary} | {selectedJob.mode}
              </p>
            )}
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-3xl mb-2">✅</div>
                <div className="font-semibold mb-2">Application Submitted!</div>
                <div className="text-sm text-gray-400">
                  Thank you for applying. We will review your application and
                  get back to you soon.
                </div>
                <button
                  onClick={closeModal}
                  className="mt-6 px-4 py-2 rounded bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold"
                >
                  Close
                </button>
              </div>
            ) : (
              <form className="space-y-3" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-xs mb-1">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 rounded border bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 rounded border bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs mb-1">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 rounded border bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs mb-1">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 rounded border bg-transparent"
                    rows={3}
                  />
                </div>
                <div>
                  <label className="block text-xs mb-1">
                    CV/Resume (PDF, DOC, DOCX)
                  </label>
                  <input
                    type="file"
                    name="cv"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 rounded border bg-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 rounded bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold"
                >
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Careers;
