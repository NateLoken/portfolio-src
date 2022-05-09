import React from 'react'
import './portfolio.css'
import Compiler from '../../assets/compiler.jpg'
import Shell from '../../assets/shell.jpg'
import Stumblr from '../../assets/Stumblr.png'
import LMS from '../../assets/LMS.jpg'

const data = [
  {
    id: 1,
    image: Compiler,
    title: 'C Compiler Using Lex and Yacc to x86 Assembly',
    github: 'https://github.com/NateLoken/CS-370',
  },
  {
    id: 2,
    image: Shell,
    title: 'Simple Shell Written in C',
    github: 'https://github.com/NateLoken/cs-474/tree/main/program2',
  },
  {
    id: 3,
    image: Stumblr,
    title: "Bar Hopping Application Made Using Google Maps API's",
    github: 'https://github.com/NateLoken/Stumblr',
  },
  {
    id: 4,
    image: LMS,
    title:
      'Learning Management System Made Using Django and Python (In progress)',
    github: '',
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn'>
                  Github
                </a>
                {/* <a href={demo} className='btn btn-primary'> */}
                {/*   Live Demo */}
                {/* </a> */}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
