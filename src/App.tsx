import { Fragment, useEffect, useRef } from 'react'
import './App.css'


const MomentumLanding = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const elementsToObserve = document.querySelectorAll(
      '.client-logo-large, .story-visual, .testimonial-card, .flow-node, .comparison-card, .why-item, .process-item, .award-item, .faq-item, .cta-content'
    );

    elementsToObserve.forEach(el => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    // Parallax effect on hero
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector<HTMLElement>('.hero');
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToContact = () => {
    alert('Contact form would appear here. Integrate with your booking system (Calendly, etc.)');
  };

  const scrollToStory = () => {
    document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="header-content">
            <div className="logo">Momentum</div>
            <button className="header-cta" onClick={scrollToContact}>
              Let's Talk →
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-badge">✓ TELUS Authorized Partner</div>
            <h1>
              We Generated<br />
              <span className="hero-number">$40M</span>
              for TELUS<br />
              <span className="hero-punchline">in Quebec.</span>
            </h1>
            <p className="hero-subtitle">
              No fluff. Just multi-channel sales teams that actually deliver results.
              Because building in-house takes forever, and you've got revenue targets to hit now.
            </p>
            <div className="hero-cta-group">
              <button className="btn-large btn-primary" onClick={scrollToContact}>
                Let's Talk Growth →
              </button>
              <button className="btn-large btn-secondary" onClick={scrollToStory}>
                See How We Did It
              </button>
            </div>
          </div>
        </section>

        {/* Stats Marquee */}
        <section className="stats-marquee">
          <div className="marquee-content">
            {[...Array(2)].map((_, groupIndex) => (
              <Fragment key={groupIndex}>
                <div className="marquee-item">
                  <div className="marquee-number">$40M</div>
                  <div className="marquee-label">Revenue Generated</div>
                </div>
                <div className="marquee-item">
                  <div className="marquee-number">5+</div>
                  <div className="marquee-label">Years Partnership</div>
                </div>
                <div className="marquee-item">
                  <div className="marquee-number">3</div>
                  <div className="marquee-label">Acquisition Channels</div>
                </div>
                <div className="marquee-item">
                  <div className="marquee-number">85%</div>
                  <div className="marquee-label">Market Coverage</div>
                </div>
              </Fragment>
            ))}
          </div>
        </section>

        {/* Sales and Marketing Section */}
        <section className="sales-marketing-section">
          <div className="container">
            <div className="sales-marketing-content">
              <h2 className="sales-marketing-title">Sales and Marketing Done for you</h2>
              <p className="sales-marketing-text">
                We deploy sales teams across every channel where your customers buy. Field reps in retail locations. Phone teams calling prospects. Digital campaigns on social media. All coordinated. All tracked. All delivering customers.
              </p>
              <p className="sales-marketing-text">
                You focus on your product. We focus on acquiring customers for it.
              </p>
            </div>
            <div className="sales-stats-grid">
              <div className="sales-stat-item">
                <div className="sales-stat-number">$50M+</div>
                <div className="sales-stat-label">Revenue generated for partner brands</div>
              </div>
              <div className="sales-stat-item">
                <div className="sales-stat-number">50+</div>
                <div className="sales-stat-label">Trained sales professionals across channels</div>
              </div>
              <div className="sales-stat-item">
                <div className="sales-stat-number">3</div>
                <div className="sales-stat-label">Markets expanded in the last year</div>
              </div>
              <div className="sales-stat-item">
                <div className="sales-stat-number">20,000+</div>
                <div className="sales-stat-label">Customers acquired through direct outreach</div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="story-section" id="story">
          <div className="container">
            <div className="story-grid">
              <div className="story-content">
                <div className="story-label">The Proof</div>
                <h2>How We Built $40M for TELUS</h2>
              </div>
              <div className="story-visual">
                <p className="story-text">
                  Over the past 5 years, <strong>TELUS partnered with Momentum Management to break into the Quebec market</strong> and scale customer acquisition. By deploying our expert sales team across in-person, phone, and social media channels, we helped TELUS establish a strong local presence and generate <strong>over $40 million in revenue</strong>. This long-term collaboration continues to fuel consistent growth and retention in one of Canada's most competitive markets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonial-section">
          <div className="container">
            <div className="section-label">What Our Clients Say</div>
            <h2 className="section-title-large">Real Results,<br />Real People</h2>
            <div className="testimonial-grid">
              <div className="testimonial-card">
                <div className="testimonial-quote">
                  "Momentum's work has been transformational for us. Their multi-channel approach accelerated our Quebec market entry and delivered qualified customers consistently. The ROI has been exceptional."
                </div>
                <div className="testimonial-author">
                  <div className="author-name">TELUS Partnership Team</div>
                  <div className="author-title">National Expansion Lead</div>
                </div>
                <div className="testimonial-metric">
                  <div className="metric-number">$40M</div>
                  <div className="metric-label">Revenue Generated</div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-quote">
                  "What sets Momentum apart is their deep Quebec market knowledge. They didn't just bring sales expertise—they brought cultural understanding that made all the difference."
                </div>
                <div className="testimonial-author">
                  <div className="author-name">Quebec Operations Director</div>
                  <div className="author-title">TELUS</div>
                </div>
                <div className="testimonial-metric">
                  <div className="metric-number">85%</div>
                  <div className="metric-label">Market Coverage</div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-quote">
                  "We got up and running in 30 days. Their team handled everything—from strategy to execution. Five years later, they're still driving consistent growth for us."
                </div>
                <div className="testimonial-author">
                  <div className="author-name">Customer Acquisition Lead</div>
                  <div className="author-title">TELUS</div>
                </div>
                <div className="testimonial-metric">
                  <div className="metric-number">5+</div>
                  <div className="metric-label">Years & Growing</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Flow Section */}
        <section className="flow-section">
          <div className="container">
            <div className="flow-header">
              <h2>How We Get You<br />Customers</h2>
              <p className="flow-subtitle">Three channels, one coordinated strategy, maximum results</p>
            </div>
            <div className="flow-diagram">
              <div className="flow-node">
                <div className="flow-icon">🎯</div>
                <div className="flow-title">Target Market</div>
                <div className="flow-desc">Quebec Businesses</div>
              </div>

              <div className="flow-arrow"></div>

              <div className="flow-row">
                <div className="flow-node">
                  <div className="flow-icon">🏪</div>
                  <div className="flow-title">In-Person</div>
                  <div className="flow-desc">Retail & Events</div>
                </div>
                <div className="flow-node">
                  <div className="flow-icon">📞</div>
                  <div className="flow-title">Phone</div>
                  <div className="flow-desc">Outbound Calls</div>
                </div>
                <div className="flow-node">
                  <div className="flow-icon">📱</div>
                  <div className="flow-title">Social Media</div>
                  <div className="flow-desc">Digital Outreach</div>
                </div>
              </div>

              <div className="flow-arrow"></div>

              <div className="flow-node">
                <div className="flow-icon">⚙️</div>
                <div className="flow-title">Qualification</div>
                <div className="flow-desc">Lead Scoring & Nurture</div>
              </div>

              <div className="flow-arrow"></div>

              <div className="flow-node">
                <div className="flow-icon">✨</div>
                <div className="flow-title">Your Customer</div>
                <div className="flow-desc">Converted & Retained</div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="comparison-section">
          <div className="container">
            <h2 className="section-title-large">Momentum vs<br />Other Agencies</h2>
            <p className="section-subtitle">The Momentum difference: Real results, not excuses</p>
            <div className="comparison-grid">
              <div className="comparison-card">
                <div className="card-label-large avoid">❌ Broken</div>
                <h3>Traditional Approach</h3>
                <ul className="comparison-list">
                  <li><span className="list-icon">💸</span> 12-18 months to hire and train—revenue targets don't wait that long</li>
                  <li><span className="list-icon">😰</span> $500K+ in overhead before your first sale—ouch</li>
                  <li><span className="list-icon">🎲</span> Trial and error in unfamiliar markets—expensive guesswork</li>
                  <li><span className="list-icon">😓</span> Managing payroll, turnover, and HR headaches—not your core business</li>
                  <li><span className="list-icon">📉</span> Single-channel limits your reach—leaving money on the table</li>
                  <li><span className="list-icon">🤷</span> No proven playbook—just hope and prayer</li>
                </ul>
              </div>

              <div className="comparison-card momentum-card">
                <div className="card-label-large recommended">✓ Fixed</div>
                <h3>The Momentum Way</h3>
                <ul className="comparison-list">
                  <li><span className="list-icon">🚀</span> Launch in 30 days with battle-tested teams—start generating revenue now</li>
                  <li><span className="list-icon">💰</span> Performance-based pricing—we eat our own cooking</li>
                  <li><span className="list-icon">🎯</span> 5+ years of Quebec expertise baked in—we know what works</li>
                  <li><span className="list-icon">😌</span> Zero HR headaches—we handle everything</li>
                  <li><span className="list-icon">📈</span> Multi-channel omnipresence from day one—maximize every opportunity</li>
                  <li><span className="list-icon">💪</span> $40M track record—results speak for themselves</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Section */}
        <section className="why-section">
          <div className="container">
            <h2 className="section-title-large">Why TELUS Chose Us</h2>
            <div className="why-grid">
              <div className="why-item">
                <div className="why-number">/ 01</div>
                <h3 className="why-title">Quebec Market Expertise</h3>
                <p className="why-text">Deep understanding of Quebec's unique business culture, language nuances, and customer preferences that national teams miss.</p>
              </div>
              <div className="why-item">
                <div className="why-number">/ 02</div>
                <h3 className="why-title">Multi-Channel Mastery</h3>
                <p className="why-text">Integrated approach across in-person, phone, and social media creates multiple touchpoints for maximum reach.</p>
              </div>
              <div className="why-item">
                <div className="why-number">/ 03</div>
                <h3 className="why-title">Proven Track Record</h3>
                <p className="why-text">5+ years of consistent results. When market entry is critical, you need a partner who's done it before.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="process-section">
          <div className="container">
            <h2 className="section-title-large">How It Works</h2>
            <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '6rem' }}>
              Three steps from first call to revenue growth
            </p>
            <div className="process-list">
              <div className="process-item">
                <div className="process-header">
                  <div className="process-number">/ 01</div>
                </div>
                <h3>Assess Your Market</h3>
                <p className="process-text">
                  We map your competitive landscape, identify untapped opportunities, and pinpoint exactly which channels will drive the highest ROI for your specific market entry or expansion goals.
                </p>
              </div>

              <div className="process-item">
                <div className="process-header">
                  <div className="process-number">/ 02</div>
                </div>
                <h3>Deploy Expert Teams</h3>
                <p className="process-text">
                  Our battle-tested sales professionals launch coordinated campaigns across in-person retail, outbound calling, and targeted social media—creating omnipresence in your target market.
                </p>
              </div>

              <div className="process-item">
                <div className="process-header">
                  <div className="process-number">/ 03</div>
                </div>
                <h3>Scale What Works</h3>
                <p className="process-text">
                  We track every metric, double down on high-performing channels, and systematically scale successful strategies to accelerate your revenue growth quarter after quarter.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="awards-section">
          <div className="container">
            <div className="awards-intro">
              <h2>The Numbers<br />Don't Lie</h2>
              <p>Here's what 5+ years of partnership looks like</p>
            </div>
            <div className="awards-list">
              <div className="award-item">
                <div className="award-metric">$40M</div>
                <div className="award-title">Revenue Generated for TELUS</div>
                <div className="award-year">2020-2025</div>
              </div>

              <div className="award-item">
                <div className="award-metric">5+</div>
                <div className="award-title">Years Partnership</div>
                <div className="award-year">Ongoing</div>
              </div>

              <div className="award-item">
                <div className="award-metric">85%</div>
                <div className="award-title">Quebec Market Coverage</div>
                <div className="award-year">2025</div>
              </div>

              <div className="award-item">
                <div className="award-metric">3X</div>
                <div className="award-title">Average Growth Rate</div>
                <div className="award-year">YoY</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="container">
            <div className="section-label">Got Questions?</div>
            <h2 className="section-title-large">Let's Get You<br />Some Answers</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>How quickly can we get started?</h3>
                <p>Our streamlined onboarding gets you up and running in 30 days—compared to the 11+ months it takes to build an in-house team. Your dedicated account manager handles everything from strategy to team deployment.</p>
              </div>

              <div className="faq-item">
                <h3>What results can we expect?</h3>
                <p>While every market is different, we focus on sustainable, high-quality growth. TELUS saw $40M in revenue over 5 years. We'll share relevant benchmarks from your specific industry during our strategy call.</p>
              </div>

              <div className="faq-item">
                <h3>How does pricing work?</h3>
                <p>We offer performance-based models aligned with your goals. You only pay for results, not promises. No hidden fees, no surprises—just transparent pricing tied to the outcomes you care about.</p>
              </div>

              <div className="faq-item">
                <h3>Do you work with companies in my industry?</h3>
                <p>We specialize in B2B companies with complex sales cycles—particularly those expanding into Quebec or scaling multi-channel acquisition. If you have a strong value proposition and are ready to grow, we should talk.</p>
              </div>

              <div className="faq-item">
                <h3>What makes you different from other agencies?</h3>
                <p>Three things: (1) Deep Quebec market expertise you can't build overnight, (2) Multi-channel mastery—not just one tactic, and (3) A proven $40M track record with TELUS. We don't just generate leads; we build sustainable growth engines.</p>
              </div>

              <div className="faq-item">
                <h3>Can we meet the team?</h3>
                <p>Absolutely. We encourage you to meet the people who'll represent your brand. During onboarding, you'll meet your account manager and the sales team members dedicated to your account. Transparency builds trust.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <div className="cta-emoticon">♥‿♥</div>
              <h2 className="cta-title">Ready to grow?<br />Let's talk.</h2>
              <p className="cta-description">
                No hard sell. No 47-slide deck. Just a real conversation about your growth goals and whether we're the right fit. Sound good?
              </p>
              <button className="btn-large btn-primary" onClick={scrollToContact}>
                Book Your Strategy Call →
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>© 2025 Momentum Management. Building growth partnerships.</p>
        </div>
      </footer>
    </>
  );
};

export default MomentumLanding;