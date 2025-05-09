import { MoveDown } from "lucide-react";
import CardImage from "../components/cardimage";
import Navigation from "../components/navigation";
import style from "./homepage.module.css";
export default function HomePage() {
  return (
    <>
      <div className={style.Header}>
        <Navigation />
      </div>
      <section className={style.Main} id="home">
        <div className={style.Main_Section_Titles}>
          <h1 className={style.Intro1}>Hi! I’m Kevin</h1>
          <h1 className={style.Intro2}>A UI/UX Designer</h1>
          <p className={style.Tagline}>
            In every design, I aim to explore, the beauty of less, where less is
            more.
          </p>
          <div className={style.MoveDown}>
            <MoveDown strokeWidth={2} />
          </div>
        </div>
      </section>
      <section className={style.Features} id="projects">
        <CardImage
        image="https://example.com/image1.jpg"
        imageAlt="Project 1"
        title="CancerLine Companion"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <CardImage
        image="https://example.com/image1.jpg"
        imageAlt="Project 2"
        title="ITSO"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        
      />
      <CardImage
        image="https://example.com/image1.jpg"
        imageAlt="Project 3"
        title="Island Boy"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <CardImage
        image="https://example.com/image1.jpg"
        imageAlt="Project 4"
        title="Mighty Might Motors"
        description="A companion app."
      />
      </section>
    </>
  );
}
