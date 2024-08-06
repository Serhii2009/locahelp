import { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import './Background.css'
import { assets } from '../../assets/assets'

const Background = () => {
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
    <div className="generalStaticBack">
      <div className="background-box">
        <NavBar />

        <div className="background-static-img">
          <img
            src={assets.moon}
            alt="moon"
            onClick={toggleTheme}
            style={{
              cursor: 'pointer',
              display: isDarkTheme ? 'none' : 'block',
            }}
          />
          <img
            src={assets.sun}
            alt="sun"
            onClick={toggleTheme}
            style={{
              cursor: 'pointer',
              display: isDarkTheme ? 'block' : 'none',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Background
