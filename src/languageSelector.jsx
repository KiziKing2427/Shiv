import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-dropdown" style={{ textAlign: 'center', transform: 'translateY(60%)' }}>
      <select
        id="languageSelect"
        onChange={(e) => changeLanguage(e.target.value)}
        value={i18n.language}
        style={{ margin: '0 auto' }}
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
