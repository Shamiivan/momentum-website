import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

const Careers = () => {
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

  const roles = [
    {
      icon: '🎯',
      title: 'BDR (Business Development Representative)',
      whatYouDo: [
        'Own the top of the funnel—find prospects, qualify leads, book meetings',
        'Learn cold calling, email outreach, and prospecting',
        'Work with brands like Amazon, Shopify, TELUS (not just startups)'
      ],
      youllThrive: [
        'You\'re coachable and hungry (we can teach the rest)',
        'Rejection doesn\'t break you',
        'You want to learn sales from people who\'ve actually done it'
      ],
      whyJoin: [
        'Clear path to Account Executive in 12-18 months (most BDRs get promoted)',
        'Performance bonuses on top of base',
        'Learn multi-channel prospecting (most agencies only know one)',
        'Shadow $50M+ partnership deals'
      ]
    },
    {
      icon: '💰',
      title: 'Closer (Account Executive)',
      whatYouDo: [
        'Take qualified meetings and turn them into revenue',
        'Run demos, handle objections, negotiate deals',
        'Close partnerships and customer acquisition contracts',
        'Manage your own pipeline and revenue targets'
      ],
      youllThrive: [
        'You\'ve closed before and want bigger deals',
        'You\'re consultative, not pushy',
        'You can handle 6-figure contracts without freaking out'
      ],
      whyJoin: [
        'Uncapped commission (seriously—we mean it)',
        'We book the meetings, you close them (no cold calling)',
        'Multi-channel experience (phone, email, social, events)',
        'Work with established brands that actually have budgets'
      ]
    },
    {
      icon: '🚀',
      title: 'Intern',
      whatYouDo: [
        'Shadow real deals (not make coffee)',
        'Learn outreach, qualification, and pipeline management',
        'Build lists, send campaigns, book meetings',
        'Get mentored by BDRs and AEs who started where you are'
      ],
      youllThrive: [
        'You\'re a student or recent grad who wants real experience',
        'You\'re willing to be uncomfortable (growth happens there)',
        'You want mentorship, not just a resume line'
      ],
      whyJoin: [
        'Paid internship (we don\'t do free labor)',
        'Hands-on from day 1—you\'ll be on calls within your first week',
        'Clear path to BDR if you perform (we hire from within)',
        'Learn sales from a performance-based team, not a classroom'
      ]
    },
    {
      icon: '📊',
      title: 'Assistant Manager',
      whatYouDo: [
        'Coach and develop BDRs and interns',
        'Manage pipeline quality and team performance',
        'Run weekly training and call reviews',
        'Help scale our systems as we grow'
      ],
      youllThrive: [
        'You\'ve been a top performer and want to lead',
        'You care about developing people, not just hitting numbers',
        'You can coach without micromanaging'
      ],
      whyJoin: [
        'Leadership track for high performers (not a dead-end middle management role)',
        'Revenue share opportunities',
        'Build systems that scale (not just manage people)',
        'Work directly with the founder on strategy'
      ]
    }
  ];

  const cultureHighlights = [
    { icon: '🤝', title: 'teammates', desc: 'Collaborative environment where everyone contributes' },
    { icon: '🌍', title: 'nationalities', desc: 'Diverse team from around the world' },
    { icon: '🎯', title: 'eNPS', desc: 'High employee satisfaction and engagement' },
    { icon: '👩‍💼', title: 'female leaders', desc: 'Strong representation in leadership roles' },
    { icon: '🐾', title: 'proud pet parents', desc: 'Pet-friendly and family-oriented culture' }
  ];

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
              Join a team where authority is questioned, leadership is earned, and we believe in everyone until proven otherwise.
            </p>
          </div>
        </section>



        {/* Life at Momentum Section */}
        <section className="about-story-section">
          <div className="container-new">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
              <h2 className="about-section-title" data-animate>
                Life at Momentum
              </h2>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              {lifePhotos.map((photo, idx) => (
                <div
                  key={idx}
                  data-animate
                  style={{
                    '--delay': `${idx * 0.1}s`,
                    borderRadius: '12px',
                    overflow: 'hidden',
                    aspectRatio: '3/2',
                    position: 'relative'
                  } as React.CSSProperties}
                >
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Values Section */}
        <section className="about-mission-section">
          <div className="container-new">
            <h2 className="about-section-title centered" data-animate>
              Our Culture
            </h2>
            <p className="about-mission-intro" data-animate>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. We're building a team where authority is always meant to be questioned.
            </p>

            <div className="about-values-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              {[
                {
                  title: 'Authority Should Be Questioned',
                  desc: 'Lorem ipsum dolor sit amet. Best ideas come from anywhere. We value challenge and honest feedback.'
                },
                {
                  title: 'We Believe in Everyone',
                  desc: 'Lorem ipsum dolor sit amet. Until proven otherwise. We give autonomy, trust, and responsibility.'
                },
                {
                  title: 'Performance-Based Everything',
                  desc: 'Lorem ipsum dolor sit amet. We only win when you win. Clear metrics, fair compensation, real results.'
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

        {/* The Momentum Way Section */}
        <section className="about-mission-section">
          <div className="container-new">
            <h2 className="about-section-title centered" data-animate>
              The Momentum Way
            </h2>
            <p className="about-mission-intro" data-animate>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. How we work, collaborate, and deliver results.
            </p>

            <div className="about-values-grid">
              {[
                { title: 'Performance-Based', desc: 'Lorem ipsum dolor sit amet. We only get paid when clients get customers. Aligned incentives drive our decisions.' },
                { title: 'Multi-Channel Mastery', desc: 'Lorem ipsum dolor sit amet. We deploy across 6 channels simultaneously, not just one.' },
                { title: 'Shadow-Based Learning', desc: 'Lorem ipsum dolor sit amet. Learn by doing, not by listening. Hands-on training from day one.' },
                { title: 'Results-Obsessed', desc: 'Lorem ipsum dolor sit amet. Measurable outcomes matter. We track, optimize, and improve constantly.' }
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

        {/* Advantages Section */}
        <section className="about-mission-section">
          <div className="container-new">
            <h2 className="about-section-title centered" data-animate>
              Why Join Momentum
            </h2>
            <p className="about-mission-intro" data-animate>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. What makes working here different.
            </p>

            <div className="about-values-grid">
              {[
                { icon: '🚀', title: 'Career Growth', desc: 'Lorem ipsum dolor sit amet. Clear paths from intern to BDR to AE. Most promotions come from within.' },
                { icon: '💰', title: 'Performance Bonuses', desc: 'Lorem ipsum dolor sit amet. Uncapped commissions and revenue share opportunities for top performers.' },
                { icon: '🎓', title: 'Real Learning', desc: 'Lorem ipsum dolor sit amet. Shadow $50M+ deals. Learn from people who have actually done it.' },
                { icon: '🤝', title: 'Work with Top Brands', desc: 'Lorem ipsum dolor sit amet. Amazon, Shopify, TELUS, Rogers. Not just startups.' },
                { icon: '⚡', title: 'Fast-Paced Environment', desc: 'Lorem ipsum dolor sit amet. Hands-on from day 1. You\'ll be on calls within your first week.' },
                { icon: '🌟', title: 'Ownership & Autonomy', desc: 'Lorem ipsum dolor sit amet. We trust you with responsibility. Your ideas are heard and valued.' }
              ].map((item, idx) => (
                <div
                  key={item.title}
                  className="about-value-card"
                  data-animate
                  style={{ '--delay': `${0.1 + idx * 0.1}s` } as React.CSSProperties}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{item.icon}</div>
                  <h3 className="about-value-title">{item.title}</h3>
                  <p className="about-value-description">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="about-story-section">
          <div className="container-new">
            <h2 className="about-section-title" data-animate style={{ fontSize: '3rem', marginBottom: '1rem' }}>
              Open positions
            </h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '4rem', maxWidth: '800px' }} data-animate>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. We're looking for talented individuals to join our growing team.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {roles.map((role, idx) => (
                <div
                  key={role.title}
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
                      marginBottom: '1rem'
                    }}>
                      {role.title}
                    </h3>
                    <div style={{
                      display: 'flex',
                      gap: '1.5rem',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      color: 'var(--color-text-muted)',
                      fontSize: '0.95rem'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span>👤</span>
                        <span>Full-time</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span>📍</span>
                        <span>Remote</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span>💼</span>
                        <span>Performance-based</span>
                      </div>
                    </div>
                  </div>
                  <Link
                    to="/contact"
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
                    Apply now
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
