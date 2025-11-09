import { Fragment, useEffect, useRef } from 'react'
import type { CSSProperties } from 'react'
import './App.css'

type AnimatedStyle = CSSProperties & {
  '--delay'?: string;
};

const withDelay = (delay: number): AnimatedStyle => ({
  '--delay': `${delay}s`
});


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
      '[data-animate], .client-logo-large, .story-visual, .testimonial-card, .flow-node, .comparison-card, .why-item, .process-item, .award-item, .faq-item, .cta-content'
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

  const heroInsights = [
    {
      label: 'Customers Delivered',
      value: '847',
      helper: 'per market launch into Quebec'
    },
    {
      label: 'CAC Locked',
      value: '$180',
      helper: 'pay-per-customer. No retainers.'
    },
    {
      label: 'Market Coverage',
      value: '85%',
      helper: 'households touched across three channels'
    }
  ];

  const channels = [
    {
      name: 'Retail & In-Person',
      desc: 'Field sales teams in stores, events, door-to-door, B2B offices',
      icon: '🏪'
    },
    {
      name: 'Phone Outreach',
      desc: 'Dedicated inside sales teams for outbound calling and inbound qualification',
      icon: '📞'
    },
    {
      name: 'Digital Campaigns',
      desc: 'Paid social, paid search, SEO, content marketing, landing pages',
      icon: '💻'
    },
    {
      name: 'Social Selling',
      desc: 'LinkedIn outreach, Instagram DMs, Facebook groups, community building',
      icon: '📱'
    },
    {
      name: 'Direct Outreach',
      desc: 'Cold email sequences, SMS campaigns, direct mail',
      icon: '✉️'
    },
    {
      name: 'Partnership Networks',
      desc: 'Channel partnerships, affiliate programs, co-marketing deals',
      icon: '🤝'
    }
  ];

  const comparisonRows = [
    {
      label: 'Monthly retainer',
      traditional: '$10K–$50K locked in contracts',
      momentum: '$0. Only pay when customers arrive'
    },
    {
      label: 'Payment structure',
      traditional: 'Guaranteed, regardless of performance',
      momentum: 'Performance-based. We get paid per customer'
    },
    {
      label: 'What they measure',
      traditional: 'Activities (calls, emails, impressions)',
      momentum: 'Customers acquired across every channel'
    },
    {
      label: 'Accountability',
      traditional: 'None — retainers protect them',
      momentum: 'Complete — no results, no invoice'
    }
  ];

  const comparisonPanels = [
    {
      variant: 'traditional',
      title: 'Traditional Agency',
      badge: 'Retainer-First',
      lead: 'Fees guaranteed. Results optional.',
      highlights: [
        '$240K in retainers + media fees',
        '847 marketing “leads” handed to sales',
        '12 customers actually closed'
      ],
      result: 'You paid $20,000 per customer.'
    },
    {
      variant: 'momentum',
      title: 'Momentum Management',
      badge: 'Performance Partner',
      lead: 'We only earn when customers land.',
      highlights: [
        '$0 until pipeline converts',
        '847 customers delivered to your CRM',
        'CAC locked at $180 per customer'
      ],
      result: 'You profit $1.2M after delivery.'
    }
  ];

  const performanceStats = [
    {
      label: 'Customers Delivered',
      traditional: { value: '12', helper: 'hand-offs that closed' },
      momentum: { value: '847', helper: 'ready-to-bill customers' },
      traditionalPercent: 8,
      momentumPercent: 100
    },
    {
      label: 'Customer Acquisition Cost',
      traditional: { value: '$20K', helper: 'per customer' },
      momentum: { value: '$180', helper: 'pay-per-customer' },
      traditionalPercent: 100,
      momentumPercent: 12,
      inverse: true
    },
    {
      label: 'Profit Impact',
      traditional: { value: '-$216K', helper: 'after spend' },
      momentum: { value: '+$1.2M', helper: 'incremental profit' },
      traditionalPercent: 20,
      momentumPercent: 100
    }
  ];

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
          <div className="hero-gradient hero-gradient-one" aria-hidden="true" />
          <div className="hero-gradient hero-gradient-two" aria-hidden="true" />
          <div className="hero-noise" aria-hidden="true" />
          <div className="container hero-layout">
            <div className="hero-badge" data-animate style={withDelay(0)}>
              ✓ TELUS Authorized Partner · Quebec-native teams
            </div>
            <h1 data-animate style={withDelay(0.1)}>
              We Generated<br />
              <span className="hero-number">$40M</span>
              for TELUS<br />
              <span className="hero-punchline">across Quebec.</span>
            </h1>
            <p className="hero-subtitle" data-animate style={withDelay(0.2)}>
              <span className="inline-highlight">No fluff.</span> Just multi-channel sales pods that actually deliver
              <span className="inline-highlight">customers you can invoice</span> while you stay focused on the product.
            </p>
            <div className="hero-cta-group" data-animate style={withDelay(0.3)}>
              <button className="btn-large btn-primary" onClick={scrollToContact}>
                Let's Talk Growth →
              </button>
              <button className="btn-large btn-secondary" onClick={scrollToStory}>
                See How We Did It
              </button>
            </div>
            <div className="hero-insights">
              {heroInsights.map((insight, index) => (
                <div
                  className="hero-insight-card"
                  key={insight.label}
                  data-animate
                  style={withDelay(0.4 + index * 0.08)}
                >
                  <p className="hero-insight-label">{insight.label}</p>
                  <p className="hero-insight-value">{insight.value}</p>
                  <p className="hero-insight-helper">{insight.helper}</p>
                </div>
              ))}
            </div>
            <div className="hero-scroll-hint" data-animate style={withDelay(0.65)}>
              <span>Scroll to see the TELUS playbook</span>
              <span className="scroll-arrow" aria-hidden="true">↓</span>
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
              <div className="sales-stat-item" data-animate style={withDelay(0.05)}>
                <div className="sales-stat-number">$50M+</div>
                <div className="sales-stat-label">Revenue generated for partner brands</div>
              </div>
              <div className="sales-stat-item" data-animate style={withDelay(0.1)}>
                <div className="sales-stat-number">50+</div>
                <div className="sales-stat-label">Trained sales professionals across channels</div>
              </div>
              <div className="sales-stat-item" data-animate style={withDelay(0.15)}>
                <div className="sales-stat-number">3</div>
                <div className="sales-stat-label">Markets expanded in the last year</div>
              </div>
              <div className="sales-stat-item" data-animate style={withDelay(0.2)}>
                <div className="sales-stat-number">20,000+</div>
                <div className="sales-stat-label">Customers acquired through direct outreach</div>
              </div>
            </div>
          </div>
        </section>
        {/* Pain Points Section */}
        <section className="pain-points-section">
          <div className="container">
            <div className="pain-points-header">
              <h2 className="pain-points-title">68% of Companies Miss Their Revenue Targets</h2>
              <p className="pain-points-subtitle">
                Not because of bad products. Not because of weak demand. Because their customer acquisition is broken.
              </p>
              <p className="pain-points-question">Does this sound like you?</p>
            </div>

            <div className="pain-points-grid">
              <div className="pain-point-card" data-animate style={withDelay(0)}>
                <h3 className="pain-point-title">Revenue Stagnation</h3>
                <p className="pain-point-text">
                  Your growth is stuck at 15-20% when projections called for 50%+. You've tried new channels. Hired more reps. Increased ad spend. Nothing moves the needle. The pipeline stays flat.
                </p>
              </div>

              <div className="pain-point-card" data-animate style={withDelay(0.05)}>
                <h3 className="pain-point-title">Inconsistent Pipeline</h3>
                <p className="pain-point-text">
                  Q1 looked great. Q2 was a disaster. Q3 might recover. You can't forecast. Your acquisition system produces random results month to month.
                </p>
              </div>

              <div className="pain-point-card" data-animate style={withDelay(0.1)}>
                <h3 className="pain-point-title">High CAC, Shrinking Margins</h3>
                <p className="pain-point-text">
                  Customer acquisition cost climbed from $150 to $380 in 18 months. Customer lifetime value stayed flat. The math doesn't work anymore.
                </p>
              </div>

              <div className="pain-point-card" data-animate style={withDelay(0.15)}>
                <h3 className="pain-point-title">Market Expansion Failures</h3>
                <p className="pain-point-text">
                  You tried entering new regions. Hired local reps. Spent six figures on campaigns. Result: 23 customers and a lot of "learnings."
                </p>
              </div>

              <div className="pain-point-card" data-animate style={withDelay(0.2)}>
                <h3 className="pain-point-title">Disconnected Sales & Marketing</h3>
                <p className="pain-point-text">
                  Marketing generates leads. Sales says they're garbage. Sales complains about lead quality. Marketing says sales can't close. Meanwhile, nobody's acquiring actual customers.
                </p>
              </div>

              <div className="pain-point-card" data-animate style={withDelay(0.25)}>
                <h3 className="pain-point-title">Agency Disappointment</h3>
                <p className="pain-point-text">
                  The last agency promised results. They delivered a beautiful dashboard showing activity that never converted to revenue.
                </p>
              </div>
            </div>

            <p className="pain-points-closing">That's why we do things differently.</p>
          </div>
        </section>
        {/* Business Model Section */}
        <section className="business-model-section">
          <div className="container">
            <div className="business-model-content">
              <h2 className="business-model-title">We Sell. You Pay.</h2>
              <p className="business-model-intro">Here's our entire business model:</p>

              <div className="business-model-steps">
                <div className="business-step" data-animate style={withDelay(0)}>
                  <span className="step-number">1.</span>
                  <span className="step-text">We deploy acquisition teams across multiple channels</span>
                </div>
                <div className="business-step" data-animate style={withDelay(0.08)}>
                  <span className="step-number">2.</span>
                  <span className="step-text">We acquire customers for your business</span>
                </div>
                <div className="business-step" data-animate style={withDelay(0.16)}>
                  <span className="step-number">3.</span>
                  <span className="step-text">You pay based on customers delivered</span>
                </div>
              </div>

              <div className="business-model-guarantee">
                <p className="guarantee-text">
                  No monthly retainers. No upfront fees. No payment until you have results.
                </p>
              </div>

              <p className="business-model-closing">
                We've done this successfully for 5 years. We know our systems work. We'd rather get paid for performance than promises.
              </p>

              <button className="btn-large btn-primary" onClick={scrollToContact}>
                Let's Discuss Your Growth →
              </button>
            </div>
          </div>
        </section>

        {/* Omnichannel Section */}
        <section className="omnichannel-section">
          <div className="container">
            <h2 className="omnichannel-title">Six Channels. One Coordinated System.</h2>

            <div className="omnichannel-visual">
              <div className="orbit-ring">
                {channels.map((channel, index) => (
                  <div
                    key={channel.name}
                    className="channel-icon"
                    style={{ '--index': index } as CSSProperties}
                  >
                    <span aria-hidden="true">{channel.icon}</span>
                    <span className="sr-only">{channel.name}</span>
                  </div>
                ))}
                <div className="orbit-path"></div>
              </div>
              <div className="center-hub">
                <div className="hub-pulse"></div>
                <div className="hub-text">Your<br />Business</div>
              </div>
            </div>

            <div className="channels-grid">
              {channels.map((channel, index) => (
                <div
                  className="channel-item"
                  key={channel.name}
                  data-animate
                  style={withDelay(index * 0.07)}
                >
                  <h3 className="channel-name">{channel.name}</h3>
                  <p className="channel-desc">{channel.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section - Agency vs Momentum */}
        <section className="agency-comparison-section">
          <div className="container">
            <div className="comparison-heading">
              <p className="section-label">Outcome-based partnership</p>
              <h2 className="comparison-main-title">They Get Paid To Try. We Get Paid To Deliver.</h2>
              <div className="comparison-intro">
                <p>
                  Most agencies charge monthly retainers whether you get customers or not. Their incentive is keeping the contract,
                  not delivering results.
                </p>
                <p>
                  We only get paid when you get customers. Our incentive is acquiring as many customers as efficiently as possible.
                </p>
              </div>
            </div>

            <div className="comparison-panels">
              {comparisonPanels.map((panel, index) => (
                <article
                  className={`comparison-card ${panel.variant}-card`}
                  key={panel.title}
                  data-animate
                  style={withDelay(index * 0.1)}
                >
                  <header className={`card-header ${panel.variant}-header`}>
                    <span className="card-badge">{panel.badge}</span>
                    <h3>{panel.title}</h3>
                    <p className="card-lead">{panel.lead}</p>
                  </header>
                  <ul className="card-highlights">
                    {panel.highlights.map(highlight => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <div className={`result-box ${panel.variant}-result`}>
                    <p className="result-title">Result:</p>
                    <p className="result-highlight">{panel.result}</p>
                  </div>
                </article>
              ))}
            </div>


            <div className="comparison-table" role="table" aria-label="Traditional agency versus Momentum">
              <div className="comparison-table-head" role="rowgroup">
                <div className="table-cell label-cell" role="columnheader">Levers</div>
                <div className="table-cell traditional-cell" role="columnheader">Traditional Agency</div>
                <div className="table-cell momentum-cell" role="columnheader">Momentum</div>
              </div>
              <div role="rowgroup">
                {comparisonRows.map(row => (
                  <div className="comparison-table-row" role="row" key={row.label}>
                    <div className="table-cell label-cell" role="cell">{row.label}</div>
                    <div className="table-cell traditional-cell" role="cell">{row.traditional}</div>
                    <div className="table-cell momentum-cell" role="cell">{row.momentum}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="performance-metrics">
              {performanceStats.map((stat, index) => (
                <div
                  className={`metric-card${stat.inverse ? ' metric-card-inverse' : ''}`}
                  key={stat.label}
                  data-animate
                  style={withDelay(0.2 + index * 0.08)}
                >
                  <div className="metric-header">
                    <p className="metric-label">{stat.label}</p>
                  </div>
                  <div className="metric-values">
                    <div className="metric-value traditional">
                      <span>{stat.traditional.value}</span>
                      <small>{stat.traditional.helper}</small>
                    </div>
                    <div className="metric-value momentum">
                      <span>{stat.momentum.value}</span>
                      <small>{stat.momentum.helper}</small>
                    </div>
                  </div>
                  <div className="metric-bars">
                    <span
                      className="metric-bar traditional"
                      style={{ width: `${stat.traditionalPercent}%` }}
                    />
                    <span
                      className="metric-bar momentum"
                      style={{ width: `${stat.momentumPercent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="comparison-savings-callout" data-animate style={withDelay(0.45)}>
              <div className="savings-figure">
                <span className="savings-label">Average cash preserved</span>
                <strong>$220K+</strong>
                <span className="savings-helper">in the first 6 months by stopping retainers</span>
              </div>
              <ul className="savings-list">
                <li>Every dollar moves to channels that prove ROI in days, not quarters.</li>
                <li>We plug into your CRM, attribution, and billing so revenue shows up tied to owners.</li>
                <li>You keep the upside, because we only earn when you do.</li>
              </ul>
            </div>

            <button className="btn-large btn-primary" onClick={scrollToContact}>
              See How Much You Could Save →
            </button>
          </div>
        </section>
        {/* TELUS Case Study Section */}
        <section className="telus-case-study-section">
          <div className="container">
            <div className="case-study-badge" data-animate style={withDelay(0)}>
              Case Study
            </div>
            <h2 className="case-study-title" data-animate style={withDelay(0.1)}>
              $40M for TELUS in 5 Years
            </h2>

            <div className="case-study-content" data-animate style={withDelay(0.2)}>
              <p className="case-study-text">
                Over the past 5 years, TELUS partnered with Momentum Management to break into the Quebec market and scale customer acquisition. By deploying our expert sales team across in-person, phone, and social media channels, we helped TELUS establish a strong local presence and generate over $40 million in revenue.
              </p>
              <p className="case-study-text">
                This long-term collaboration continues to fuel consistent growth and retention in one of Canada's most competitive markets.
              </p>
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
              <div className="process-item" data-animate style={withDelay(0)}>
                <div className="process-header">
                  <div className="process-number">/ 01</div>
                </div>
                <h3>Assess Your Market</h3>
                <p className="process-text">
                  We map your competitive landscape, identify untapped opportunities, and pinpoint exactly which channels will drive the highest ROI for your specific market entry or expansion goals.
                </p>
              </div>

              <div className="process-item" data-animate style={withDelay(0.08)}>
                <div className="process-header">
                  <div className="process-number">/ 02</div>
                </div>
                <h3>Deploy Expert Teams</h3>
                <p className="process-text">
                  Our battle-tested sales professionals launch coordinated campaigns across in-person retail, outbound calling, and targeted social media—creating omnipresence in your target market.
                </p>
              </div>

              <div className="process-item" data-animate style={withDelay(0.16)}>
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
