import React from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import LanguageSpecificLanding from "@/components/LanguageSpecificLanding";
import LanguageAnalytics from "@/components/LanguageAnalytics";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const LanguageDemo: React.FC = () => {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  const { resolvedTheme } = useTheme();

  const languageFeatures = {
    en: {
      title: "Language-Based Segmentation Demo",
      description:
        "Experience how our platform serves different creatives and content based on your language preference.",
      features: [
        "Automatic language detection",
        "Language-specific landing pages",
        "Localized content and messaging",
        "Cultural adaptation",
        "Language-based analytics",
        "Personalized user experience",
      ],
      benefits: [
        "Higher conversion rates",
        "Better user engagement",
        "Improved customer satisfaction",
        "Increased market reach",
      ],
    },
    si: {
      title: "භාෂා-භාවිතා කරන ඛණ්ඩන ආකෘතිය",
      description:
        "ඔබේ භාෂා අභිරුචිය අනුව අපගේ වේදිකාව විවිධ නිර්මාණ සහ අන්තර්ගතය සපයන ආකාරය අත්විඳින්න.",
      features: [
        "ස්වයංක්‍රීය භාෂා හඳුනාගැනීම",
        "භාෂා-විශේෂිත ගොඩබිම් පිටු",
        "ස්ථානීය අන්තර්ගතය සහ පණිවිඩ",
        "සංස්කෘතික අනුවර්තනය",
        "භාෂා-භාවිතා කරන විශ්ලේෂණ",
        "පුද්ගලීකරණය කරන ලද පරිශීලක අත්දැකීම",
      ],
      benefits: [
        "ඉහළ පරිවර්තන අනුපාත",
        "හොඳ පරිශීලක සම්බන්ධතාවය",
        "වැඩිදියුණු ගනුදෙනුකරු සංතෘප්තිය",
        "වැඩි වෙළඳපොළ ප්‍රවේශය",
      ],
    },
    ta: {
      title: "மொழி அடிப்படையிலான பிரிப்பு டெமோ",
      description:
        "உங்கள் மொழி விருப்பத்தின் அடிப்படையில் எங்கள் தளம் வெவ்வேறு படைப்புகள் மற்றும் உள்ளடக்கத்தை எவ்வாறு வழங்குகிறது என்பதை அனுபவிக்கவும்.",
      features: [
        "தானியங்கி மொழி கண்டறிதல்",
        "மொழி-குறிப்பிட்ட இறங்கும் பக்கங்கள்",
        "உள்ளூர்மயமாக்கப்பட்ட உள்ளடக்கம் மற்றும் செய்தி",
        "பண்பாட்டு ஏற்பு",
        "மொழி அடிப்படையிலான பகுப்பாய்வு",
        "தனிப்பயனாக்கப்பட்ட பயனர் அனுபவம்",
      ],
      benefits: [
        "உயர் மாற்ற விகிதங்கள்",
        "சிறந்த பயனர் ஈடுபாடு",
        "மேம்பட்ட வாடிக்கையாளர் திருப்தி",
        "அதிகரித்த சந்தை அடைவு",
      ],
    },
  };

  const currentFeatures =
    languageFeatures[currentLanguage] || languageFeatures.en;

  return (
    <div
      className={`min-h-screen ${
        resolvedTheme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Header */}
      <header
        className={`sticky top-0 z-50 ${
          resolvedTheme === "dark" ? "bg-gray-800/80" : "bg-white/80"
        } backdrop-blur-sm border-b ${
          resolvedTheme === "dark" ? "border-gray-700" : "border-gray-200"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">AdTech Language Demo</h1>
            <Badge variant="secondary" className="ml-2">
              {currentLanguage.toUpperCase()}
            </Badge>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button variant="outline" onClick={() => window.history.back()}>
              {t("common.back")}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            {currentFeatures.title}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-600 dark:text-gray-300">
            {currentFeatures.description}
          </p>
        </motion.div>

        {/* Language-Specific Landing Demo */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Language-Specific Landing Pages
          </h2>
          <LanguageSpecificLanding variant="hero" />
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentFeatures.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className={`h-full ${
                    resolvedTheme === "dark"
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white"
                  }`}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      {feature}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentFeatures.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-6 rounded-lg ${
                  resolvedTheme === "dark" ? "bg-gray-800" : "bg-white"
                } shadow-lg`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">{benefit}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Language Analytics Demo */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Language Analytics
          </h2>
          <LanguageAnalytics />
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`p-8 rounded-2xl ${
              resolvedTheme === "dark" ? "bg-gray-800" : "bg-white"
            } shadow-xl`}
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Implement Language-Based Segmentation?
            </h2>
            <p className="text-xl mb-6 text-gray-600 dark:text-gray-300">
              Transform your adtech platform with intelligent language detection
              and personalized content delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
              >
                {t("common.getStarted")}
              </Button>
              <Button variant="outline" size="lg">
                {t("common.learnMore")}
              </Button>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default LanguageDemo;
