import style from "./navigation.module.css";


export default function Navigation() {
  return (
    <nav className={style.navbar}>
      <div className={style.navbar_logo}></div>
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
