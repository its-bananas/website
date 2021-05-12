import React from "react";
import { Link } from "react-scroll";

import "./Footer.scss";

const Footer = () => (
  <section className="Footer-padding">
    <section className="Footer-wrapper">
      <footer className="Footer">
        <span className="Footer--copyright">
          ©2018 It's Bananas, All Rights Reserved
        </span>
        <nav className="Footer-menu">
          <Link
            className="Footer--link"
            href="/"
            to="about"
            smooth
            duration={500}
          >
            About
          </Link>
          <Link
            className="Footer--link"
            href="/"
            to="features"
            smooth
            duration={500}
          >
            Features
          </Link>
        </nav>
      </footer>
    </section>
  </section>
);

export default Footer;
