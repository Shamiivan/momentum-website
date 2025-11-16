import { useParams, Link, Navigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { usePageScroll } from '../hooks/usePageScroll'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { getJobBySlug } from '../data/jobs'
import '../App.css'

const JobDetail = () => {
  const { jobSlug } = useParams<{ jobSlug: string }>();

  usePageScroll();
  useScrollAnimation();

  const job = jobSlug ? getJobBySlug(jobSlug) : undefined;

  if (!job) {
    return <Navigate to="/careers" replace />;
  }

  return (
    <>
      <Header />
      <main className="contact-page">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="container-new">
            <h1 className="contact-page-title" data-animate>
              {job.title}
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="about-story-section">
          <div className="container-new">
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.8',
                color: 'var(--color-text-muted)',
                marginBottom: '3rem'
              }} data-animate>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <p style={{
                fontSize: '1rem',
                lineHeight: '1.8',
                color: 'var(--color-text-muted)',
                marginBottom: '3rem'
              }} data-animate>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>

              <div style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                marginTop: '4rem'
              }} data-animate>
                <Link
                  to="/contact"
                  style={{
                    background: 'var(--color-primary-dark)',
                    color: 'var(--color-white)',
                    padding: '0.875rem 2rem',
                    borderRadius: '6px',
                    fontWeight: '600',
                    fontSize: '1rem',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '0.9';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                >
                  Apply Now
                </Link>
                <a
                  href="/careers#open-positions"
                  style={{
                    background: 'transparent',
                    color: 'var(--color-primary-dark)',
                    padding: '0.875rem 2rem',
                    borderRadius: '6px',
                    fontWeight: '600',
                    fontSize: '1rem',
                    textDecoration: 'none',
                    border: '1px solid #d1d5db',
                    transition: 'all 0.2s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#9ca3af';
                    e.currentTarget.style.background = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#d1d5db';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  View All Positions
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default JobDetail;
