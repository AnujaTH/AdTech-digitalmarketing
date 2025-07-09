import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useTranslation } from "react-i18next";

export type Language = "en" | "si" | "ta";

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  isRTL: boolean;
  languageNames: Record<Language, string>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<Language>("en");

  const languageNames: Record<Language, string> = {
    en: "English",
    si: "සිංහල",
    ta: "தமிழ்",
  };

  // Check if current language is RTL (none of our languages are RTL, but keeping for future)
  const isRTL = false;

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    i18n.changeLanguage(language);

    // Update document direction
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = language;

    // Store in localStorage
    localStorage.setItem("i18nextLng", language);
  };

  useEffect(() => {
    // Initialize language from localStorage or browser preference
    const savedLanguage = localStorage.getItem("i18nextLng") as Language;
    const browserLanguage = navigator.language.split("-")[0];

    let initialLanguage: Language = "en";

    if (savedLanguage && ["en", "si", "ta"].includes(savedLanguage)) {
      initialLanguage = savedLanguage;
    } else if (browserLanguage === "si") {
      initialLanguage = "si";
    } else if (browserLanguage === "ta") {
      initialLanguage = "ta";
    }

    setCurrentLanguage(initialLanguage);
    i18n.changeLanguage(initialLanguage);

    // Set document attributes
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = initialLanguage;
  }, [i18n]);

  const value: LanguageContextType = {
    currentLanguage,
    setLanguage,
    isRTL,
    languageNames,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
