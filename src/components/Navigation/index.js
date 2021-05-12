import React from "react";
import { Link } from "react-scroll";
import Logo from "../Icon/Banana";
import AnimateIcon from "../Icon/AnimatedIcon";

import "./Navigation.scss";

const Navigation = () => (
  <header className="Navigation">
    <a href="/" className="Navigation--logo">
      <Logo />
      <span className="Navigation--logo-prefix">It's</span>
      Bananas
    </a>
    <nav className="Navigation-menu">
      <Link
        className="Navigation--link"
        href="/"
        to="about"
        smooth
        duration={500}
      >
        About
      </Link>
      <Link
        className="Navigation--link"
        href="/"
        to="features"
        smooth
        duration={500}
      >
        Features
      </Link>
      <AnimateIcon delay={1600}>
        <a className="Navigation--signup" href="https://itsbananas.slack.com">
          Join Now
        </a>
      </AnimateIcon>
    </nav>
  </header>
);

export default Navigation;
