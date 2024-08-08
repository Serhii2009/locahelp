import './Country.css'
import { assets } from '../../assets/assets'
import { useState, useEffect } from 'react'

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
      <img src={isDarkTheme ? assets.dark_canada : assets.canada} alt="" />
      <img src={isDarkTheme ? assets.dark_germany : assets.germany} alt="" />
      <img src={isDarkTheme ? assets.dark_italy : assets.italy} alt="" />
      <img src={isDarkTheme ? assets.dark_norway : assets.norway} alt="" />
      <img src={isDarkTheme ? assets.dark_poland : assets.poland} alt="" />
      <img src={isDarkTheme ? assets.dark_spain : assets.spain} alt="" />
      <img src={isDarkTheme ? assets.dark_uk : assets.uk} alt="" />
      <img src={isDarkTheme ? assets.dark_usa : assets.usa} alt="" />
    </div>
  )
}

export default Country
