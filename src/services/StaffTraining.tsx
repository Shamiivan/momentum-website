import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../App.css'

const StaffTraining = () => {
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
              Train Your Team to Sell Like We Do
            </h1>
            <p className="contact-page-subtitle" data-animate style={{ marginTop: '2rem' }}>
              Shadow-based training that transforms customer service into revenue generators across all 6 channels.
            </p>
            <div style={{
              fontSize: '3rem',
              fontWeight: '700',
              color: 'var(--color-accent-gold)',
              marginTop: '2rem'
            }} data-animate>
              500+ Professionals Trained
            </div>
            <div style={{ marginTop: '3rem' }} data-animate>
              <Link to="/contact" className="btn-primary-new">
                Request Training Info
              </Link>
            </div>
          </div>
        </section>

        {/* Training Methodology */}
        <section className="about-story-section">
          <div className="container-new">
            <h2 className="about-section-title centered" data-animate>
              Shadow & Learn Methodology
            </h2>

            <div className="about-values-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
              {[
                { step: '01', title: 'Come Shadow Us', desc: 'Your team observes our top performers in action with real prospects and real conversations.' },
                { step: '02', title: 'Hands-On Training', desc: 'Workshop sessions break down techniques and psychology with role-play practice scenarios.' },
                { step: '03', title: 'Coached Execution', desc: 'Your team executes with prospects while we observe and provide real-time coaching.' },
                { step: '04', title: 'Independent & Supported', desc: 'Your team operates independently with documented playbooks and follow-up coaching.' }
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

        {/* What We Train On */}
        <section className="about-mission-section">
          <div className="container-new">
            <h2 className="about-section-title centered" data-animate>
              What We Train On
            </h2>

            <div className="about-values-grid">
              {[
                { title: 'Multi-Channel Outreach', desc: 'Door-to-door, cold calling, retail selling, digital and social selling, email and SMS outreach.' },
                { title: 'Core Sales Skills', desc: 'Prospecting, objection handling, closing techniques, relationship building, "Listen, Agree, We Sell" approach.' },
                { title: 'Service → Sales Conversion', desc: 'Identifying upsell opportunities, value-based selling, cross-selling strategies, turning support into revenue.' },
                { title: 'Systems & Tools', desc: 'CRM usage and best practices, sales tracking and metrics, process documentation, performance analysis.' }
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

        {/* Expected Outcomes */}
        <section className="about-story-section">
          <div className="container-new">
            <h2 className="about-section-title centered" data-animate>
              Expected Outcomes
            </h2>

            <div className="about-values-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
              {[
                { title: 'Performance Improvements', desc: 'Conversion rate increases, average deal size growth, customer lifetime value improvement, faster ramp time.' },
                { title: 'Team Confidence', desc: 'Reduced turnover, higher morale and motivation, consistent performance across team.' },
                { title: 'Revenue Impact', desc: 'Direct revenue attribution, cost per acquisition improvement, sales cycle reduction, predictable pipeline growth.' }
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

        {/* CTA Section */}
        <section className="about-cta-section">
          <div className="container-new">
            <div className="about-cta-content" data-animate>
              <h2 className="about-cta-title">Ready to Transform Your Team?</h2>
              <p className="about-cta-subtitle">
                Schedule a free training consultation and discover how we can elevate your team's performance.
              </p>
              <Link to="/contact" className="btn-primary-new btn-large">
                Request Training Info
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default StaffTraining;
