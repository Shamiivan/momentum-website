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
        <section className="hero-new">
          <div className="animated-grid"></div>
          <div className="hero-container">
            <p className="hero-label-new" data-animate>STAFF TRAINING</p>
            <h1 className="hero-title-large" data-animate>
              Sales Builds the Company
            </h1>
            <p className="hero-subtitle-new" data-animate>
              Comprehensive training programs that transform your team into high-performing sales professionals
            </p>
          </div>
        </section>

        {/* Shadow Method Section - WHITE BG */}
        <section className="service-overview-section">
          <div className="container-new">
            <h2 className="section-title-new" data-animate>
             How We Work
            </h2>
            <div className="about-values-grid">
              <div className="about-value-card" data-animate>
                <h3 className="about-value-title">Shadow & Learn</h3>
                <p className="about-value-description">Your team shadows our expert sales professionals to learn proven techniques in real-world scenarios.</p>
              </div>
              <div className="about-value-card" data-animate>
                <h3 className="about-value-title">Hands-On Practice</h3>
                <p className="about-value-description">Interactive role-play sessions and simulations to build confidence and refine skills.</p>
              </div>
              <div className="about-value-card" data-animate>
                <h3 className="about-value-title">Personalized Feedback</h3>
                <p className="about-value-description">Continuous coaching and performance reviews to ensure steady improvement.</p>
              </div>
              <div className="about-value-card" data-animate>
                <h3 className="about-value-title">Ongoing Support</h3>
                <p className="about-value-description">Post-training resources and check-ins to maintain momentum and reinforce learning.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Philosophy Section - GRAY BG */}
        <section className="about-story-section">
          <div className="container-new">
            <h2 className="section-title-new" data-animate>Customer Service IS Sales</h2>
            <div className="about-story-text" data-animate style={{ maxWidth: '800px' }}>
              <p>
                Every customer interaction is an opportunity to build trust, solve problems, and create lasting relationships. We train your team to view customer service not as a separate function, but as the foundation of successful sales.
              </p>
              <p>
                Our approach integrates empathy, active listening, and problem-solving into every touchpoint, turning support conversations into growth opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Training Development Section - WHITE BG */}
        <section className="service-overview-section">
          <div className="container-new">
            <h2 className="section-title-new" data-animate>We Develop Your Training Material</h2>
            <div className="about-story-text" data-animate style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p>
                No generic scripts or one-size-fits-all approaches. We create customized training materials tailored to your industry, products, and target audience.
              </p>
              <p>
                From sales playbooks to objection-handling guides, we develop practical resources your team can reference long after training ends.
              </p>
            </div>
          </div>
        </section>

        {/* What We Train Section - GRAY BG */}
        <section className="about-story-section">
          <div className="container-new">
            <h2 className="section-title-new centered" data-animate>
              Then We Train Your Team
            </h2>
            <div className="about-values-grid">
              <div className="about-value-card" data-animate>
                <h3 className="about-value-title">Prospecting & Lead Generation</h3>
                <p className="about-value-description">Identify and qualify high-value leads through strategic outreach and relationship building.</p>
              </div>
              <div className="about-value-card" data-animate>
                <h3 className="about-value-title">Consultative Selling</h3>
                <p className="about-value-description">Master needs-based selling to position your solution as the perfect fit for customer challenges.</p>
              </div>
              <div className="about-value-card" data-animate>
                <h3 className="about-value-title">Closing Techniques</h3>
                <p className="about-value-description">Overcome objections and confidently guide prospects to commitment without high-pressure tactics.</p>
              </div>
              <div className="about-value-card" data-animate>
                <h3 className="about-value-title">Relationship Management</h3>
                <p className="about-value-description">Build long-term customer loyalty through exceptional service and strategic account growth.</p>
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
