import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './PartnershipPipeline.css';

gsap.registerPlugin(ScrollTrigger);

const PartnershipPipeline = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate pipeline stages
      gsap.from('.pipeline-stage', {
        scrollTrigger: {
          trigger: '.partnership-pipeline',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.6,
        ease: 'power2.out',
      });

      // Animate funnel sections
      gsap.from('.funnel-section', {
        scrollTrigger: {
          trigger: '.pipeline-funnel',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        x: 30,
        stagger: 0.15,
        duration: 0.6,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="partnership-pipeline">
      <div className="container-new">
        <div className="pipeline-grid">
          {/* Left side - Process stages */}
          <div className="pipeline-stages">
            <h3 className="pipeline-section-title">We take care of the entire partnership journey</h3>

            <div className="pipeline-stage active">
              <div className="stage-header">
                <h4 className="stage-title">Discovery & Strategy</h4>
                <span className="stage-arrow">→</span>
              </div>
              <p className="stage-description">
                We understand your business, market positioning, and sales goals to create a customized multi-channel strategy.
              </p>
            </div>

            <div className="pipeline-stage">
              <div className="stage-header">
                <h4 className="stage-title">Execution & Training</h4>
                <span className="stage-arrow">→</span>
              </div>
              <p className="stage-description">
                Our team deploys proven methods across 6 channels while training your team on best practices and systems.
              </p>
            </div>

            <div className="pipeline-stage">
              <div className="stage-header">
                <h4 className="stage-title">Knowledge Transfer</h4>
                <span className="stage-arrow">→</span>
              </div>
              <p className="stage-description">
                Complete handoff of processes, playbooks, and systems so your team can execute independently.
              </p>
            </div>

            <h3 className="pipeline-section-title mt-7">Your part in the process</h3>

            <div className="pipeline-stage">
              <div className="stage-header">
                <h4 className="stage-title">Team Building</h4>
              </div>
              <p className="stage-description">
                Build and scale your internal sales team with the systems and processes we've implemented together.
              </p>
            </div>
          </div>

          {/* Right side - Results funnel */}
          <div className="pipeline-funnel">
            <div className="funnel-header">
              <p className="funnel-disclaimer">* Average partnership outcomes.</p>
              <p className="funnel-subdisclaimer">Results depend on market, product, and execution.</p>
            </div>

            <div className="funnel-sections">
              <div className="funnel-section funnel-leads">
                <div className="funnel-label">Market Coverage</div>
                <div className="funnel-content">
                  <h4 className="funnel-title">6 channel deployment</h4>
                  <p className="funnel-subtitle">across your target market</p>
                </div>
              </div>

              <div className="funnel-section funnel-mqls">
                <div className="funnel-label">Sales Development</div>
                <div className="funnel-content">
                  <h4 className="funnel-title">50-200+ qualified meetings</h4>
                  <p className="funnel-subtitle">with decision-makers monthly*</p>
                </div>
              </div>

              <div className="funnel-section funnel-sqls">
                <div className="funnel-label">Pipeline Growth</div>
                <div className="funnel-content">
                  <h4 className="funnel-title">$500K-$2M+ pipeline</h4>
                  <p className="funnel-subtitle">built in 90 days*</p>
                </div>
              </div>

              <div className="funnel-section funnel-opportunities">
                <div className="funnel-label">Team Independence</div>
                <div className="funnel-content">
                  <h4 className="funnel-title">Self-sufficient sales team</h4>
                  <p className="funnel-subtitle">with proven systems & playbooks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipPipeline;
