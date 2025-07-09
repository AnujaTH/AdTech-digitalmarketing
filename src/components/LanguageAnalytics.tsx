import React, { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "react-i18next";

interface LanguageAnalyticsData {
  language: string;
  timestamp: string;
  userAgent: string;
  referrer: string;
  page: string;
  sessionId: string;
}

interface LanguageSegment {
  language: string;
  count: number;
  percentage: number;
  avgSessionDuration: number;
  conversionRate: number;
}

const LanguageAnalytics: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation();
  const [analyticsData, setAnalyticsData] = useState<LanguageAnalyticsData[]>(
    []
  );
  const [segments, setSegments] = useState<LanguageSegment[]>([]);

  // Generate session ID
  const generateSessionId = () => {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  };

  // Track language preference
  const trackLanguagePreference = () => {
    const sessionId = localStorage.getItem("sessionId") || generateSessionId();
    localStorage.setItem("sessionId", sessionId);

    const data: LanguageAnalyticsData = {
      language: currentLanguage,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      page: window.location.pathname,
      sessionId: sessionId,
    };

    // Store in localStorage for demo purposes (in production, send to analytics service)
    const existingData = JSON.parse(
      localStorage.getItem("languageAnalytics") || "[]"
    );
    existingData.push(data);
    localStorage.setItem("languageAnalytics", JSON.stringify(existingData));
    setAnalyticsData(existingData);
  };

  // Calculate language segments
  const calculateSegments = (data: LanguageAnalyticsData[]) => {
    const languageCounts: Record<string, number> = {};
    const totalSessions = data.length;

    data.forEach((item) => {
      languageCounts[item.language] = (languageCounts[item.language] || 0) + 1;
    });

    const segments: LanguageSegment[] = Object.entries(languageCounts).map(
      ([language, count]) => ({
        language,
        count,
        percentage: (count / totalSessions) * 100,
        avgSessionDuration: Math.random() * 300 + 60, // Mock data
        conversionRate: Math.random() * 0.15 + 0.02, // Mock data
      })
    );

    return segments;
  };

  // Get language-specific insights
  const getLanguageInsights = () => {
    const insights = {
      en: {
        preferredContent: "Technical documentation and case studies",
        bestTimeToContact: "9 AM - 5 PM EST",
        conversionTriggers: [
          "Free consultation",
          "Technical expertise",
          "Global reach",
        ],
        painPoints: [
          "Language barriers",
          "Time zone differences",
          "Cultural differences",
        ],
      },
      si: {
        preferredContent: "සිංහල භාෂාවෙන් ලියා ඇති ලිපි සහ උදාහරණ",
        bestTimeToContact: "පෙ.ව 9:00 - ප.ව 6:00 (SLST)",
        conversionTriggers: ["නිදහස් උපදේශන", "දේශීය විශේෂඥතාව", "සිංහල සහාය"],
        painPoints: ["භාෂා බාධක", "ස්ථානීය වේලාවන්", "සංස්කෘතික වෙනස්කම්"],
      },
      ta: {
        preferredContent:
          "தமிழ் மொழியில் எழுதப்பட்ட கட்டுரைகள் மற்றும் எடுத்துக்காட்டுகள்",
        bestTimeToContact: "காலை 9:00 - மாலை 6:00 (SLST)",
        conversionTriggers: [
          "இலவச ஆலோசனை",
          "உள்ளூர் நிபுணத்துவம்",
          "தமிழ் ஆதரவு",
        ],
        painPoints: [
          "மொழி தடைகள்",
          "உள்ளூர் நேரங்கள்",
          "பண்பாட்டு வேறுபாடுகள்",
        ],
      },
    };

    return insights[currentLanguage] || insights.en;
  };

  useEffect(() => {
    trackLanguagePreference();

    // Load existing analytics data
    const existingData = JSON.parse(
      localStorage.getItem("languageAnalytics") || "[]"
    );
    setAnalyticsData(existingData);
    setSegments(calculateSegments(existingData));
  }, [currentLanguage]);

  const insights = getLanguageInsights();

  return (
    <div className="language-analytics">
      {/* Analytics Dashboard (for admin/internal use) */}
      <div className="analytics-dashboard p-6 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">
          Language Analytics Dashboard
        </h3>

        {/* Language Segments */}
        <div className="mb-6">
          <h4 className="font-medium mb-3">Language Distribution</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {segments.map((segment) => (
              <div
                key={segment.language}
                className="bg-white p-4 rounded-lg shadow"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">
                    {segment.language.toUpperCase()}
                  </span>
                  <span className="text-sm text-gray-500">
                    {segment.count} users
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${segment.percentage}%` }}
                  ></div>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  {segment.percentage.toFixed(1)}% of total
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Language-Specific Insights */}
        <div className="mb-6">
          <h4 className="font-medium mb-3">
            Insights for {currentLanguage.toUpperCase()}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h5 className="font-medium mb-2">Preferred Content</h5>
              <p className="text-sm text-gray-600">
                {insights.preferredContent}
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h5 className="font-medium mb-2">Best Time to Contact</h5>
              <p className="text-sm text-gray-600">
                {insights.bestTimeToContact}
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h5 className="font-medium mb-2">Conversion Triggers</h5>
              <ul className="text-sm text-gray-600">
                {insights.conversionTriggers.map((trigger, index) => (
                  <li key={index}>• {trigger}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h5 className="font-medium mb-2">Pain Points</h5>
              <ul className="text-sm text-gray-600">
                {insights.painPoints.map((point, index) => (
                  <li key={index}>• {point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div>
          <h4 className="font-medium mb-3">Recommendations</h4>
          <div className="bg-white p-4 rounded-lg shadow">
            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                • Serve language-specific landing pages based on user preference
              </li>
              <li>• Create localized content for each language segment</li>
              <li>
                • Optimize contact forms for language-specific conversion rates
              </li>
              <li>• Implement language-based email marketing campaigns</li>
              <li>• Provide customer support in preferred languages</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageAnalytics;
