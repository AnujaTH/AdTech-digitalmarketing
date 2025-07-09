import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "react-i18next";
import { ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/contexts/ThemeContext";

const LanguageSwitcher: React.FC = () => {
  const { currentLanguage, setLanguage, languageNames } = useLanguage();
  const { t } = useTranslation();
  const { resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en" as const, name: languageNames.en, flag: "🇺🇸" },
    { code: "si" as const, name: languageNames.si, flag: "🇱🇰" },
    { code: "ta" as const, name: languageNames.ta, flag: "🇱🇰" },
  ];

  const handleLanguageChange = (languageCode: "en" | "si" | "ta") => {
    setLanguage(languageCode);
    setIsOpen(false);
  };

  const currentLang = languages.find((lang) => lang.code === currentLanguage);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
            resolvedTheme === "dark"
              ? "text-gray-300 hover:text-white hover:bg-gray-800"
              : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          }`}
        >
          <Globe className="w-4 h-4" />
          <span className="text-lg">{currentLang?.flag}</span>
          <span className="hidden sm:inline text-sm font-medium">
            {currentLang?.name}
          </span>
          <ChevronDown className="w-3 h-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className={`w-48 ${
          resolvedTheme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white"
        }`}
      >
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors ${
              currentLanguage === language.code
                ? resolvedTheme === "dark"
                  ? "bg-gray-700 text-white"
                  : "bg-gray-100 text-gray-900"
                : resolvedTheme === "dark"
                ? "text-gray-300 hover:text-white hover:bg-gray-700"
                : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            }`}
          >
            <span className="text-lg">{language.flag}</span>
            <span className="font-medium">{language.name}</span>
            {currentLanguage === language.code && (
              <div className="ml-auto w-2 h-2 bg-cyan-400 rounded-full" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
