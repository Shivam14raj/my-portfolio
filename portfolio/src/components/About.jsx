import React from 'react'
import './About.css'
function About() {
  return (
    <div>
      <div className='about-me'>
        About Me
      </div> 
       <h1 className="logo">SR.</h1>
      <div className='about-me-text'>
          I' m a <span>re-imagined </span>software developer who believes great software is built at the intersection of logic, design, and experience.
          <br />
          <br />
          I work across the full spectrum of development - building modern frontends, designing reliable <span>backends</span>, and exploring <span>machine learning </span>to create intelligent systems. Alongside this, I actively practice data structures and algorithms, constantly sharpening my problem-solving skills through platforms like <span>LeetCode</span>.
      </div>
    </div>
  )
}

export default About   