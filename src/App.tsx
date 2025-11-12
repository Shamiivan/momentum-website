import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
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
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px'
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
    { number: '$50M+', label: 'Revenue Generated', helper: 'for partner brands' },
    { number: '500+', label: 'Trained Sales', helper: 'professionals across channels' },
    { number: '3', label: 'Markets', helper: 'expanded in last year' },
    { number: '20,000+', label: 'Customers', helper: 'acquired through outreach' }
  ];

  const painPoints = [
    {
      title: 'Revenue Stagnation',
      text: 'You\'ve tried new channels. Hired more reps. Increased ad spend. Nothing moves the needle. The pipeline stays flat.'
    },
    {
      title: 'Inconsistent Pipeline',
      text: 'You can\'t forecast. Your acquisition system produces random results month to month.'
    },
    {
      title: 'High CAC, Shrinking Margins',
      text: 'Customer lifetime value stayed flat.'
    },
    {
      title: 'Market Expansion Failures',
      text: 'You tried entering new regions. Hired local reps. Spent six figures on campaigns. Result: 23 customers and a lot of "learnings."'
    },
    {
      title: 'Disconnected Sales & Marketing',
      text: 'Marketing generates leads. Sales says they\'re garbage. Sales complains about lead quality. Marketing says sales can\'t close. Meanwhile, nobody\'s acquiring actual customers.'
    },
    {
      title: 'Agency Disappointment',
      text: 'The last agency promised results. They delivered a beautiful dashboard showing activity that never converted to revenue.'
    }
  ];

  const channels = [
    {
      icon: 'retail',
      title: 'Retail & In-Person',
      desc: 'Field sales teams in stores, events, door-to-door, B2B offices'
    },
    {
      icon: 'phone',
      title: 'Phone Outreach',
      desc: 'Dedicated inside sales teams for outbound calling and inbound qualification'
    },
    {
      icon: 'digital',
      title: 'Digital Campaigns',
      desc: 'Paid social, paid search, SEO, content marketing, landing pages'
    },
    {
      icon: 'social',
      title: 'Social Selling',
      desc: 'LinkedIn outreach, Instagram DMs, Facebook groups, community building'
    },
    {
      icon: 'email',
      title: 'Direct Outreach',
      desc: 'Cold email sequences, SMS campaigns, direct mail'
    },
    {
      icon: 'partnership',
      title: 'Partnership Networks',
      desc: 'Channel partnerships, affiliate programs, co-marketing deals'
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

  const comparisonRows = [
    { label: 'Monthly retainer', traditional: '❌ $10K–$50K locked in contracts', momentum: '✅ $0. Only pay when customers arrive' },
    { label: 'Payment structure', traditional: '❌ Guaranteed, regardless of performance', momentum: '✅ Performance-based. We get paid per customer' },
    { label: 'What they measure', traditional: '❌ Activities (calls, emails, impressions)', momentum: '✅ Customers acquired across every channel' },
    { label: 'Accountability', traditional: '❌ None — retainers protect them', momentum: '✅ Complete — no results, no invoice' }
  ];

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
      <header className="main-header">
        <div className="header-container">
          <div className="logo-new">Momentum Management</div>
          <nav className="main-nav">
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollToServices(); }}>Services</a>
            <a href="#results">Results</a>
            <a href="#faq">FAQ</a>
          </nav>
          <Link to="/contact" className="header-cta-new">
            Contact Us
          </Link>
        </div>
      </header>

      <main className="main-new">
        {/* Hero Section */}
        <section className="hero-new">
          <div className="animated-grid"></div>
          <div className="hero-container">
            <h1 className="revenue-counter" data-animate style={withDelay(0)}>
              <span className="revenue-line">${revenueCount} Million Generated For Brands</span>
            </h1>
            <p className="hero-subtitle-new" data-animate style={withDelay(0.3)}>
              We bridge the gap between you and your customer. We sell for you on commission.
            </p>
            <div className="hero-cta-group-new" data-animate style={withDelay(0.4)}>
              <Link to="/contact" className="btn-primary-new">
                Get Started
              </Link>
              <button className="btn-secondary-new" onClick={scrollToServices}>
                See How We Work
              </button>
            </div>
            <div className="scroll-indicator" data-animate style={withDelay(0.5)}>
              <span>↓</span>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="social-proof-section">
          <div className="container-new">
            <p className="trusted-label">Trusted by:</p>
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
              Sales and Marketing Done for You
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
                  style={withDelay(0.2 + idx * 0.1)}
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
                68% of Companies Miss Their Revenue Targets
              </h2>
              <p className="pain-subtitle" data-animate style={withDelay(0.1)}>
                Not because of bad products. Not because of weak demand. Because their customer acquisition is broken.
              </p>

            </div>
            <div className="pain-grid">
              {painPoints.map((point, idx) => (
                <div
                  key={point.title}
                  className="pain-card"
                  data-animate
                  style={withDelay(idx * 0.05)}
                >
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </div>
              ))}
            </div>
            <p className="pain-closing" data-animate style={withDelay(0.35)}>
              Does this sound like you?
            </p>
            <Link
              to="/contact"
              className="btn-primary-new"
              data-animate
              style={withDelay(0.5)}
            >
              Let's see how we can help
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
                  <div className="value-step">
                    <span className="check-icon">✓</span>
                    <span>We deploy acquisition teams across multiple channels</span>
                  </div>
                  <div className="value-step">
                    <span className="check-icon">✓</span>
                    <span>We acquire customers for your business</span>
                  </div>
                  <div className="value-step">
                    <span className="check-icon">✓</span>
                    <span>You pay based on customers delivered</span>
                  </div>
                </div>
                <div className="value-guarantee" data-animate style={withDelay(0.2)}>
                  <p>
                    No monthly retainers. No upfront fees. No payment until you have results.
                  </p>
                </div>
                <p className="value-closing" data-animate style={withDelay(0.2)}>
                  We've done this successfully for 5 years. We know our systems work.
                  We'd rather get paid for performance than promises.
                </p>
                <Link
                  to="/contact"
                  className="btn-primary-new"
                  data-animate
                  style={withDelay(0.1)}
                >
                  Schedule Your Strategy Call
                </Link>
              </div>
              <div className="value-image" data-animate style={withDelay(0.3)}>
                <div className="image-placeholder">
                  <span>Sales Team Working</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Six Channels Section */}
        <section className="channels-section">
          <div className="container-new">
            <h2 className="section-title-new" data-animate>
              Six Channels. One Coordinated System.
            </h2>
            <div className="channels-grid-new">
              {channels.map((channel, idx) => (
                <div
                  key={channel.title}
                  className="channel-card-new"
                  data-animate
                  style={withDelay(idx * 0.08)}
                >
                  <div className="channel-icon-new">{getChannelIcon(channel.icon)}</div>
                  <h3 className="channel-title-new">{channel.title}</h3>
                  <p className="channel-desc-new">{channel.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="comparison-section-new">
          <div className="container-new">
            <h2 className="comparison-title" data-animate>
              They Get Paid To Try. We Get Paid To Deliver.
            </h2>
            <div className="comparison-table-new" data-animate style={withDelay(0.2)}>
              <div className="comparison-row comparison-header">
                <div className="comparison-cell"></div>
                <div className="comparison-cell">Most Agencies</div>
                <div className="comparison-cell">Momentum Mgmt</div>
              </div>
              {comparisonRows.map((row, idx) => (
                <div
                  key={row.label}
                  className="comparison-row"
                  data-animate
                  style={withDelay(0.3 + idx * 0.1)}
                >
                  <div className="comparison-cell cell-label">{row.label}</div>
                  <div className="comparison-cell cell-traditional">{row.traditional}</div>
                  <div className="comparison-cell cell-momentum">{row.momentum}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="case-study-section-new">
          <div className="container-new">
            <div className="case-study-content-new" data-animate>
              <div className="telus-logo-large">TELUS</div>
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

        {/* FAQ Section */}
        <section className="faq-section-new" id="faq">
          <div className="container-new">
            <h2 className="section-title-new" data-animate>Frequently Asked Questions</h2>
            <div className="faq-list">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className={`faq-item-new ${activeAccordion === idx ? 'active' : ''}`}
                  data-animate
                  style={withDelay(idx * 0.05)}
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
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
          <div className="container-new">
            <div className="cta-content-new" data-animate>
              <h2 className="cta-title-new">Ready to Scale Customer Acquisition?</h2>
              <p className="cta-subtitle-new">
                Let's discuss how momentum management can transform your growth trajectory.
              </p>
              <Link to="/contact" className="btn-cta-large">
                Schedule Your Strategy Call
              </Link>
              <p className="response-time">
                <span className="pulse-dot"></span>
                Average response time: &lt; 2 hours
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer-new">
        <div className="container-new">
          <div className="footer-content">
            <div className="footer-column footer-brand">
              <h3 className="footer-logo">Momentum Management</h3>
              <p className="footer-tagline">Performance-based customer acquisition. We only get paid when you get customers.</p>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-links">
                <li><a href="#services">Services</a></li>
                <li><a href="#results">Careers</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Solutions</h4>
              <ul className="footer-links">
                <li><a href="#services">Partnerships</a></li>
                <li><a href="#services">Staff Training</a></li>
                <li><a href="#services">Executive Coaching</a></li>
                <li><a href="#services">Sales Teams</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Contact</h4>
              <ul className="footer-contact">
                <li>Montreal, Quebec</li>
                <li><a href="mailto:contact@momentummgmt.com">contact@momentummanagment.com</a></li>
                <li><a href="tel:+15141234567">+1 (514) 123-4567</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2025 Momentum Management. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <span className="footer-separator">•</span>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MomentumLanding;