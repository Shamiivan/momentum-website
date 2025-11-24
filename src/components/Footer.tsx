import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer-new">
      <div className="container-new">
        <div className="footer-content">
          <div className="footer-column footer-brand">
            <Logo />
            <p className="footer-tagline">{t('footer.tagline')}</p>

            {/* Recognized Excellence - Integrated */}
            <div className="footer-excellence-integrated">
              <img
                src="/certification.webp"
                alt={t('footer.certificationAlt')}
                className="footer-certification-badge-small"
              />
              <p className="footer-excellence-text-small">
                {t('footer.excellenceText')}
              </p>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">{t('footer.company')}</h4>
            <ul className="footer-links">
              <li><Link to="/about">{t('footer.about')}</Link></li>
              <li><a href="/#services">{t('footer.services')}</a></li>
              <li><Link to="/careers">{t('footer.careers')}</Link></li>
              <li><a href="/#faq">{t('footer.faq')}</a></li>
              <li><Link to="/contact">{t('footer.contact')}</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">{t('footer.solutions')}</h4>
            <ul className="footer-links">
              <li><a href="/#services">{t('footer.partnerships')}</a></li>
              <li><a href="/#services">{t('footer.staffTraining')}</a></li>
              <li><a href="/#services">{t('footer.executiveCoaching')}</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">{t('footer.contactHeading')}</h4>
            <ul className="footer-contact">
              <li>{t('footer.address1')}</li>
              <li>{t('footer.address2')}</li>
              <li><a href="mailto:info@momentummanagement.ca">info@momentummanagement.ca</a></li>
              <li><a href="tel:+18773540317">+1 (877) 354-0317</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t('footer.copyright')}</p>
          <div className="footer-legal">
            <a href="#privacy">{t('footer.privacyPolicy')}</a>
            <span className="footer-separator">•</span>
            <a href="#terms">{t('footer.termsOfService')}</a>
            <span className="footer-separator">•</span>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
