import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../App.css'

const ExecutiveCoaching = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Intersection Observer for scroll animations
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
              Executive Leadership is Earned, Not Given
            </h1>
            <p className="contact-page-subtitle" data-animate style={{ marginTop: '2rem' }}>
              Strategic coaching for leaders who work FOR their people
            </p>
            <div style={{ marginTop: '3rem' }} data-animate>
              <Link to="/contact" className="btn-primary-new">
                Book Discovery Call
              </Link>
            </div>
          </div>
        </section>

        {/* Coaching Philosophy Section */}
        <section className="about-mission-section">
          <div className="container-new">
            <h2 className="about-section-title centered" data-animate>
              Coaching Philosophy
            </h2>
            <p className="about-mission-intro" data-animate>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Authentic leadership principles.
            </p>

            <div className="about-values-grid">
              {[
                {
                  title: 'Authority Should Be Questioned',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Great leaders welcome challenge. Best ideas come from anywhere. Ego is the enemy of growth. Create culture where team speaks up.'
                },
                {
                  title: 'We Believe in Everyone, Until Proven Otherwise',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Trust-first approach. People rise to expectations. Give autonomy and responsibility. "My smallest agent gave me advice. I gave him a bonus."'
                },
                {
                  title: 'Leaders Work FOR the People',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Servant leadership model. Team\'s success is leader\'s success. Clear the path, provide resources. "You work for the people and trust them with the future."'
                },
                {
                  title: 'Money Has Energy',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mindset around value and growth. Money follows value creation. Relationship with money affects leadership. Abundance vs scarcity thinking.'
                }
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

        {/* Growth Limitation Section with Hourglass */}
        <section className="about-story-section">
          <div className="container-new">
            <div className="about-story-grid">
              <div className="about-story-content">
                <h2 className="about-section-title" data-animate>
                  Growth is Limited by How Good of a Leader You Are
                </h2>
                <div className="about-story-text" data-animate>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Leaders set the pace for the entire organization.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Speed of execution matters.
                    If you're slow, you stay slow. But leaders are cheetahs—decisive, fast, and strategic.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. It starts with you and ends with you.
                    Your capacity determines your team's capacity.
                  </p>
                </div>
              </div>
              <div className="about-story-image" data-animate>
                <div style={{
                  background: 'linear-gradient(135deg, var(--color-primary-dark), var(--color-dark-gradient-end))',
                  borderRadius: '12px',
                  padding: '3rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '400px'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    {/* Hourglass Illustration Placeholder */}
                    <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>⏳</div>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-accent-gold)', fontWeight: '600' }}>
                      Your Leadership <br />= <br /> Your Growth Ceiling
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who This Is For Section */}
        <section className="about-mission-section">
          <div className="container-new">
            <h2 className="about-section-title centered" data-animate>
              Who This Is For
            </h2>

            <div className="about-values-grid">
              {[
                {
                  title: 'Executives Who Want to Be Better Leaders',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Not content with status quo, seeking personal growth, open to being challenged. "It starts with you and ends with you."'
                },
                {
                  title: 'Founders Scaling Organizations',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Growing pains of leadership, transitioning from doer to leader, building culture and systems, strategic thinking at scale.'
                },
                {
                  title: 'Sales Leaders Managing Teams',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Performance-driven environment, balancing results with people development, multi-channel strategy, team empowerment.'
                },
                {
                  title: 'Anyone Who Believes Leadership is Earned',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. High personal standards, continuous learner, willing to do the work, action-oriented.'
                }
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

        {/* What We Coach On Section */}
        <section className="about-story-section">
          <div className="container-new">
            <h2 className="about-section-title centered" data-animate>
              What We Coach On
            </h2>
            <p className="about-mission-intro" data-animate style={{ marginBottom: '4rem' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Holistic approach to leadership development.
            </p>

            <div className="about-values-grid">
              {[
                {
                  title: 'Strategy & Scaling',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Growth planning and execution, market positioning and expansion, resource allocation, making strategic bets.'
                },
                {
                  title: 'Leadership & Mindset',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Energy management and focus, belief systems and mental models, decision-making frameworks, handling pressure and uncertainty. "If you\'re slow, you stay slow. Leaders are cheetahs."'
                },
                {
                  title: 'Team Empowerment',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Building trust-based culture, delegating effectively, developing other leaders, creating psychological safety. "Authority should be questioned" in practice.'
                },
                {
                  title: 'Sales Psychology & Execution',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. "Listen, Agree, We Sell" methodology, understanding customer motivation, removing friction from sales process, performance-based thinking, execution speed and decisiveness.'
                }
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

        {/* Coaching Approach Section */}
        <section className="about-mission-section">
          <div className="container-new">
            <h2 className="about-section-title centered" data-animate>
              Coaching Approach
            </h2>

            <div className="about-values-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              {[
                {
                  title: 'Format',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. 1-on-1 sessions (primary), virtual or in-person options, confidential and personalized.'
                },
                {
                  title: 'Methodology',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Socratic questioning (not prescriptive advice), real-world application between sessions, accountability and follow-through, ongoing adjustments based on progress.'
                },
                {
                  title: 'Commitment',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Typical engagement: 3-6 months, bi-weekly or monthly sessions, between-session work and reflection, requires active participation.'
                }
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

        {/* Expected Transformation Section */}
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
                  <li style={{ padding: '0.5rem 0', opacity: 0.7 }}>❌ Imposter syndrome or ego-driven</li>
                </ul>
              </div>

              <div className="about-value-card" data-animate style={{ '--delay': '0.2s' } as React.CSSProperties}>
                <h3 className="about-value-title" style={{ color: 'var(--color-success-green)' }}>After Coaching</h3>
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '1.5rem' }}>
                  <li style={{ padding: '0.5rem 0' }}>✅ Strategic, proactive thinking</li>
                  <li style={{ padding: '0.5rem 0' }}>✅ Empowered, autonomous team</li>
                  <li style={{ padding: '0.5rem 0' }}>✅ Accelerated growth trajectory</li>
                  <li style={{ padding: '0.5rem 0' }}>✅ Clear vision and execution plan</li>
                  <li style={{ padding: '0.5rem 0' }}>✅ Confident, grounded leadership</li>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Book a free discovery call to discuss your goals.
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
