import { useEffect, useRef } from 'react'
import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import "./App.css"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type AnimatedStyle = CSSProperties & {
  '--delay'?: string;
  '--index'?: number;
};

const withDelay = (delay: number): AnimatedStyle => ({
  '--delay': `${delay}s`
});

const Services = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const channelsSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elementsToObserve = document.querySelectorAll('[data-animate]');
    elementsToObserve.forEach(el => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (!channelsSectionRef.current) return;

    const ctx = gsap.context(() => {
      const channelCards = channelsSectionRef.current?.querySelectorAll('.channel-card-new');
      const header = channelsSectionRef.current?.querySelector('.channels-header');

      if (header) {
        gsap.set(header, { opacity: 0, y: 40 });
      }

      if (channelCards && channelCards.length > 0) {
        gsap.set(channelCards, {
          opacity: 0,
          y: 60,
          scale: 0.9,
          rotateX: 15
        });
      }

      if (header) {
        gsap.to(header, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: channelsSectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        });
      }

      if (channelCards && channelCards.length > 0) {
        gsap.to(channelCards, {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        duration: 0.8,
        stagger: {
          each: 0.12,
          from: 'start',
          ease: 'power2.out'
        },
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: channelsSectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
        });
      }

      channelCards?.forEach((card) => {
        const number = card.querySelector('.channel-number');
        const image = card.querySelector('.channel-image');
        const icon = card.querySelector('.channel-icon-overlay');

        card.addEventListener('mouseenter', () => {
          gsap.to(card, { y: -12, duration: 0.4, ease: 'power2.out' });
          gsap.to(number, { scale: 1.15, rotation: 8, duration: 0.4, ease: 'back.out(2)' });
          gsap.to(image, { scale: 1.1, duration: 0.5, ease: 'power2.out' });
          gsap.to(icon, { scale: 1.1, rotation: -5, duration: 0.4, ease: 'back.out(2)' });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, { y: 0, duration: 0.4, ease: 'power2.out' });
          gsap.to(number, { scale: 1, rotation: 0, duration: 0.4, ease: 'power2.out' });
          gsap.to(image, { scale: 1, duration: 0.5, ease: 'power2.out' });
          gsap.to(icon, { scale: 1, rotation: 0, duration: 0.4, ease: 'power2.out' });
        });
      });
    }, channelsSectionRef);

    return () => ctx.revert();
  }, []);

  const serviceStats = [
    { number: '$50M', label: 'Revenue Generated', helper: 'for partner brands' },
    { number: '500', label: 'Trained Professionals', helper: 'across multiple channels' },
    { number: '3', label: 'Markets', helper: 'expanded in last year' },
    { number: '40K', label: 'Customers', helper: 'acquired through outreach' }
  ];

  const painPoints = [
    {
      title: 'Scaling Customer Acquisition',
      text: 'Traditional methods plateau. We deploy multi-channel strategies that consistently deliver new customers month over month.'
    },
    {
      title: 'Predictable Revenue Growth',
      text: 'Inconsistent results make planning difficult. Our systematic approach creates reliable, forecasted customer acquisition.'
    },
    {
      title: 'Optimizing CAC',
      text: 'High customer acquisition costs compress margins. We focus on efficient, performance-based customer delivery.'
    },
    {
      title: 'Market Expansion',
      text: 'Entering new regions requires local expertise and established networks. We specialize in Quebec market entry and expansion.'
    },
    {
      title: 'Sales & Marketing Alignment',
      text: 'Disconnected teams create inefficiency. Our integrated approach ensures every channel works toward customer acquisition.'
    },
    {
      title: 'Results-Driven Partnership',
      text: 'Activity metrics don\'t pay the bills. We measure success by one thing: customers acquired and revenue generated.'
    }
  ];

  const channels = [
    {
      icon: 'retail',
      title: 'Retail & In-Person',
      desc: 'Field sales teams in stores, events, door-to-door, B2B offices',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&q=80'
    },
    {
      icon: 'phone',
      title: 'Phone Outreach',
      desc: 'Dedicated inside sales teams for outbound calling and inbound qualification',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop&q=80'
    },
    {
      icon: 'digital',
      title: 'Digital Campaigns',
      desc: 'Paid social, paid search, SEO, content marketing, landing pages',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&q=80'
    },
    {
      icon: 'social',
      title: 'Social Selling',
      desc: 'LinkedIn outreach, Instagram DMs, Facebook groups, community building',
      image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=400&h=300&fit=crop&q=80'
    },
    {
      icon: 'email',
      title: 'Direct Outreach',
      desc: 'Cold email sequences, SMS campaigns, direct mail',
      image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=300&fit=crop&q=80'
    },
    {
      icon: 'partnership',
      title: 'Partnership Networks',
      desc: 'Channel partnerships, affiliate programs, co-marketing deals',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop&q=80'
    }
  ];

  const getChannelIcon = (iconType: string) => {
    const iconProps = {
      width: "48",
      height: "48",
      fill: "none",
      stroke: "#D4AF37",
      strokeWidth: "2",
      strokeLinecap: "round" as const,
      strokeLinejoin: "round" as const
    };

    switch (iconType) {
      case 'retail':
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        );
      case 'phone':
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        );
      case 'digital':
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
        );
      case 'social':
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5z" />
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <circle cx="17.5" cy="6.5" r="1.5" fill="#D4AF37" />
          </svg>
        );
      case 'email':
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        );
      case 'partnership':
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <main className="main-new">
        {/* Hero Section */}
        <section className="hero-new">
          <div className="animated-grid"></div>
          <div className="hero-container">
            <h1 className="hero-title-large" data-animate style={withDelay(0)}>
              Our Services
            </h1>
            <p className="hero-subtitle-new" data-animate style={withDelay(0.15)}>
              Multi-channel customer acquisition strategies that deliver results
            </p>
          </div>
        </section>

        {/* Service Overview Section */}
        <section className="service-overview-section">
          <div className="container-new">
            <h2 className="section-title-new" data-animate>
              Sales and Marketing Done For You
            </h2>
            <div className="service-description" data-animate style={withDelay(0.1)}>
              <p>
                We deploy sales teams across every channel where your customers buy. Field reps in retail locations.
                Phone teams calling prospects. Digital campaigns on social media. All coordinated. All tracked. All delivering customers.
              </p>
              <p>
                You focus on your product. We focus on acquiring customers for it.
              </p>
            </div>
            <div className="stats-grid-new">
              {serviceStats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className="stat-card-new"
                  data-animate
                  style={withDelay(0.1 + idx * 0.05)}
                >
                  <div className="stat-number-new">{stat.number}</div>
                  <div className="stat-label-new">{stat.label}</div>
                  <div className="stat-helper">{stat.helper}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Six Channels Section */}
        <section className="channels-section" ref={channelsSectionRef}>
          <div className="container-new">
            <div className="channels-header">
              <h2 className="section-title-new">
                Six Channels. One Coordinated System.
              </h2>
              <p className="channels-subtitle">
                We don't just pick one channel and hope it works. We deploy across all six,
                orchestrating them together to create a unified customer acquisition engine.
              </p>
            </div>
            <div className="channels-grid-new">
              {channels.map((channel, idx) => (
                <div
                  key={channel.title}
                  className="channel-card-new"
                >
                  <div className="channel-number">{String(idx + 1).padStart(2, '0')}</div>
                  <div className="channel-image-container">
                    <img
                      src={channel.image}
                      alt={channel.title}
                      className="channel-image"
                    />
                    <div className="channel-icon-overlay">{getChannelIcon(channel.icon)}</div>
                  </div>
                  <h3 className="channel-title-new">{channel.title}</h3>
                  <p className="channel-desc-new">{channel.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="pain-section">
          <div className="container-new">
            <div className="pain-header">
              <h2 className="pain-title" data-animate>
                Common Growth Challenges We Solve
              </h2>
              <p className="pain-subtitle" data-animate style={withDelay(0.1)}>
                Growing businesses face similar customer acquisition challenges. Here's how we help overcome them.
              </p>
            </div>
            <div className="pain-grid">
              {painPoints.map((point, idx) => (
                <div
                  key={point.title}
                  className="pain-card"
                  data-animate
                  style={withDelay(idx * 0.03)}
                >
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </div>
              ))}
            </div>
            <Link
              to="/contact"
              className="btn-primary-new"
              data-animate
              style={withDelay(0.5)}
            >
              Schedule Free Consultation
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta-section">
          <div className="container-new">
            <div className="cta-content-new" data-animate>
              <h2 className="cta-title-new">Ready to Scale Your Customer Acquisition?</h2>
              <p className="cta-subtitle-new">
                Let's discuss how our multi-channel approach can work for your business.
              </p>
              <Link to="/contact" className="btn-cta-large">
                Get Started
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
