import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    resources: {
      en: { 
        translation: {
          home: "Home",
          addProducts: "Add Products",
          showProducts: "Show Products",
          createAccount: "Create Account",
          logoText: "Ytri Travels",
          footerText: "@copy; 2024 Ytri Travels. All rights reserved."
        },
      }, 
      fr: {
        translation: {
          home: "Accueil",
          addProducts: "Ajouter des Produits",
          showProducts: "Afficher les Produits",
          createAccount: "créer un compte",
          logoText: "Voyages Ytri",
          footerText: "@copy; 2024 Ytri Travels. Tous droits réservés."
        },
      }, // Added comma here
    },
    
  });

export default i18n;
