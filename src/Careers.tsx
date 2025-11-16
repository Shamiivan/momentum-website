import { Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { usePageScroll } from './hooks/usePageScroll'
import { useScrollAnimation } from './hooks/useScrollAnimation'
import { jobs } from './data/jobs'
import './App.css'

const Careers = () => {
  usePageScroll();
  useScrollAnimation();

  const lifePhotos = [
    { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&q=80', alt: 'Team collaboration' },
    { url: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop&q=80', alt: 'Team meeting' },
    { url: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop&q=80', alt: 'Team celebration' }
  ];

  return (
    <>
      <Header />

      <main className="contact-page">
        {/* Hero Section */}
        <section style={{
          position: 'relative',
          minHeight: '600px',
          background: `linear-gradient(rgba(10, 22, 40, 0.85), rgba(10, 22, 40, 0.85)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '8rem 2rem 6rem'
        }}>
          <div className="container-new" style={{ textAlign: 'center', position: 'relative', zIndex: 5 }}>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '700',
              color: 'var(--color-white)',
              marginBottom: '1.5rem',
              lineHeight: '1.2'
            }} data-animate>
              Shape your growth with us
            </h1>
            <p style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.6'
            }} data-animate>
              Join a team where authority is questioned, leadership is earned, that believes in everyone until proven otherwise.
            </p>
          </div>
        </section>



        {/* Benefits & Perks Section */}
        <section className="about-story-section">
          <div className="container-new">
            <h2 className="about-section-title centered" data-animate>
              What You'll Get
            </h2>
            <p className="about-mission-intro" data-animate>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              marginTop: '3rem'
            }}>
              {[
                {
                  title: 'Performance-Based Pay',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam quis nostrud.'
                },
                {
                  title: 'Clear Growth Path',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit.'
                },
                {
                  title: 'Real Training',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non.'
                },
                {
                  title: 'Flexible Work',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste.'
                },
                {
                  title: 'Big Brand Experience',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia.'
                },
                {
                  title: 'Mentorship That Matters',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis autem vel eum iure reprehenderit.'
                }
              ].map((perk, idx) => (
                <div
                  key={perk.title}
                  data-animate
                  style={{
                    '--delay': `${idx * 0.1}s`,
                    background: 'var(--color-white)',
                    borderRadius: '8px',
                    padding: '2rem',
                    border: '1px solid #e5e7eb',
                    transition: 'all 0.2s ease'
                  } as React.CSSProperties}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#d1d5db';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e5e7eb';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <h3 style={{
                    fontSize: '1.15rem',
                    fontWeight: '600',
                    color: 'var(--color-primary-dark)',
                    marginBottom: '0.75rem'
                  }}>
                    {perk.title}
                  </h3>
                  <p style={{
                    fontSize: '0.95rem',
                    color: 'var(--color-text-muted)',
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    {perk.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Life at Momentum Section */}
        <section className="about-story-section" style={{ background: '#fafafa' }}>
          <div className="container-new">
            <h2 className="about-section-title centered" data-animate>
              A Day in the Life
            </h2>
            <p className="about-mission-intro" data-animate>
              Real glimpses into what it's like to work at Momentum. No stock photos, just our culture.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginTop: '3rem'
            }}>
              {lifePhotos.map((photo, idx) => (
                <div
                  key={idx}
                  data-animate
                  style={{
                    '--delay': `${idx * 0.1}s`,
                    borderRadius: '8px',
                    overflow: 'hidden',
                    aspectRatio: '3/2',
                    position: 'relative',
                    border: '1px solid #e5e7eb'
                  } as React.CSSProperties}
                >
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)',
                    padding: '2rem 1.5rem 1.5rem',
                    color: 'white',
                    fontSize: '1rem',
                    fontWeight: '600'
                  }}>
                    {photo.alt}
                  </div>
                </div>
              ))}
            </div>

            <section id="open-positions" className="about-story-section">
              <div className="container-new">
                <h2 className="about-section-title" data-animate style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                  Open positions
                </h2>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '4rem', maxWidth: '800px' }} data-animate>
                  Join a performance-driven team where you'll learn real sales, work with major brands, and have a clear path to advancement.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {jobs.map((job, idx) => (
                    <div
                      key={job.title}
                      data-animate
                      style={{
                        '--delay': `${0.1 + idx * 0.1}s`,
                        background: 'var(--color-light-gray)',
                        borderRadius: '12px',
                        padding: '2.5rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '2rem',
                        flexWrap: 'wrap',
                        border: '1px solid rgba(212, 175, 55, 0.1)',
                        transition: 'all 0.3s ease'
                      } as React.CSSProperties}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.3)';
                        e.currentTarget.style.transform = 'translateY(-4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.1)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <div style={{ flex: 1 }}>
                        <h3 style={{
                          fontSize: '1.75rem',
                          fontWeight: '700',
                          color: 'var(--color-primary-dark)',
                          marginBottom: '0.75rem'
                        }}>
                          {job.title}
                        </h3>
                        <p style={{
                          color: 'var(--color-text-muted)',
                          fontSize: '1rem',
                          lineHeight: '1.6'
                        }}>
                          {job.whatYouDo[0]}
                        </p>
                      </div>
                      <Link
                        to={`/careers/${job.slug}`}
                        style={{
                          background: 'var(--color-accent-gold)',
                          color: 'var(--color-primary-dark)',
                          padding: '0.875rem 2rem',
                          borderRadius: '8px',
                          fontWeight: '600',
                          fontSize: '1rem',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease',
                          whiteSpace: 'nowrap',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'var(--color-accent-secondary-gold)';
                          e.currentTarget.style.transform = 'translateX(4px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'var(--color-accent-gold)';
                          e.currentTarget.style.transform = 'translateX(0)';
                        }}
                      >
                        View Details
                        <span>→</span>
                      </Link>
                    </div>
                  ))}
                </div>

                {/* Didn't find the perfect fit CTA */}
                <div
                  data-animate
                  style={{
                    marginTop: '5rem',
                    background: 'linear-gradient(135deg, var(--color-primary-dark), var(--color-dark-gradient-end))',
                    borderRadius: '16px',
                    padding: '4rem 3rem',
                    textAlign: 'center',
                    border: '1px solid rgba(212, 175, 55, 0.2)'
                  }}
                >
                  <h3 style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: 'var(--color-white)',
                    marginBottom: '1rem'
                  }}>
                    Didn't find the perfect fit?
                  </h3>
                  <p style={{
                    fontSize: '1.125rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    marginBottom: '2rem',
                    maxWidth: '600px',
                    margin: '0 auto 2rem'
                  }}>
                    Tell us more about yourself, and we'll reach out when the right opportunity comes along.
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
                    Get in Touch
                  </Link>
                </div>
              </div>
            </section>

            {/* Culture Highlights */}
            <div style={{
              marginTop: '4rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { title: 'Monday Kick-offs', desc: 'Start the week together, share wins, set goals' },
                { title: 'Friday Wins', desc: 'Celebrate closed deals and team achievements' },
                { title: 'Live Call Reviews', desc: 'Learn from real calls, get instant feedback' },
                { title: 'Monthly Challenges', desc: 'Friendly competition with real prizes' }
              ].map((item, idx) => (
                <div
                  key={item.title}
                  data-animate
                  style={{
                    '--delay': `${idx * 0.1}s`,
                    background: 'var(--color-white)',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    border: '1px solid #e5e7eb'
                  } as React.CSSProperties}
                >
                  <h4 style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'var(--color-primary-dark)',
                    marginBottom: '0.5rem'
                  }}>
                    {item.title}
                  </h4>
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'var(--color-text-muted)',
                    margin: 0,
                    lineHeight: '1.6'
                  }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Values Section */}
        <section className="about-mission-section">
          <div className="container-new">
            <h2 className="about-section-title centered" data-animate>
              What We Stand For
            </h2>
            <p className="about-mission-intro" data-animate>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>

            <div className="about-values-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              {[
                {
                  title: 'Authority Should Be Questioned',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.'
                },
                {
                  title: 'We Believe in Everyone',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                },
                {
                  title: 'We Help, We Don\'t Sell',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                }
              ].map((item, idx) => (
                <div
                  key={item.title}
                  className="about-value-card"
                  data-animate
                  style={{
                    '--delay': `${0.1 + idx * 0.1}s`
                  } as React.CSSProperties}
                >
                  <h3 className="about-value-title">{item.title}</h3>
                  <p className="about-value-description">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Momentum Way Section */}
        <section className="about-mission-section" style={{ background: '#fafafa' }}>
          <div className="container-new">
            <h2 className="about-section-title centered" data-animate>
              How We Work
            </h2>
            <p className="about-mission-intro" data-animate>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>

            <div className="about-values-grid">
              {[
                {
                  title: 'Performance-Based Model',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.'
                },
                {
                  title: 'Multi-Channel Mastery',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                },
                {
                  title: 'Shadow-Based Learning',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.'
                },
                {
                  title: 'Results-Obsessed',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur.'
                }
              ].map((item, idx) => (
                <div
                  key={item.title}
                  className="about-value-card"
                  data-animate
                  style={{
                    '--delay': `${0.1 + idx * 0.1}s`,
                    background: 'var(--color-white)'
                  } as React.CSSProperties}
                >
                  <h3 className="about-value-title">{item.title}</h3>
                  <p className="about-value-description">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* Open Positions Section */}
        {/* CTA Section */}
        <section className="about-cta-section">
          <div className="container-new">
            <div className="about-cta-content" data-animate>
              <h2 className="about-cta-title">Ready to Join the Team?</h2>
              <p className="about-cta-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Apply today or get in touch to learn more.
              </p>
              <Link to="/contact" className="btn-primary-new btn-large">
                Get In Touch
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Careers;
