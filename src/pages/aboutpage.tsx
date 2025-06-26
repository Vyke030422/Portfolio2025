import{ useState } from "react";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import styles from "./aboutpage.module.css";

export default function AboutPage() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const openLightbox = (src: string) => setLightboxImg(src);
  const closeLightbox = () => setLightboxImg(null);

  return (
    <>
      <header className={styles.Header}>
        <Navigation />
      </header>
      <main className={styles.AboutMain}>
        <section className={styles.HeaderSection}>
          <h1 className={styles.HeaderTitle}>Take a Step Into My Journey</h1>
          <p className={styles.HeaderSubtitle}>
            let me show you the skills and work I’ve developed so far.<br />
            Let’s explore how I can bring value to your team
          </p>
        </section>

        <section className={styles.AboutSection}>
          <div className={styles.AboutTextBlock}>
            <h2 className={styles.SectionHeading}>Who am I?</h2>
            <p className={styles.AboutDescription}>
              Hi, I'm <b>Kevin Kurt Intong</b>, a passionate IT graduate focused on healthcare and user-centered design. I love crafting simple, impactful digital experiences that solve real problems.
            </p>
          </div>
          <div className={styles.AboutImageBlock}>
            <div className={styles.ImagePlaceholder}>
              <img
                src="src/assets/images/Kevin.jpg"
                alt="Kevin Kurt Intong"
              />
            </div>
          </div>
        </section>

        <hr className={styles.SectionDivider} />

        <section className={styles.CertificatesSection}>
          <h2 className={styles.SectionHeading}>Certificates</h2>
          <div className={styles.CertificateRow}>
            <div>
              <div className={styles.CertificateTitle}>Google UX Design Professional Certificate</div>
              <div className={styles.CertificateSubtitle}>2024 – 2025</div>
            </div>
            <a className={styles.CertificateBtn} href="#" target="_blank" rel="noopener noreferrer">
              View my Certificate
            </a>
          </div>
          <div className={styles.CertificateRow}>
            <div>
              <div className={styles.CertificateTitle}>Google Developers Student Club Certificate</div>
              <div className={styles.CertificateSubtitle}>2023 – 2024</div>
            </div>
            <a className={styles.CertificateBtn} href="#" target="_blank" rel="noopener noreferrer">
              View my Certificate
            </a>
          </div>
        </section>

        <hr className={styles.SectionDivider} />

        <section className={styles.AwardsSection}>
          <h2 className={styles.SectionHeading}>Awards & Competitions</h2>
          <div className={styles.AwardRow}>
            <div
              className={styles.AwardImage}
              onClick={() => openLightbox("src/assets/images/TESDA.jpg")}
              style={{ cursor: "pointer" }}
              title="Click to view full image"
            >
              <img
                src="src/assets/images/TESDA.jpg"
                alt="TESDA Graphic Design Competition"
              />
            </div>
            <div className={styles.AwardContent}>
              <div className={styles.AwardTitle}>TESDA Graphic Design – Bronze Medalist</div>
              <div className={styles.AwardDesc}>
                Recognized for creative execution and strong visual impact under time pressure.
              </div>
            </div>
          </div>
          <div className={`${styles.AwardRow} ${styles.AwardRowReverse}`}>
            <div
              className={styles.AwardImage}
              onClick={() => openLightbox("src/assets/images/Techstars.jpg")}
              style={{ cursor: "pointer" }}
              title="Click to view full image"
            >
              <img
                src="src/assets/images/Techstars.jpg"
                alt="Davao TechStars Startup Competition"
              />
            </div>
            <div className={styles.AwardContent}>
              <div className={styles.AwardTitle}>Davao TechStars Startup Champion</div>
              <div className={styles.AwardDesc}>
                Led a winning pitch for a digital health app, recognized for clarity and innovation.
              </div>
            </div>
          </div>
        </section>

        {/* Lightbox Overlay */}
        {lightboxImg && (
          <div className={styles.LightboxOverlay} onClick={closeLightbox}>
            <img src={lightboxImg} alt="Award Fullscreen" className={styles.LightboxImg} />
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
