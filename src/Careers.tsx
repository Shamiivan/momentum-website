import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { jobs } from './data/jobs'
import './App.css'

const Careers = () => {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Parallax scroll handler
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

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

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const lifePhotos = [
    { url: '/damon/DSCF5557.webp', alt: 'We are all friends' },
    { url: '/damon/DSCF5518.webp', alt: 'We are driven' },
    { url: '/damon/DSCF5619.webp', alt: 'We believe in each other' },
    { url: '/damon/DSCF5515.webp', alt: 'We support each other' },
    { url: '/damon/DSCF5596.webp', alt: 'We are focused on growth' },
    { url: '/damon/DSCF5613.webp', alt: 'We do a lot of training' }
  ];

  return (
    <>
      <Header />

      <main className="contact-page">
        {/* Hero Section */}
        <section style={{
          position: 'relative',
          minHeight: '600px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '6rem 2rem 4rem'
        }}>
          {/* Animated Gradient Background */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(-45deg, #0a1628, #1a2c4a, #2d4a6e, #1a3456)',
            backgroundSize: '400% 400%',
            animation: 'gradientShift 15s ease infinite',
            zIndex: 1
          }} />

          {/* Hero Image with Parallax */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url('/damon/DSCF5634_19-9.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.5}px)`,
            zIndex: 2,
            opacity: 0.4
          }} />

          {/* Dark Overlay */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(10, 22, 40, 0.85) 0%, rgba(45, 74, 110, 0.75) 100%)',
            zIndex: 4
          }} />

          {/* Content */}
          <div className="container-new" style={{
            textAlign: 'center',
            position: 'relative',
            zIndex: 5,
            transform: `translateY(${scrollY * 0.15}px)`
          }}>
            <h1 className="mb-5" style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: '800',
              fontFamily: "'Playfair Display', serif",
              color: 'var(--color-white)',
              lineHeight: '1.1',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              letterSpacing: '-0.02em',
              marginBottom: '2rem'
            }} data-animate>
              Shape your growth with us
            </h1>
            <p style={{
              fontSize: 'clamp(1.15rem, 2vw, 1.4rem)',
              fontFamily: "'Inter', sans-serif",
              fontWeight: '400',
              color: 'rgba(255, 255, 255, 0.95)',
              maxWidth: '750px',
              margin: '0 auto',
              lineHeight: '1.7',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
              letterSpacing: '-0.01em'
            }} data-animate>
              Join a team where authority is questioned, leadership is earned, that believes in everyone until proven otherwise.
            </p>
          </div>

          {/* Keyframes for gradient animation */}
          <style>{`
            @keyframes gradientShift {
              0% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
              100% {
                background-position: 0% 50%;
              }
            }
          `}</style>
        </section>
        <section className="about-story-section" style={{
          background: 'linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)',
          padding: '5rem 0'
        }}>
          <div className="container-new">
            <div style={{
              textAlign: 'center',
              maxWidth: '850px',
              margin: '0 auto 3rem',
              padding: '0 1rem'
            }}>
              <h2 className="about-section-title centered" data-animate style={{
                fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
                fontWeight: '700',
                fontFamily: "'Playfair Display', serif",
                marginBottom: '1.5rem',
                color: 'var(--color-primary-dark)',
                letterSpacing: '-0.03em',
                lineHeight: '1.15'
              }}>
              Working At Momentum Management
              </h2>
              <p className="about-mission-intro" data-animate style={{
                fontSize: 'clamp(1.05rem, 2vw, 1.2rem)',
                fontFamily: "'Inter', sans-serif",
                color: '#6b7280',
                lineHeight: '1.8',
                fontWeight: '400',
                letterSpacing: '-0.01em'
              }}>
                Real glimpses into what makes us different.
              </p>
            </div>

            <div className="mt-7" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem',
              padding: '0 1rem'
            }}>
              {lifePhotos.map((photo, idx) => (
                <div
                  key={idx}
                  data-animate
                  style={{
                    '--delay': `${idx * 0.1}s`,
                    borderRadius: '20px',
                    overflow: 'hidden',
                    aspectRatio: '4/3',
                    position: 'relative',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06), 0 8px 32px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    background: '#ffffff'
                  } as React.CSSProperties}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.12), 0 20px 60px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.06), 0 8px 32px rgba(0, 0, 0, 0.08)';
                  }}
                >
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%)',
                    padding: '4rem 1.75rem 1.75rem',
                    color: 'white',
                    fontSize: '1rem',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: '600',
                    letterSpacing: '0.01em'
                  }}>
                    {photo.alt}
                  </div>
                </div>
              ))}
            </div>

            <style>{`
              @media (max-width: 1024px) {
                .mt-7 {
                  grid-template-columns: repeat(2, 1fr) !important;
                  gap: 1.5rem !important;
                }
              }
              @media (max-width: 640px) {
                .mt-7 {
                  grid-template-columns: 1fr !important;
                  gap: 1.25rem !important;
                }
              }
            `}</style>

          </div>
        </section>


        <section id="open-positions" className="about-story-section" style={{ padding: '5rem 0' }}>
          <div className="container-new">
            <h2 className="about-section-title mb-4" data-animate style={{
              fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
              fontWeight: '700',
              fontFamily: "'Playfair Display', serif",
              marginBottom: '1.5rem',
              letterSpacing: '-0.03em',
              lineHeight: '1.15'
            }}>
              Available positions
            </h2>
            <p className="mb-8" data-animate style={{
              color: '#6b7280',
              maxWidth: '850px',
              fontSize: 'clamp(1.05rem, 2vw, 1.2rem)',
              fontFamily: "'Inter', sans-serif",
              lineHeight: '1.8',
              fontWeight: '400',
              letterSpacing: '-0.01em',
              marginBottom: '2.5rem'
            }}>
              Join a performance-driven team where you'll learn real sales, work with major brands, and have a clear path to advancement.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {jobs.map((job, idx) => {
                const isExpanded = expandedJob === job.slug;
                return (
                  <div
                    key={job.slug}
                    data-animate
                    style={{
                      '--delay': `${0.1 + idx * 0.1}s`,
                      background: 'var(--color-white)',
                      borderRadius: '16px',
                      border: `2px solid ${isExpanded ? 'rgba(212, 175, 55, 0.4)' : '#e5e7eb'}`,
                      transition: 'all 0.3s ease',
                      boxShadow: isExpanded ? '0 8px 32px rgba(0, 0, 0, 0.12)' : '0 2px 8px rgba(0, 0, 0, 0.04)',
                      overflow: 'hidden'
                    } as React.CSSProperties}
                  >
                    {/* Header - Always Visible */}
                    <div
                      onClick={() => setExpandedJob(isExpanded ? null : job.slug)}
                      style={{
                        padding: '2rem 2.5rem',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '2rem',
                        flexWrap: 'wrap'
                      }}
                    >
                      <div style={{ flex: 1 }}>
                        <h3 style={{
                          fontSize: 'clamp(1.35rem, 2vw, 1.75rem)',
                          fontWeight: '700',
                          fontFamily: "'Inter', sans-serif",
                          color: 'var(--color-primary-dark)',
                          margin: 0,
                          marginBottom: '1rem',
                          letterSpacing: '-0.02em'
                        }}>
                          {job.title}
                        </h3>
                        <p style={{
                          color: '#6b7280',
                          fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: '400',
                          lineHeight: '1.7',
                          margin: 0,
                          letterSpacing: '-0.01em'
                        }}>
                          {job.description}
                        </p>
                      </div>
                      <button
                        style={{
                          background: isExpanded ? 'var(--color-primary-dark)' : 'var(--color-accent-gold)',
                          color: isExpanded ? 'var(--color-white)' : 'var(--color-primary-dark)',
                          padding: '1rem 2.25rem',
                          borderRadius: '8px',
                          fontWeight: '600',
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '1rem',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          whiteSpace: 'nowrap',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          letterSpacing: '-0.01em'
                        }}
                      >
                        {isExpanded ? 'Close' : 'View Details'}
                        <span style={{
                          transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease',
                          display: 'inline-block'
                        }}>
                          ▼
                        </span>
                      </button>
                    </div>

                    {/* Expanded Content */}
                    {isExpanded && (
                      <div style={{
                        padding: '2.5rem',
                        borderTop: '1px solid #e5e7eb',
                        animation: 'fadeIn 0.3s ease-in-out'
                      }}>
                        <div style={{
                          textAlign: 'left'
                        }}>
                          <p style={{
                            color: '#4b5563',
                            fontSize: '1.05rem',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: '400',
                            lineHeight: '1.8',
                            marginBottom: '2rem',
                            textAlign: 'justify',
                            letterSpacing: '-0.01em'
                          }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                          </p>

                          <ul style={{
                            listStyle: 'disc',
                            paddingLeft: '1.5rem',
                            margin: '2rem 0',
                            color: '#4b5563',
                            textAlign: 'left'
                          }}>
                            <li style={{
                              marginBottom: '0.75rem',
                              lineHeight: '1.7',
                              fontSize: '1rem',
                              fontFamily: "'Inter', sans-serif",
                              fontWeight: '400',
                              letterSpacing: '-0.01em'
                            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            <li style={{
                              marginBottom: '0.75rem',
                              lineHeight: '1.7',
                              fontSize: '1rem',
                              fontFamily: "'Inter', sans-serif",
                              fontWeight: '400',
                              letterSpacing: '-0.01em'
                            }}>Sed do eiusmod tempor incididunt ut labore et dolore</li>
                            <li style={{
                              marginBottom: '0.75rem',
                              lineHeight: '1.7',
                              fontSize: '1rem',
                              fontFamily: "'Inter', sans-serif",
                              fontWeight: '400',
                              letterSpacing: '-0.01em'
                            }}>Ut enim ad minim veniam, quis nostrud exercitation</li>
                            <li style={{
                              marginBottom: '0.75rem',
                              lineHeight: '1.7',
                              fontSize: '1rem',
                              fontFamily: "'Inter', sans-serif",
                              fontWeight: '400',
                              letterSpacing: '-0.01em'
                            }}>Duis aute irure dolor in reprehenderit in voluptate</li>
                          </ul>

                          <p style={{
                            color: '#4b5563',
                            fontSize: '1.05rem',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: '400',
                            lineHeight: '1.8',
                            marginBottom: '2rem',
                            textAlign: 'justify',
                            letterSpacing: '-0.01em'
                          }}>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          </p>

                          <ul style={{
                            listStyle: 'disc',
                            paddingLeft: '1.5rem',
                            margin: '2rem 0',
                            color: '#4b5563',
                            textAlign: 'left'
                          }}>
                            <li style={{
                              marginBottom: '0.75rem',
                              lineHeight: '1.7',
                              fontSize: '1rem',
                              fontFamily: "'Inter', sans-serif",
                              fontWeight: '400',
                              letterSpacing: '-0.01em'
                            }}>Nemo enim ipsam voluptatem quia voluptas sit</li>
                            <li style={{
                              marginBottom: '0.75rem',
                              lineHeight: '1.7',
                              fontSize: '1rem',
                              fontFamily: "'Inter', sans-serif",
                              fontWeight: '400',
                              letterSpacing: '-0.01em'
                            }}>Neque porro quisquam est, qui dolorem ipsum</li>
                            <li style={{
                              marginBottom: '0.75rem',
                              lineHeight: '1.7',
                              fontSize: '1rem',
                              fontFamily: "'Inter', sans-serif",
                              fontWeight: '400',
                              letterSpacing: '-0.01em'
                            }}>Sed ut perspiciatis unde omnis iste natus error</li>
                          </ul>

                          {/* Apply Button */}
                          <div style={{
                            marginTop: '2.5rem',
                            display: 'flex',
                            gap: '1rem',
                            flexWrap: 'wrap'
                          }}>
                            <Link
                              to="/contact"
                              style={{
                                background: 'var(--color-primary-dark)',
                                color: 'var(--color-white)',
                                padding: '1rem 2.5rem',
                                borderRadius: '8px',
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: '600',
                                fontSize: '1.05rem',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                letterSpacing: '-0.01em'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.opacity = '0.9';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.opacity = '1';
                                e.currentTarget.style.transform = 'translateY(0)';
                              }}
                            >
                              Apply for this Position
                              <span>→</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <style>{`
              @keyframes fadeIn {
                from {
                  opacity: 0;
                  transform: translateY(-10px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}</style>

            {/* Didn't find the perfect fit CTA */}
            <div
              data-animate
              className="mt-8 p-8"
              style={{
                background: 'linear-gradient(135deg, var(--color-primary-dark), var(--color-dark-gradient-end))',
                borderRadius: '16px',
                textAlign: 'center',
                border: '1px solid rgba(212, 175, 55, 0.2)'
              }}
            >
              <h3 className="mb-4" style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                fontWeight: '700',
                fontFamily: "'Playfair Display', serif",
                color: 'var(--color-white)',
                letterSpacing: '-0.02em'
              }}>
                Didn't find the perfect fit?
              </h3>
              <p className="mb-6" style={{
                fontSize: 'clamp(1.05rem, 2vw, 1.2rem)',
                fontFamily: "'Inter', sans-serif",
                fontWeight: '400',
                color: 'rgba(255, 255, 255, 0.9)',
                maxWidth: '650px',
                margin: '0 auto 2rem',
                lineHeight: '1.7',
                letterSpacing: '-0.01em'
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
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: '600',
                  letterSpacing: '-0.01em'
                }}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>



        {/* Benefits & Perks Section */}
        <section className="about-story-section" style={{ padding: '5rem 0' }}>
          <div className="container-new">
            <h2 className="about-section-title centered" data-animate style={{
              fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
              fontWeight: '700',
              fontFamily: "'Playfair Display', serif",
              marginBottom: '1.5rem',
              color: 'var(--color-primary-dark)',
              letterSpacing: '-0.03em',
              lineHeight: '1.15',
              textAlign: 'center'
            }}>
              What You'll Get
            </h2>
            <p className="about-mission-intro" data-animate style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.2rem)',
              fontFamily: "'Inter', sans-serif",
              color: '#6b7280',
              lineHeight: '1.8',
              fontWeight: '400',
              letterSpacing: '-0.01em',
              textAlign: 'center',
              maxWidth: '850px',
              margin: '0 auto 3rem'
            }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="mt-7" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem'
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
                  <h3 className="mb-3" style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    fontFamily: "'Inter', sans-serif",
                    color: 'var(--color-primary-dark)',
                    letterSpacing: '-0.01em'
                  }}>
                    {perk.title}
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: '400',
                    color: '#6b7280',
                    lineHeight: '1.7',
                    margin: 0,
                    letterSpacing: '-0.01em'
                  }}>
                    {perk.desc}
                  </p>
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

export default Careers;
