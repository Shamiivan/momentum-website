import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../App.css'

const StaffTraining = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />

      <main className="contact-page">
        <section className="contact-hero">
          <div className="container-new">
            <h1 className="contact-page-title">Staff Training</h1>
            <p className="contact-page-subtitle" style={{
              fontSize: '2.5rem',
              fontWeight: '300',
              marginTop: '3rem',
              color: '#D4AF37'
            }}>
              Coming Soon
            </p>
            <p className="contact-page-subtitle" style={{ marginTop: '2rem' }}>
              Discover our professional training programs designed to elevate your team's sales performance.
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

export default StaffTraining;
