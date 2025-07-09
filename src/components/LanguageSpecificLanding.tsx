import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LanguageSpecificLandingProps {
  variant?: "hero" | "services" | "pricing" | "contact";
}

const LanguageSpecificLanding: React.FC<LanguageSpecificLandingProps> = ({
  variant = "hero",
}) => {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation();
  const { resolvedTheme } = useTheme();

  // Language-specific creative content
  const getLanguageSpecificCreatives = () => {
    const creatives = {
      en: {
        hero: {
          backgroundImage: "/home.png",
          accentColor: "from-blue-500 to-cyan-500",
          ctaStyle: "bg-gradient-to-r from-blue-500 to-cyan-500",
          features: [
            "Global Tech Expertise",
            "English-First Approach",
            "International Market Access",
          ],
        },
        services: {
          highlightColor: "text-blue-600",
          accentColor: "border-blue-500",
          specialOffer: "Free consultation for international startups",
        },
        pricing: {
          currency: "USD",
          specialDiscount: "20% off for international clients",
          features: [
            "Global support",
            "English documentation",
            "24/7 availability",
          ],
        },
      },
      si: {
        hero: {
          backgroundImage: "/home.png",
          accentColor: "from-green-500 to-emerald-500",
          ctaStyle: "bg-gradient-to-r from-green-500 to-emerald-500",
          features: [
            "ශ්‍රී ලංකා තාක්ෂණික විශේෂඥතාව",
            "සිංහල භාෂාවෙන් සේවා",
            "දේශීය වෙළඳපොළ අවබෝධය",
          ],
        },
        services: {
          highlightColor: "text-green-600",
          accentColor: "border-green-500",
          specialOffer: "ශ්‍රී ලංකා ආරම්භක ව්‍යාපාර සඳහා නිදහස් උපදේශන",
        },
        pricing: {
          currency: "LKR",
          specialDiscount: "ශ්‍රී ලංකා ගනුදෙනුකරුවන් සඳහා 15% වට්ටම්",
          features: ["දේශීය සහාය", "සිංහල ලේඛන", "ස්ථානීය වේලාවන්"],
        },
      },
      ta: {
        hero: {
          backgroundImage: "/home.png",
          accentColor: "from-orange-500 to-red-500",
          ctaStyle: "bg-gradient-to-r from-orange-500 to-red-500",
          features: [
            "இலங்கை தொழில்நுட்ப நிபுணத்துவம்",
            "தமிழ் மொழியில் சேவைகள்",
            "பிராந்திய சந்தை புரிதல்",
          ],
        },
        services: {
          highlightColor: "text-orange-600",
          accentColor: "border-orange-500",
          specialOffer: "இலங்கை ஸ்டார்ட்அப்புகளுக்கு இலவச ஆலோசனை",
        },
        pricing: {
          currency: "LKR",
          specialDiscount: "இலங்கை வாடிக்கையாளர்களுக்கு 15% தள்ளுபடி",
          features: [
            "உள்ளூர் ஆதரவு",
            "தமிழ் ஆவணப்படுத்தல்",
            "உள்ளூர் நேரங்கள்",
          ],
        },
      },
    };

    return creatives[currentLanguage] || creatives.en;
  };

  const creatives = getLanguageSpecificCreatives();

  const renderHero = () => (
    <section
      className={`relative min-h-screen flex items-center justify-center bg-gradient-to-br ${creatives.hero.accentColor}`}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          {t("hero.title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
        >
          {t("hero.subtitle")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className={`${creatives.hero.ctaStyle} text-white px-8 py-4 text-lg`}
          >
            {t("hero.cta")}
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
          >
            {t("hero.learnMore")}
          </Button>
        </motion.div>

        {/* Language-specific features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {creatives.hero.features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold mb-2">{feature}</h3>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );

  const renderServices = () => (
    <section
      className={`py-20 ${
        resolvedTheme === "dark" ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${creatives.services.highlightColor}`}
          >
            {t("services.title")}
          </h2>
          <p
            className={`text-xl ${
              resolvedTheme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {t("services.subtitle")}
          </p>
          <div
            className={`mt-4 p-4 bg-gradient-to-r ${creatives.hero.accentColor} text-white rounded-lg inline-block`}
          >
            <p className="font-semibold">{creatives.services.specialOffer}</p>
          </div>
        </div>
      </div>
    </section>
  );

  const renderPricing = () => (
    <section
      className={`py-20 ${
        resolvedTheme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${creatives.services.highlightColor}`}
          >
            {t("pricing.title")}
          </h2>
          <p
            className={`text-xl ${
              resolvedTheme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {t("pricing.subtitle")}
          </p>
          <div
            className={`mt-4 p-4 bg-gradient-to-r ${creatives.hero.accentColor} text-white rounded-lg inline-block`}
          >
            <p className="font-semibold">{creatives.pricing.specialDiscount}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {creatives.pricing.features.map((feature, index) => (
            <Card
              key={index}
              className={`${creatives.services.accentColor} border-2`}
            >
              <CardHeader>
                <CardTitle className={creatives.services.highlightColor}>
                  {feature}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p
                  className={
                    resolvedTheme === "dark" ? "text-gray-300" : "text-gray-600"
                  }
                >
                  {feature}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  const renderContact = () => (
    <section
      className={`py-20 ${
        resolvedTheme === "dark" ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${creatives.services.highlightColor}`}
          >
            {t("contact.title")}
          </h2>
          <p
            className={`text-xl ${
              resolvedTheme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {t("contact.subtitle")}
          </p>
        </div>
      </div>
    </section>
  );

  const renderContent = () => {
    switch (variant) {
      case "hero":
        return renderHero();
      case "services":
        return renderServices();
      case "pricing":
        return renderPricing();
      case "contact":
        return renderContact();
      default:
        return renderHero();
    }
  };

  return <div className="language-specific-landing">{renderContent()}</div>;
};

export default LanguageSpecificLanding;
