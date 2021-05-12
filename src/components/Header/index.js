import React from "react";
import bananaHeaderImage from "./banana-header.png";
import "./Header.scss";

const Header = ({ title, subtitle }) => (
  <section className="Main-header page-section">
    <h1 className="section--title animated">{title}</h1>
    <h3 className="section--subtitle animated">{subtitle}</h3>
    <img
      className="Main-header--banana"
      src={bananaHeaderImage}
      alt="It's Bananas"
    />
  </section>
);

export default Header;
