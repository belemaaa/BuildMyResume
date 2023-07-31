import React from 'react'
import resumeSample from '../assets/images/resume-sample.jpg'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'

const Landing = () => {
  return (
    <div className='landing'>
        <div className='hidden md:flex resume-sample'>
            <img src={resumeSample}/>
        </div>

        <div className='landing-texts'>
            <p>Build Your  
                <span className='resume-text'>
                <TypeAnimation 
                    sequence={['RESUME', 1000, 'Curriculum Vitae', 1000]}
                    speed={10}
                    repeat={Infinity}
                />
                </span>
            </p>
            <p>In Minutes</p>

            <p>Get a personalized resume designed for you with any information
                you want. 
            </p>
        </div>

        <div>
            <Link to='#'>
                Get Started
            </Link>
        </div>
    </div>
  )
}

export default Landing