import React from "react";
import Navigation from "../Navigation";

import "./layout.scss";

const TemplateWrapper = ({ children }) => (
  <main>
    <Navigation />
    {children}
  </main>
);

export default TemplateWrapper;
