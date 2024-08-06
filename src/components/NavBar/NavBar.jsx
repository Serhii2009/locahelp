import './NavBar.css'
import { assets } from '../../assets/assets.js'

const NavBar = () => {
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
        <img src={assets.menu_bar} alt="" />
      </div>
    </div>
  )
}

export default NavBar
