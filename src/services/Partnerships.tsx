import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { usePageScroll } from '../hooks/usePageScroll'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import '../App.css'

const Partnerships = () => {
  usePageScroll();
  useScrollAnimation();

  return (
    <>
      <Header />
      <main className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container-new">
            <h1 className="about-hero-title" data-animate>
              We build the bridge between your business and your customers.
            </h1>
            <p className="about-hero-subtitle" data-animate>
              Performance-based partnerships that create self-sufficient sales teams through multi-channel deployment.
            </p>
            <div className="about-hero-cta" data-animate>
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
