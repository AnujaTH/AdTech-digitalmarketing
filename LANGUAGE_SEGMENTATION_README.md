# Language-Based Segmentation Feature

## Overview

This feature implements intelligent language-based segmentation for the AdTech platform, allowing the system to serve different creatives, landing pages, and content based on user language preferences (English, Sinhala, and Tamil).

## Features

### 🎯 Core Functionality

1. **Automatic Language Detection**

   - Browser language detection
   - User preference storage
   - Fallback to English

2. **Language-Specific Routing**

   - `/` - English routes
   - `/si/` - Sinhala routes
   - `/ta/` - Tamil routes

3. **Localized Content Delivery**

   - Translated UI elements
   - Language-specific messaging
   - Cultural adaptations

4. **Language Analytics**
   - User preference tracking
   - Conversion rate analysis
   - Segment insights

### 🌐 Supported Languages

| Language | Code | Native Name | Route Prefix |
| -------- | ---- | ----------- | ------------ |
| English  | `en` | English     | `/`          |
| Sinhala  | `si` | සිංහල       | `/si/`       |
| Tamil    | `ta` | தமிழ்       | `/ta/`       |

## Implementation Details

### File Structure

```
src/
├── i18n/
│   ├── index.ts                 # i18n configuration
│   └── locales/
│       ├── en.json             # English translations
│       ├── si.json             # Sinhala translations
│       └── ta.json             # Tamil translations
├── contexts/
│   └── LanguageContext.tsx     # Language state management
├── components/
│   ├── LanguageSwitcher.tsx    # Language selection UI
│   ├── LanguageBasedRouter.tsx # Language-aware routing
│   ├── LanguageSpecificLanding.tsx # Language-specific content
│   └── LanguageAnalytics.tsx   # Analytics dashboard
└── pages/
    └── LanguageDemo.tsx        # Feature demonstration
```

### Key Components

#### 1. Language Context (`LanguageContext.tsx`)

- Manages current language state
- Handles language switching
- Provides language utilities

```typescript
const { currentLanguage, setLanguage, languageNames } = useLanguage();
```

#### 2. Language Switcher (`LanguageSwitcher.tsx`)

- Dropdown menu for language selection
- Visual language indicators (flags)
- Responsive design

#### 3. Language-Based Router (`LanguageBasedRouter.tsx`)

- Automatic route redirection based on language
- URL structure management
- Language-specific content injection

#### 4. Language-Specific Landing (`LanguageSpecificLanding.tsx`)

- Different creatives per language
- Localized messaging
- Cultural adaptations

#### 5. Language Analytics (`LanguageAnalytics.tsx`)

- User preference tracking
- Segment analysis
- Conversion insights

## Usage

### Basic Implementation

1. **Initialize the language system:**

```typescript
import { LanguageProvider } from "@/contexts/LanguageContext";
import "./i18n";

// Wrap your app
<LanguageProvider>
  <App />
</LanguageProvider>;
```

2. **Use translations in components:**

```typescript
import { useTranslation } from "react-i18next";

const MyComponent = () => {
  const { t } = useTranslation();

  return <h1>{t("hero.title")}</h1>;
};
```

3. **Access language context:**

```typescript
import { useLanguage } from "@/contexts/LanguageContext";

const MyComponent = () => {
  const { currentLanguage, setLanguage } = useLanguage();

  return <button onClick={() => setLanguage("si")}>Switch to Sinhala</button>;
};
```

### Language-Specific Content

```typescript
const getLanguageSpecificContent = () => {
  const content = {
    en: {
      hero: { accentColor: "from-blue-500 to-cyan-500" },
      features: ["Global Tech Expertise", "English-First Approach"],
    },
    si: {
      hero: { accentColor: "from-green-500 to-emerald-500" },
      features: ["ශ්‍රී ලංකා තාක්ෂණික විශේෂඥතාව", "සිංහල භාෂාවෙන් සේවා"],
    },
    ta: {
      hero: { accentColor: "from-orange-500 to-red-500" },
      features: ["இலங்கை தொழில்நுட்ப நிபுணத்துவம்", "தமிழ் மொழியில் சேவைகள்"],
    },
  };

  return content[currentLanguage] || content.en;
};
```

## Translation Files

### Structure

Each language file (`en.json`, `si.json`, `ta.json`) contains:

```json
{
  "common": {
    "loading": "Loading...",
    "error": "An error occurred"
  },
  "navigation": {
    "home": "Home",
    "services": "Services"
  },
  "hero": {
    "title": "Empower Your Tech Startup",
    "subtitle": "AdTech fuels the growth...",
    "cta": "Start Your Journey"
  }
}
```

### Adding New Translations

1. Add the key to all language files
2. Provide appropriate translations
3. Use in components with `t('key.path')`

## Analytics & Insights

### Tracked Metrics

- Language preference changes
- Session duration by language
- Conversion rates by segment
- User engagement patterns

### Analytics Dashboard

- Language distribution charts
- Segment performance metrics
- Personalized recommendations
- A/B testing insights

## Benefits

### For Users

- ✅ Native language experience
- ✅ Cultural relevance
- ✅ Improved comprehension
- ✅ Better engagement

### For Business

- ✅ Higher conversion rates
- ✅ Increased market reach
- ✅ Better user retention
- ✅ Competitive advantage

## Demo

Visit `/language-demo` to see the feature in action:

- **English**: `/language-demo`
- **Sinhala**: `/si/language-demo`
- **Tamil**: `/ta/language-demo`

## Configuration

### Environment Variables

```env
# Enable debug mode for development
REACT_APP_I18N_DEBUG=true

# Default language
REACT_APP_DEFAULT_LANGUAGE=en
```

### Customization

1. **Add new languages**: Update `LanguageContext.tsx` and add translation files
2. **Modify routing**: Update `LanguageBasedRouter.tsx`
3. **Custom analytics**: Extend `LanguageAnalytics.tsx`

## Best Practices

### Content Localization

- ✅ Use native speakers for translations
- ✅ Consider cultural nuances
- ✅ Test with target audience
- ✅ Maintain brand consistency

### Technical Implementation

- ✅ Lazy load translations
- ✅ Implement fallbacks
- ✅ Cache language preferences
- ✅ Monitor performance

### Analytics

- ✅ Track user behavior
- ✅ Measure conversion impact
- ✅ A/B test variations
- ✅ Optimize based on data

## Future Enhancements

### Planned Features

- [ ] Machine learning language detection
- [ ] Dynamic content personalization
- [ ] Multi-language SEO optimization
- [ ] Voice-based language switching
- [ ] Regional dialect support

### Integration Opportunities

- [ ] Email marketing automation
- [ ] Chatbot language support
- [ ] Customer service integration
- [ ] Social media localization

## Support

For questions or issues with the language-based segmentation feature:

1. Check the demo page: `/language-demo`
2. Review the translation files in `src/i18n/locales/`
3. Test language switching functionality
4. Monitor analytics dashboard

## Contributing

To contribute to the language segmentation feature:

1. Add new translations to all language files
2. Test with multiple languages
3. Update documentation
4. Follow the existing code patterns

---

**Note**: This feature is designed to be scalable and can easily accommodate additional languages and advanced personalization features.
