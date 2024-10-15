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
                </div>
                <br />

                <p>
                    <h4>Hello my Name is Nathaniel Loken.</h4>
                    <br />
                    I am a dedicated Software Engineer seeking opportunities to leverage my expertise in building innovative software solutions that make a global impact. I am passionate about working in dynamic environments that encourage learning, collaboration, and continuous growth.
                    <br />
                    <br />
                    During my internship with NASA, I gained hands-on experience in test-driven development, continuous integration, and Agile practices. I developed a comprehensive test suite, created CI/CD pipelines using GitLab, and built an endpoint for file validation and database 
                    integration—contributing to efficient project development and deployment.
                    <br />
                    <br />

                    Following that, as a Full-stack Engineer at the Mental Health Wellness Center, I developed an online Learning Management System to deliver life coaching content. Using Python, Django for the backend, and Vue.js for the frontend, I integrated payment functionality 
                    through Stripe to create a seamless user experience.
                    <br />
                    <br />

                    Currently, I am an Embedded Software Engineer at Raytheon, leading a team in the development and maintenance of embedded weapon software. I manage all aspects of the project lifecycle, from design and implementation to testing in various environments. 
                    My role has sharpened my leadership, technical problem-solving, and project management skills, particularly in the embedded systems domain.
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
