import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './PartnershipFlow.css';

gsap.registerPlugin(ScrollTrigger);

interface FlowStep {
  id: string;
  title: string;
  metric: string;
  color: string;
  delay: number;
  icon: string;
}

const PartnershipFlow = () => {
  const flowRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const connectorsRef = useRef<(HTMLDivElement | null)[]>([]);

  const steps: FlowStep[] = [
    {
      id: 'door-to-door',
      title: 'Door-to-Door',
      metric: '35% conversion',
      color: '#60A5FA',
      delay: 0,
      icon: 'door',
    },
    {
      id: 'cold-calling',
      title: 'Cold Calling',
      metric: '28% reach',
      color: '#818CF8',
      delay: 0.1,
      icon: 'phone',
    },
    {
      id: 'social-media',
      title: 'Social Media',
      metric: '42% engagement',
      color: '#A78BFA',
      delay: 0.2,
      icon: 'social',
    },
    {
      id: 'retail-presence',
      title: 'Retail Presence',
      metric: '18% walk-in',
      color: '#C084FC',
      delay: 0.3,
      icon: 'store',
    },
    {
      id: 'email-campaign',
      title: 'Email Campaigns',
      metric: '24% open rate',
      color: '#E879F9',
      delay: 0.4,
      icon: 'email',
    },
    {
      id: 'customer-acquired',
      title: 'Customer Acquired',
      metric: '65% conversion',
      color: '#4ADE80',
      delay: 0.5,
      icon: 'check',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(stepsRef.current, {
        opacity: 0,
        y: 30,
        scale: 0.9,
      });

      gsap.set(connectorsRef.current, {
        scaleY: 0,
        transformOrigin: 'top center',
      });

      // Create timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: flowRef.current,
          start: 'top 60%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });

      // Animate steps and connectors
      steps.forEach((step, index) => {
        // Animate step
        tl.to(
          stepsRef.current[index],
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: 'back.out(1.2)',
          },
          step.delay
        );

        // Animate connector after step (except for last step)
        if (index < steps.length - 1) {
          tl.to(
            connectorsRef.current[index],
            {
              scaleY: 1,
              duration: 0.3,
              ease: 'power2.out',
            },
            step.delay + 0.3
          );
        }
      });

      // Add floating animation
      stepsRef.current.forEach((step, index) => {
        if (step) {
          gsap.to(step, {
            y: '+=10',
            duration: 2 + index * 0.1,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.1,
          });
        }
      });
    }, flowRef);

    return () => ctx.revert();
  }, []);

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'door':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L4 7v13h16V7l-8-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="10" y="12" width="4" height="4" stroke="currentColor" strokeWidth="2"/>
          </svg>
        );
      case 'phone':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'social':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'store':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'email':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'check':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="partnership-flow" ref={flowRef}>
      <div className="flow-container">
        {/* Acquisition channels */}
        <div className="flow-channels">
          {steps.slice(0, 5).map((step, index) => (
            <div key={step.id} className="flow-item">
              <div
                className="flow-step"
                ref={(el) => (stepsRef.current[index] = el)}
                style={{ '--step-color': step.color } as React.CSSProperties}
              >
                <div className="flow-step-icon">
                  {getIcon(step.icon)}
                </div>
                <div className="flow-step-content">
                  <h3 className="flow-step-title">{step.title}</h3>
                  <p className="flow-step-metric">{step.metric}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Connector arrows */}
        <div className="flow-connector-group" ref={(el) => (connectorsRef.current[0] = el)}>
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="flow-arrow" width="16" height="24" viewBox="0 0 16 24" fill="none">
              <path
                d="M2 2l6 6 6-6"
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ))}
        </div>

        {/* Result */}
        <div className="flow-result">
          <div
            className="flow-step flow-step-result"
            ref={(el) => (stepsRef.current[5] = el)}
            style={{ '--step-color': steps[5].color } as React.CSSProperties}
          >
            <div className="flow-step-icon">
              {getIcon(steps[5].icon)}
            </div>
            <div className="flow-step-content">
              <h3 className="flow-step-title">{steps[5].title}</h3>
              <p className="flow-step-metric">{steps[5].metric}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipFlow;
