import Navigation from "../components/navigation";
import styles from "./aboutpage.module.css";
export default function AboutPage() {
  return (
    <>
    <section className={styles.main}>
      <Navigation />
      </section>
      <section className={styles.Header}>
        <h1>Take a Step Into My Journey</h1>
        <p>
          I’m ready and hungry for growth, but first, let me show you the skills
          and work I’ve developed so far. Let’s explore how I can bring value to
          your team
        </p>
      </section>
      <div className={styles.About}>
        <h1>Who am I?</h1>

        <p>
          Hi, I'm Kevin Kurt Intong, a fresh graduate from the University of the
          Immaculate Conception with a Bachelor of Science in Information
          Technology, specializing in healthcare. I'm passionate about creating
          simple, functional, and impactful design solutions that prioritize the
          user experience. With a strong foundation in IT and a focus on
          healthcare, I approach each project with clarity and purpose, blending
          creativity with usability to solve real-world challenges. Whether
          through freelancing or academic projects, I strive to make a positive
          impact through thoughtful design.
        </p>
      </div>
      <div className={styles.certificates}>
        <h1>Certificates</h1>
        <div className={styles.certificate}>
            <h2>Google UX Design Professional Certificate</h2>
            <p>
                This certificate program provided me with a comprehensive
                understanding of user experience design principles, including user
                research, wireframing, prototyping, and usability testing. It has
                equipped me with the skills to create user-centered designs that
                enhance the overall user experience.
            </p>
        </div>
        <div className={styles.certificate}>
            <h2>Google Data Analytics Professional Certificate</h2>
            <p>
                This certificate program has equipped me with the skills to analyze
                and interpret data effectively. I have learned how to use data
                visualization tools, statistical analysis, and data cleaning
                techniques to derive meaningful insights from complex datasets.
            </p>
        </div>
    </div>
    </>
  );
}
