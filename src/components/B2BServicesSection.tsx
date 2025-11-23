import { useState } from 'react';
import { Link } from 'react-router-dom';
import './B2BServicesSection.css';

const B2BServicesSection = () => {
  const [activeService, setActiveService] = useState('Partnerships');

  const services = [
    { 
      title: 'Partnerships', 
      link: '/services/partnerships',
      valueOffering: 'Forge Strategic Alliances',
      description: 'We build and manage high-performing sales channels for your brand, connecting you with new customers and driving revenue growth. Our expertise in North America markets ensures your message resonates with the local audience.',
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
      title: 'Staff/Sales Training', 
      link: '/services/staff-training',
      valueOffering: 'Empower Your Team',
      description: 'We provide comprehensive training programs that equip your sales team and customer service with the skills and knowledge they need to excel. From prospecting, closing and delivering, we cover it all.',
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
      title: 'Executive coaching', 
      link: '/services/executive-coaching',
      valueOffering: 'Elevate Your Leadership',
      description: 'Our executive coaching services are designed to help leaders unlock their full potential. We provide personalized guidance and support to help you navigate challenges and achieve your goals.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      )
    }
  ];

  const getActiveService = () => services.find(service => service.title === activeService);

  return (
    <section className="b2b-services-section">
      <div className="b2b-services-container">
        <div className="b2b-services-header">
          <h2 className="b2b-services-title">Everyone Loves Buying. Everybody Hates Being Sold.</h2>
              <p className='service-description'>
                You focus on your product. We focus on acquiring customers for it.
              </p>
        </div>

        <div className="b2b-services-content">
          <div className="b2b-services-left">
            <div className="b2b-services-grid">
              {services.map((service) => (
                <button
                  key={service.title}
                  className={`b2b-service-card ${activeService === service.title ? 'active' : ''}`}
                  onClick={() => setActiveService(service.title)}
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
                  {getActiveService()?.title === 'Partnerships' && 'Explore Our Partnership Model'}
                  {getActiveService()?.title === 'Staff/Sales Training' && 'See Training in Action'}
                  {getActiveService()?.title === 'Executive coaching' && 'View Coaching Programs'}
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
