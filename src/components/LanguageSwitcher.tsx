import { useTranslation } from 'react-i18next';
import { FEATURE_FLAGS } from '../config/featureFlags';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  // Don't render if i18n is disabled
  if (!FEATURE_FLAGS.ENABLE_I18N) {
    return null;
  }

  const currentLanguage = i18n.language;

  const switchLanguage = (lang: 'en' | 'fr') => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="language-switcher">
      <button
        className={`lang-button ${currentLanguage === 'en' ? 'active' : ''}`}
        onClick={() => switchLanguage('en')}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="lang-divider">|</span>
      <button
        className={`lang-button ${currentLanguage === 'fr' ? 'active' : ''}`}
        onClick={() => switchLanguage('fr')}
        aria-label="Passer au français"
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSwitcher;
