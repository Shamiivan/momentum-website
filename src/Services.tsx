import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import "./App.css"

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elementsToObserve = document.querySelectorAll('[data-animate]');
    elementsToObserve.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [location]);

  return (
    <>
      <Header />
      <main className="contact-page">
        {/* Hero Section */}
        <section className="contact-hero" style={{ position: 'relative', overflow: 'hidden' }}>
          {/* Bridge SVG Background */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '120%',
            maxWidth: '1400px',
            opacity: 0.08,
            zIndex: 0,
            pointerEvents: 'none'
          }}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 122.88 51.73"
              style={{
                width: '100%',
                height: 'auto',
                fill: 'var(--color-accent-gold)'
              }}
            >
              <g>
                <path d="M16.55,3.48c0.57-4.79,7.86-4.47,7.86,0v1.01c5.29,10.8,15.2,16.77,26.06,19c5.66,1.17,11.59,1.32,17.27,0.63 c5.67-0.69,11.08-2.23,15.7-4.46c7.2-3.47,12.5-8.59,13.91-14.73V3.48c0.57-4.79,7.86-4.47,7.86,0v2.4 c2.18,4.3,5.17,7.74,8.52,10.51c2.87,2.37,6.01,4.28,9.15,5.83v2.98c-1.16-0.55-2.33-1.13-3.48-1.77v9.1h3.48v4.59h-17.67v14.62 h-7.86V37.11H24.41v14.62h-7.86V37.11H0v-4.59h2.91v-9.4C1.95,23.67,0.97,24.18,0,24.67v-3.01c2.75-1.45,5.47-3.17,7.97-5.26 c3.39-2.84,6.39-6.36,8.58-10.79V3.48L16.55,3.48z M66.73,26.93v5.59h-2.69v-5.38c-2.04,0.11-4.09,0.11-6.15,0v5.38h-2.69v-5.6 c-1.77-0.18-3.53-0.45-5.27-0.81c-0.32-0.07-0.64-0.13-0.95-0.21v6.61h-2.69v-7.3c-2.11-0.6-4.16-1.35-6.15-2.25v9.55h-2.69V21.64 c-2.2-1.19-4.29-2.59-6.22-4.2v15.08h-2.69V14.96c-1.51-1.54-2.9-3.24-4.14-5.1v22.67h72.95V11.58c-1.08,1.66-2.41,3.21-3.96,4.65 v16.29H90.7V18.44c-1.84,1.35-3.89,2.57-6.09,3.63l-0.13,0.06v10.39h-2.69v-9.2c-1.96,0.79-4.02,1.47-6.15,2.03v7.18h-2.69v-6.54 c-1.6,0.34-3.24,0.61-4.89,0.81C67.62,26.84,67.18,26.89,66.73,26.93L66.73,26.93z M111.88,18.34v14.19h4.83V21.84 c-1.61-1.01-3.18-2.14-4.69-3.39L111.88,18.34L111.88,18.34z M109.19,32.53V15.87c-1.43-1.45-2.77-3.03-3.98-4.78v21.43H109.19 L109.19,32.53z M13.11,15.21v17.32h3.44V10.91C15.5,12.47,14.34,13.89,13.11,15.21L13.11,15.21z M10.42,32.53V17.82 c-0.24,0.21-0.49,0.43-0.74,0.63C8.37,19.55,7,20.56,5.6,21.48v11.05H10.42L10.42,32.53z"/>
              </g>
            </svg>
          </div>

          <div className="container-new" style={{ position: 'relative', zIndex: 1 }}>
            <h1 className="contact-page-title" data-animate>
              We bridge the gap between you and your customers
            </h1>
            <p className="contact-page-subtitle" data-animate style={{ marginTop: '2rem' }}>
              Performance-based growth solutions across 6 channels. We only win when you win.
            </p>
            <div style={{ marginTop: '3rem' }} data-animate>
              <Link to="/contact" className="btn-primary-new">
                Schedule Free Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Services Quick Overview */}
        <section className="about-mission-section">
          <div className="container-new">
            <div className="about-values-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              {[
                {
                  id: 'partnerships',
                  icon: '🤝',
                  title: 'Partnerships',
                  tagline: 'We Build Your Sales System, Then Hand You The Keys',
                  desc: 'Shadow-based partnerships that create self-sufficient sales teams through multi-channel deployment.',
                  features: ['Performance-based model', 'Multi-channel execution', 'Knowledge transfer', 'Systems & processes']
                },
                {
                  id: 'staff-training',
                  icon: '🎓',
                  title: 'Staff Training',
                  tagline: 'Train Your Team to Sell Like We Do',
                  desc: 'Shadow-based training that transforms customer service into revenue generators across all 6 channels.',
                  features: ['Shadow our top performers', 'Hands-on coaching', '500+ professionals trained', 'Multi-channel techniques']
                },
                {
                  id: 'executive-coaching',
                  icon: '🎯',
                  title: 'Executive Coaching',
                  tagline: 'Leadership is Earned, Not Given',
                  desc: 'Strategic coaching for leaders who work FOR their people. Develop the mindset and strategy to scale.',
                  features: ['Strategy & scaling', 'Leadership mindset', 'Team empowerment', 'Sales psychology']
                }
              ].map((service, idx) => (
                <div
                  key={service.id}
                  id={service.id}
                  className="about-value-card"
                  data-animate
                  style={{
                    '--delay': `${idx * 0.1}s`,
                    padding: '2.5rem',
                    scrollMarginTop: '100px'
                  } as React.CSSProperties}
                >
                  <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
                    {service.icon}
                  </div>
                  <h3 className="about-value-title" style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>
                    {service.title}
                  </h3>
                  <p style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: 'var(--color-accent-gold)',
                    marginBottom: '1rem'
                  }}>
                    {service.tagline}
                  </p>
                  <p className="about-value-description" style={{ marginBottom: '1.5rem' }}>
                    {service.desc}
                  </p>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'grid',
                    gap: '0.5rem'
                  }}>
                    {service.features.map((feature, i) => (
                      <li key={i} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.95rem',
                        color: 'var(--color-text-muted)'
                      }}>
                        <span style={{ color: 'var(--color-accent-gold)' }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/services/${service.id}`}
                    className="btn-secondary-new"
                    style={{
                      marginTop: '1.5rem',
                      display: 'inline-block',
                      width: '100%',
                      textAlign: 'center'
                    }}
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works - Unified Process */}
        <section className="about-story-section">
          <div className="container-new">
            <h2 className="about-section-title centered" data-animate>
              How It Works
            </h2>
            <p className="about-mission-intro" data-animate style={{ marginBottom: '3rem' }}>
              Our proven 4-step process applies across all our services
            </p>

            <div className="about-values-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
              {[
                { step: '01', title: 'Discovery', desc: 'We understand your business, goals, and market to define success metrics together.' },
                { step: '02', title: 'We Show You', desc: 'Our team demonstrates proven methods while you observe and learn.' },
                { step: '03', title: 'Shadow & Learn', desc: 'Your team works alongside ours with hands-on coaching and real-time feedback.' },
                { step: '04', title: 'You Own It', desc: 'Your team executes independently with our ongoing support and documented playbooks.' }
              ].map((item, idx) => (
                <div
                  key={item.step}
                  className="about-value-card"
                  data-animate
                  style={{ '--delay': `${0.1 + idx * 0.1}s`, padding: '2rem' } as React.CSSProperties}
                >
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: 'var(--color-accent-gold)',
                    opacity: 0.3,
                    marginBottom: '0.75rem'
                  }}>
                    {item.step}
                  </div>
                  <h3 className="about-value-title" style={{ fontSize: '1.3rem' }}>{item.title}</h3>
                  <p className="about-value-description" style={{ fontSize: '0.95rem' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="about-mission-section">
          <div className="container-new">
            <h2 className="about-section-title centered" data-animate>
              Proven Results
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              textAlign: 'center',
              marginTop: '3rem'
            }}>
              {[
                { number: '$50M+', label: 'Revenue Generated' },
                { number: '500+', label: 'Professionals Trained' },
                { number: '25+', label: 'Companies Served' },
                { number: '40K+', label: 'Customers Acquired' }
              ].map((stat, idx) => (
                <div
                  key={stat.label}
                  data-animate
                  style={{ '--delay': `${idx * 0.1}s` } as React.CSSProperties}
                >
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: 'var(--color-accent-gold)',
                    marginBottom: '0.5rem'
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontSize: '1rem',
                    color: 'var(--color-text-muted)',
                    fontWeight: '500'
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="about-cta-section">
          <div className="container-new">
            <div className="about-cta-content" data-animate>
              <h2 className="about-cta-title">Ready to Get Started?</h2>
              <p className="about-cta-subtitle">
                Schedule a free consultation and we'll help you determine the best approach for your business goals.
              </p>
              <Link to="/contact" className="btn-primary-new btn-large">
                Schedule Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
