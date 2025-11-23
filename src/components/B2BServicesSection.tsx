import { useState } from 'react';
import { Link } from 'react-router-dom';
import './B2BServicesSection.css';

const B2BServicesSection = () => {
  const [activeService, setActiveService] = useState('partnerships');

  const services = [
    {
      id: 'partnerships',
      title: 'Partnerships',
      link: '/services/partnerships',
      headline: 'Strategic Partnerships That Drive Growth',
      body: 'Build meaningful relationships with partners who align with your vision. We help you identify, engage, and cultivate partnerships that create mutual value and accelerate your business growth.',
    },
    {
      id: 'training',
      title: 'Staff/Sales Training',
      link: '/services/staff-training',
      headline: 'Empower Your Team to Sell with Confidence',
      body: 'Transform your sales team into high-performing professionals. Our comprehensive training programs equip your staff with proven techniques, frameworks, and skills to close deals and build lasting customer relationships.',
    },
    {
      id: 'coaching',
      title: 'Executive Coaching',
      link: '/services/executive-coaching',
      headline: 'Unlock Your Leadership Potential',
      body: 'Elevate your leadership capabilities with personalized coaching. We work with executives to develop strategic thinking, improve decision-making, and build the skills needed to lead high-performing teams.',
    }
  ];

  const activeContent = services.find(s => s.id === activeService);

  return (
    <section className="b2b-services-section">
      <div className="b2b-services-container">
        {/* Top section - Title and Description */}
        <div className="b2b-services-header">
          <h2 className="b2b-services-title">Everyone Loves Buying. Everybody Hates Being Sold.</h2>
          <p className="service-description">We specialize in B2B sales and marketing, helping you connect with your ideal customers through tailored strategies and expert guidance.</p>
        </div>

        {/* Bottom section - Buttons and Content Card */}
        <div className="b2b-services-content">
          {/* Left side - Services buttons */}
          <div className="b2b-services-left">
            <div className="b2b-services-grid">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`b2b-service-card ${activeService === service.id ? 'active' : ''}`}
                >
                  <span className="b2b-service-title">{service.title}</span>
                  <svg
                    className="b2b-service-arrow"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* Right side - Dynamic content card */}
          <div className="b2b-services-right">
            <div className="b2b-content-card">
              <h3 className="b2b-content-headline">{activeContent?.headline}</h3>
              <p className="b2b-content-body">{activeContent?.body}</p>
              <Link to={activeContent?.link || '#'} className="b2b-content-cta">
                Learn More
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BServicesSection;
