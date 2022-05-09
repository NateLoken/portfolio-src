import React from 'react'
import './about.css'
import Nate_Grad16 from '../../assets/Nate_Grad16_BW.jpg'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Nate_Grad16} alt='about Image' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Exprience</h5>
              <small>3 Years Experience</small>
            </article>

            {/* <article className='about__card'> */}
            {/*   <VscFolderLibrary className='about__icon' /> */}
            {/*   <h5>Projects</h5> */}
            {/*   <small>My Projects</small> */}
            {/* </article> */}
          </div>
          <br />

          <p>
            <h4>Hello my Name is Nathaniel Loken.</h4>
            <br />
            I am a new graduate from New Mexico State University with a
            Bachelor's of Science in Computer Science. I'm looking for a career
            in Software Engineering where I can use my skills to innovate on
            emerging technologies that help people around the world, as well as
            a place where I can meet new people, learn, and develop my skills.
            <br />
            <br />
            While I was still in school I interned with NASA where I learned a lot
            of the skills that I use today including test driven development, 
            continuous integration and deployment, and how to work in an AGILE
            development evironment. More specifically I personally created the 
            test suite and continuous integration scripts for the project. While there
            I also learned about Django and REST API's and helped to create Django views
            in the backend.
            <br />
            <br />
            My current project includes an application called Stumblr which based on a users
            location, uses google location services to find and automatically build a bar
            hopping route which can be shared with others on the app to help people quickly
            and easily discover new places in their area. This application is written using
            React JS and using the MERN stack which has taught me a lot about front end
            development with React, Material UI, and Javascript.
          </p>

          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
