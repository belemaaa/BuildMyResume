import React from 'react'
import {GrResume} from 'react-icons/gr'
import '../assets/css/styles.css'

const SplashScreen = () => {
  return (
    <div className='splash'>
        <div className='splash-text'>
            <GrResume className='splash-icon'/>
            <p>BuildMyResume</p>
        </div>
    </div>
  )
}

export default SplashScreen