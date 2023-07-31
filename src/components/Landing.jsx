import React from 'react'
import resumeSample from '../assets/images/resume-sample.jpg'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'

const Landing = () => {
  return (
    <div className='landing'>
        <div className='hidden md:flex resume-sample drop-shadow-lg'>
            <img src={resumeSample}/>
        </div>

        <div className='flex flex-col'>
            <div>
                <div className='landing-text-L'>
                    <p className=''>Build Your  
                        <span className='resume-text'>
                            <TypeAnimation 
                                sequence={['RESUME', 1000, 'Curriculum Vitae', 1000]}
                                speed={10}
                                repeat={Infinity}
                            />
                        </span>
                    </p>
                    <p>In Minutes</p>
                </div>

                <div className='landing-text-S'>
                    <p>
                        Get a personalized resume designed for you with any information
                        you want. 
                    </p>
                </div>
            </div>

            <div className='get-started-btn'>
                <Link to='#'>
                    Get Started
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Landing