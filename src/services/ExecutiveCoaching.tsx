import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { usePageScroll } from '../hooks/usePageScroll'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import '../App.css'

const ExecutiveCoaching = () => {
  usePageScroll();
  useScrollAnimation();

  return (
    <>
      <Header />
      <main className="contact-page">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="container-new">
            <h1 className="contact-page-title" data-animate>
              Leadership is Earned, Not Given
            </h1>
            <p className="contact-page-subtitle" data-animate style={{ marginTop: '2rem' }}>
              Strategic coaching for leaders who work FOR their people. Develop the mindset and strategy to scale.
            </p>
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
