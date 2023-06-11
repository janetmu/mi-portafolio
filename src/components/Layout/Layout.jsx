import React, { Fragment } from "react";
import Header from "../header/Header";
import HeroSection from "../hero-section/HeroSection";
import Qualification from "../qualification/Qualification";
import Abilities from "../abilities/Abilities";
import Portfolio from "../portfolio/Portfolio";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import Skills from "../skills/Skills";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <Qualification />
      <Skills />
      <Abilities />
      <Portfolio />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default Layout;
