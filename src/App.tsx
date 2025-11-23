import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from './components/Header'
import Footer from './components/Footer'
import "./App.css"
import B2BServicesSection from './components/B2BServicesSection'

gsap.registerPlugin(ScrollTrigger)

type AnimatedStyle = CSSProperties & {
  '--delay'?: string;
  '--index'?: number;
};

const withDelay = (delay: number): AnimatedStyle => ({
  '--delay': `${delay}s`
});

const MomentumLanding = () => {
  const revenueAnimationRef = useRef(false);
  const [revenueCount, setRevenueCount] = useState(20);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // GSAP ScrollTrigger animations for all data-animate elements
    const elementsToAnimate = gsap.utils.toArray('[data-animate]');

    elementsToAnimate.forEach((element: any) => {
      // Only use delay for hero section elements
      const isHeroElement = element.closest('.hero-new');
      const delay = isHeroElement ? parseFloat(element.style.getPropertyValue('--delay') || '0') : 0;

      gsap.fromTo(element,
        {
          opacity: 0,
          y: 5
        },
        {
          opacity: 1,
          y: 0,
          duration: isHeroElement ? 0.4 : 0.01,
          delay: delay,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top 98%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Trigger revenue counter animation
      if (element.classList.contains('revenue-counter')) {
        ScrollTrigger.create({
          trigger: element,
          start: 'top 90%',
          onEnter: () => {
            if (!revenueAnimationRef.current) {
              animateCounter();
            }
          }
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    // Handle scroll-to-top button visibility
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const animateCounter = () => {
    if (revenueAnimationRef.current) return;
    revenueAnimationRef.current = true;

    // Use GSAP for smoother counter animation
    gsap.to({ value: 20 }, {
      value: 50,
      duration: 1.6,
      ease: 'power2.out',
      onUpdate: function () {
        setRevenueCount(Math.round(this.targets()[0].value));
      }
    });
  };

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const partners = [
    { name: 'Amazon', revenue: '', logo: '/amazon-com-logo-svg.svg' },
    { name: 'Shopify', revenue: '', logo: '/shopify-color.svg' },
    { name: 'TELUS', revenue: '', logo: '/telus.svg' },
    { name: 'Rogers', revenue: '', logo: '/rogers.svg' }
  ];

  const serviceStats = [
    { number: '$65M', label: 'Revenue Generated', helper: 'for partner brands' },
    { number: '1000', label: 'Trained Professionals', helper: 'across multiple channels' },
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

      <main className="main-new" role="main">
        {/* Hero Section */}
        <section className="hero-new" aria-label="Hero section">
          <div className="animated-grid"></div>
          <div className="hero-container">
            <h1 className="revenue-counter" data-animate style={withDelay(0)}>
              <span className="revenue-line">${revenueCount} Million Generated For National Brands</span>
            </h1>
            <p className="hero-subtitle-new" data-animate style={withDelay(0.15)}>
              We bridge the gap between you and your customers.
            </p>
            <div className="hero-cta-group-new" data-animate style={withDelay(0.25)}>
              <Link to="/contact" className="btn-primary-new">
                Schedule a Free Consultation
              </Link>
              <Link to="/services" className="btn-secondary-new">
                See How We Do It
              </Link>
            </div>
            <div className="scroll-indicator" data-animate style={withDelay(0.35)}>
              <span>↓</span>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="social-proof-section" aria-label="Trusted partners">
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
                      loading="lazy"
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
                The power behind the pitch
            </h2>
            <div className="service-description" data-animate style={withDelay(0.1)}>
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
        <B2BServicesSection />
        {/* Value Proposition Section */}
        {/* Case Study Teaser */}
        <section className="case-study-section-new" aria-label="TELUS case study">
          <div className="container-new">
            <div className="case-study-grid">
              <div className="case-study-visual" data-animate>
                <img src="/growth-chart.svg" alt="Revenue Growth Chart" className="growth-chart" loading="lazy" />
              </div>
              <div className="case-study-content-new" data-animate style={withDelay(0.1)}>
                <h2 className="case-study-title-new">$57.3M for TELUS in 4 Years</h2>
                <div className="case-study-text-new">
                  <p>
                    Over the past 5 years, we helped TELUS break into the Quebec market and generate over $57.3 million in revenue
                    by deploying expert sales teams across in-person, phone, and social media channels.
                  </p>
                </div>
                <Link
                  to="/case-studies"
                  className="btn-secondary-new"
                  data-animate
                  style={withDelay(0.2)}
                >
                  Read Full Case Study
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="final-cta-section" id="cta" aria-label="Contact call-to-action">
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
        {/* FAQ Section */}
        <section className="faq-section-new" id="faq" aria-labelledby="faq-heading">
          <div className="container-new">
            <h2 className="section-title-new" data-animate id="faq-heading">Frequently Asked Questions</h2>
            <div className="faq-list">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className={`faq-item-new ${activeAccordion === idx ? 'active' : ''}`}
                >
                  <button
                    className="faq-question"
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={activeAccordion === idx}
                    aria-controls={`faq-answer-${idx}`}
                  >
                    <span>{faq.q}</span>
                    <span className="faq-icon" aria-hidden="true">{activeAccordion === idx ? '−' : '+'}</span>
                  </button>
                  <div className="faq-answer" id={`faq-answer-${idx}`} role="region">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Scroll to Top Button */}
      <button
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        ↑
      </button>

      <Footer />
    </>
  );
};

export default MomentumLanding;