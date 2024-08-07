import './Hero.css'
import { assets } from '../../assets/assets.js'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDarkTheme(true)
      document.documentElement.classList.add('dark-theme')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDarkTheme
    setIsDarkTheme(newTheme)
    if (newTheme) {
      document.documentElement.classList.add('dark-theme')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark-theme')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <div className="hero">
      <div className="hero-title">
        <h1>Your Relocation Assistant</h1>
        <Link to="/country-choise">
          <div className="hero-button">Try it out</div>
        </Link>
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
