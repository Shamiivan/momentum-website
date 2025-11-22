import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { usePageScroll } from '../hooks/usePageScroll'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import '../App.css'

const ExecutiveCoaching = () => {
  usePageScroll();
  useScrollAnimation();

  const philosophyPoints = [
    {
      title: 'Leadership Starts and Ends With You',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'You Work FOR the People',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Trust Them With the Future',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Believe in Everyone',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ];

  const coachingAreas = [
    {
      title: 'Earned Authority',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Decision-Making Speed',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Trust & Delegation',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Listening Down',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Strategic Thinking',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery Call',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      step: '02',
      title: '1-on-1 Sessions',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      step: '03',
      title: 'Strategic Planning',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      step: '04',
      title: 'Accountability & Support',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ];

  return (
    <>
      <Header />
      <main className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container-new">
            <p className="about-label" data-animate>EXECUTIVE COACHING</p>
            <h1 className="about-hero-title" data-animate>
              Leadership is Earned, Not Given
            </h1>
            <p className="about-hero-subtitle" data-animate>
              Strategic coaching for leaders who work FOR their people. Develop the mindset and strategy to scale.
            </p>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="about-story-section">
          <div className="container-new">
            <h2 className="about-section-title" data-animate>Our Leadership Philosophy</h2>
            <div className="about-values-grid mt-7">
              {philosophyPoints.map((point, idx) => (
                <div
                  key={point.title}
                  className="about-value-card"
                  data-animate
                  style={{ '--delay': `${0.1 + idx * 0.05}s` } as React.CSSProperties}
                >
                  <h3 className="about-value-title">{point.title}</h3>
                  <p className="about-value-description">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Energy of Leadership Section */}
        <section className="about-culture-section">
          <div className="container-new">
            <div className="about-culture-grid">
              <div className="about-culture-images" data-animate>
                <div className="culture-image-main">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80"
                    alt="Leadership energy"
                    className="culture-photo"
                  />
                </div>
              </div>
              <div className="about-culture-content">
                <h2 className="about-section-title" data-animate>Money Has Energy, Leadership Has Power</h2>
                <div className="about-culture-text" data-animate>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. The mindset shift from manager to leader.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Understanding the energy and feeling of resources.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Your energy affects the entire organization. Be the cheetah.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Cover Section */}
        <section className="about-mission-section">
          <div className="container-new">
            <h2 className="about-section-title centered" data-animate>
              Strategy & Execution
            </h2>
            <p className="about-mission-intro" data-animate>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Key coaching areas we focus on.
            </p>
            <div className="about-values-grid">
              {coachingAreas.map((area, idx) => (
                <div
                  key={area.title}
                  className="about-value-card"
                  data-animate
                  style={{ '--delay': `${0.1 + idx * 0.05}s` } as React.CSSProperties}
                >
                  <h3 className="about-value-title">{area.title}</h3>
                  <p className="about-value-description">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="about-story-section">
          <div className="container-new">
            <h2 className="about-section-title centered" data-animate>The Coaching Process</h2>
            <div className="coaching-process-grid">
              {processSteps.map((step, idx) => (
                <div
                  key={step.step}
                  className="process-step-card"
                  data-animate
                  style={{ '--delay': `${0.1 + idx * 0.1}s` } as React.CSSProperties}
                >
                  <div className="process-step-number">{step.step}</div>
                  <h3 className="process-step-title">{step.title}</h3>
                  <p className="process-step-description">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta-section">
          <div className="container-new">
            <div className="about-cta-content" data-animate>
              <h2 className="about-cta-title">Ready to Earn Your Leadership?</h2>
              <p className="about-cta-subtitle">
                Book a free discovery call to discuss your goals and see if we're the right fit.
              </p>
              <Link to="/contact" className="btn-primary-new btn-large">
                Book Discovery Call
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ExecutiveCoaching;
