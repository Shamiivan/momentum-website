import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import "./App.css"

type AnimatedStyle = CSSProperties & {
  '--delay'?: string;
  '--index'?: number;
};

const withDelay = (delay: number): AnimatedStyle => ({
  '--delay': `${delay}s`
});

const MomentumLanding = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const revenueAnimationRef = useRef(false);
  const [revenueCount, setRevenueCount] = useState(20);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');

          // Trigger counter animation for revenue
          if (entry.target.classList.contains('revenue-counter') && !revenueAnimationRef.current) {
            animateCounter();
          }
        }
      });
    }, observerOptions);

    // Observe all animated elements
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

  const animateCounter = () => {
    if (revenueAnimationRef.current) return;
    revenueAnimationRef.current = true;

    const startValue = 20;
    const endValue = 50;
    const duration = 1600;
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    const startTime = performance.now();

    const tick = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const currentValue = Math.round(startValue + (endValue - startValue) * easedProgress);

      setRevenueCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setRevenueCount(endValue);
      }
    };

    requestAnimationFrame(tick);
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const partners = [
    { name: 'Amazon', revenue: '', logo: '/amazon-com-logo-svg.svg' },
    { name: 'Shopify', revenue: '', logo: '/shopify-color.svg' },
    { name: 'TELUS', revenue: '', logo: '/telus.svg' },
    { name: 'Rogers', revenue: '', logo: '/rogers.svg' }
  ];

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

  const faqs = [
    {
      q: 'How does payment actually work?',
      a: 'We get paid based on customers delivered. For B2C with monthly recurring revenue, payment is per active subscription. For B2B contract-based sales, payment is per closed deal. No monthly retainers, no upfront costs—only results.'
    },
    {
      q: 'What industries do you work with?',
      a: 'We specialize in B2B companies with complex sales cycles, particularly those expanding into Quebec or scaling multi-channel acquisition. Telecommunications, SaaS, financial services, and professional services are our sweet spots.'
    },
    {
      q: 'How quickly can we get started?',
      a: 'Our streamlined onboarding gets you up and running in 30 days—compared to the 11+ months it takes to build an in-house team. Your dedicated account manager handles everything from strategy to team deployment.'
    },
    {
      q: 'What makes you different from traditional agencies?',
      a: 'Three things: (1) Deep Quebec market expertise you can\'t build overnight, (2) Multi-channel mastery—not just one tactic, and (3) A proven $40M track record with TELUS. We don\'t just generate leads; we build sustainable growth engines.'
    },
    {
      q: 'Do you require long-term contracts?',
      a: 'No. We work on performance terms with flexible engagement models. Because we only get paid when you get customers, our incentives are aligned. Most clients stay because the results speak for themselves.'
    },
    {
      q: 'How do you measure success?',
      a: 'Customers acquired, customer acquisition cost (CAC), and revenue generated. We integrate with your CRM and tracking systems to provide full transparency. Every customer is tracked, attributed, and tied to our delivery.'
    }
  ];

  return (
    <>
      <Header />

      <main className="main-new">
        {/* Hero Section */}
        <section className="hero-new">
          <div className="animated-grid"></div>
          <div className="hero-container">
            <h1 className="revenue-counter" data-animate style={withDelay(0)}>
              <span className="revenue-line">Sales and Marketing Done For You</span>
            </h1>
            <p className="hero-subtitle-new" data-animate style={withDelay(0.15)}>
              We bridge the gap between you and your customer.
            </p>
            <div className="hero-cta-group-new" data-animate style={withDelay(0.25)}>
              <Link to="/contact" className="btn-primary-new">
                Schedule a Free Consultation
              </Link>
              <button className="btn-secondary-new" onClick={scrollToServices}>
                See How We Work
              </button>
            </div>
            <div className="scroll-indicator" data-animate style={withDelay(0.35)}>
              <span>↓</span>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="social-proof-section">
          <div className="container-new">
            <p className="trusted-label">Trusted by Industry-leading brands across North America:</p>
            <div
              className="partners-marquee-wrapper"
              data-animate
              style={withDelay(0.1)}
            >
              <div className="partners-marquee">
                {[...partners, ...partners].map((partner, idx) => (
                  <div
                    key={`${partner.name}-${idx}`}
                    className="partner-card"
                  >
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="partner-logo-img"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Service Overview Section */}
        <section className="service-overview-section" id="services">
          <div className="container-new">
            <h2 className="section-title-new" data-animate>
              <span className="">${revenueCount} Million Generated For Brands</span>
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

        {/* Value Proposition Section */}
        <section className="value-section">
          <div className="container-new">
            <div className="value-grid">
              <div className="value-content">
                <h2 className="value-title" data-animate>They Buy. We Sell. You Win.</h2>
                <p className="value-intro" data-animate style={withDelay(0.1)}>
                  Everyone Loves Buying. Nobody Loves Being Sold. We Bridge The Gap.
                </p>
                <div className="value-steps" data-animate style={withDelay(0.1)}>
                  <p>We deploy acquisition teams across multiple channels</p>
                  <p>We acquire customers for your business</p>
                  <p>You pay based on customers delivered</p>
                </div>
                <Link
                  to="/contact"
                  className="btn-primary-new"
                  data-animate
                  style={withDelay(0.1)}
                >
                  Schedule Your Strategy Call
                </Link>
              </div>
              <div className="value-bento-grid" data-animate style={withDelay(0.3)}>
                <div className="bento-grid">
                  <div className="bento-item bento-large">
                    <img
                      src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=800&fit=crop&q=80"
                      alt="Team collaboration"
                      className="bento-photo"
                    />
                  </div>
                  <div className="bento-item bento-tall">
                    <img
                      src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=600&fit=crop&q=80"
                      alt="Sales professional"
                      className="bento-photo"
                    />
                  </div>
                  <div className="bento-item bento-wide">
                    <img
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&q=80"
                      alt="Business meeting"
                      className="bento-photo"
                    />
                  </div>
                  <div className="bento-item bento-small">
                    <img
                      src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=400&fit=crop&q=80"
                      alt="Team success"
                      className="bento-photo"
                    />
                  </div>
                  <div className="bento-item bento-small">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop&q=80"
                      alt="Team meeting"
                      className="bento-photo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Six Channels Section */}
        <section className="channels-section">
          <div className="container-new">
            <div className="channels-header">
              <h2 className="section-title-new" data-animate>
                Six Channels. One Coordinated System.
              </h2>
              <p className="channels-subtitle" data-animate style={withDelay(0.1)}>
                We don't just pick one channel and hope it works. We deploy across all six,
                orchestrating them together to create a unified customer acquisition engine.
              </p>
            </div>
            <div className="channels-grid-new">
              {channels.map((channel, idx) => (
                <div
                  key={channel.title}
                  className="channel-card-new"
                  data-animate
                  style={withDelay(idx * 0.04)}
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

        {/* Trust Signals Section */}
        <section className="trust-signals-section">
          <div className="container-new">
            <div className="trust-signals-wrapper" data-animate>
              <div className="certification-badge-container">
                <img
                  src="/certification.webp"
                  alt="Top-performing sales and marketing partner certification"
                  className="certification-badge"
                />
              </div>
              <div className="certification-content">
                <h3 className="certification-title">Recognized Excellence</h3>
                <p className="certification-text">
                  Momentum Management is recognized as a top-performing sales and marketing partner,
                  known for delivering high-volume results and unmatched client satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="case-study-section-new">
          <div className="container-new">
            <div className="case-study-content-new" data-animate>
              <h2 className="case-study-title-new">$40M for TELUS in 5 Years</h2>
              <div className="case-study-text-new">
                <p>
                  Over the past 5 years, TELUS partnered with Momentum Management to break into the Quebec market
                  and scale customer acquisition. By deploying our expert sales team across in-person, phone, and
                  social media channels, we helped TELUS establish a strong local presence and generate over $40 million in revenue.
                </p>
                <p>
                  This long-term collaboration continues to fuel consistent growth and retention in one of Canada's
                  most competitive markets.
                </p>
              </div>
              <div className="case-stats">
                <div className="case-stat">
                  <div className="case-stat-number">$40M</div>
                  <div className="case-stat-label">Revenue</div>
                </div>
                <div className="case-stat">
                  <div className="case-stat-number">5 Years</div>
                  <div className="case-stat-label">Partnership</div>
                </div>
                <div className="case-stat">
                  <div className="case-stat-number">Quebec</div>
                  <div className="case-stat-label">Market</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <div className="container-new">
            <h2 className="section-title-new" data-animate>What Our Partners Say</h2>
            <p className="testimonials-subtitle" data-animate style={withDelay(0.1)}>
              Real results from businesses we've helped grow
            </p>

            <div className="testimonials-grid">
              <div className="testimonial-card" data-animate style={withDelay(0.1)}>
                <div className="testimonial-content">
                  <div className="quote-icon">"</div>
                  <p className="testimonial-text">
                    Working with Momentum Management transformed our Quebec market strategy. Their local expertise
                    and multi-channel approach delivered consistent customer growth we couldn't achieve on our own.
                  </p>
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4 className="author-name">[Client Name]</h4>
                    <p className="author-title">[Title], [Company Name]</p>
                  </div>
                  <div className="testimonial-result">
                    <span className="result-label">Result:</span>
                    <span className="result-value">[Specific metric]</span>
                  </div>
                </div>
              </div>

              <div className="testimonial-card" data-animate style={withDelay(0.15)}>
                <div className="testimonial-content">
                  <div className="quote-icon">"</div>
                  <p className="testimonial-text">
                    The performance-based model aligned perfectly with our goals. No upfront costs, and they only
                    got paid when we acquired customers. It's refreshing to work with a partner who shares our risk.
                  </p>
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4 className="author-name">[Client Name]</h4>
                    <p className="author-title">[Title], [Company Name]</p>
                  </div>
                  <div className="testimonial-result">
                    <span className="result-label">Result:</span>
                    <span className="result-value">[Specific metric]</span>
                  </div>
                </div>
              </div>

              <div className="testimonial-card" data-animate style={withDelay(0.2)}>
                <div className="testimonial-content">
                  <div className="quote-icon">"</div>
                  <p className="testimonial-text">
                    After disappointing results with traditional agencies, Momentum Management's focus on actual
                    customer acquisition—not just lead generation—was exactly what we needed.
                  </p>
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4 className="author-name">[Client Name]</h4>
                    <p className="author-title">[Title], [Company Name]</p>
                  </div>
                  <div className="testimonial-result">
                    <span className="result-label">Result:</span>
                    <span className="result-value">[Specific metric]</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section-new" id="faq">
          <div className="container-new">
            <h2 className="section-title-new" data-animate>Frequently Asked Questions</h2>
            <div className="faq-list">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className={`faq-item-new ${activeAccordion === idx ? 'active' : ''}`}
                >
                  <button
                    className="faq-question"
                    onClick={() => toggleAccordion(idx)}
                  >
                    <span>{faq.q}</span>
                    <span className="faq-icon">{activeAccordion === idx ? '−' : '+'}</span>
                  </button>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="final-cta-section" id="cta">
          <div className="container-new">
            <div className="cta-content-new" data-animate>
              <h2 className="cta-title-new">Let's Talk</h2>
              <p className="cta-subtitle-new">
                Get in touch to discuss how we can help grow your business.
              </p>
              <Link to="/contact" className="btn-cta-large">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default MomentumLanding;