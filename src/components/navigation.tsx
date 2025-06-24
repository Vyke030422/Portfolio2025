import style from "./navigation.module.css";
import { Link, useLocation } from "react-router-dom";

function easeInQuad(t: number) {
  return t * t;
}

function scrollToTopCustom(duration = 1000) {
  const start = window.scrollY;
  const startTime = performance.now();

  function animateScroll(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeInQuad(progress);
    window.scrollTo(0, start * (1 - ease));
    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  }

  requestAnimationFrame(animateScroll);
}

export default function Navigation() {
  const location = useLocation();

  // Scroll to top and navigate to homepage
  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      scrollToTopCustom(800); // 1200ms for a more visible effect
      e.preventDefault();
    }
    // If not on homepage, Link will navigate to "/"
    // and the page will load at the top by default
  };

  return (
    <nav className={style.navbar}>
      <div className={style.navbar_logo}>
        <Link to="/" onClick={handleLogoClick}>
          <img
            src="src/assets/images/Logo.png"
            alt="Logo"
            className={style.logoImg}
          />
        </Link>
      </div>
      <ul className={style.navbar_lists}>
        <li className="nav-item">
          <a href="#my-works">Work</a>
        </li>
        <li className="nav-item">
          <a href="/about">About</a>
        </li>
        <li className="nav-item">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
