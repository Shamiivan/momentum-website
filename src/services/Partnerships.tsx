import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../App.css'

const Partnerships = () => {
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

  return (
    <>
      <Header />
      <main className="contact-page">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="container-new">
            <h1 className="contact-page-title" data-animate>
              We Build Your Sales System, Then Hand You The Keys
            </h1>
            <p className="contact-page-subtitle" data-animate style={{ marginTop: '2rem' }}>
              Performance-based partnerships that create self-sufficient sales teams through multi-channel deployment.
            </p>
            <div style={{ marginTop: '3rem' }} data-animate>
              <Link to="/contact" className="btn-primary-new">
                Start Your Partnership
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="about-story-section">
          <div className="container-new">
            <h2 className="about-section-title centered" data-animate>
              How Partnerships Work
            </h2>

            <div className="about-values-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
              {[
                { step: '01', title: 'Discovery & Alignment', desc: 'We understand your business, goals, and market to define success metrics together.' },
                { step: '02', title: 'We Show You', desc: 'Our team executes across chosen channels while you observe proven methods in action.' },
                { step: '03', title: 'Shadow & Learn', desc: 'Your team shadows our reps with hands-on learning in the field and real-time coaching.' },
                { step: '04', title: 'You Own It', desc: 'Your team executes independently with our ongoing support and documented playbooks.' }
              ].map((item, idx) => (
                <div
                  key={item.step}
                  className="about-value-card"
                  data-animate
                  style={{ '--delay': `${0.1 + idx * 0.1}s`, padding: '2rem' } as React.CSSProperties}
                >
                  <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--color-accent-gold)', opacity: 0.3, marginBottom: '0.75rem' }}>
                    {item.step}
                  </div>
                  <h3 className="about-value-title" style={{ fontSize: '1.3rem' }}>{item.title}</h3>
                  <p className="about-value-description" style={{ fontSize: '0.95rem' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="about-mission-section">
          <div className="container-new">
            <h2 className="about-section-title centered" data-animate>
              What You Get
            </h2>
            <div className="about-values-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              {[
                { title: 'Multi-Channel Execution', desc: 'Simultaneous deployment across 6 channels with integrated strategy and coordinated approach.' },
                { title: 'Training & Knowledge Transfer', desc: 'Your team learns our proven methods with documented processes and comprehensive playbooks.' },
                { title: 'Systems & Processes', desc: 'CRM setup, sales workflows, reporting dashboards, and performance tracking tools.' }
              ].map((item, idx) => (
                <div
                  key={item.title}
                  className="about-value-card"
                  data-animate
                  style={{ '--delay': `${0.1 + idx * 0.1}s` } as React.CSSProperties}
                >
                  <h3 className="about-value-title">{item.title}</h3>
                  <p className="about-value-description">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Model */}
        <section className="about-story-section">
          <div className="container-new">
            <h2 className="about-section-title centered" data-animate>
              We Only Win When You Win
            </h2>
            <div className="about-story-grid">
              <div className="about-story-content" data-animate>
                <p>
                  Our performance-based model means we only get paid when you get customers. No monthly retainers, no upfront costs—just results.
                </p>
                <p>
                  <strong>Aligned Incentives:</strong> We're motivated to deliver quality customers, not just volume.
                </p>
                <p>
                  <strong>No Risk For You:</strong> Predictable customer acquisition cost with budget flexibility and ROI guaranteed by design.
                </p>
              </div>
              <div className="about-story-image" data-animate>
                <div style={{
                  background: 'linear-gradient(135deg, var(--color-primary-dark), var(--color-dark-gradient-end))',
                  borderRadius: '12px',
                  padding: '3rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '300px'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🤝</div>
                    <p style={{ fontSize: '1.5rem', color: 'var(--color-accent-gold)' }}>
                      Performance-Based Model
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta-section">
          <div className="container-new">
            <div className="about-cta-content" data-animate>
              <h2 className="about-cta-title">Ready to Start Your Partnership?</h2>
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

export default Partnerships;
