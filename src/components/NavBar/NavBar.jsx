import './NavBar.css'
import { assets } from '../../assets/assets.js'
import { useState } from 'react'

const NavBar = () => {
  const [modal, setModal] = useState(false)

  const toogleModal = () => {
    setModal(!modal)
  }

  return (
    <div className="navbar">
      <img className="navbar-logo" src={assets.logo} alt="" />

      <ul className="navbar-list">
        <li>About Us</li>
        <li>Our Mission</li>
        <li>Our Policy</li>
        <li>Support </li>
        <li>Relaxing game</li>
      </ul>

      <div className="navbar-right">
        <div className="navbar-signin">Sign In</div>
        <img
          onClick={toogleModal}
          className="nav-mob-open"
          src={assets.menu_bar}
          alt=""
        />

        {modal && (
          <div className="modal">
            <div className="modal-component">
              <div className="modal-list">
                <li>About Us</li>
                <li className="modal-li">Our Mission</li>
                <li className="modal-li">Our Policy</li>
                <li className="modal-li">Support </li>
                <li className="modal-li">Relaxing game</li>
              </div>

              <img
                onClick={toogleModal}
                className="nav-mob-close"
                src={assets.menu_bar_close}
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
