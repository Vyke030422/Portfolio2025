import Navigation from "../components/navigation";
import Footer from "../components/footer";
import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <>
      <header className={styles.Header}>
        <Navigation />
      </header>
      <main className={styles.ContactMain}>
        <div className={styles.ContactLandscape}>
          <div className={styles.ContactInfo}>
            <h1 className={styles.ContactTitle}>Let’s Connect</h1>
            <p className={styles.ContactSubtitle}>
              Interested in working together or just want to say hi?<br />
            </p>
          </div>
          <div className={styles.ContactFormSection}>
            <form
              className={styles.ContactForm}
              action="https://formspree.io/f/mblypvgv"
              method="POST"
            >
              <label className={styles.Label}>
                Name
                <input
                  className={styles.Input}
                  type="text"
                  name="name"
                  required
                  autoComplete="off"
                />
              </label>
              <label className={styles.Label}>
                Email
                <input
                  className={styles.Input}
                  type="email"
                  name="email"
                  required
                  autoComplete="off"
                />
              </label>
              <label className={styles.Label}>
                Message
                <textarea
                  className={styles.Textarea}
                  name="message"
                  required
                  rows={5}
                />
              </label>
              <button className={styles.SubmitBtn} type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}