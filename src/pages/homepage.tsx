import Navigation from "../components/navigation";
import style from "./homepage.module.css";
export default function HomePage() {
  return (
    <>
      <div className="Header">
        <Navigation />
      </div>
      <main className={style.Main}>
        <section className={style.Main_Section} id="home">
          <div className={style.Main_Section_Content}>
            <div className={style.Main_Section_Titles}>
            <h1 className={style.Intro1}>Hi! I’m Kevin</h1>
            <h1 className={style.Intro2}>A UI/UX Designer</h1>
           
            <p className={style.Tagline}>
                
              In every design, I aim to explore, the beauty of less, where less
              is more.
            </p>
            </div>
          </div>
        </section>
      </main>
      </>
  );
}
