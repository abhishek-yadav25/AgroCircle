import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    marketplace: "Marketplace",
    farmer: "Farmer",
    buyer: "Buyer",
    contact: "Contact",
    welcome: "Welcome to AgroCircle",
    tagline: "Connecting Farmers, Buyers & Agricultural Service Providers",
    register: "Register Now",
    explore: "Explore Marketplace",
  },

  hi: {
    home: "होम",
    about: "हमारे बारे में",
    services: "सेवाएँ",
    marketplace: "मार्केटप्लेस",
    farmer: "किसान",
    buyer: "खरीदार",
    contact: "संपर्क",
    welcome: "एग्रोसर्कल में आपका स्वागत है",
    tagline: "किसानों, खरीदारों और कृषि सेवा प्रदाताओं को जोड़ना",
    register: "पंजीकरण करें",
    explore: "मार्केटप्लेस देखें",
  },

  mr: {
    home: "मुख्यपृष्ठ",
    about: "आमच्याबद्दल",
    services: "सेवा",
    marketplace: "मार्केटप्लेस",
    farmer: "शेतकरी",
    buyer: "खरेदीदार",
    contact: "संपर्क",
    welcome: "अॅग्रोसर्कलमध्ये आपले स्वागत आहे",
    tagline: "शेतकरी, खरेदीदार आणि कृषी सेवा पुरवठादारांना जोडत आहे",
    register: "नोंदणी करा",
    explore: "मार्केटप्लेस पहा",
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}