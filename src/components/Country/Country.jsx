import './Country.css'
import { assets } from '../../assets/assets'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Country = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  useEffect(() => {
    const handleThemeChange = () => {
      const isDark = document.documentElement.classList.contains('dark-theme')
      setIsDarkTheme(isDark)
    }

    handleThemeChange() // Initialize theme on load

    const observer = new MutationObserver(handleThemeChange)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className="country">
      <Link to="/country-choise/canada">
        <img src={isDarkTheme ? assets.dark_canada : assets.canada} alt="" />
      </Link>
      <Link to="/country-choise/germany">
        <img src={isDarkTheme ? assets.dark_germany : assets.germany} alt="" />
      </Link>
      <Link to="/country-choise/italy">
        <img src={isDarkTheme ? assets.dark_italy : assets.italy} alt="" />
      </Link>
      <Link to="/country-choise/norway">
        <img src={isDarkTheme ? assets.dark_norway : assets.norway} alt="" />
      </Link>
      <Link to="/country-choise/poland">
        <img src={isDarkTheme ? assets.dark_poland : assets.poland} alt="" />
      </Link>
      <Link to="/country-choise/spain">
        <img src={isDarkTheme ? assets.dark_spain : assets.spain} alt="" />
      </Link>
      <Link to="/country-choise/uk">
        <img src={isDarkTheme ? assets.dark_uk : assets.uk} alt="" />
      </Link>
      <Link to="/country-choise/usa">
        <img src={isDarkTheme ? assets.dark_usa : assets.usa} alt="" />
      </Link>
    </div>
  )
}

export default Country
