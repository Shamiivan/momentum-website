import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Header from './components/Header'
import Footer from './components/Footer'
import { usePageScroll } from './hooks/usePageScroll'
import { useScrollAnimation } from './hooks/useScrollAnimation'
import './App.css'

const About = () => {
  usePageScroll();
  useScrollAnimation();
  const { t } = useTranslation('about');

  const founders = (t('leadership.founders', { returnObjects: true }) as Array<{name: string; role: string; bio: string}>).map((founder, idx) => ({
    ...founder,
    image: idx === 0 ? 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80' : 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80',
    linkedin: '#'
  }));

  const values = t('mission.values', { returnObjects: true }) as Array<{title: string; description: string}>;

  return (
    <>
      <Header />

      <main className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container-new">
            <p className="about-label" data-animate>{t('hero.label')}</p>
            <h1 className="about-hero-title" data-animate>
              {t('hero.title')}
            </h1>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="about-story-section">
          <div className="container-new">
            <div className="about-story-grid">
              <div className="about-story-content">
                <h2 className="about-section-title" data-animate>{t('story.title')}</h2>
                <div className="about-story-text" data-animate>
                  <p>
                    {t('story.paragraph1')}
                  </p>
                  <p>
                    {t('story.paragraph2')}
                  </p>
                </div>
              </div>
              <div className="about-story-image" data-animate>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=900&fit=crop&q=80"
                  alt={t('story.imageAlt')}
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
                  alt={t('images.teamCollaboration')}
                  className="about-image"
                />
              </div>
              <div className="about-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop&q=80"
                  alt={t('images.professionalTeamMember')}
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
              {t('mission.title')}
            </h2>
            <p className="about-mission-intro" data-animate>
              {t('mission.intro')}
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
                <h2 className="about-section-title" data-animate>{t('culture.title')}</h2>
                <div className="about-culture-text" data-animate>
                  <p>
                    {t('culture.paragraph1')}
                  </p>
                  <p>
                    {t('culture.paragraph2')}
                  </p>
                  <p>
                    {t('culture.paragraph3')}
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
              {t('leadership.title')}
            </h2>
            <p className="about-leadership-intro" data-animate>
              {t('leadership.intro')}
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
              <h2 className="about-cta-title">{t('cta.title')}</h2>
              <p className="about-cta-subtitle">
                {t('cta.subtitle')}
              </p>
              <Link to="/contact" className="btn-primary-new btn-large">
                {t('cta.button')}
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
