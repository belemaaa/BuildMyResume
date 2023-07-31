import React, {useState, useEffect} from 'react'
import SplashScreen from './SplashScreen'
import Landing from './Landing'

const SplashChange = () => {
    const [showSplash, setShowSplash] = useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowSplash(false)
        }, 5000)
        return () => clearTimeout(timeout)
    }, [])
  return (
    <div>
        {showSplash ? <SplashScreen/> : <Landing/>}
    </div>
  )
}

export default SplashChange