import { Link } from 'react-router-dom';
import './B2BServicesSection.css';

const B2BServicesSection = () => {
  const services = [
    { title: 'Partnerships', link: '/partnerships' },
    { title: 'Staff/Sales Training', link: '/training' },
    { title: 'Executive coaching', link: '/coaching' }
  ];

  const channels = [
    'Cold email outreach',
    'Cold and intent calling',
    'Voicemails',
    'SMS / WhatsApp',
    'LinkedIn lead generation',
    'Paid advertising'
  ];

  return (
    <section className="b2b-services-section">
      <div className="b2b-services-container">
        {/* Left side - Omnichannel appointment setting */}
        <div className="b2b-services-left">
          <div className="b2b-services-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop"
              alt="Professional using phone for omnichannel communication"
              className="b2b-services-image"
            />
            {/* Communication icons around the image */}
            <div className="icon-circle icon-phone-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div className="icon-circle icon-whatsapp">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </div>
            <div className="icon-circle icon-email">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </div>
            <div className="icon-circle icon-video">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" />
              </svg>
            </div>
          </div>



        </div>

        {/* Right side - Services grid */}
        <div className="b2b-services-right">
          <h2 className="b2b-services-title">Everyone Loves Buying. Nobody Loves Being Sold. Leave it to Us.</h2>
          <p className="service-description">We specialize in B2B sales and marketing, helping you connect with your ideal customers through tailored strategies and expert guidance.</p>

          <div className="b2b-services-grid">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="b2b-service-card"
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
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BServicesSection;
