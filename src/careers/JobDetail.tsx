import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../App.css'

const jobData: Record<string, {
  icon: string;
  title: string;
  whatYouDo: string[];
  youllThrive: string[];
  whyJoin: string[];
}> = {
  'bdr-business-development-representative': {
    icon: '🎯',
    title: 'BDR (Business Development Representative)',
    whatYouDo: [
      'Own the top of the funnel—find prospects, qualify leads, book meetings',
      'Learn cold calling, email outreach, LinkedIn prospecting across 6 channels',
      'Work with brands like Amazon, Shopify, TELUS (not just startups)',
      'Master the Listen-Agree-Sell framework that actually closes'
    ],
    youllThrive: [
      "You're coachable and hungry (we can teach the rest)",
      "Rejection doesn't break you",
      "You want to learn sales from people who've actually done it"
    ],
    whyJoin: [
      'Clear path to Account Executive in 12-18 months (most BDRs get promoted)',
      'Performance bonuses on top of base',
      'Learn multi-channel prospecting (most agencies only know one)',
      'Shadow $40M+ partnership deals'
    ]
  },
  'closer-account-executive': {
    icon: '💰',
    title: 'Closer (Account Executive)',
    whatYouDo: [
      'Take qualified meetings and turn them into revenue',
      'Run demos, handle objections, negotiate deals',
      'Close partnerships and customer acquisition contracts',
      'Manage your own pipeline and revenue targets'
    ],
    youllThrive: [
      "You've closed before and want bigger deals",
      "You're consultative, not pushy",
      'You can handle 6-figure contracts without freaking out'
    ],
    whyJoin: [
      'Uncapped commission (seriously—we mean it)',
      'We book the meetings, you close them (no cold calling)',
      'Multi-channel experience (phone, email, social, events)',
      'Work with established brands that actually have budgets'
    ]
  },
  'intern': {
    icon: '🚀',
    title: 'Intern',
    whatYouDo: [
      'Shadow real deals (not make coffee)',
      'Learn outreach, qualification, and pipeline management',
      'Build lists, send campaigns, book meetings',
      'Get mentored by BDRs and AEs who started where you are'
    ],
    youllThrive: [
      "You're a student or recent grad who wants real experience",
      "You're willing to be uncomfortable (growth happens there)",
      'You want mentorship, not just a resume line'
    ],
    whyJoin: [
      "Paid internship (we don't do free labor)",
      "Hands-on from day 1—you'll be on calls within your first week",
      'Clear path to BDR if you perform (we hire from within)',
      'Learn sales from a performance-based team, not a classroom'
    ]
  },
  'assistant-manager': {
    icon: '📊',
    title: 'Assistant Manager',
    whatYouDo: [
      'Coach and develop BDRs and interns',
      'Manage pipeline quality and team performance',
      'Run weekly training and call reviews',
      'Help scale our systems as we grow'
    ],
    youllThrive: [
      "You've been a top performer and want to lead",
      'You care about developing people, not just hitting numbers',
      'You can coach without micromanaging'
    ],
    whyJoin: [
      'Leadership track for high performers (not a dead-end middle management role)',
      'Revenue share opportunities',
      'Build systems that scale (not just manage people)',
      'Work directly with the founder on strategy'
    ]
  }
};

const JobDetail = () => {
  const { jobSlug } = useParams<{ jobSlug: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elementsToObserve = document.querySelectorAll('[data-animate]');
    elementsToObserve.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  if (!jobSlug || !jobData[jobSlug]) {
    return <Navigate to="/careers" replace />;
  }

  const job = jobData[jobSlug];

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
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: 'var(--color-text-muted)',
                marginBottom: '3rem'
              }} data-animate>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: 'var(--color-text-muted)',
                marginBottom: '3rem'
              }} data-animate>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }} data-animate>
                <Link to="/careers" className="btn-secondary-new">
                  ← Back to Careers
                </Link>
                <Link to="/contact" className="btn-secondary-new">
                  Apply for this position
                </Link>
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
