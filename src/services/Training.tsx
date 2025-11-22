import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../App.css'

const Training = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />

      <main className="contact-page">
        <section className="contact-hero">
          <div className="container-new">
            <h1 className="contact-page-title">Staff Training & Executive Coaching</h1>
            <p className="contact-page-subtitle mt-7" style={{
              fontSize: '2.5rem',
              fontWeight: '300',
              color: '#D4AF37'
            }}>
              Coming Soon
            </p>
            <p className="contact-page-subtitle mt-6">
              Explore our professional development programs designed to elevate your team's performance.
            </p>
            <div className="mt-7">
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

export default Training;
