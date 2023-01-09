import { useState } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import "./Bar.css";
import { NavLink } from "react-router-dom";
import audio from "../assets/sounds/click.wav";

const Bar = () => {
  const [toggle, setToggle] = useState(true);
  const [isSideNavShown, setIsSideNavShown] = useState(false);

  const handleClick = () => {
    new Audio(audio).play();
    setToggle(!toggle);
    setIsSideNavShown(!isSideNavShown);
  };

  const addClass1 = toggle === false ? "bars active" : "bars";
  const addClass2 = toggle === false ? " nav visible" : "nav";
  isSideNavShown ? disableBodyScroll(document) : enableBodyScroll(document);

  return (
    <>
      <div className={addClass1} id="nav-action" onClick={handleClick}>
        <span className="bar"> </span>
      </div>
      <nav id="nav" className={addClass2}>
        <ul className="ul">
          <li className="shape-circle circle-one">
            <NavLink to="/about">About Me</NavLink>
          </li>
          <li className="shape-circle circle-two">
            <NavLink to="/resume">Resume</NavLink>
          </li>
          <li className="shape-circle circle-three">
            <NavLink to="/projects">My Projects</NavLink>
          </li>
          <li className="shape-circle circle-four">
            <NavLink to="/contact">Contact Me</NavLink>
          </li>
          <li className="shape-circle circle-five"></li>
        </ul>
      </nav>
    </>
  );
};

export default Bar;
