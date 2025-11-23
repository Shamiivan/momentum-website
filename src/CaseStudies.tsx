import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { usePageScroll } from './hooks/usePageScroll'
import { useScrollAnimation } from './hooks/useScrollAnimation'
import "./App.css"

type AnimatedStyle = CSSProperties & {
  '--delay'?: string;
};

const withDelay = (delay: number): AnimatedStyle => ({
  '--delay': `${delay}s`
});

const CaseStudies = () => {
  usePageScroll();
  useScrollAnimation();

  return (
    <>
      <Header />
      <main className="main-new">
        {/* Hero Section */}
        <section className="hero-new">
          <div className="animated-grid"></div>
          <div className="hero-container">
            <h1 className="hero-title-large" data-animate style={withDelay(0)}>
              Case Studies
            </h1>
            <p className="hero-subtitle-new" data-animate style={withDelay(0.15)}>
              Real results from businesses we've helped grow
            </p>
          </div>
        </section>

        {/* Featured Case Study - TELUS */}
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
              Real feedback from businesses we've helped grow
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

        {/* Final CTA */}
        <section className="final-cta-section">
          <div className="container-new">
            <div className="cta-content-new" data-animate>
              <h2 className="cta-title-new">Ready to Create Your Success Story?</h2>
              <p className="cta-subtitle-new">
                Let's discuss how we can help you achieve similar results.
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

export default CaseStudies;
