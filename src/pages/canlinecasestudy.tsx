import React from "react";
import styles from "./canlinecasestudy.module.css";
import Footer from "../components/footer";
import Navigation from "../components/navigation";

// Helper components for clean structure
function Section({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className={styles.CaseStudySection}>
      <h2 className={styles.CaseStudySectionTitle}>{title}</h2>
      {subtitle && <div className={styles.CaseStudySectionSubtitle}>{subtitle}</div>}
      {children}
    </section>
  );
}

function ProcessStep({ number, label, icon }: { number: number; label: string; icon?: React.ReactNode }) {
  return (
    <div className={styles.CaseStudyProcessStep}>
      <div className={styles.CaseStudyProcessStepCircle}>
        {icon ? icon : number}
      </div>
      <div className={styles.CaseStudyProcessStepLabel}>{label}</div>
    </div>
  );
}

// User Flow Diagram Component
function UserFlowDiagram() {
  return (
    <div className={styles.UFTreeDiagram}>
      {/* Main vertical flow */}
      <div className={styles.UFColumn}>
        <div className={styles.UFBox + " " + styles.UFStart}>Login / Sign Up</div>
        <div className={styles.UFLineV}></div>
        <div className={styles.UFBox + " " + styles.UFDecision}>
          Who are you creating this account for?
          <div className={styles.UFNote}>[Myself as a patient / For someone else]</div>
        </div>
        <div className={styles.UFLineV}></div>
        <div className={styles.UFBox}>Personal Info Form</div>
        <div className={styles.UFLineV}></div>
        <div className={styles.UFBox + " " + styles.UFHome}>Homepage</div>
        {/* Horizontal branch connector */}
        <div className={styles.UFLineSplit}></div>
      </div>
      {/* Branches from Homepage */}
      <div className={styles.UFBranchesRow}>
        {/* Health Institutions */}
        <div className={styles.UFBranchCol}>
          <div className={styles.UFBox + " " + styles.UFCard}>Health Institutions</div>
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
        {/* Financial Support */}
        <div className={styles.UFBranchCol}>
          <div className={styles.UFBox + " " + styles.UFCard}>Financial Support</div>
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
        {/* Support Groups */}
        <div className={styles.UFBranchCol}>
          <div className={styles.UFBox + " " + styles.UFCard}>Support Groups</div>
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
        {/* Medical Specialists */}
        <div className={styles.UFBranchCol}>
          <div className={styles.UFBox + " " + styles.UFCard}>Medical Specialists</div>
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
      {/* Universal Features */}
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
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className={styles.CaseStudyContainer}>
        {/* Header */}
        <div className={styles.CaseStudyHeaderRow}>
          <div className={styles.CaseStudyHeaderInfo}>
            <div className={styles.CaseStudyYear}>2024</div>
            <div className={styles.CaseStudyTitle}>CancerLine Companion</div>
            <div className={styles.CaseStudySubtitle}>
              <span style={{ color: "#ff882e", fontWeight: 300 }}>Note: This project is covered by an NDA. Certain details and visuals have been adjusted or withheld to respect confidentiality.</span>
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
            <button className={styles.CaseStudyButton}>View Final Prototype</button>
          </div>
          <div className={styles.CaseStudyHeaderImage}>
            {/* Replace src with your actual image */}
            <img src="src/assets/images/Coverphoto.png" alt="CancerLine App Mockup" />
          </div>
        </div>

        {/* Problem */}
        <Section title="Problem">
          <div className={styles.CaseStudyText} style={{ maxWidth: 420 }}>
            Filipino cancer patients face critical challenges with information overload, lack of support, and fragmented care.<br /><br />
            Many struggle to find reliable resources and emotional guidance, especially when newly diagnosed.<br /><br />
            There’s a need for a digital companion that’s supportive, simple, and tailored to their journey.
          </div>
        </Section>

        {/* Goals & Objectives */}
        <Section title="Goals & Objectives">
          <ul className={styles.CaseStudyList} style={{ maxWidth: 420 }}>
            <li>Empower patients with focused, less cluttered, and supportive information.</li>
            <li>Reduce anxiety and confusion with better onboarding and navigation.</li>
            <li>Deliver a companion app with emotional support and practical tools.</li>
            <li>Design a visually calm, accessible, and uplifting experience.</li>
          </ul>
        </Section>

        {/* Research & Discovery */}
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

        {/* Design Process */}
        <Section title="Design Process">
          <div className={styles.CaseStudyProcess}>
            <ProcessStep number={1} label="Userflow" />
            <ProcessStep number={2} label="Wireframes" />
            <ProcessStep number={3} label="Prototype" />
            <ProcessStep number={4} label="Visual Design" />
            <ProcessStep number={5} label="Iterations" />
          </div>
        </Section>

        {/* User Flow */}
        <Section title="User Flow">
          <UserFlowDiagram />
        </Section>

        {/* Wireframes */}
        <Section title="Wireframes">
          <div className={styles.CaseStudyWireframeTitle}>
            Wireframe 1.0: The First Draft – Comprehensive but Overloaded
          </div>
          <img
            className={styles.CaseStudyImageFull}
            src="/images/works/wireframe1-placeholder.png"
            alt="Wireframe 1.0"
          />
          <div className={styles.CaseStudyWireframeTitle}>
            Wireframe 2.0 – Smarter, Simpler, and More Supportive
          </div>
          <img
            className={styles.CaseStudyImageFull}
            src="/images/works/wireframe2-placeholder.png"
            alt="Wireframe 2.0"
          />
        </Section>

        {/* Wireframe Comparison Table */}
        <Section title="Wireframe Comparison: Version 1.0 vs. Version 2.0">
          <table className={styles.CaseStudyTable}>
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Version 1.0</th>
                <th>Version 2.0</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Onboarding</td>
                <td>Dense info and steps</td>
                <td>Empathetic, simplified, less intimidating</td>
              </tr>
              <tr>
                <td>Navigation</td>
                <td>Overwhelming with information</td>
                <td>Clear, focused, easier using bottom nav</td>
              </tr>
              <tr>
                <td>Main Features</td>
                <td>Broad, not tailored to user journey</td>
                <td>Personalized, focused, and supportive for each stage</td>
              </tr>
              <tr>
                <td>Support Access</td>
                <td>No direct access to emotional support</td>
                <td>Integrated emotional support and reminders</td>
              </tr>
              <tr>
                <td>Visual Hierarchy</td>
                <td>Content dense, many multiple actions</td>
                <td>Content leaner, less clutter, more clarity</td>
              </tr>
            </tbody>
          </table>
        </Section>

        {/* Prototype */}
        <Section title="Prototype">
          <img
            className={styles.CaseStudyImageFull}
            src="/images/works/prototype-placeholder.png"
            alt="Prototype"
          />
        </Section>

        {/* User Flow Diagram */}
        <Section title="User Flow Diagram">
          <UserFlowDiagram />
        </Section>
      </main>
      <Footer />
    </>
  );
}