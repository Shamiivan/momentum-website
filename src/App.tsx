import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
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
  const [revenueCount, setRevenueCount] = useState(0);
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
          if (entry.target.classList.contains('revenue-counter')) {
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
    const duration = 2000;
    const steps = 60;
    const increment = 50 / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= 50) {
        setRevenueCount(50);
        clearInterval(timer);
      } else {
        setRevenueCount(Math.floor(current));
      }
    }, duration / steps);
  };

  const scrollToContact = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const partners = [
    { name: 'TELUS', revenue: '$40M+ revenue', logo: 'TELUS' },
    { name: 'Partner Network', revenue: '5,000+ customers', logo: 'PARTNERS' },
    { name: 'Growth Metrics', revenue: '312% ROI', logo: 'METRICS' }
  ];

  const serviceStats = [
    { number: '$50M+', label: 'Revenue Generated', helper: 'for partner brands' },
    { number: '50+', label: 'Trained Sales', helper: 'professionals across channels' },
    { number: '3', label: 'Markets', helper: 'expanded in last year' },
    { number: '20,000+', label: 'Customers', helper: 'acquired through outreach' }
  ];

  const painPoints = [
    {
      title: 'Revenue Stagnation',
      text: 'Your growth is stuck at 15-20% when projections called for 50%+. You\'ve tried new channels. Hired more reps. Increased ad spend. Nothing moves the needle. The pipeline stays flat.'
    },
    {
      title: 'Inconsistent Pipeline',
      text: 'Q1 looked great. Q2 was a disaster. Q3 might recover. You can\'t forecast. Your acquisition system produces random results month to month.'
    },
    {
      title: 'High CAC, Shrinking Margins',
      text: 'Customer acquisition cost climbed from $150 to $380 in 18 months. Customer lifetime value stayed flat. The math doesn\'t work anymore.'
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
      icon: '🏪',
      title: 'Retail & In-Person',
      desc: 'Field sales teams in stores, events, door-to-door, B2B offices'
    },
    {
      icon: '📞',
      title: 'Phone Outreach',
      desc: 'Dedicated inside sales teams for outbound calling and inbound qualification'
    },
    {
      icon: '💻',
      title: 'Digital Campaigns',
      desc: 'Paid social, paid search, SEO, content marketing, landing pages'
    },
    {
      icon: '📱',
      title: 'Social Selling',
      desc: 'LinkedIn outreach, Instagram DMs, Facebook groups, community building'
    },
    {
      icon: '✉️',
      title: 'Direct Outreach',
      desc: 'Cold email sequences, SMS campaigns, direct mail'
    },
    {
      icon: '🤝',
      title: 'Partnership Networks',
      desc: 'Channel partnerships, affiliate programs, co-marketing deals'
    }
  ];

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
          <div className="logo-new">Momentum</div>
          <nav className="main-nav">
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollToServices(); }}>Services</a>
            <a href="#results">Results</a>
            <a href="#faq">FAQ</a>
          </nav>
          <button className="header-cta-new" onClick={scrollToContact}>
            Schedule Call
          </button>
        </div>
      </header>

      <main className="main-new">
        {/* Hero Section */}
        <section className="hero-new">
          <div className="animated-grid"></div>
          <div className="hero-container">
            <h1 className="revenue-counter" data-animate style={withDelay(0)}>
              <span className="revenue-line">${revenueCount} Million Generated For Brands</span>
              <span className="cost-line">$0 Upfront Cost</span>
            </h1>
            <p className="hero-subtitle-new" data-animate style={withDelay(0.2)}>
              We bridge the gap between you and your customer. We sell for you on commission.
            </p>
            <div className="hero-cta-group-new" data-animate style={withDelay(0.3)}>
              <button className="btn-primary-new" onClick={scrollToContact}>
                Schedule Call
              </button>
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
            <div className="partners-grid">
              {partners.map((partner, idx) => (
                <div 
                  key={partner.name} 
                  className="partner-card"
                  data-animate
                  style={withDelay(idx * 0.15)}
                >
                  <div className="partner-logo">{partner.logo}</div>
                  <div className="partner-metric">{partner.revenue}</div>
                </div>
              ))}
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
              <p className="pain-question" data-animate style={withDelay(0.2)}>
                Does this sound like you?
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
              That's why we do things differently.
            </p>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="value-section">
          <div className="container-new">
            <div className="value-grid">
              <div className="value-content">
                <h2 className="value-title" data-animate>We Sell. You Pay.</h2>
                <p className="value-intro" data-animate style={withDelay(0.1)}>
                  Here's our entire business model:
                </p>
                <div className="value-steps" data-animate style={withDelay(0.2)}>
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
                <div className="value-guarantee" data-animate style={withDelay(0.3)}>
                  <p>
                    No monthly retainers. No upfront fees. No payment until you have results.
                  </p>
                </div>
                <p className="value-closing" data-animate style={withDelay(0.4)}>
                  We've done this successfully for 5 years. We know our systems work. 
                  We'd rather get paid for performance than promises.
                </p>
                <button 
                  className="btn-primary-new" 
                  onClick={scrollToContact}
                  data-animate 
                  style={withDelay(0.5)}
                >
                  Schedule Your Strategy Call
                </button>
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
                  <div className="channel-icon-new">{channel.icon}</div>
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
                Let's discuss how commission-based sales can transform your growth trajectory.
              </p>
              <button className="btn-cta-large" onClick={scrollToContact}>
                Schedule Your Strategy Call
              </button>
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
          <p>© 2025 Momentum Management. Building growth partnerships.</p>
        </div>
      </footer>
    </>
  );
};

export default MomentumLanding;