import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation('home');
  const revenueAnimationRef = useRef(false);
  const [revenueCount, setRevenueCount] = useState(50);
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
      value: 65,
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
    {
      number: t('serviceOverview.stats.revenueGenerated.number'),
      label: t('serviceOverview.stats.revenueGenerated.label'),
      helper: t('serviceOverview.stats.revenueGenerated.helper')
    },
    {
      number: t('serviceOverview.stats.trainedProfessionals.number'),
      label: t('serviceOverview.stats.trainedProfessionals.label'),
      helper: t('serviceOverview.stats.trainedProfessionals.helper')
    },
    {
      number: t('serviceOverview.stats.markets.number'),
      label: t('serviceOverview.stats.markets.label'),
      helper: t('serviceOverview.stats.markets.helper')
    },
    {
      number: t('serviceOverview.stats.customers.number'),
      label: t('serviceOverview.stats.customers.label'),
      helper: t('serviceOverview.stats.customers.helper')
    }
  ];

  const faqs = t('faq.questions', { returnObjects: true }) as Array<{ question: string; answer: string }>;

  return (
    <>
      <Header />

      <main className="main-new" role="main">
        {/* Hero Section */}
        <section className="hero-new" aria-label="Hero section">
          <div className="animated-grid"></div>
          <div className="hero-container">
            <h1 className="revenue-counter" data-animate style={withDelay(0)}>
              <span className="revenue-line">{t('hero.revenueCounter', { count: revenueCount })}</span>
            </h1>
            <p className="hero-subtitle-new" data-animate style={withDelay(0.15)}>
              {t('hero.subtitle')}
            </p>
            <div className="hero-cta-group-new" data-animate style={withDelay(0.25)}>
              <Link to="/contact" className="btn-primary-new">
                {t('hero.ctaPrimary')}
              </Link>
              <Link to="/services" className="btn-secondary-new">
                {t('hero.ctaSecondary')}
              </Link>
            </div>
            <div className="scroll-indicator" data-animate style={withDelay(0.35)}>
              <span>{t('hero.scrollIndicator')}</span>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="social-proof-section" aria-label="Trusted partners">
          <div className="container-new">
            <p className="trusted-label">{t('socialProof.trustedLabel')}</p>
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
              {t('serviceOverview.title')}
            </h2>
            <div className="service-description" data-animate style={withDelay(0.1)}>
              <p className="service-description">{t('serviceOverview.description')}</p>
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
                <img src="/growth-chart.svg" alt={t('caseStudy.imageAlt')} className="growth-chart" loading="lazy" />
              </div>
              <div className="case-study-content-new" data-animate style={withDelay(0.1)}>
                <h2 className="case-study-title-new">{t('caseStudy.title')}</h2>
                <div className="case-study-text-new">
                  <p>
                    {t('caseStudy.description')}
                  </p>
                </div>
                <Link
                  to="/case-studies"
                  className="btn-secondary-new"
                  data-animate
                  style={withDelay(0.2)}
                >
                  {t('caseStudy.cta')}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="final-cta-section" id="cta" aria-label="Contact call-to-action">
          <div className="container-new">
            <div className="cta-content-new" data-animate>
              <h2 className="cta-title-new">{t('finalCta.title')}</h2>
              <p className="cta-subtitle-new">
                {t('finalCta.subtitle')}
              </p>
              <Link to="/contact" className="btn-cta-large">
                {t('finalCta.cta')}
              </Link>
            </div>
          </div>
        </section>
        {/* FAQ Section */}
        <section className="faq-section-new" id="faq" aria-labelledby="faq-heading">
          <div className="container-new">
            <h2 className="section-title-new" data-animate id="faq-heading">{t('faq.title')}</h2>
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
                    <span>{faq.question}</span>
                    <span className="faq-icon" aria-hidden="true">{activeAccordion === idx ? '−' : '+'}</span>
                  </button>
                  <div className="faq-answer" id={`faq-answer-${idx}`} role="region">
                    <p>{faq.answer}</p>
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
        aria-label={t('scrollToTop')}
      >
        ↑
      </button>

      <Footer />
    </>
  );
};

export default MomentumLanding;