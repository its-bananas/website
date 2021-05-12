import React from "react";
import { Element } from "react-scroll";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Testimonials from "../components/Testimonials";
import Features from "../components/Features";
import Footer from "../components/Footer";
import copy from "../core/copy";

const IndexPage = () => (
  <Layout>
    <Header title={copy.header.title} subtitle={copy.header.subtitle} />
    <Element name="about">
      <Testimonials
        title={copy.testimonials.title}
        subtitle={copy.testimonials.subtitle}
        testimonials={copy.testimonials.testimonials}
      />
    </Element>
    <Element name="features">
      <Features
        title={copy.features.title}
        subtitle={copy.features.subtitle}
        features={copy.features.features}
      />
    </Element>
    <Footer />
  </Layout>
);

export default IndexPage;
