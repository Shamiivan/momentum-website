// About page template - serialized Craft.js structure
// This provides a full About page template with team and values sections

export const getAboutTemplate = (): string => {
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
      nodes: ['hero', 'values', 'team', 'cta'],
      linkedNodes: {},
    },
    hero: {
      type: { resolvedName: 'EditableHero' },
      isCanvas: false,
      props: {
        title: 'The Power Behind The Pitch',
        subtitle: 'Building bridges between brands and customers since [year].',
        backgroundImage: '',
        ctaText: 'Join Our Team',
        ctaLink: '/careers',
        secondaryCtaText: 'Our Story',
        secondaryCtaLink: '#story',
      },
      displayName: 'EditableHero',
      custom: {},
      parent: 'ROOT',
      hidden: false,
      nodes: [],
      linkedNodes: {},
    },
    values: {
      type: { resolvedName: 'EditableValuesGrid' },
      isCanvas: false,
      props: {
        title: 'What Drives Us',
        subtitle: 'Our core values that guide everything we do.',
        values: [
          {
            title: 'We Help, We do not Sell',
            description:
              'Obsessed with measurable outcomes, not vanity metrics. Performance-based model reflects our commitment. We only win when you win.',
          },
          {
            title: 'Hardwork',
            description:
              'Deep understanding of the North American market. Cultural fluency and proven track record across the region.',
          },
          {
            title: 'Energy',
            description:
              'Only paid when clients get customers. Aligned incentives, no retainer risk. True partnership, shared success model.',
          },
          {
            title: 'Meritocracy',
            description:
              'Unlike agencies specializing in one channel. 6 channels, integrated approach. We go where your customers are.',
          },
        ],
        columns: 2,
        backgroundColor: 'transparent',
      },
      displayName: 'EditableValuesGrid',
      custom: {},
      parent: 'ROOT',
      hidden: false,
      nodes: [],
      linkedNodes: {},
    },
    team: {
      type: { resolvedName: 'EditableTeamGrid' },
      isCanvas: false,
      props: {
        title: 'Meet Our Founders',
        subtitle: 'The visionaries behind our success.',
        members: [
          {
            name: 'John Doe',
            role: 'Co-Founder & CEO',
            bio: 'Over 15 years of experience in multi-channel sales and business development. Led partnerships with Fortune 500 companies generating $40M+ in revenue.',
            image:
              'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80',
          },
          {
            name: 'Jane Smith',
            role: 'Co-Founder & COO',
            bio: 'Expert in Quebec market expansion and operational excellence. Built and trained sales teams of 500+ professionals across North America.',
            image:
              'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80',
          },
        ],
        backgroundColor: '#f9fafb',
      },
      displayName: 'EditableTeamGrid',
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
        title: "Let's Grow Together",
        subtitle: 'Ready to take your business to the next level? Get in touch today.',
        buttonText: 'Schedule a Free Consultation',
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
