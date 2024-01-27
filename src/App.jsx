import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Experience from "./components/experience/Experience";
import Skills from "./components/services/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import ThreeCanvas from "./components/header/CanvasBackground";

const App = () => {
  return (
    <>
      <ThreeCanvas />
      <div className="content">
        <Header />
        <Nav />
        <About />
        <Experience />
        <Skills />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
