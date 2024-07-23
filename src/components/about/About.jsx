import React from 'react'
import './about.css'
import Nate_Grad16 from '../../assets/Nate_Grad16_BW.jpg'
import { FaAward } from 'react-icons/fa'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Nate_Grad16} alt='about' />
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
            I am seeking a career in Software Engineering where I can leverage my
            skills to innovate with emerging technologies that make a positive impact
            globally. I thrive in environments where I can meet new people, continuously
            learn, and develop my abilities.
            <br />
            <br />
            During my internship with NASA, I acquired valuable skills such as
            test-driven development, continuous integration and deployment, and
            working in an AGILE development environment. I created the test suite
            and continuous integration scripts for our project, developed an
            endpoint to validate and upload files to the database, and set up the CI/CD pipeline using GitLab.
            <br />
            <br />
            Previously, I worked as a Fullstack Engineer at the Mental Health Wellness Center, 
            where I developed a Learning Management System. This platform helps
            users learn about topics like mindfulness and depression at their own pace.
            For this project, I used Python and Django for the backend and Vue.js for the frontend,
            integrating other technologies like Stripe for payment fulfillment.
            <br />
            <br />
            Currently, I am a Software Team Lead at Raytheon, overseeing the embedded software section.
            In this role, I lead a team of engineers in developing and maintaining
            software for various embedded systems, ensuring high performance and reliability.
            My responsibilities include project management, code review, and mentorship,
            as well as hands-on development to solve complex technical challenges.
            This position has honed my leadership skills and deepened my expertise in embedded systems and software engineering.
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
