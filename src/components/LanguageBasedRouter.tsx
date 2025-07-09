import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "react-i18next";

interface LanguageBasedRouterProps {
  children: React.ReactNode;
}

const LanguageBasedRouter: React.FC<LanguageBasedRouterProps> = ({
  children,
}) => {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  // Language-specific route mappings
  const languageRoutes = {
    en: {
      "/": "/",
      "/services": "/services",
      "/about": "/about",
      "/contact": "/contact",
      "/blog": "/blog",
      "/careers": "/careers",
      "/pricing": "/pricing",
    },
    si: {
      "/": "/si",
      "/services": "/si/services",
      "/about": "/si/about",
      "/contact": "/si/contact",
      "/blog": "/si/blog",
      "/careers": "/si/careers",
      "/pricing": "/si/pricing",
    },
    ta: {
      "/": "/ta",
      "/services": "/ta/services",
      "/about": "/ta/about",
      "/contact": "/ta/contact",
      "/blog": "/ta/blog",
      "/careers": "/ta/careers",
      "/pricing": "/ta/pricing",
    },
  };

  useEffect(() => {
    // Handle language-based routing
    const currentPath = location.pathname;
    const isLanguageSpecificPath =
      currentPath.startsWith("/si/") || currentPath.startsWith("/ta/");

    if (!isLanguageSpecificPath && currentLanguage !== "en") {
      // Redirect to language-specific path
      const languagePrefix = currentLanguage === "si" ? "/si" : "/ta";
      const newPath = `${languagePrefix}${currentPath}`;
      navigate(newPath, { replace: true });
    } else if (isLanguageSpecificPath && currentLanguage === "en") {
      // Redirect to English path
      const englishPath = currentPath.replace(/^\/(si|ta)/, "");
      navigate(englishPath, { replace: true });
    }
  }, [currentLanguage, location.pathname, navigate]);

  // Language-specific content variations
  const getLanguageSpecificContent = () => {
    const contentVariations = {
      en: {
        heroTitle: t("hero.title"),
        heroSubtitle: t("hero.subtitle"),
        ctaText: t("hero.cta"),
      },
      si: {
        heroTitle: t("hero.title"),
        heroSubtitle: t("hero.subtitle"),
        ctaText: t("hero.cta"),
        // Add Sinhala-specific content variations
        localBenefits: [
          "ශ්‍රී ලංකාවේ තාක්ෂණික පරිසරය පිළිබඳ ගැඹුරු අවබෝධය",
          "දේශීය වෙළඳපොළ ගතිකතා පිළිබඳ විශේෂඥතාව",
          "සිංහල භාෂාවෙන් සේවා ලබා ගැනීම",
        ],
      },
      ta: {
        heroTitle: t("hero.title"),
        heroSubtitle: t("hero.subtitle"),
        ctaText: t("hero.cta"),
        // Add Tamil-specific content variations
        localBenefits: [
          "இலங்கை தொழில்நுட்ப சுற்றுச்சூழல் பற்றிய ஆழமான புரிதல்",
          "பிராந்திய சந்தை இயக்கவியல் பற்றிய நிபுணத்துவம்",
          "தமிழ் மொழியில் சேவைகளைப் பெறுதல்",
        ],
      },
    };

    return contentVariations[currentLanguage] || contentVariations.en;
  };

  // Expose language-specific content to children via context or props
  const languageContent = getLanguageSpecificContent();

  return (
    <div className="language-router-wrapper">
      {/* Inject language-specific content into the app */}
      <div
        style={{ display: "none" }}
        data-language-content={JSON.stringify(languageContent)}
      />
      {children}
    </div>
  );
};

export default LanguageBasedRouter;
