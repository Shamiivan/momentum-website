import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import "./App.css"

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

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
  }, []);

  const services = [
    {
      title: 'Partnerships',
      description: 'We build your sales system, then hand you the keys. Shadow-based partnerships that create self-sufficient sales teams through multi-channel deployment.',
      link: '/services/partnerships',
      icon: '🤝',
      features: [
        'Shadow-based learning',
        'Multi-channel execution',
        'Systems & knowledge transfer',
        'Performance-based model'
      ]
    },
    {
      title: 'Staff Training',
      description: 'Train your team to sell like we do. Shadow-based training that transforms customer service into revenue generators across all 6 channels.',
      link: '/services/staff-training',
      icon: '🎓',
      features: [
        'Shadow our top performers',
        'Hands-on coaching',
        '500+ professionals trained',
        'Multi-channel techniques'
      ]
    },
    {
      title: 'Executive Coaching',
      description: 'Strategic coaching for leaders who work FOR their people. Leadership is earned, not given. Develop the mindset and strategy to scale.',
      link: '/services/executive-coaching',
      icon: '🎯',
      features: [
        'Strategy & scaling',
        'Leadership mindset',
        'Team empowerment',
        'Sales psychology'
      ]
    }
  ];

  return (
    <>
      <Header />
      <main className="contact-page">
        {/* Hero Section */}
        <section style={{
          background: 'var(--color-light-gray)',
          padding: '8rem 0 6rem',
          textAlign: 'center'
        }}>
          <div className="container-new">
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '700',
              color: 'var(--color-primary-dark)',
              marginBottom: '1.5rem'
            }} data-animate>
              Customer acquisition done for you
            </h1>
            <p style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
              color: 'var(--color-text-muted)',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.6'
            }} data-animate>
              Performance-based growth solutions across 6 channels. We only win when you win.
            </p>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="about-story-section">
          <div className="container-new">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2.5rem',
              marginBottom: '4rem'
            }}>
              {services.map((service, idx) => (
                <Link
                  key={service.title}
                  to={service.link}
                  data-animate
                  style={{
                    '--delay': `${idx * 0.1}s`,
                    display: 'block',
                    background: 'var(--color-white)',
                    borderRadius: '16px',
                    padding: '3rem',
                    textDecoration: 'none',
                    border: '1px solid rgba(212, 175, 55, 0.1)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  } as React.CSSProperties}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.4)';
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(212, 175, 55, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>
                    {service.icon}
                  </div>

                  <h3 style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: 'var(--color-primary-dark)',
                    marginBottom: '1rem'
                  }}>
                    {service.title}
                  </h3>

                  <p style={{
                    color: 'var(--color-text-muted)',
                    marginBottom: '2rem',
                    lineHeight: '1.7',
                    fontSize: '1.05rem'
                  }}>
                    {service.description}
                  </p>

                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 2rem 0'
                  }}>
                    {service.features.map((feature, i) => (
                      <li key={i} style={{
                        padding: '0.5rem 0',
                        color: 'var(--color-text-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem'
                      }}>
                        <span style={{ color: 'var(--color-accent-gold)', fontSize: '1.2rem' }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--color-accent-gold)',
                    fontWeight: '600',
                    fontSize: '1.05rem'
                  }}>
                    Learn more
                    <span style={{ transition: 'transform 0.3s ease' }}>→</span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Additional Info Section */}
            <div style={{
              background: 'linear-gradient(135deg, var(--color-primary-dark), var(--color-dark-gradient-end))',
              borderRadius: '16px',
              padding: '4rem 3rem',
              textAlign: 'center',
              border: '1px solid rgba(212, 175, 55, 0.2)',
              marginTop: '4rem'
            }} data-animate>
              <h3 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: 'var(--color-white)',
                marginBottom: '1rem'
              }}>
                Not sure which service fits your needs?
              </h3>
              <p style={{
                fontSize: '1.125rem',
                color: 'rgba(255, 255, 255, 0.8)',
                marginBottom: '2rem',
                maxWidth: '600px',
                margin: '0 auto 2rem'
              }}>
                Schedule a free consultation and we'll help you determine the best approach for your business goals.
              </p>
              <Link
                to="/contact"
                className="btn-primary-new"
                style={{
                  background: 'var(--color-accent-gold)',
                  color: 'var(--color-primary-dark)',
                  padding: '1rem 2.5rem',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}
              >
                Schedule Free Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section style={{
          background: 'var(--color-light-gray)',
          padding: '6rem 0'
        }}>
          <div className="container-new">
            <h2 className="about-section-title centered" data-animate style={{ marginBottom: '3rem' }}>
              Proven Results
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '3rem',
              textAlign: 'center'
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
                    fontSize: '3rem',
                    fontWeight: '700',
                    color: 'var(--color-accent-gold)',
                    marginBottom: '0.5rem'
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontSize: '1.1rem',
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
      </main>
      <Footer />
    </>
  );
};

export default Services;
