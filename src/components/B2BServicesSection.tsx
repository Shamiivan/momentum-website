import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './B2BServicesSection.css';

const B2BServicesSection = () => {
  const { t } = useTranslation('home');
  const [activeService, setActiveService] = useState('Partnerships');

  const services = [
    {
      title: t('b2bServices.partnerships.title'),
      key: 'Partnerships',
      link: '/services/partnerships',
      valueOffering: t('b2bServices.partnerships.valueOffering'),
      description: t('b2bServices.partnerships.description'),
      cta: t('b2bServices.partnerships.cta'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="8.5" cy="7" r="4"/>
          <line x1="20" y1="8" x2="20" y2="14"/>
          <line x1="23" y1="11" x2="17" y2="11"/>
        </svg>
      )
    },
    {
      title: t('b2bServices.staffTraining.title'),
      key: 'Staff/Sales Training',
      link: '/services/staff-training',
      valueOffering: t('b2bServices.staffTraining.valueOffering'),
      description: t('b2bServices.staffTraining.description'),
      cta: t('b2bServices.staffTraining.cta'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 14l9-5-9-5-9 5 9 5z"/>
          <path d="M12 14l6.16-3.422 A12.066 12.066 0 0 1 21 12"/>
          <path d="M12 14l-6.16-3.422 A12.066 12.066 0 0 0 3 12"/>
          <path d="M12 21l-9-5"/>
          <path d="M12 21l9-5"/>
        </svg>
      )
    },
    {
      title: t('b2bServices.executiveCoaching.title'),
      key: 'Executive coaching',
      link: '/services/executive-coaching',
      valueOffering: t('b2bServices.executiveCoaching.valueOffering'),
      description: t('b2bServices.executiveCoaching.description'),
      cta: t('b2bServices.executiveCoaching.cta'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      )
    }
  ];

  const getActiveService = () => services.find(service => service.key === activeService);

  return (
    <section className="b2b-services-section">
      <div className="b2b-services-container">
        <div className="b2b-services-header">
          <h2 className="b2b-services-title">{t('b2bServices.title')}</h2>
          <p className='service-description'>
            {t('b2bServices.description')}
          </p>
        </div>

        <div className="b2b-services-content">
          <div className="b2b-services-left">
            <div className="b2b-services-grid">
              {services.map((service) => (
                <button
                  key={service.key}
                  className={`b2b-service-card ${activeService === service.key ? 'active' : ''}`}
                  onClick={() => setActiveService(service.key)}
                >
                  <div className="b2b-service-icon">{service.icon}</div>
                  <span className="b2b-service-title">{service.title}</span>
                  <svg className="b2b-service-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              ))}
            </div>
          </div>

          <div className="b2b-services-right">
            {getActiveService() && (
              <div className="b2b-content-card">
                <h3 className="b2b-content-headline">{getActiveService()?.valueOffering}</h3>
                <p className="b2b-content-body">{getActiveService()?.description}</p>
                <Link to={getActiveService()?.link || '/'} className="b2b-content-cta">
                  {getActiveService()?.cta}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BServicesSection;
