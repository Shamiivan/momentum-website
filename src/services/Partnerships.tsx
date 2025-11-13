import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../App.css'

const Partnerships = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />

      <main className="contact-page">
        <section className="contact-hero">
          <div className="container-new">
            <h1 className="contact-page-title">Partnerships</h1>
            <p className="contact-page-subtitle" style={{
              fontSize: '2.5rem',
              fontWeight: '300',
              marginTop: '3rem',
              color: '#D4AF37'
            }}>
              Coming Soon
            </p>
            <p className="contact-page-subtitle" style={{ marginTop: '2rem' }}>
              Learn about our partnership opportunities and how we can help scale your customer acquisition.
            </p>
            <div style={{ marginTop: '3rem' }}>
              <Link to="/contact" className="btn-primary-new">
                Get In Touch
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Partnerships;
