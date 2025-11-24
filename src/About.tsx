import { Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { usePageScroll } from './hooks/usePageScroll'
import { useScrollAnimation } from './hooks/useScrollAnimation'
import './App.css'

const About = () => {
  usePageScroll();
  useScrollAnimation();

  const founders = [
    {
      name: 'John Doe',
      role: 'Co-Founder & CEO',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Over 15 years of experience in multi-channel sales and business development. Led partnerships with Fortune 500 companies generating $40M+ in revenue.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80',
      linkedin: '#'
    },
    {
      name: 'Jane Smith',
      role: 'Co-Founder & COO',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Expert in Quebec market expansion and operational excellence. Built and trained sales teams of 500+ professionals across North America.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80',
      linkedin: '#'
    }
  ];

  const values = [
    {
      title: 'We Help, We do not Sell',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Obsessed with measurable outcomes, not vanity metrics. Performance-based model reflects our commitment. We only win when you win.'
    },
    {
      title: 'Hardwork',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Deep understanding of the North American market. Cultural fluency and proven track record across the region.'
    },
    {
      title: 'Energy',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Only paid when clients get customers. Aligned incentives, no retainer risk. True partnership, shared success model.'
    },
    {
      title: 'Meritocracy',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Unlike agencies specializing in one channel. 6 channels, integrated approach. We go where your customers are.'
    }
  ];

  return (
    <>
      <Header />

      <main className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container-new">
            <p className="about-label" data-animate>ABOUT US</p>
            <h1 className="about-hero-title" data-animate>
            The Power Behind The Pitch
            </h1>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="about-story-section">
          <div className="container-new">
            <div className="about-story-grid">
              <div className="about-story-content">
                <h2 className="about-section-title" data-animate>How It All Began</h2>
                <div className="about-story-text" data-animate>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Founded with a mission to bridge the gap between brands and customers.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. We saw a gap in the industry
                    that needed to be filled - true performance-based partnerships.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Today, 25+ companies served, $50M+ generated,
                    and 500+ professionals trained. We continue to grow by staying true to our core mission.
                  </p>
                </div>
              </div>
              <div className="about-story-image" data-animate>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=900&fit=crop&q=80"
                  alt="Business meeting"
                  className="about-feature-image"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Team Images Section */}
        <section className="about-images-section">
          <div className="container-new">
            <div className="about-images-grid" data-animate>
              <div className="about-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80"
                  alt="Team collaboration"
                  className="about-image"
                />
              </div>
              <div className="about-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop&q=80"
                  alt="Professional team member"
                  className="about-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="about-mission-section">
          <div className="container-new">
            <h2 className="about-section-title centered" data-animate>
              What Drives Us
            </h2>
            <p className="about-mission-intro" data-animate>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <div className="about-values-grid">
              {values.map((value, idx) => (
                <div
                  key={value.title}
                  className="about-value-card"
                  data-animate
                  style={{ '--delay': `${0.1 + idx * 0.05}s` } as React.CSSProperties}
                >
                  <h3 className="about-value-title">{value.title}</h3>
                  <p className="about-value-description">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* Team Culture Section */}
        <section className="about-culture-section">
          <div className="container-new">
            <div className="about-culture-grid">
              <div className="about-culture-images" data-animate>
                <div className="culture-image-main">
                  <img
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&q=80"
                    alt="Team celebration"
                    className="culture-photo"
                  />
                </div>
                <div className="culture-image-secondary">
                  <img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop&q=80"
                    alt="Team working together"
                    className="culture-photo"
                  />
                </div>
              </div>
              <div className="about-culture-content">
                <h2 className="about-section-title" data-animate>Mission Statement</h2>
                <div className="about-culture-text" data-animate>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="about-leadership-section">
          <div className="container-new">
            <h2 className="about-section-title centered" data-animate>
              Meet Our Founders
            </h2>
            <p className="about-leadership-intro" data-animate>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. The visionaries behind our success.
            </p>
            <div className="about-founders-grid">
              {founders.map((founder, idx) => (
                <div
                  key={founder.name}
                  className="founder-card"
                  data-animate
                  style={{ '--delay': `${0.1 + idx * 0.1}s` } as React.CSSProperties}
                >
                  <div className="founder-image-wrapper">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="founder-image"
                    />
                  </div>
                  <div className="founder-info">
                    <h3 className="founder-name">{founder.name}</h3>
                    <p className="founder-role">{founder.role}</p>
                    <p className="founder-bio">{founder.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Final CTA Section */}
        <section className="about-cta-section">
          <div className="container-new">
            <div className="about-cta-content" data-animate>
              <h2 className="about-cta-title">Let's Grow Together</h2>
              <p className="about-cta-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
              </p>
              <Link to="/contact" className="btn-primary-new btn-large">
                Schedule a Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </main >

      <Footer />
    </>
  );
};

export default About;
