import style from "./navigation.module.css";

import {Facebook,Linkedin,Instagram} from 'lucide-react';
export default function Navigation() {
  return (
    <nav className={style.navbar}>
      <div className={style.navbar_logo}></div>
      <ul className={style.navbar_lists}>
        <li className="nav-item">
          <a href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a href="#about">About</a>
        </li>
        <li className="nav-item">
          <a href="#CV">CV</a>
        </li>
        <li className="nav-item">
          <a href="#contact">Contact</a>
        </li>
        <li className={style.navbar_Linkedin}>
          <a href="#Linkedin"><Linkedin /></a>
        </li>
        <li className={style.navbar_Facebook}>
          <a href="#Facebook"><Facebook/></a>
        </li>
        <li className={style.navbar_Instagram}>
          <a href="#Instagram"><Instagram/></a>
        </li>
      </ul>
    </nav>
  );
}
