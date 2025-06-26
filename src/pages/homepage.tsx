import React, { useEffect, useState } from "react";
import CardImage from "../components/cardimage";
import Navigation from "../components/navigation";
import style from "./homepage.module.css";
import { FacebookIcon, LinkedinIcon, InstagramIcon } from "lucide-react";
import Footer from "../components/footer";
import { Link, useLocation } from "react-router-dom";

export default function HomePage() {
  const [designerRole, setDesignerRole] = useState("UX Designer");
  const [fade, setFade] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setDesignerRole((prev) =>
          prev === "UX Designer" ? "Visual Designer" : "UX Designer"
        );
        setFade(true); // Fade in new text
      }, 400); // Duration matches CSS fade-out
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (location.hash === "#my-works") {
      const el = document.getElementById("my-works");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <header className={style.Header}>
        <Navigation />
      </header>
      <main>
        <section className={style.Main} id="home">
          <div className={style.Main_Section_Titles}>
            <h1 className={style.Intro1}>Hi! I’m Kevin</h1>
            <h1
              className={`${style.Intro2} ${fade ? style.FadeIn : style.FadeOut}`}
            >
              {designerRole}
            </h1>
            <p className={style.Tagline}>
              In every design, I aim to explore, the beauty of less, where less is more.
            </p>
            <div className={style.Socials}>
              <a href="#Instagram" aria-label="Instagram" className={style.SocialLink}>
                <InstagramIcon />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61572670653715" aria-label="Facebook" className={style.SocialLink}>
                <FacebookIcon />
              </a>
              <a href="https://www.linkedin.com/in/kevin-intong-ab424b323/" aria-label="LinkedIn" className={style.SocialLink}>
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </section>
        <section className={style.MyWorks} id="my-works">
          <div className={style.MyWorks_Section}>
            <h1 className={style.Works_Title}>My Works</h1>
            <p className={style.Works_Tagline}>
              read through my case studies, have a look at final designs and try out prototypes I’ve built.
            </p>
            <div className={style.Works_Cards}>
              {/* Project 1 */}
              <div className={style.Works_CardRow}>
                <CardImage
                  image="src/assets/images/CancerLine.png"
                  imageAlt="CancerLine Companion"
                  badge="Health Care Mobile UX"
                />
                <div className={style.Works_ProjectDetails}>
                  <span className={style.ProjectNumber}>01</span>
                  <h2 className={style.ProjectTitle}>CancerLine Companion</h2>
                  <div className={style.ProjectRole}>UI/UX Designer, Branding</div>
                  <div className={style.ProjectDescription}>
                    A mobile companion app that helps Filipino cancer patients and companions on their treatment journey.
                  </div>
                  <Link to="/cancerline-casestudy" className={style.ReadCaseStudyBtn}>
                    Read Case Study
                  </Link>
                </div>
              </div>
              {/* Project 2 */}
              <div className={style.Works_CardRow}>
                <CardImage
                  image="src/assets/images/IslandBoi.png"
                  imageAlt="Island Boi"
                  badge="Travel & Hospitality Website UX"
                />
                <div className={style.Works_ProjectDetails}>
                  <span className={style.ProjectNumber}>02</span>
                  <h2 className={style.ProjectTitle}>Island Boi</h2>
                  <div className={style.ProjectRole}>UI/UX Web Designer</div>
                  <div className={style.ProjectDescription}>
                    A website for a tropical resort, focused on seamless booking and immersive travel experiences.
                  </div>
                 
                  <a
                    href="https://www.figma.com/proto/MDrZtXMUuArd9rGhfpQlpp/Project-IB-Design?page-id=0%3A1&node-id=1-4&viewport=279%2C308%2C0.4&t=k42wnQxMltYl5XIU-1&scaling=min-zoom&content-scaling=fixed"
                    className={style.ReadCaseStudyBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginTop: "0.5rem" ,textDecoration: "none"}}
                  >
                    View Prototype
                  </a>
                </div>
              </div>
               {/* Project 3 */}
              <div className={style.Works_CardRow}>
                <CardImage
                  image="src/assets/images/MindSpace.png"
                  imageAlt="Island Boi"
                  badge="Health & Wellness technology mobile UX"
                />
                <div className={style.Works_ProjectDetails}>
                  <span className={style.ProjectNumber}>03</span>
                  <h2 className={style.ProjectTitle}>MindSpace</h2>
                  <div className={style.ProjectRole}>UI/UX Designer Mobile</div>
                  <div className={style.ProjectDescription}>
                    MindSpace is a mental wellness app offering guided meditations, mood tracking, and journaling with a calming teal-to-green design, guiding users from onboarding to logout via an intuitive interface.
                  </div>
                  {/* <a
                    href="https://www.figma.com/proto/MDrZtXMUuArd9rGhfpQlpp/Project-IB-Design?page-id=0%3A1&node-id=1-4&viewport=279%2C308%2C0.4&t=k42wnQxMltYl5XIU-1&scaling=min-zoom&content-scaling=fixed"
                    className={style.ReadCaseStudyBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginTop: "0.5rem" ,textDecoration: "none"}}
                  >
                    View Prototype
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
