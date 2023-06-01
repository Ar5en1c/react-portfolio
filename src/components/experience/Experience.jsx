import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Skills = () => {
  return (
    <section id='skills'>
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>HTML</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>JavaScript</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Tailwind</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>React</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>ThreeJS</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>EmailJS</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
          </div>
        </div>
{/* END of FRONTEND */}

        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Node JS</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>MongoDB</h4>
              {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>PHP</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>MySQL</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Python</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Java</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Django</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>RESTful API</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            
          </div>
        </div>

{/* END of BACKEND */}
        <div className="experience__data">
          <h3>Data Science and Visualization</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>R</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>SQL</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Tableau</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Power BI</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Matplotlib</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>D3.js</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills