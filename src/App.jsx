import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import Skills from './components/services/Skills'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import About from './components/about/About'

const App = () => {
  return (
   <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Skills />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
   </>
  )
}

export default App