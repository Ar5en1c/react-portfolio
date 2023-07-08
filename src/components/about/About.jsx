import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import { MdOutlineVolunteerActivism } from 'react-icons/md'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="My pic" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1.5+ Years Experience</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
            <article className='about__card'>
              <MdOutlineVolunteerActivism className='about__icon'/>
              <h5>Volunteer Work</h5>
              <small>3+ Volunteering Jobs</small>
            </article>
          </div>
          <p>Welcome to my world of technology and creativity! I'm a recent Computer Science graduate with a passion for full-stack development and Data Science. With a track record of 20+ completed projects, including web apps, mobile apps, machine learning models, and captivating Data Visualization, I strive for excellence in every endeavor.
Beyond coding, I'm also a district-level dance competition winner, infusing elegance and rhythm into my work. During my free time, I enjoy the thrill of FPS games like CS and Valorant, sharpening my strategic thinking and teamwork skills.
Let's connect and explore how we can create something extraordinary together. Feel free to reach out and let's embark on an exciting journey!</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
