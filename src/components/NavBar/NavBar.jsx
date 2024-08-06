import './NavBar.css'
import { assets } from '../../assets/assets.js'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
  const [modal, setModal] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const location = useLocation()

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
      <Link to="/">
        <img
          className="navbar-logo"
          src={isDarkTheme ? assets.logo_light : assets.logo}
          alt="logo"
        />
      </Link>

      <ul className="navbar-list">
        <li className={location.pathname === '/about-us' ? 'active' : ''}>
          <Link to="/about-us">About Us</Link>
        </li>
        <li className={location.pathname === '/our-mission' ? 'active' : ''}>
          <Link to="/our-mission">Our Mission</Link>
        </li>
        <li
          className={
            location.pathname === '/best-opportunities' ? 'active' : ''
          }
        >
          <Link to="/best-opportunities">Best Opportunities</Link>
        </li>
        <li className={location.pathname === '/support' ? 'active' : ''}>
          <Link to="/support">Support</Link>
        </li>
        <li className={location.pathname === '/relaxing-game' ? 'active' : ''}>
          <Link to="/relaxing-game">Relaxing game</Link>
        </li>
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
                <li
                  className={location.pathname === '/about-us' ? 'active' : ''}
                >
                  <Link to="/about-us">About Us</Link>
                </li>
                <li
                  style={{ paddingTop: 20 }}
                  className={
                    location.pathname === '/our-mission' ? 'active' : ''
                  }
                >
                  <Link to="/our-mission">Our Mission</Link>
                </li>
                <li
                  style={{ paddingTop: 20 }}
                  className={
                    location.pathname === '/best-opportunities' ? 'active' : ''
                  }
                >
                  <Link to="/best-opportunities">Best Opportunities</Link>
                </li>
                <li
                  style={{ paddingTop: 20 }}
                  className={location.pathname === '/support' ? 'active' : ''}
                >
                  <Link to="/support">Support</Link>
                </li>
                <li
                  style={{ paddingTop: 20 }}
                  className={
                    location.pathname === '/relaxing-game' ? 'active' : ''
                  }
                >
                  <Link to="/relaxing-game">Relaxing game</Link>
                </li>
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
