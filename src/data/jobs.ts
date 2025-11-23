export interface Job {
  icon: string;
  title: string;
  slug: string;
  description: string;
  whatYouDo: string[];
  youllThrive: string[];
  whyJoin: string[];
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  compensation: string;
}

export const jobs: Job[] = [
  {
    icon: '🎓',
    title: 'Intern',
    slug: 'intern',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    whatYouDo: [
      'Shadow real deals and sales calls',
      'Learn outreach, qualification, and pipeline management',
      'Build prospect lists and support campaign execution',
      'Get mentored by experienced sales professionals'
    ],
    responsibilities: [
      'Assist with prospect research and list building',
      'Learn and practice multi-channel outreach techniques',
      'Shadow sales calls to observe real conversations',
      'Support campaign execution across email, LinkedIn, and phone',
      'Participate in training sessions and role-play exercises',
      'Track your learning progress and set development goals'
    ],
    youllThrive: [
      'You\'re a student or recent grad who wants real experience',
      'You\'re willing to be uncomfortable (growth happens there)',
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
      'Paid internship (we don\'t do free labor)',
      'Hands-on from day 1—you\'ll be on calls within your first week',
      'Clear path to full-time role if you perform',
      'Learn sales from a performance-based team, not a classroom'
    ],
    compensation: '$18-$22/hour depending on experience and availability. Potential full-time offer for high performers.'
  },
  {
    icon: '💼',
    title: 'Sales Associates',
    slug: 'sales-associates',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    whatYouDo: [
      'Manage a portfolio of client accounts',
      'Ensure client satisfaction and successful campaign delivery',
      'Identify upsell and expansion opportunities',
      'Coordinate with internal teams to deliver results'
    ],
    responsibilities: [
      'Own client relationships and serve as primary point of contact',
      'Monitor campaign performance and optimize for results',
      'Conduct regular check-ins and strategy sessions with clients',
      'Identify opportunities for account expansion and upsells',
      'Coordinate with sales, marketing, and operations teams',
      'Resolve issues quickly and maintain client satisfaction',
      'Track metrics and report on account health'
    ],
    youllThrive: [
      'You\'re relationship-focused and client-obsessed',
      'You can manage multiple accounts without dropping the ball',
      'You see opportunities where others see maintenance'
    ],
    requirements: [
      '2+ years of account management or client success experience',
      'Strong communication and relationship-building skills',
      'Ability to manage multiple priorities and deadlines',
      'Experience with CRM systems and reporting tools',
      'Problem-solving mindset and proactive approach',
      'Understanding of sales processes and client retention'
    ],
    niceToHave: [
      'Experience in agency or B2B services',
      'Track record of growing accounts and reducing churn',
      'Familiarity with e-commerce or partnership sales',
      'Experience managing enterprise-level clients'
    ],
    whyJoin: [
      'Own meaningful client relationships that drive impact',
      'Performance bonuses tied to account growth',
      'Work with major brands and interesting partnerships',
      'Clear path to Senior Account Manager or leadership'
    ],
    compensation: 'Base salary $55K-$75K + performance bonuses. Total compensation $70K-$95K+ based on portfolio performance.'
  },
  {
    icon: '🎯',
    title: 'Director',
    slug: 'director',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    whatYouDo: [
      'Lead strategic projects and business initiatives',
      'Manage and develop high-performing teams',
      'Drive revenue growth and operational efficiency',
      'Work directly with founders on company strategy'
    ],
    responsibilities: [
      'Own strategic projects from conception to execution',
      'Lead and develop team members across functions',
      'Set goals, track metrics, and drive accountability',
      'Identify growth opportunities and new revenue streams',
      'Build and optimize systems and processes',
      'Collaborate with leadership on company vision and strategy',
      'Represent the company in key partnerships and deals'
    ],
    youllThrive: [
      'You\'ve proven you can lead and deliver results',
      'You think strategically but execute tactically',
      'You develop people while driving performance'
    ],
    requirements: [
      '5+ years of relevant experience with progression into leadership',
      'Proven track record of managing teams and projects',
      'Strong strategic thinking and business acumen',
      'Excellent leadership and communication skills',
      'Data-driven decision-making approach',
      'Experience scaling operations or teams',
      'Ability to balance multiple priorities and stakeholders'
    ],
    niceToHave: [
      'Previous Director or VP-level experience',
      'Experience in fast-growing companies or startups',
      'Track record of building teams from scratch',
      'Deep expertise in sales, partnerships, or operations'
    ],
    whyJoin: [
      'High-impact role with real autonomy',
      'Revenue share and equity opportunities',
      'Direct partnership with founders',
      'Shape the future of a growing company'
    ],
    compensation: 'Base salary $90K-$130K + performance bonuses + revenue share. Total compensation $120K-$200K+ for high performers.'
  },
  {
    icon: '📋',
    title: 'Personal Assistant',
    slug: 'personal-assistant',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    whatYouDo: [
      'Manage executive calendars and schedule coordination',
      'Handle correspondence and communication',
      'Coordinate travel, meetings, and events',
      'Support special projects and operations tasks'
    ],
    responsibilities: [
      'Manage complex calendars and schedule meetings efficiently',
      'Handle email correspondence and prioritize communications',
      'Coordinate travel arrangements and logistics',
      'Prepare materials for meetings and presentations',
      'Manage expense reports and administrative tasks',
      'Support special projects as needed',
      'Maintain confidentiality and exercise discretion'
    ],
    youllThrive: [
      'You\'re highly organized and detail-oriented',
      'You anticipate needs before being asked',
      'You stay calm under pressure and adapt quickly'
    ],
    requirements: [
      '2+ years of executive assistant or related experience',
      'Exceptional organizational and time management skills',
      'Strong written and verbal communication',
      'Proficiency with Google Workspace, Slack, and productivity tools',
      'Discretion and ability to handle confidential information',
      'Proactive problem-solver with can-do attitude',
      'Flexibility to adjust to changing priorities'
    ],
    niceToHave: [
      'Experience supporting C-level executives',
      'Familiarity with project management tools',
      'Background in fast-paced startup environments',
      'Event planning or coordination experience'
    ],
    whyJoin: [
      'Work closely with leadership on high-impact initiatives',
      'Learn the inner workings of a growing business',
      'Opportunity for growth into operations or project management',
      'Dynamic role with variety and autonomy'
    ],
    compensation: 'Salary $45K-$60K depending on experience. Potential for bonuses based on company performance.'
  },
  {
    icon: '🤝',
    title: 'Sales Assistant',
    slug: 'sales-assistant',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    whatYouDo: [
      'Support sales team with administrative tasks',
      'Manage CRM data entry and pipeline updates',
      'Coordinate outreach campaigns and follow-ups',
      'Prepare reports and track key metrics'
    ],
    responsibilities: [
      'Maintain CRM hygiene and update lead information',
      'Schedule meetings and coordinate team calendars',
      'Prepare sales materials and presentations',
      'Track outreach campaigns and follow-up sequences',
      'Generate reports on sales activities and metrics',
      'Support onboarding of new sales team members',
      'Handle administrative tasks to free up sales reps'
    ],
    youllThrive: [
      'You\'re organized and detail-oriented',
      'You want to learn sales from the inside',
      'You take initiative and don\'t wait to be told what to do'
    ],
    requirements: [
      '1+ years of administrative or sales support experience',
      'Strong organizational and time management skills',
      'Proficiency with CRM systems (HubSpot, Salesforce, etc.)',
      'Excellent attention to detail',
      'Good communication skills (written and verbal)',
      'Comfortable with Google Workspace or Microsoft Office',
      'Self-motivated and proactive'
    ],
    niceToHave: [
      'Previous experience in sales environment',
      'Familiarity with sales automation tools',
      'Basic understanding of sales processes',
      'Experience with data analysis or reporting'
    ],
    whyJoin: [
      'Learn sales operations from experienced professionals',
      'Clear path to BDR or operations roles',
      'Exposure to real deals and sales strategies',
      'Supportive team environment with growth opportunities'
    ],
    compensation: 'Salary $40K-$50K depending on experience. Opportunities for advancement and bonuses.'
  },
  {
    icon: '📱',
    title: 'Marketing Specialists',
    slug: 'marketing-specialists',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    whatYouDo: [
      'Execute multi-channel marketing campaigns',
      'Create content for social media, email, and web',
      'Analyze campaign performance and optimize results',
      'Collaborate with sales team on lead generation'
    ],
    responsibilities: [
      'Plan and execute marketing campaigns across channels',
      'Create engaging content for social media, blog, and email',
      'Manage social media accounts and community engagement',
      'Develop marketing materials and brand assets',
      'Track and analyze campaign metrics and ROI',
      'Coordinate with sales team on lead nurturing',
      'Stay current on marketing trends and best practices'
    ],
    youllThrive: [
      'You\'re creative but data-driven',
      'You understand both brand building and lead generation',
      'You can juggle multiple projects and hit deadlines'
    ],
    requirements: [
      '2+ years of marketing experience',
      'Strong content creation skills (writing, design, or video)',
      'Experience with marketing automation and analytics tools',
      'Understanding of digital marketing channels',
      'Excellent project management and organization',
      'Creative thinking with analytical mindset',
      'Strong communication and collaboration skills'
    ],
    niceToHave: [
      'Experience with B2B or SaaS marketing',
      'Graphic design or video editing skills',
      'SEO and paid advertising experience',
      'Familiarity with marketing automation platforms',
      'Experience in fast-growing companies'
    ],
    whyJoin: [
      'Own campaigns from conception to execution',
      'Work across multiple interesting brands and partnerships',
      'Creative freedom with data-backed decision making',
      'Opportunity to shape marketing strategy'
    ],
    compensation: 'Salary $50K-$70K depending on experience. Performance bonuses based on campaign results.'
  }
];

// Helper function to get job by slug
export const getJobBySlug = (slug: string): Job | undefined => {
  return jobs.find(job => job.slug === slug);
};

// Export jobs as a record for backward compatibility
export const jobsRecord: Record<string, Omit<Job, 'slug'>> = jobs.reduce((acc, job) => {
  const { slug, ...jobData } = job;
  acc[slug] = jobData;
  return acc;
}, {} as Record<string, Omit<Job, 'slug'>>);
