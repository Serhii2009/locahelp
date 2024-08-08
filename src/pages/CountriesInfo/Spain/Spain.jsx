import './Spain.css'
import { useEffect, useState } from 'react'
import NavBar from '../../../components/NavBar/NavBar'
import { assets } from '../../../assets/assets'
import TypeSpain from '../../../components/TypeCountries/TypeSpain/TypeSpain'

const Spain = () => {
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
    <div className="generalStaticBack-spain">
      <div className="background-box-spain">
        <NavBar />
        <TypeSpain />
        <div className="background-static-img-spain">
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

export default Spain
