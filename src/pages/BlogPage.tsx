import Blog from "@/components/Blog";
import { useNavigate } from "react-router-dom";

export default function BlogPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="max-w-6xl mx-auto pt-8 px-4 flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 font-semibold shadow transition"
        >
          ← Back
        </button>
        <span className="text-xl font-bold text-gray-800 dark:text-white">
          Blog
        </span>
      </div>
      <Blog />
    </>
  );
}
