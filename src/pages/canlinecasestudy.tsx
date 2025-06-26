import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./canlinecasestudy.module.css";
import Footer from "../components/footer";
import Navigation from "../components/navigation";

function Section({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className={styles.CaseStudySection}>
      <h2 className={styles.CaseStudySectionTitle}>{title}</h2>
      {subtitle && <div className={styles.CaseStudySectionSubtitle}>{subtitle}</div>}
      {children}
    </section>
  );
}

function ProcessStep({ number, label, icon, onClick }: { number: number; label: string; icon?: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      className={styles.CaseStudyProcessStep}
      onClick={onClick}
      type="button"
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
        outline: "none"
      }}
      tabIndex={0}
    >
      <div className={styles.CaseStudyProcessStepCircle}>
        {icon ? icon : number}
      </div>
      <div className={styles.CaseStudyProcessStepLabel}>{label}</div>
    </button>
  );
}

function UserFlowDiagram() {
  return (
    <div className={styles.UFTreeDiagram}>
      <div className={styles.UFColumn}>
        <div className={`${styles.UFBox} ${styles.UFStart}`}>Login / Sign Up</div>
        <div className={styles.UFLineV}></div>
        <div className={`${styles.UFBox} ${styles.UFDecision}`}>
          Who are you creating this account for?
          <div className={styles.UFNote}>[Myself as a patient / For someone else]</div>
        </div>
        <div className={styles.UFLineV}></div>
        <div className={styles.UFBox}>Personal Info Form</div>
        <div className={styles.UFLineV}></div>
        <div className={`${styles.UFBox} ${styles.UFHome}`}>Homepage</div>
        <div className={styles.UFLineSplit}></div>
      </div>
      <div className={styles.UFBranchesRow}>
        <div className={styles.UFBranchCol}>
          <div className={`${styles.UFBox} ${styles.UFCard}`}>Health Institutions</div>
          <div className={styles.UFLineV}></div>
          <div className={styles.UFBox}>List of hospitals/clinics</div>
          <div className={styles.UFLineV}></div>
          <div className={styles.UFBox}>
            Hospital Detail Screen
            <div className={styles.UFNote}>
              Google Maps location<br />
              Services offered<br />
              Financial aids accepted<br />
              Contact info
            </div>
          </div>
        </div>
        <div className={styles.UFBranchCol}>
          <div className={`${styles.UFBox} ${styles.UFCard}`}>Financial Support</div>
          <div className={styles.UFLineV}></div>
          <div className={styles.UFBox}>Financial Aid List</div>
          <div className={styles.UFLineV}></div>
          <div className={styles.UFBox}>
            Aid Detail Screen
            <div className={styles.UFNote}>
              Step-by-step requirements<br />
              Online form available?<br />
              Physical presence required?<br />
              Translated language checklist
            </div>
          </div>
        </div>
        <div className={styles.UFBranchCol}>
          <div className={`${styles.UFBox} ${styles.UFCard}`}>Support Groups</div>
          <div className={styles.UFLineV}></div>
          <div className={styles.UFBox}>List of support groups/orgs</div>
          <div className={styles.UFLineV}></div>
          <div className={styles.UFBox}>
            Group Detail
            <div className={styles.UFNote}>
              Description<br />
              Join links<br />
              Who it's for
            </div>
          </div>
        </div>
        <div className={styles.UFBranchCol}>
          <div className={`${styles.UFBox} ${styles.UFCard}`}>Medical Specialists</div>
          <div className={styles.UFLineV}></div>
          <div className={styles.UFBox}>List of doctors/specialists</div>
          <div className={styles.UFLineV}></div>
          <div className={styles.UFBox}>
            Doctor Detail Screen
            <div className={styles.UFNote}>
              Name, specialty<br />
              Affiliated hospital<br />
              Contact/schedule
            </div>
          </div>
        </div>
      </div>
      <div className={styles.UFUniversal}>
        <div className={styles.UFUniversalBox}>
          <b>Universal Features</b>
          <ul>
            <li>Bottom nav: Home, Profile, Saved, Settings</li>
            <li>Settings: Change app language (English, Tagalog, Bisaya)</li>
            <li>Back buttons always visible</li>
            <li>Prioritize minimal taps</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function CanlineCaseStudy() {
  const userflowRef = useRef<HTMLDivElement>(null);
  const wireframesRef = useRef<HTMLDivElement>(null);
  const prototypeRef = useRef<HTMLDivElement>(null);
  const visualDesignRef = useRef<HTMLDivElement>(null);
  const iterationsRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const [showBubbleNav, setShowBubbleNav] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleScrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      const y = ref.current.getBoundingClientRect().top + window.scrollY - 56;
      window.scrollTo({ top: y, behavior: "smooth" });
      setShowBubbleNav(false);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <>
      <header className={styles.Header}>
        <Navigation />
      </header>
      <main className={styles.CaseStudyContainer}>
        <div className={styles.CaseStudyHeaderRow}>
          <div className={styles.CaseStudyHeaderInfo}>
            <div className={styles.CaseStudyYear}>2024</div>
            <div className={styles.CaseStudyTitle}>CancerLine Companion</div>
            <div className={styles.CaseStudySubtitle}>
              <span style={{ color: "#ff882e", fontWeight: 300 }}>
                Note: This project is covered by an NDA. Certain details and visuals have been adjusted or withheld to respect confidentiality.
              </span>
            </div>
            <div className={styles.CaseStudyMeta}>
              <b>Role:</b> Product Designer, UI/UX, Branding
              <br />
              <b>Project Type:</b> Health Companion App
              <br />
              <b>Tools:</b> Figma 
              <br />
              <b>Timeline:</b> 4 weeks
            </div>
            <a
              className={styles.CaseStudyButton}
              href="https://www.figma.com/proto/j7ZmiPhCVAN8ytBYtJT1OX/Project-CLC-Case-Study?page-id=17%3A104&node-id=70-4227&p=f&viewport=968%2C-1311%2C0.15&t=sZCLjN1PfnijnwJk-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=39%3A1569"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Final Prototype
            </a>
          </div>
          <div className={styles.CaseStudyHeaderImage}>
            <img src="src/assets/images/Coverphoto.png" alt="CancerLine App Mockup" />
          </div>
        </div>

        <Section title="Problem">
          <div className={styles.CaseStudyText} style={{ maxWidth: 420 }}>
            Filipino cancer patients face critical challenges with information overload, lack of support, and fragmented care.<br /><br />
            Many struggle to find reliable resources and emotional guidance, especially when newly diagnosed.<br /><br />
            There’s a need for a digital companion that’s supportive, simple, and tailored to their journey.
          </div>
        </Section>

        <Section title="Goals & Objectives">
          <ul className={styles.CaseStudyList} style={{ maxWidth: 420 }}>
            <li>Empower patients with focused, less cluttered, and supportive information.</li>
            <li>Reduce anxiety and confusion with better onboarding and navigation.</li>
            <li>Deliver a companion app with emotional support and practical tools.</li>
            <li>Design a visually calm, accessible, and uplifting experience.</li>
          </ul>
        </Section>

        <Section title="Research & Discovery">
          <div className={styles.CaseStudySectionSubtitle}>Key Findings</div>
          <ul className={styles.CaseStudyList}>
            <li>Patients are often overwhelmed by medical jargon & information.</li>
            <li>Emotional support is as important as practical guidance.</li>
            <li>Simple, supportive UI helps reduce anxiety and builds trust.</li>
          </ul>
          <div className={styles.CaseStudySectionSubtitle}>User Quotes</div>
          <div className={styles.CaseStudyText}>
            “I wish there was an app that could help me, not just with information, but with encouragement and reminders
            that I’m not alone.”
          </div>
        </Section>

        <div className={styles.DesignProcessBubble}>
          <button
            className={styles.BubbleFab}
            aria-label="Open Design Process Navigation"
            onClick={() => setShowBubbleNav(v => !v)}
          >
            <svg width="22" height="22" fill="none" stroke="#F97F31" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 22 22">
              <rect x="3" y="3" width="5" height="5" rx="1.5"/>
              <rect x="14" y="3" width="5" height="5" rx="1.5"/>
              <rect x="3" y="14" width="5" height="5" rx="1.5"/>
              <rect x="14" y="14" width="5" height="5" rx="1.5"/>
            </svg>
          </button>
          {showBubbleNav && (
            <div className={styles.BubbleNav}>
              <ProcessStep number={1} label="Userflow" onClick={() => handleScrollTo(userflowRef)} />
              <ProcessStep number={2} label="Wireframes" onClick={() => handleScrollTo(wireframesRef)} />
              <ProcessStep number={3} label="Prototype" onClick={() => handleScrollTo(prototypeRef)} />
              <ProcessStep number={4} label="Visual Design" onClick={() => handleScrollTo(visualDesignRef)} />
              <ProcessStep number={5} label="Iterations" onClick={() => handleScrollTo(iterationsRef)} />
            </div>
          )}
        </div>

        <div ref={userflowRef}>
          <Section title="User Flow">
            <UserFlowDiagram />
          </Section>
        </div>
        <div ref={wireframesRef}>
          <Section title="Wireframes">
            <div className={styles.CaseStudyWireframeTitle}>
              Wireframe 1.0: The First Draft – Comprehensive but Overloaded
            </div>
            <img
              className={styles.CaseStudyImageFull}
              src="src/assets/images/Wireframe1.png"
              alt="Wireframe 1.0"
            />
            <div className={styles.CaseStudyWireframeTitle}>
              Wireframe 2.0 – Smarter, Simpler, and More Supportive
            </div>
            <img
              className={styles.CaseStudyImageFull}
              src="src/assets/images/LofiWireframe2.png"
              alt="Wireframe 2.0"
            />
          </Section>
        </div>
        <div ref={prototypeRef}>
          <Section title="Prototype">
            <img
              className={styles.CaseStudyImageFull}
              src="src/assets/images/Prototype.png"
              alt="Prototype"
            />
          </Section>
        </div>
        <div ref={visualDesignRef}>
          <Section title="Visual Design">
            <img
              className={styles.CaseStudyImageFull}
              src="src/assets/images/DesignSystem.png"
              alt="Prototype"
            />
          </Section>
        </div>
        <div ref={iterationsRef}>
          <Section title="Iterations">
            <div className={styles.IterationsList}>
              <div className={styles.IterationItem}>
                <span className={styles.IterationIcon} aria-hidden>🧭</span>
                <div>
                  <b>Navigation Too Complicated:</b>
                  <div className={styles.IterationFeedback}>
                    Users said <span className={styles.IterationQuote}>"Too many clicks."</span>
                  </div>
                  <div className={styles.IterationSolution}>
                    <span className={styles.IterationArrow}>→</span> Reduced steps from homepage to aid results and added a <span className={styles.IterationHighlight}>Support Quick Start</span> button.
                  </div>
                </div>
              </div>
              <div className={styles.IterationItem}>
                <span className={styles.IterationIcon} aria-hidden>📄</span>
                <div>
                  <b>Overwhelming Requirements:</b>
                  <div className={styles.IterationFeedback}>
                    Feedback showed confusion about financial aid steps.
                  </div>
                  <div className={styles.IterationSolution}>
                    <span className={styles.IterationArrow}>→</span> Introduced step-by-step visual guides with <span className={styles.IterationHighlight}>bilingual support</span>.
                  </div>
                </div>
              </div>
              <div className={styles.IterationItem}>
                <span className={styles.IterationIcon} aria-hidden>🔖</span>
                <div>
                  <b>Too Much Text:</b>
                  <div className={styles.IterationFeedback}>
                    Patients disliked reading long descriptions.
                  </div>
                  <div className={styles.IterationSolution}>
                    <span className={styles.IterationArrow}>→</span> Used <span className={styles.IterationHighlight}>icon-based summaries</span> and <span className={styles.IterationHighlight}>tag filters</span> for faster scanning.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.IterationNote}>
              These refinements are implemented in the current prototype and will be further validated during upcoming testing.
            </div>
          </Section>
        </div>

        {/* Showcase more projects */}
        <div className={styles.MoreProjectsSection}>
          <h3 className={styles.MoreProjectsTitle}>More Projects</h3>
          <div className={styles.MoreProjectsGrid}>
            {/* Project 1 */}
            <a
              href="https://www.figma.com/proto/MDrZtXMUuArd9rGhfpQlpp/Project-IB-Design?page-id=0%3A1&node-id=1-4&viewport=279%2C308%2C0.4&t=k42wnQxMltYl5XIU-1&scaling=min-zoom&content-scaling=fixed"
              className={styles.MoreProjectCard}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <img src="src/assets/images/IslandBoi.png" alt="Island Boi" />
              <div className={styles.MoreProjectInfo}>
                <div className={styles.MoreProjectName}>Island Boi</div>
                <div className={styles.MoreProjectRole}>UI/UX Web Designer</div>
                <div className={styles.MoreProjectDesc}>
                  A tropical resort website focused on seamless booking and immersive travel experiences.
                </div>
                <div className={styles.MoreProjectBtn}>
                  View Prototype
                </div>
              </div>
            </a>
            {/* Project 2 */}
            <div
              className={styles.MoreProjectCard}
              style={{ cursor: "pointer" }}
              onClick={() => setShowModal(true)}
              tabIndex={0}
              role="button"
              onKeyPress={e => {
                if (e.key === "Enter" || e.key === " ") setShowModal(true);
              }}
            >
              <img src="src/assets/images/MindSpace.png" alt="MindSpace" />
              <div className={styles.MoreProjectInfo}>
                <div className={styles.MoreProjectName}>MindSpace</div>
                <div className={styles.MoreProjectRole}>UI/UX Designer</div>
                <div className={styles.MoreProjectDesc}>
                  A mental wellness app designed for mindfulness and productivity.
                </div>
              </div>
            </div>
          </div>
        </div>

        {showModal && (
  <div
    style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      background: "rgba(0,0,0,0.25)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000
    }}
    onClick={() => setShowModal(false)}
  >
    <div
      style={{
        background: "#fff",
        borderRadius: "14px",
        padding: "2rem 2.5rem",
        boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
        minWidth: "280px",
        textAlign: "center",
        position: "relative"
      }}
      onClick={e => e.stopPropagation()}
    >
      <h2 style={{ color: "#984a3d", marginBottom: "1rem" }}>Prototype Not Yet Available</h2>
      <p style={{ color: "#b88b7a", marginBottom: "1.5rem" }}>
        The MindSpace prototype is not yet available.<br />Please check back soon!
      </p>
      <button
        style={{
          background: "#ff882e",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          padding: "0.6rem 1.4rem",
          fontWeight: 600,
          cursor: "pointer"
        }}
        onClick={() => setShowModal(false)}
      >
        Close
      </button>
    </div>
  </div>
)}

      </main>
      <Footer />
    </>
  );
}