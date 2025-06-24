import style from "./navigation.module.css";

import {Facebook,Linkedin,Instagram} from 'lucide-react';
export default function Navigation() {
  return (
    <nav className={style.navbar}>
      <div className={style.navbar_logo}></div>
      <ul className={style.navbar_lists}>
       
        <li className="nav-item">
          <a href="/about">About</a>
        </li>
       
        <li className="nav-item">
          <a href="#projects">Works</a>
        </li>
        <li className="nav-item">
          <a href="#contact">Contact</a>
        </li>
       
      </ul>
    </nav>
  );
}
