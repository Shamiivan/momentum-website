import Header from './components/Header'
import Footer from './components/Footer'
import { usePageScroll } from './hooks/usePageScroll'
import { useTranslation } from 'react-i18next'
import './App.css'
import './Contact.css'

const Contact = () => {
  usePageScroll();
  const { t } = useTranslation('contact');

  return (
    <>
      <Header />

      <main className="contact-page">
        <section className="contact-hero">
          <div className="container-new">
            <h1 className="contact-page-title">{t('hero.title')}</h1>
          </div>
        </section>

        <section className="contact-content-section">
          <div className="container-new">
            <div className="contact-wrapper">
              <div className="contact-form-container">
                <h2 className="form-section-title">{t('form.title')}</h2>
                <form className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">{t('form.firstName')} {t('form.required')}</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        placeholder={t('form.firstNamePlaceholder')}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">{t('form.lastName')} {t('form.required')}</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        placeholder={t('form.lastNamePlaceholder')}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">{t('form.email')} {t('form.required')}</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder={t('form.emailPlaceholder')}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">{t('form.phone')}</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder={t('form.phonePlaceholder')}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">{t('form.company')} {t('form.required')}</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      placeholder={t('form.companyPlaceholder')}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">{t('form.message')} {t('form.required')}</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      placeholder={t('form.messagePlaceholder')}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-submit-contact">
                    {t('form.submit')}
                  </button>

                  <p className="form-note">
                    <span className="pulse-dot"></span>
                    {t('form.responseTime')}
                  </p>
                </form>
              </div>

              <div className="contact-info-container">
                <div className="contact-info-card">
                  <h3 className="contact-info-title">{t('contactInfo.title')}</h3>
                  <p className="contact-info-text">
                    {t('contactInfo.description')}
                  </p>

                  <div className="contact-details">
                    <div className="contact-detail-item">
                      <div className="contact-icon">
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <div>
                        <h4>{t('contactInfo.location')}</h4>
                        <p>4845 Rue Jean-Talon O</p>
                        <p>Montreal, QC H4P 1W7</p>
                      </div>
                    </div>

                    <div className="contact-detail-item">
                      <div className="contact-icon">
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      </div>
                      <div>
                        <h4>{t('contactInfo.email')}</h4>
                        <a href="mailto:info@momentummanagement.ca">info@momentummanagement.ca</a>
                      </div>
                    </div>

                    <div className="contact-detail-item">
                      <div className="contact-icon">
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <div>
                        <h4>{t('contactInfo.phone')}</h4>
                        <a href="tel:+18773540317">+1 (877) 354-0317</a>
                      </div>
                    </div>
                  </div>

                  <div className="contact-cta-box">
                    <h4>{t('contactInfo.ctaTitle')}</h4>
                    <p>{t('contactInfo.ctaDescription')}</p>
                    <a href="mailto:info@momentummanagement.ca" className="btn-contact-alt">
                      {t('contactInfo.ctaButton')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
