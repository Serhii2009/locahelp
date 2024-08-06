import './NavBar.css'
import { assets } from '../../assets/assets.js'
import { useState, useEffect } from 'react'

const NavBar = () => {
  const [modal, setModal] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

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
    <div className="navbar">
      <img
        className="navbar-logo"
        src={isDarkTheme ? assets.logo_light : assets.logo}
        alt="logo"
      />

      <ul className="navbar-list">
        <li>About Us</li>
        <li>Our Mission</li>
        <li>Our Policy</li>
        <li>Support</li>
        <li>Relaxing game</li>
      </ul>

      <div className="navbar-right">
        <div className="navbar-signin">Sign In</div>
        <img
          onClick={toggleModal}
          className="nav-mob-open"
          src={isDarkTheme ? assets.menu_bar_light : assets.menu_bar}
          alt=""
        />

        {modal && (
          <div className="modal">
            <div className="modal-component">
              <div className="modal-list">
                <li>About Us</li>
                <li className="modal-li">Our Mission</li>
                <li className="modal-li">Our Policy</li>
                <li className="modal-li">Support</li>
                <li className="modal-li">Relaxing game</li>
              </div>

              <img
                onClick={toggleModal}
                className="nav-mob-close"
                src={
                  isDarkTheme ? assets.bar_close_light : assets.menu_bar_close
                }
                alt=""
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar
