// Home page template - serialized Craft.js structure
// This provides a full-page template with all Home sections pre-populated

export const getHomeTemplate = (): string => {
  const template = {
    ROOT: {
      type: { resolvedName: 'EditableContainer' },
      isCanvas: true,
      props: {
        background: 'transparent',
        padding: '0',
      },
      displayName: 'EditableContainer',
      custom: {},
      hidden: false,
      nodes: ['hero', 'stats', 'services', 'caseStudy', 'faq', 'cta'],
      linkedNodes: {},
    },
    hero: {
      type: { resolvedName: 'EditableHero' },
      isCanvas: false,
      props: {
        title: '$65 Million Generated For National Brands',
        subtitle: 'We bridge the gap between you and your customers.',
        backgroundImage: '',
        ctaText: 'Schedule a Free Consultation',
        ctaLink: '/contact',
        secondaryCtaText: 'See How We Do It',
        secondaryCtaLink: '/services',
      },
      displayName: 'EditableHero',
      custom: {},
      parent: 'ROOT',
      hidden: false,
      nodes: [],
      linkedNodes: {},
    },
    stats: {
      type: { resolvedName: 'EditableStatsGrid' },
      isCanvas: false,
      props: {
        stats: [
          {
            number: '$65M',
            label: 'Revenue Generated',
            helper: 'for partner brands',
          },
          {
            number: '1000',
            label: 'Trained Professionals',
            helper: 'across multiple channels',
          },
          {
            number: '3',
            label: 'Markets',
            helper: 'expanded in last year',
          },
          {
            number: '40K',
            label: 'Customers',
            helper: 'acquired through outreach',
          },
        ],
        columns: 4,
        backgroundColor: 'transparent',
      },
      displayName: 'EditableStatsGrid',
      custom: {},
      parent: 'ROOT',
      hidden: false,
      nodes: [],
      linkedNodes: {},
    },
    services: {
      type: { resolvedName: 'EditableServicesSection' },
      isCanvas: false,
      props: {
        sectionTitle: 'Everyone Loves Buying. Everybody Hates Being Sold.',
        sectionDescription: 'You focus on your product. We focus on acquiring customers for it.',
        services: [
          {
            title: 'Partnerships',
            valueOffering: 'Forge Strategic Alliances',
            description:
              'We build and manage high-performing sales channels for your brand, connecting you with new customers and driving revenue growth.',
            ctaText: 'Explore Our Partnership Model',
            ctaLink: '/services/partnerships',
          },
          {
            title: 'Staff/Sales Training',
            valueOffering: 'Empower Your Team',
            description:
              'We provide comprehensive training programs that equip your sales team with the skills and knowledge they need to excel.',
            ctaText: 'See Training in Action',
            ctaLink: '/services/staff-training',
          },
          {
            title: 'Executive Coaching',
            valueOffering: 'Elevate Your Leadership',
            description:
              'Our executive coaching services are designed to help leaders unlock their full potential.',
            ctaText: 'View Coaching Programs',
            ctaLink: '/services/executive-coaching',
          },
        ],
        backgroundColor: '#f9fafb',
      },
      displayName: 'EditableServicesSection',
      custom: {},
      parent: 'ROOT',
      hidden: false,
      nodes: [],
      linkedNodes: {},
    },
    caseStudy: {
      type: { resolvedName: 'EditableCaseStudy' },
      isCanvas: false,
      props: {
        title: '$57.3M for TELUS in 4 Years',
        description:
          'Over the past 5 years, we helped TELUS break into the Quebec market and generate over $57.3 million in revenue by deploying expert sales teams across in-person, phone, and social media channels.',
        image: '/growth-chart.svg',
        buttonText: 'Read Full Case Study',
        buttonLink: '/case-studies',
        backgroundColor: 'transparent',
      },
      displayName: 'EditableCaseStudy',
      custom: {},
      parent: 'ROOT',
      hidden: false,
      nodes: [],
      linkedNodes: {},
    },
    faq: {
      type: { resolvedName: 'EditableFAQ' },
      isCanvas: false,
      props: {
        title: 'Frequently Asked Questions',
        faqs: [
          {
            question: 'How does payment actually work?',
            answer:
              'We get paid based on customers delivered. For B2C with monthly recurring revenue, payment is per active subscription. For B2B contract-based sales, payment is per closed deal. No monthly retainers, no upfront costs—only results.',
          },
          {
            question: 'What industries do you work with?',
            answer:
              'We specialize in B2B companies with complex sales cycles, particularly those expanding into Quebec or scaling multi-channel acquisition. Telecommunications, SaaS, financial services, and professional services are our sweet spots.',
          },
          {
            question: 'How quickly can we get started?',
            answer:
              'Our streamlined onboarding gets you up and running in 30 days—compared to the 11+ months it takes to build an in-house team. Your dedicated account manager handles everything from strategy to team deployment.',
          },
          {
            question: 'What makes you different from traditional agencies?',
            answer:
              "Three things: (1) Deep Quebec market expertise you can't build overnight, (2) Multi-channel mastery—not just one tactic, and (3) A proven $40M track record with TELUS. We don't just generate leads; we build sustainable growth engines.",
          },
          {
            question: 'Do you require long-term contracts?',
            answer:
              'No. We work on performance terms with flexible engagement models. Because we only get paid when you get customers, our incentives are aligned. Most clients stay because the results speak for themselves.',
          },
          {
            question: 'How do you measure success?',
            answer:
              'Customers acquired, customer acquisition cost (CAC), and revenue generated. We integrate with your CRM and tracking systems to provide full transparency. Every customer is tracked, attributed, and tied to our delivery.',
          },
        ],
        backgroundColor: 'transparent',
      },
      displayName: 'EditableFAQ',
      custom: {},
      parent: 'ROOT',
      hidden: false,
      nodes: [],
      linkedNodes: {},
    },
    cta: {
      type: { resolvedName: 'EditableCTA' },
      isCanvas: false,
      props: {
        title: "Let's Talk",
        subtitle: 'Get in touch to discuss how we can help grow your business.',
        buttonText: 'Contact Us',
        buttonLink: '/contact',
        backgroundColor: 'var(--color-primary-dark)',
        textColor: 'white',
      },
      displayName: 'EditableCTA',
      custom: {},
      parent: 'ROOT',
      hidden: false,
      nodes: [],
      linkedNodes: {},
    },
  };

  return JSON.stringify(template);
};
