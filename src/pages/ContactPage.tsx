import Contact from "@/components/Contact";
import { useNavigate } from "react-router-dom";

export default function ContactPage() {
  const navigate = useNavigate();
  return (
    <Contact
      header={
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 font-semibold shadow transition"
          >
            ← Back
          </button>
          <span className="text-xl font-bold text-gray-800 dark:text-white">
            Contact
          </span>
        </div>
      }
    />
  );
}
