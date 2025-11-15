import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../App.css'

const ExecutiveCoaching = () => {
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
              Leadership is Earned, Not Given
            </h1>
            <p className="contact-page-subtitle" data-animate style={{ marginTop: '2rem' }}>
              Strategic coaching for leaders who work FOR their people. Develop the mindset and strategy to scale.
            </p>
            <div style={{ marginTop: '3rem' }} data-animate>
              <Link to="/contact" className="btn-primary-new">
                Book Discovery Call
              </Link>
            </div>
          </div>
        </section>

        {/* Coaching Philosophy */}
        <section className="about-mission-section">
          <div className="container-new">
            <h2 className="about-section-title centered" data-animate>
              Coaching Philosophy
            </h2>

            <div className="about-values-grid">
              {[
                { title: 'Authority Should Be Questioned', desc: 'Great leaders welcome challenge. Best ideas come from anywhere. Create culture where team speaks up.' },
                { title: 'We Believe in Everyone', desc: 'Trust-first approach. People rise to expectations. Give autonomy and responsibility.' },
                { title: 'Leaders Work FOR the People', desc: 'Servant leadership model. Team\'s success is leader\'s success. Clear the path, provide resources.' },
                { title: 'Money Has Energy', desc: 'Mindset around value and growth. Money follows value creation. Abundance vs scarcity thinking.' }
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

        {/* Growth Limitation */}
        <section className="about-story-section">
          <div className="container-new">
            <div className="about-story-grid">
              <div className="about-story-content" data-animate>
                <h2 className="about-section-title">
                  Growth is Limited by How Good of a Leader You Are
                </h2>
                <p>
                  Leaders set the pace for the entire organization. Speed of execution matters.
                  If you're slow, you stay slow. But leaders are cheetahs—decisive, fast, and strategic.
                </p>
                <p>
                  It starts with you and ends with you. Your capacity determines your team's capacity.
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
                    <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>⏳</div>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-accent-gold)', fontWeight: '600' }}>
                      Your Leadership = Your Growth Ceiling
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Coach On */}
        <section className="about-mission-section">
          <div className="container-new">
            <h2 className="about-section-title centered" data-animate>
              What We Coach On
            </h2>

            <div className="about-values-grid">
              {[
                { title: 'Strategy & Scaling', desc: 'Growth planning and execution, market positioning and expansion, resource allocation, making strategic bets.' },
                { title: 'Leadership & Mindset', desc: 'Energy management and focus, belief systems and mental models, decision-making frameworks. "Leaders are cheetahs."' },
                { title: 'Team Empowerment', desc: 'Building trust-based culture, delegating effectively, developing other leaders, creating psychological safety.' },
                { title: 'Sales Psychology', desc: '"Listen, Agree, We Sell" methodology, understanding customer motivation, removing friction from sales process.' }
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

        {/* Expected Transformation */}
        <section className="about-story-section">
          <div className="container-new">
            <h2 className="about-section-title centered" data-animate>
              Expected Transformation
            </h2>

            <div className="about-story-grid">
              <div className="about-value-card" data-animate>
                <h3 className="about-value-title" style={{ color: 'var(--color-warning-red)' }}>Before Coaching</h3>
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '1.5rem' }}>
                  <li style={{ padding: '0.5rem 0', opacity: 0.7 }}>❌ Reactive decision-making</li>
                  <li style={{ padding: '0.5rem 0', opacity: 0.7 }}>❌ Micromanaging team</li>
                  <li style={{ padding: '0.5rem 0', opacity: 0.7 }}>❌ Plateaued growth</li>
                  <li style={{ padding: '0.5rem 0', opacity: 0.7 }}>❌ Uncertain strategic direction</li>
                </ul>
              </div>

              <div className="about-value-card" data-animate style={{ '--delay': '0.2s' } as React.CSSProperties}>
                <h3 className="about-value-title" style={{ color: 'var(--color-success-green)' }}>After Coaching</h3>
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '1.5rem' }}>
                  <li style={{ padding: '0.5rem 0' }}>✅ Strategic, proactive thinking</li>
                  <li style={{ padding: '0.5rem 0' }}>✅ Empowered, autonomous team</li>
                  <li style={{ padding: '0.5rem 0' }}>✅ Accelerated growth trajectory</li>
                  <li style={{ padding: '0.5rem 0' }}>✅ Clear vision and execution plan</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta-section">
          <div className="container-new">
            <div className="about-cta-content" data-animate>
              <h2 className="about-cta-title">Ready to Earn Your Leadership?</h2>
              <p className="about-cta-subtitle">
                Book a free discovery call to discuss your goals and see if we're the right fit.
              </p>
              <Link to="/contact" className="btn-primary-new btn-large">
                Book Discovery Call
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ExecutiveCoaching;
