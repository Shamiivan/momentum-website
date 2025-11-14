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
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');

          if (entry.target.classList.contains('revenue-counter') && !revenueAnimationRef.current) {
            animateCounter();
          }
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
              <span className="revenue-line">${revenueCount} Million Generated For Brands</span>
            </h1>
            <p className="hero-subtitle-new" data-animate style={withDelay(0.15)}>
              We bridge the gap between you and your customer.
            </p>
            <div className="hero-cta-group-new" data-animate style={withDelay(0.25)}>
              <Link to="/contact" className="btn-primary-new">
                Schedule a Free Consultation
              </Link>
              <Link to="/services" className="btn-secondary-new">
                Explore Our Services
              </Link>
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

        {/* Value Proposition Section */}
        <section className="value-section">
          <div className="container-new">
            <div className="value-grid">
              <div className="value-content">
                <h2 className="value-title" data-animate>Everyone Loves Buying. Nobody Loves Being Sold. Leave it to Us</h2>
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

        {/* Case Study Teaser */}
        <section className="case-study-section-new">
          <div className="container-new">
            <div className="case-study-content-new" data-animate>
              <h2 className="case-study-title-new">$40M for TELUS in 5 Years</h2>
              <div className="case-study-text-new">
                <p>
                  Over the past 5 years, we helped TELUS break into the Quebec market and generate over $40 million in revenue
                  by deploying expert sales teams across in-person, phone, and social media channels.
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
              <Link
                to="/case-studies"
                className="btn-primary-new"
                data-animate
                style={withDelay(0.2)}
              >
                Read Full Case Study
              </Link>
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