import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../App.css'

const StaffTraining = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elementsToObserve = document.querySelectorAll('[data-animate]');
    elementsToObserve.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />

      <main className="contact-page">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="container-new">
            <h1 className="contact-page-title" data-animate>
              Train Your Team to Sell Like We Do
            </h1>
            <p className="contact-page-subtitle" data-animate style={{ marginTop: '2rem' }}>
              Shadow-based training that transforms customer service into revenue generators
            </p>
            <div style={{
              fontSize: '3rem',
              fontWeight: '700',
              color: 'var(--color-accent-gold)',
              marginTop: '2rem'
            }} data-animate>
              500+ Professionals Trained
            </div>
            <div style={{ marginTop: '3rem' }} data-animate>
              <Link to="/contact" className="btn-primary-new">
                Request Training Info
              </Link>
            </div>
          </div>
        </section>

        {/* Who Needs This Section */}
        <section className="about-mission-section">
          <div className="container-new">
            <h2 className="about-section-title centered" data-animate>
              Who Needs This Most
            </h2>
            <div className="about-values-grid">
              {[
                {
                  title: 'Customer Service Teams',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Customer service teams need this the most. Turn service interactions into revenue opportunities with upselling and cross-selling skills.'
                },
                {
                  title: 'Sales Teams Needing Upskilling',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. New reps need proven methodology, existing teams plateau without fresh techniques and multi-channel skills.'
                },
                {
                  title: 'Organizations Scaling Rapidly',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hiring fast requires quick onboarding with consistency across growing teams and documented processes.'
                },
                {
                  title: 'Companies Entering New Markets',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. New channels or geographies require local expertise and proven market-specific techniques.'
                }
              ].map((item, idx) => (
                <div
                  key={item.title}
                  className="about-value-card"
                  data-animate
                  style={{ '--delay': `${0.1 + idx * 0.1}s` } as React.CSSProperties}
                >
                  <h3 className="about-value-title">{item.title}</h3>
                  <p className="about-value-description">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Methodology Section */}
        <section className="about-story-section">
          <div className="container-new">
            <h2 className="about-section-title centered" data-animate>
              Shadow & Learn Methodology
            </h2>
            <p className="about-mission-intro" data-animate style={{ marginBottom: '4rem' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Learn by doing, not by listening.
            </p>

            <div className="about-values-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              {[
                {
                  step: '01',
                  title: 'Come Shadow Us',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Your team observes our top performers in action with real prospects and real conversations in field-based learning.'
                },
                {
                  step: '02',
                  title: 'Hands-On Training',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Workshop sessions break down techniques and psychology with role-play practice scenarios and expert Q&A.'
                },
                {
                  step: '03',
                  title: 'Coached Execution',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Your team executes with prospects while we observe and provide real-time coaching with immediate feedback.'
                },
                {
                  step: '04',
                  title: 'Independent & Supported',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Your team operates independently with documented playbooks, resources, and follow-up coaching sessions.'
                }
              ].map((item, idx) => (
                <div
                  key={item.step}
                  className="about-value-card"
                  data-animate
                  style={{ '--delay': `${0.1 + idx * 0.1}s` } as React.CSSProperties}
                >
                  <div style={{
                    fontSize: '3rem',
                    fontWeight: '700',
                    color: 'var(--color-accent-gold)',
                    opacity: 0.3,
                    marginBottom: '1rem'
                  }}>
                    {item.step}
                  </div>
                  <h3 className="about-value-title">{item.title}</h3>
                  <p className="about-value-description">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Train On Section */}
        <section className="about-mission-section">
          <div className="container-new">
            <h2 className="about-section-title centered" data-animate>
              What We Train On
            </h2>

            <div className="about-values-grid">
              {[
                {
                  title: 'Multi-Channel Outreach Techniques',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Door-to-door engagement, cold calling, retail selling, digital and social selling, email and SMS outreach, partnership strategies.'
                },
                {
                  title: 'Core Sales Skills',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prospecting, objection handling, closing techniques, relationship building, active listening, "Listen, Agree, We Sell" approach.'
                },
                {
                  title: 'Customer Service → Sales Conversion',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Identifying upsell opportunities, value-based selling, cross-selling strategies, turning support into revenue.'
                },
                {
                  title: 'Systems & Tools',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. CRM usage and best practices, sales tracking and metrics, process documentation, performance analysis.'
                }
              ].map((item, idx) => (
                <div
                  key={item.title}
                  className="about-value-card"
                  data-animate
                  style={{ '--delay': `${0.1 + idx * 0.1}s` } as React.CSSProperties}
                >
                  <h3 className="about-value-title">{item.title}</h3>
                  <p className="about-value-description">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Formats Section */}
        <section className="about-story-section">
          <div className="container-new">
            <h2 className="about-section-title centered" data-animate>
              Training Formats
            </h2>
            <p className="about-mission-intro" data-animate style={{ marginBottom: '4rem' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Flexible options for different needs.
            </p>

            <div className="about-values-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              {[
                {
                  title: 'On-Site Shadow Training',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Your team comes to us and shadows our reps in the field. Most immersive option, 1-2 weeks duration.'
                },
                {
                  title: 'On-Location Training',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. We come to you and train in your market/territory. Customized to your context, flexible duration.'
                },
                {
                  title: 'Hybrid Programs',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Combination of on-site shadowing + on-location practice. Best of both worlds, most common format.'
                }
              ].map((item, idx) => (
                <div
                  key={item.title}
                  className="about-value-card"
                  data-animate
                  style={{ '--delay': `${0.1 + idx * 0.1}s` } as React.CSSProperties}
                >
                  <h3 className="about-value-title">{item.title}</h3>
                  <p className="about-value-description">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expected Outcomes Section */}
        <section className="about-mission-section">
          <div className="container-new">
            <h2 className="about-section-title centered" data-animate>
              Expected Outcomes
            </h2>

            <div className="about-values-grid">
              {[
                {
                  title: 'Performance Improvements',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conversion rate increases, average deal size growth, customer lifetime value improvement, faster ramp time for new reps.'
                },
                {
                  title: 'Team Confidence',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Reduced turnover, higher morale and motivation, consistent performance across team, empowered decision-making.'
                },
                {
                  title: 'Revenue Impact',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Direct revenue attribution, cost per acquisition improvement, sales cycle reduction, predictable pipeline growth.'
                },
                {
                  title: 'Long-Term Capability',
                  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Self-sufficient team, documented processes, train-the-trainer capability, continuous improvement culture.'
                }
              ].map((item, idx) => (
                <div
                  key={item.title}
                  className="about-value-card"
                  data-animate
                  style={{ '--delay': `${0.1 + idx * 0.1}s` } as React.CSSProperties}
                >
                  <h3 className="about-value-title">{item.title}</h3>
                  <p className="about-value-description">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta-section">
          <div className="container-new">
            <div className="about-cta-content" data-animate>
              <h2 className="about-cta-title">Ready to Transform Your Team?</h2>
              <p className="about-cta-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Schedule a free training consultation.
              </p>
              <Link to="/contact" className="btn-primary-new btn-large">
                Request Training Info
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default StaffTraining;
