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
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  compensation: string;
}> = {
  'bdr-business-development-representative': {
    icon: '🎯',
    title: 'BDR (Business Development Representative)',
    description: 'As a BDR at Momentum, you\'ll be the engine of our sales pipeline. This isn\'t about grinding through cold calls—it\'s about mastering multi-channel outreach, building genuine relationships, and becoming a prospecting expert who opens doors to major brands.',
    whatYouDo: [
      'Own the top of the funnel—find prospects, qualify leads, book meetings',
      'Learn cold calling, email outreach, LinkedIn prospecting across 6 channels',
      'Work with brands like Amazon, Shopify, TELUS (not just startups)',
      'Master the Listen-Agree-Sell framework that actually closes'
    ],
    responsibilities: [
      'Research and identify ideal prospects across multiple industries',
      'Execute multi-channel outreach campaigns (phone, email, LinkedIn, events)',
      'Qualify leads and book qualified meetings for Account Executives',
      'Maintain accurate pipeline data and activity metrics in CRM',
      'Collaborate with AEs to refine messaging and improve conversion rates',
      'Participate in weekly training sessions and call reviews',
      'Hit monthly targets for qualified meetings booked'
    ],
    youllThrive: [
      "You're coachable and hungry (we can teach the rest)",
      "Rejection doesn't break you",
      "You want to learn sales from people who've actually done it"
    ],
    requirements: [
      'Strong communication skills (written and verbal)',
      'Resilience and ability to handle rejection positively',
      'Willingness to learn and take constructive feedback',
      'Self-motivated with strong work ethic',
      'Basic understanding of B2B sales (or strong desire to learn)',
      'Reliable internet connection and quiet workspace for calls'
    ],
    niceToHave: [
      '6+ months of sales or customer-facing experience',
      'Familiarity with CRM systems (HubSpot, Salesforce, etc.)',
      'Previous cold calling or outbound prospecting experience',
      'Knowledge of e-commerce, SaaS, or partnership sales'
    ],
    whyJoin: [
      'Clear path to Account Executive in 12-18 months (most BDRs get promoted)',
      'Performance bonuses on top of base',
      'Learn multi-channel prospecting (most agencies only know one)',
      'Shadow $40M+ partnership deals'
    ],
    compensation: 'Competitive base salary + performance bonuses. Total compensation ranges from $45K-$65K in your first year based on performance.'
  },
  'closer-account-executive': {
    icon: '💰',
    title: 'Closer (Account Executive)',
    description: 'As an Account Executive at Momentum, you\'ll close high-value deals with major brands. We handle the prospecting—you focus on what you do best: running consultative sales cycles, building relationships, and turning opportunities into revenue.',
    whatYouDo: [
      'Take qualified meetings and turn them into revenue',
      'Run demos, handle objections, negotiate deals',
      'Close partnerships and customer acquisition contracts',
      'Manage your own pipeline and revenue targets'
    ],
    responsibilities: [
      'Run discovery calls and demos with qualified prospects',
      'Develop customized proposals based on client needs',
      'Negotiate contracts and close 6-figure deals',
      'Manage sales cycles from first call to signed contract',
      'Build long-term relationships with key decision-makers',
      'Collaborate with delivery team to ensure smooth client onboarding',
      'Consistently hit or exceed monthly/quarterly revenue targets'
    ],
    youllThrive: [
      "You've closed before and want bigger deals",
      "You're consultative, not pushy",
      'You can handle 6-figure contracts without freaking out'
    ],
    requirements: [
      '2+ years of B2B sales experience with proven track record',
      'Experience closing deals $50K+ in value',
      'Strong presentation and negotiation skills',
      'Ability to manage complex sales cycles (30-90 days)',
      'Excellent time management and pipeline organization',
      'Consultative selling approach (solution-oriented, not pushy)'
    ],
    niceToHave: [
      'Experience in agency, partnerships, or customer acquisition sales',
      'Familiarity with e-commerce or retail brands',
      'Track record of exceeding quota consistently',
      'Experience with enterprise-level sales'
    ],
    whyJoin: [
      'Uncapped commission (seriously—we mean it)',
      'We book the meetings, you close them (no cold calling)',
      'Multi-channel experience (phone, email, social, events)',
      'Work with established brands that actually have budgets'
    ],
    compensation: 'Base salary $60K-$80K + uncapped commission. Top performers earn $120K-$180K+ annually.'
  },
  'intern': {
    icon: '🚀',
    title: 'Intern',
    description: 'Our internship is designed for students and recent grads who want real sales experience, not busy work. You\'ll shadow actual deals, learn from top performers, and get hands-on training that actually prepares you for a sales career.',
    whatYouDo: [
      'Shadow real deals (not make coffee)',
      'Learn outreach, qualification, and pipeline management',
      'Build lists, send campaigns, book meetings',
      'Get mentored by BDRs and AEs who started where you are'
    ],
    responsibilities: [
      'Assist with prospect research and list building',
      'Learn and practice multi-channel outreach techniques',
      'Shadow BDR and AE calls to observe real sales conversations',
      'Support campaign execution across email, LinkedIn, and phone',
      'Participate in training sessions and role-play exercises',
      'Contribute to team meetings with fresh ideas and observations',
      'Track your learning progress and set development goals'
    ],
    youllThrive: [
      "You're a student or recent grad who wants real experience",
      "You're willing to be uncomfortable (growth happens there)",
      'You want mentorship, not just a resume line'
    ],
    requirements: [
      'Currently enrolled in college or recent graduate (within 1 year)',
      'Strong interest in sales, business development, or marketing',
      'Excellent communication skills and professional demeanor',
      'Willingness to learn and receive constructive feedback',
      'Able to commit 20-40 hours per week (flexible schedule)',
      'Self-starter who takes initiative'
    ],
    niceToHave: [
      'Any customer service or sales experience',
      'Involvement in campus organizations or leadership roles',
      'Familiarity with LinkedIn, email tools, or CRM platforms',
      'Interest in startups, tech, or e-commerce'
    ],
    whyJoin: [
      "Paid internship (we don't do free labor)",
      "Hands-on from day 1—you'll be on calls within your first week",
      'Clear path to BDR if you perform (we hire from within)',
      'Learn sales from a performance-based team, not a classroom'
    ],
    compensation: '$18-$22/hour depending on experience and availability. Potential full-time BDR offer for high performers.'
  },
  'assistant-manager': {
    icon: '📊',
    title: 'Assistant Manager',
    description: 'This role is for proven sales performers ready to level up into leadership. You\'ll coach our BDR team, optimize processes, and help scale our systems—all while staying close to revenue and maintaining your own performance edge.',
    whatYouDo: [
      'Coach and develop BDRs and interns',
      'Manage pipeline quality and team performance',
      'Run weekly training and call reviews',
      'Help scale our systems as we grow'
    ],
    responsibilities: [
      'Provide daily coaching and mentorship to BDR team (3-6 reps)',
      'Conduct weekly 1-on-1s and live call reviews',
      'Monitor pipeline quality and ensure accurate CRM hygiene',
      'Analyze team performance metrics and identify improvement areas',
      'Develop and deliver training on prospecting techniques',
      'Collaborate with leadership on hiring, onboarding, and strategy',
      'Maintain your own pipeline and quota to stay sharp'
    ],
    youllThrive: [
      "You've been a top performer and want to lead",
      'You care about developing people, not just hitting numbers',
      'You can coach without micromanaging'
    ],
    requirements: [
      '2+ years of successful BDR or sales experience',
      'Proven track record of exceeding quota consistently',
      'Natural coaching ability and passion for developing others',
      'Strong analytical skills and data-driven mindset',
      'Excellent communication and feedback delivery',
      'Leadership experience (formal or informal)',
      'Ability to balance coaching with personal performance'
    ],
    niceToHave: [
      'Previous sales management or team lead experience',
      'Experience building or improving sales processes',
      'Familiarity with sales enablement tools and methodologies',
      'Track record of promoting from within organizations'
    ],
    whyJoin: [
      'Leadership track for high performers (not a dead-end middle management role)',
      'Revenue share opportunities',
      'Build systems that scale (not just manage people)',
      'Work directly with the founder on strategy'
    ],
    compensation: 'Base salary $70K-$90K + performance bonuses + revenue share. Total comp $100K-$140K+ for successful managers.'
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
