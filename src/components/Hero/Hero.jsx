import './Hero.css'
import { assets } from '../../assets/assets.js'
import { useState } from 'react'

const Hero = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
    if (!isDarkTheme) {
      document.documentElement.classList.add('dark-theme')
    } else {
      document.documentElement.classList.remove('dark-theme')
    }
  }

  return (
    <div className="hero">
      <div className="hero-title">
        <h1>Your Relocation Assistant</h1>
        <div className="hero-button">Try it out</div>
      </div>
      <img
        src={assets.moon}
        alt="moon"
        onClick={toggleTheme}
        style={{ cursor: 'pointer', display: isDarkTheme ? 'none' : 'block' }}
      />
      <img
        src={assets.sun}
        alt="sun"
        onClick={toggleTheme}
        style={{ cursor: 'pointer', display: isDarkTheme ? 'block' : 'none' }}
      />
    </div>
  )
}

export default Hero
