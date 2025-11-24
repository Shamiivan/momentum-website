import { useNode } from '@craftjs/core';
import { useState } from 'react';
import { ColorPicker } from '../settings/ColorPicker';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface EditableFAQProps {
  title?: string;
  faqs?: FAQItem[];
  backgroundColor?: string;
}

export const EditableFAQ = ({
  title = 'Frequently Asked Questions',
  faqs = [
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
  ],
  backgroundColor = 'transparent',
}: EditableFAQProps) => {
  const {
    connectors: { connect, drag },
    selected,
  } = useNode((state) => ({
    selected: state.events.selected,
  }));

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
      style={{
        backgroundColor,
        padding: '4rem 2rem',
        border: selected ? '2px dashed #d4af37' : '2px dashed transparent',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: 'var(--color-primary-dark)',
            textAlign: 'center',
            marginBottom: '3rem',
          }}
        >
          {title}
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              style={{
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <button
                onClick={() => toggleAccordion(idx)}
                style={{
                  width: '100%',
                  padding: '1.5rem',
                  textAlign: 'left',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: activeIndex === idx ? '#f9fafb' : 'white',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: 'var(--color-primary-dark)',
                  transition: 'background-color 0.3s ease',
                }}
              >
                <span>{faq.question}</span>
                <span
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '300',
                    transition: 'transform 0.3s ease',
                    transform: activeIndex === idx ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}
                >
                  +
                </span>
              </button>
              <div
                style={{
                  maxHeight: activeIndex === idx ? '500px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease',
                }}
              >
                <div
                  style={{
                    padding: '1.5rem',
                    backgroundColor: '#f9fafb',
                    fontSize: '1rem',
                    color: '#6B7280',
                    lineHeight: '1.75',
                  }}
                >
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const EditableFAQSettings = () => {
  const {
    actions: { setProp },
    title,
    faqs,
    backgroundColor,
  } = useNode((node) => ({
    title: node.data.props.title,
    faqs: node.data.props.faqs,
    backgroundColor: node.data.props.backgroundColor,
  }));

  return (
    <div>
      <div className="editor-settings-section">
        <label className="editor-settings-label">Section Title</label>
        <input
          type="text"
          className="editor-settings-input"
          value={title}
          onChange={(e) => setProp((props: EditableFAQProps) => (props.title = e.target.value))}
        />
      </div>

      <ColorPicker
        label="Background Color"
        value={backgroundColor}
        onChange={(value) =>
          setProp((props: EditableFAQProps) => (props.backgroundColor = value))
        }
      />

      <div className="editor-settings-section">
        <label className="editor-settings-label">FAQ Items</label>
        {faqs.map((faq: FAQItem, idx: number) => (
          <div
            key={idx}
            style={{
              marginBottom: '1rem',
              padding: '1rem',
              border: '1px solid #e5e7eb',
              borderRadius: '4px',
            }}
          >
            <div style={{ marginBottom: '0.5rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#374151' }}>
                Question
              </label>
              <input
                type="text"
                className="editor-settings-input"
                value={faq.question}
                onChange={(e) =>
                  setProp((props: EditableFAQProps) => {
                    if (props.faqs) {
                      props.faqs[idx].question = e.target.value;
                    }
                  })
                }
              />
            </div>
            <div style={{ marginBottom: '0.5rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#374151' }}>
                Answer
              </label>
              <textarea
                className="editor-settings-textarea"
                value={faq.answer}
                onChange={(e) =>
                  setProp((props: EditableFAQProps) => {
                    if (props.faqs) {
                      props.faqs[idx].answer = e.target.value;
                    }
                  })
                }
                rows={3}
              />
            </div>
            <button
              onClick={() =>
                setProp((props: EditableFAQProps) => {
                  if (props.faqs) {
                    props.faqs.splice(idx, 1);
                  }
                })
              }
              style={{
                padding: '0.25rem 0.5rem',
                fontSize: '0.75rem',
                backgroundColor: '#ef4444',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Remove FAQ
            </button>
          </div>
        ))}
        <button
          onClick={() =>
            setProp((props: EditableFAQProps) => {
              if (props.faqs) {
                props.faqs.push({
                  question: 'New Question?',
                  answer: 'Answer goes here.',
                });
              }
            })
          }
          style={{
            padding: '0.5rem 1rem',
            fontSize: '0.875rem',
            backgroundColor: 'var(--color-accent-gold)',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            width: '100%',
          }}
        >
          Add FAQ
        </button>
      </div>
    </div>
  );
};

EditableFAQ.craft = {
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
    ],
    backgroundColor: 'transparent',
  },
  related: {
    settings: EditableFAQSettings,
  },
};
