import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { usePageScroll } from '../hooks/usePageScroll'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import '../App.css'

const StaffTraining = () => {
  usePageScroll();
  useScrollAnimation();

  return (
    <>
      <Header />
      <main className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container-new">
            <p className="about-label" data-animate>STAFF TRAINING</p>
            <h1 className="about-hero-title" data-animate>
              Sales Builds the Company
            </h1>
          </div>
        </section>

        {/* Shadow Method Section */}
        <section className="about-mission-section">
          <div className="container-new">
            <h2 className="about-section-title centered" data-animate>
             How we work 
            </h2>
            <div className="about-values-grid">
              <div className="about-value-card" data-animate>
                <h3 className="about-value-title">Lorem Ipsum</h3>
                <p className="about-value-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="about-value-card" data-animate>
                <h3 className="about-value-title">Lorem Ipsum</h3>
                <p className="about-value-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="about-value-card" data-animate>
                <h3 className="about-value-title">Lorem Ipsum</h3>
                <p className="about-value-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="about-value-card" data-animate>
                <h3 className="about-value-title">Lorem Ipsum</h3>
                <p className="about-value-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </section>
        {/* Core Philosophy Section */}
        <section className="about-story-section">
          <div className="container-new">
            <h2 className="about-section-title" data-animate>Customer Service IS Sales</h2>
            <div className="about-story-text" data-animate style={{ maxWidth: '800px' }}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </section>


        {/* Training Development Section */}
        <section className="about-story-section">
          <div className="container-new">
            <h2 className="about-section-title" data-animate>We Develop Your Training Material</h2>
            <div className="about-story-text" data-animate style={{ maxWidth: '800px' }}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </section>

        {/* What We Train Section */}
        <section className="about-mission-section">
          <div className="container-new">
            <h2 className="about-section-title centered" data-animate>
              Then We Train Your Team
            </h2>
            <div className="about-values-grid">
              <div className="about-value-card" data-animate>
                <h3 className="about-value-title">Lorem Ipsum</h3>
                <p className="about-value-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="about-value-card" data-animate>
                <h3 className="about-value-title">Lorem Ipsum</h3>
                <p className="about-value-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="about-value-card" data-animate>
                <h3 className="about-value-title">Lorem Ipsum</h3>
                <p className="about-value-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="about-value-card" data-animate>
                <h3 className="about-value-title">Lorem Ipsum</h3>
                <p className="about-value-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta-section">
          <div className="container-new">
            <div className="about-cta-content" data-animate>
              <h2 className="about-cta-title">Ready to Build Your Company?</h2>
              <Link to="/contact" className="btn-primary-new btn-large">
                Schedule Training Consultation
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
